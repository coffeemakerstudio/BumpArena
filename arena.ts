import { type ArenaLocation, type ArenaOptions, type InspectStruct, type IStorageStrategy } from "./interface.d.js"

export const  enum HEADERS {
	TOTAL_LENGTH_0_32 = 0,
	PAYLOAD_LENGTH_0_32 = 1,
	GENERATION_BYTE_0_32 = 2,
	DELETED_8 = 12,
	MAGIC_BYTE_0 = 13,
	MAGIC_BYTE_1 = 14,
	MAGIC_BYTE_2 = 15,
}
export class Arena implements IStorageStrategy {
	private HEADER_SIZE_BYTES = 16
	private _buffer: ArrayBufferLike
	private _view8: Uint8Array
	private _view32: Uint32Array
	private _offset: number
	private _emptySpots: Uint32Array
	private _alignMask: 7 | 15 | 31 | 63 | number
	private _alignShift: number
	private _bucketOffsets: number[];
	private _bucketCapacities: number[];
	private _bucketcount: number;
	private _next: number = 0;
	private MAX_ARENA_SIZE = (4 * 1024 * 1024 * 1024); // 4GB

	constructor(options?: ArenaOptions) {
		this._buffer = new ArrayBuffer(options?.initialSize || 64 * 1024)

		this._view8 = new Uint8Array(this._buffer);
		this._view32 = new Uint32Array(this._buffer)
		this._offset = 0;

		if ((options?.alignment! & (options?.alignment! - 1)) !== 0) {
			throw new Error("alignment needs to be a power of 2")
		}
		this._alignMask = ((options?.alignment || 8) - 1!) as number
		this._alignShift = Math.log2(this._alignMask + 1);

		this._bucketCapacities = options?.bucketCapacities || [1024, 1024, 1024, 1024, 1024, 1024, 1024, 1024]
		this._bucketOffsets = [];
		this._bucketcount = this._bucketCapacities.length;
		let currentOffset = 0;
		for (const cap of this._bucketCapacities) {
			this._bucketOffsets.push(currentOffset)
			currentOffset += (cap + 1)
		}
		this._emptySpots = new Uint32Array(currentOffset)
	}
	public import(buf: ArrayBufferLike) {
		this._buffer = buf;
		this._offset = buf.byteLength
		this._view8 = new Uint8Array(buf)
		this._view32 = new Uint32Array(buf)
		return this
	}

	private _u(n: number): number {
		return n >>> 0;
	}

	private _idx32(byteOffset: number): number {
		return Math.floor(byteOffset / 4);
	}

	private _makePtr(offset: number, gen: number | bigint): ArenaLocation {
		const bOffset = BigInt(offset);
		const bGen = BigInt(gen ?? 0);
		return ((bOffset << 32n) | (bGen & 0xFFFFFFFFn)) as ArenaLocation;
	}

	private _getOffset(ptr: ArenaLocation): number {
		return Number(BigInt(ptr) >> 32n);
	}

	private _getBucketCount(bucketIdx: number): number {
		return this._emptySpots[this._bucketOffsets[bucketIdx]!]!;
	}

	private _setBucketCount(bucketIdx: number, count: number): void {
		this._emptySpots[this._bucketOffsets[bucketIdx]!] = count;
	}

	private _getBucketOffset(bucketIdx: number, slotIdx: number): number {
		return this._emptySpots[this._bucketOffsets[bucketIdx]! + slotIdx + 1]!;
	}

	private _setBucketOffset(bucketIdx: number, slotIdx: number, offset: number): void {
		this._emptySpots[this._bucketOffsets[bucketIdx]! + slotIdx + 1] = offset;
	}

	private _initBlock(start: number, dataLength: number) {
		const rawSize = dataLength + this.HEADER_SIZE_BYTES;
		const alignedSize = (rawSize + this._alignMask) & ~this._alignMask;
		const idx = this._idx32(start)
		this._view32[idx + HEADERS.TOTAL_LENGTH_0_32] = alignedSize >>> 0;
		// this._view32[idx + HEADERS.TOTAL_LENGTH_0_32] = this._u((dataLength + this.HEADER_SIZE_BYTES + this._alignMask) & ~this._alignMask);
		this._view32[idx + HEADERS.PAYLOAD_LENGTH_0_32] = dataLength;
		this._view8[start + HEADERS.MAGIC_BYTE_0] = 0xDB;
		this._view8[start + HEADERS.MAGIC_BYTE_1] = 0xDB;
		this._view8[start + HEADERS.MAGIC_BYTE_2] = 0x01;
		this._view8[start + HEADERS.DELETED_8] = 0;
	}

	public alloc(data: Uint8Array): ArenaLocation {
		const step = this._alignMask + 1;
		const dataLen = data.length;
		const rawNeeded = dataLen + this.HEADER_SIZE_BYTES;

		const needed = Math.ceil(rawNeeded / step) * step;
		const bucketIdx = Math.floor(needed / step) - 1;
		let targetOffset: number | undefined;

		if (bucketIdx >= 0 && bucketIdx < this._bucketcount) {
			const count = this._getBucketCount(bucketIdx);
			if (count > 0) {
				targetOffset = this._u(this._getBucketOffset(bucketIdx, count - 1));
				this._setBucketCount(bucketIdx, count - 1);
			}
		}

		if (targetOffset === undefined) {
			targetOffset = this._offset;
			const nextOffset = targetOffset + needed;
			if (nextOffset > this._buffer.byteLength) {
				this._resize(needed);
			}

			this._offset = nextOffset;
		}

		this._initBlock(targetOffset, dataLen);
		this._view8.set(data, targetOffset + this.HEADER_SIZE_BYTES);

		const gen = this._view32[this._idx32(targetOffset) + HEADERS.GENERATION_BYTE_0_32]! >>> 0;
		return this._makePtr(targetOffset, gen);
	}

	public read(location: ArenaLocation): Uint8Array | null {
		const { offset: start, generation } = this._smallInspect(location);
		const idx = this._idx32(start)
		const currgen = BigInt(this._view32[idx + HEADERS.GENERATION_BYTE_0_32]!)

		if (generation !== currgen) return null
		if (this._view8[start + HEADERS.DELETED_8] === 1) return null

		const dataLength = this._view32[idx + HEADERS.PAYLOAD_LENGTH_0_32]!;
		return this._view8.subarray(start + this.HEADER_SIZE_BYTES, start + this.HEADER_SIZE_BYTES + dataLength);
	}
	public free(location: ArenaLocation): ArenaLocation {
		const { offset: start } = this._smallInspect(location)
		const idx = this._idx32(start)
		const currgen = this._view32[idx + HEADERS.GENERATION_BYTE_0_32]!

		this._view32[idx + HEADERS.GENERATION_BYTE_0_32] = currgen + 1
		this._view8[this._u(start) + HEADERS.DELETED_8] = 1

		const totalBlockSize = this._view32[this._idx32(start) + HEADERS.TOTAL_LENGTH_0_32]!
		const bucketIdx = (totalBlockSize >> this._alignShift) - 1
		if (bucketIdx >= 0 && bucketIdx < this._bucketcount) {
			const count = this._getBucketCount(bucketIdx)
			const capacity = this._bucketCapacities[bucketIdx]!
			if (count < capacity) {
				this._setBucketOffset(bucketIdx, count, start);
				this._setBucketCount(bucketIdx, count + 1);
			}
		}
		return this._makePtr(0, 0) as ArenaLocation
	}

	private _checkForSpace(size: number): boolean {
		const projectedSize = this._offset + size;
		if (projectedSize > this.MAX_ARENA_SIZE) {
			return true;
		}
		if (this._buffer.byteLength >= projectedSize) return false;
		return true;
	}

	private _resize(needed: number) {
		const currentSize = this._buffer.byteLength;
		const requestedTotal = this._offset + needed;

		let newSize = currentSize * 2;
		if (newSize > this.MAX_ARENA_SIZE) {
			newSize = this.MAX_ARENA_SIZE;
		}

		// Wenn selbst die 4GB (newSize) nicht für den Request reichen
		if (newSize < requestedTotal) {
			console.log("DEBUG:", this._offset, this._buffer.byteLength, "Requested:", requestedTotal);
			throw new Error(
				`Arena Out of Memory: Requested ${requestedTotal} bytes, but 4GB limit reached.`
			);
		}

		//@ts-ignore
		if (this._buffer.transfer) {
			//@ts-ignore
			this._buffer = this._buffer.transfer(newSize);
		} else {
			const newBuffer = new ArrayBuffer(newSize);
			new Uint8Array(newBuffer).set(this._view8);
			this._buffer = newBuffer;
		}

		this._view8 = new Uint8Array(this._buffer);
		this._view32 = new Uint32Array(this._buffer);
	}

	public size(): number {
		return this._offset
	}

	public getBuffer(): Uint8Array {
		return this._view8.subarray(0, this._offset)
	}
	public reserve(size: number): Uint8Array {
		const step = this._alignMask + 1;
		const start = this._offset;
		const totalNeededForThisBlock = size + this.HEADER_SIZE_BYTES;
		const newOffset = Math.ceil((start + totalNeededForThisBlock) / step) * step;
		if (this._checkForSpace(newOffset)) {
			this._resize(newOffset);
		}
		this._initBlock(start, size);
		this._offset = newOffset;
		return this._view8.subarray(
			start + this.HEADER_SIZE_BYTES,
			start + this.HEADER_SIZE_BYTES + size
		);
	}

	private _smallInspect(ptr: ArenaLocation) {
		const offset = this._getOffset(ptr)
		const generation = ptr & 0xFFFFFFFFn;
		return { offset, generation }
	}
	public inspect(ptr: ArenaLocation): InspectStruct {
		const offset = this._getOffset(ptr)
		const generation_ptr = Number(ptr & 0xFFFFFFFFn);

		const totalLength = this._view32[this._idx32(offset)]!
		const generation = Number(this._view32[this._idx32(offset) + HEADERS.GENERATION_BYTE_0_32]!)
		return {
			offset,
			generation_ptr,
			generation,
			isSafe: generation === Number(generation_ptr),
			totalLength,
			payloadLength: this._view32[this._idx32(offset) + HEADERS.PAYLOAD_LENGTH_0_32]!,
			isDeleted: this._view8[offset + HEADERS.DELETED_8] == 1,
			payload: this._view8.subarray(offset, offset + totalLength),
		}
	}
	public collectActiveRecords(callback: (data: Uint8Array, ptr: ArenaLocation, idx: number) => void) {
		let cursor = 0;
		let idx = 0;
		while (cursor < this._offset) {
			const idx32 = this._idx32(cursor);
			const totalLength = this._view32[idx32 + HEADERS.TOTAL_LENGTH_0_32]! >>> 0;

			if (totalLength < this.HEADER_SIZE_BYTES) {
				console.error(`Corrupt block at ${cursor}, length ${totalLength}`);
				break;
			}
			const isDeleted = this._view8[cursor + HEADERS.DELETED_8] === 1;
			if (!isDeleted) {
				const payloadLength = this._view32[idx32 + HEADERS.PAYLOAD_LENGTH_0_32]!;
				const gen = this._view32[idx32 + HEADERS.GENERATION_BYTE_0_32]!;
				callback(
					this._view8.subarray(cursor + this.HEADER_SIZE_BYTES, cursor + this.HEADER_SIZE_BYTES + payloadLength),
					this._makePtr(cursor, gen),
					idx++
				);
			}

			cursor += totalLength;
		}
	}
	public estimate(size: number, amnt: number): number {
		const step = this._alignMask + 1
		return ((Math.ceil(size + this.HEADER_SIZE_BYTES) / step) * step) * amnt;
	}
	public directAlloc(source: Uint8Array, startn: number, endn: number): ArenaLocation {
		const step = this._alignMask + 1;
		const len = endn - startn;
		const rawNeeded = len + this.HEADER_SIZE_BYTES;
		const alignedBlockSize = Math.ceil(rawNeeded / step) * step;
		const bucketIdx = (alignedBlockSize >> this._alignShift) - 1;
		if (bucketIdx >= 0 && bucketIdx < this._bucketcount) {
			const count = this._getBucketCount(bucketIdx);
			if (count > 0) {
				const recycledOffset = this._getBucketOffset(bucketIdx, count - 1);
				this._setBucketCount(bucketIdx, count - 1);
				this._initBlock(recycledOffset, len);

				this._view8.set(source.subarray(startn, endn), recycledOffset + this.HEADER_SIZE_BYTES);

				const gen = this._view32[this._idx32(recycledOffset) + HEADERS.GENERATION_BYTE_0_32]!;
				return this._makePtr(recycledOffset, gen);
			}
		}
		const start = this._offset;
		const nextOffset = start + alignedBlockSize;
		if (nextOffset > this._buffer.byteLength) {
			this._resize(alignedBlockSize);
		}
		this._initBlock(start, len);
		this._view8.set(source.subarray(startn, endn), start + this.HEADER_SIZE_BYTES);
		this._offset = nextOffset;
		const gen = this._view32[this._idx32(start) + HEADERS.GENERATION_BYTE_0_32]!;
		return this._makePtr(start, gen);
	}

	public clear() {
		this._offset = 0
		this._emptySpots.fill(0)
	}

	public records(): ([Uint8Array, ArenaLocation] | undefined) {
		const start = this._next
		const totalLength = this._view32[this._idx32(start) + HEADERS.TOTAL_LENGTH_0_32]!
		const payloadLength = this._view32[this._idx32(start) + HEADERS.PAYLOAD_LENGTH_0_32]!
		if (totalLength === 0) {
			this._next = (start + 16) & ~15
		}
		const isDeleted = this._view8[start + HEADERS.DELETED_8] === 1
		const ptr = this._makePtr(start, this._view32[this._idx32(start) + HEADERS.GENERATION_BYTE_0_32]!)
		this._next += totalLength

		if (!isDeleted) {
			return [
				this._view8.subarray(start + this.HEADER_SIZE_BYTES, start + this.HEADER_SIZE_BYTES + payloadLength),
				ptr
			]
		}
	}
	public reset() {
		this._next = 0
	}
}
