import { type ArenaCustomHeaders, type ArenaHeaders, type ArenaLocation, type ArenaOptions, type IStorageStrategy } from "./interface.d.js"

export const  enum HEADERS {
	TOTAL_LENGTH_0_32 = 0,
	PAYLOAD_LENGTH_0_32 = 1,
	GENERATION_BYTE_0_32 = 2,
	DELETED_8 = 12,
	USER_STATUS_0_8 = 13,
	USER_STATUS_1_8 = 14,
	USER_STATUS_2_8 = 15,
}
export class Arena implements IStorageStrategy {
	private HEADER_SIZE_BYTES = 16
	private _buffer: ArrayBufferLike
	private _view8: Uint8Array
	private _view32: Uint32Array
	private _offset: number
	private _emptySpots: Uint32Array
	private _allignMask: 7 | 15 | 31 | 63
	private _allignShift: number
	private _bucketOffsets: number[];
	private _bucketCapacities: number[];
	private _bucketcount: number;
	private _next: number = 0;

	constructor(options?: ArenaOptions) {
		this._buffer = new ArrayBuffer(options?.initalSize || 64 * 1024)
		this._view8 = new Uint8Array(this._buffer);
		this._view32 = new Uint32Array(this._buffer)
		this._offset = 0;
		//@ts-ignore
		this._allignMask = ((options?.allignment || 8) - 1!) as number
		this._allignShift = Math.log2(this._allignMask + 1);
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
	}

	private _u(n: number): number {
		return n >>> 0;
	}

	private _idx32(byteOffset: number): number {
		return (byteOffset >>> 0) >> 2;
	}

	private _makePtr(offset: number, gen: number | bigint): ArenaLocation {
		const bOffset = BigInt(offset >>> 0);
		const bGen = BigInt(gen ?? 0);
		return ((bOffset << 32n) | (bGen & 0xFFFFFFFFn)) as ArenaLocation;
	}

	private _getOffset(ptr: ArenaLocation): number {
		return Number(BigInt(ptr) >> 32n) >>> 0;
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

	private _initBlock(start: number, dataLength: number, headers: { header0: number, header1: number, header2: number }) {
		const idx = this._idx32(start)
		const { header0: h0, header1: h1, header2: h2 } = headers;

		this._view32[idx + HEADERS.TOTAL_LENGTH_0_32] = this._u((dataLength + this.HEADER_SIZE_BYTES + this._allignMask) & ~this._allignMask);
		this._view32[idx + HEADERS.PAYLOAD_LENGTH_0_32] = dataLength;

		this._view32[idx + (HEADERS.DELETED_8 >> 2)] = ((h2 || 0) << 24) | ((h1 || 0) << 16) | ((h0 || 0) << 8);
		this._view8[start + HEADERS.DELETED_8] = 0;
	}

	public alloc(data: Uint8Array, headers?: ArenaCustomHeaders): ArenaLocation {
		headers ||= { header0: 0, header1: 0, header2: 0 };

		const needed = (data.byteLength + this.HEADER_SIZE_BYTES + this._allignMask) & ~this._allignMask;
		const bucketIdx = (needed >> this._allignShift) - 1;
		if (bucketIdx >= 0 && bucketIdx < this._bucketcount) {
			const count = this._getBucketCount(bucketIdx);
			if (count > 0) {
				const recycledOffset = this._u(this._getBucketOffset(bucketIdx, count - 1));
				this._setBucketCount(bucketIdx, count - 1);
				this._initBlock(recycledOffset, data.byteLength, headers);

				const gen = this._view32[this._idx32(recycledOffset) + HEADERS.GENERATION_BYTE_0_32]!;
				return this._makePtr(recycledOffset, gen)
			}
		}
		const start = this._u(this._offset)
		if (this._checkForSpace(needed)) this._resize()
		this._initBlock(start, data.byteLength, headers)

		this._view8.set(data, start + this.HEADER_SIZE_BYTES)
		this._offset = this._u((start + needed) & ~this._allignMask);

		const gen = this._view32[this._idx32(start) + HEADERS.GENERATION_BYTE_0_32]!
		return this._makePtr(start, gen)
	}
	public read(location: ArenaLocation): Uint8Array | null {
		const { start, generation } = this.translate(location);
		const idx = this._idx32(start)
		const currgen = BigInt(this._view32[idx + HEADERS.GENERATION_BYTE_0_32]!)

		if (generation !== currgen) return null
		if (this._view8[start + HEADERS.DELETED_8] === 1) return null

		const dataLength = this._view32[idx + HEADERS.PAYLOAD_LENGTH_0_32]!;
		return this._view8.subarray(start + this.HEADER_SIZE_BYTES, start + this.HEADER_SIZE_BYTES + dataLength);
	}
	public free(location: ArenaLocation): ArenaLocation {
		const { start, generation: _ } = this.translate(location)
		const idx = this._idx32(start)
		const currgen = this._view32[idx + HEADERS.GENERATION_BYTE_0_32]!

		this._view32[idx + HEADERS.GENERATION_BYTE_0_32] = currgen + 1
		this._view8[this._u(start) + HEADERS.DELETED_8] = 1

		const totalBlockSize = this._view32[this._idx32(start) + HEADERS.TOTAL_LENGTH_0_32]!
		const bucketIdx = (totalBlockSize >> this._allignShift) - 1
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
		if (this._buffer.byteLength >= (this._offset + size)) return false
		return true
	}

	private _resize() {
		//@ts-ignore
		if (this._buffer.transfer) this._buffer = this._buffer.transfer(this._buffer.byteLength * 2)
		else {
			const newBuffer = new ArrayBuffer(this._buffer.byteLength * 2);
			new Uint8Array(newBuffer).set(this._view8);
			this._buffer = newBuffer;
		}
		this._view8 = new Uint8Array(this._buffer)
		this._view32 = new Uint32Array(this._buffer)
	}

	public size(): number {
		return this._buffer.byteLength
	}

	public getBuffer(): Uint8Array {
		return this._view8.subarray(0, this._u(this._offset))
	}
	public reserve(size: number): Uint8Array {
		const start = this._u(this._offset)
		this._checkForSpace((this.HEADER_SIZE_BYTES + size + this._allignMask) & ~this._allignMask) && this._resize()
		this._initBlock(start, size, { header0: 0, header1: 0, header2: 0 })
		this._offset = ((this._offset + size + this.HEADER_SIZE_BYTES + this._allignMask) & ~this._allignMask) >>> 0
		return this._view8.subarray(start + this.HEADER_SIZE_BYTES, start + this.HEADER_SIZE_BYTES + size)
	}

	public translate(ptr: ArenaLocation) {
		const start = this._getOffset(ptr)
		const generation = ptr & 0xFFFFFFFFn;
		return { start, generation }
	}

	public readWithHeaders(ptr: ArenaLocation): Uint8Array | null {
		const { start, generation } = this.translate(ptr)
		let idx32 = this._idx32(start)
		let length = this._view32[idx32 + HEADERS.PAYLOAD_LENGTH_0_32]!
		if (BigInt(this._view32[idx32 + HEADERS.GENERATION_BYTE_0_32]!) !== generation) return null
		return this._view8.subarray(start + 12, start + this.HEADER_SIZE_BYTES + Number(length))
	}
	public collectActiveRecords(): Array<ArenaLocation> {
		const ptrArray = new Array<ArenaLocation>()
		const limit = this._offset;
		let pos = 0
		while (this._u(pos) < this._u(limit)) {
			const totalLength = this._view32[this._idx32(pos)]!;
			if (totalLength === 0) {
				pos = this._idx32((pos + 16) & ~15)
				continue;
			}
			const isDeleted = this._view8[this._u(pos) + HEADERS.DELETED_8] === 1
			if (!isDeleted) {
				ptrArray.push(
					this._makePtr(pos, this._view32[this._idx32(pos) + HEADERS.GENERATION_BYTE_0_32]!)
				);
			}
			pos += totalLength
			if (totalLength === 0) break;
		}
		return ptrArray
	}
	public getHeaders(ptr: ArenaLocation): ArenaHeaders {
		const { start, generation: _ } = this.translate(ptr)
		const idx = this._u(start)
		return {
			totalLength: Number(this._view32[this._idx32(start) + HEADERS.TOTAL_LENGTH_0_32]!.toString()),
			payloadlength: Number(this._view32[this._idx32(start) + HEADERS.PAYLOAD_LENGTH_0_32]!.toString()),
			deleted: this._view8[idx + HEADERS.DELETED_8] === 1,
			header0: Number(this._view8[idx + HEADERS.USER_STATUS_0_8]!.toString()),
			header1: Number(this._view8[idx + HEADERS.USER_STATUS_1_8]!.toString()),
			header2: Number(this._view8[idx + HEADERS.USER_STATUS_2_8]!.toString()),
		}
	}
	public estimate(size: number, amnt: number): number {
		return (((size + this._allignMask) & ~this._allignMask) + this.HEADER_SIZE_BYTES) * amnt
	}
	public directAlloc(source: Uint8Array, startn: number, endn: number): ArenaLocation {
		const start = this._u(this._offset)
		const len = endn - startn;
		const needed = (len + this.HEADER_SIZE_BYTES + this._allignMask) & ~this._allignMask;
		const bucketIdx = (needed >> this._allignShift) - 1;
		if (bucketIdx >= 0 && bucketIdx < this._bucketcount) {
			const count = this._getBucketCount(bucketIdx);
			if (count > 0) {
				const recycledOffset = this._u(this._getBucketOffset(bucketIdx, count - 1));
				this._setBucketCount(bucketIdx, count - 1);
				this._initBlock(recycledOffset, len, { header0: 0, header1: 0, header2: 0 });
				const gen = this._view32[this._idx32(recycledOffset) + HEADERS.GENERATION_BYTE_0_32]!;
				this._view8.set(source.subarray(startn, endn), recycledOffset + this.HEADER_SIZE_BYTES)
				return this._makePtr(recycledOffset, gen)
			}
		}
		if (this._checkForSpace(needed)) this._resize()
		this._initBlock(start, len, { header0: 0, header1: 0, header2: 0 });
		this._offset = this._u((start + needed) & ~this._allignMask);
		this._view8.set(source.subarray(startn, endn), start + this.HEADER_SIZE_BYTES)
		const gen = this._view32[this._idx32(start) + HEADERS.GENERATION_BYTE_0_32]!
		return this._makePtr(start, gen)
	}

	public clear() {
		this._offset = 0
		this._emptySpots.fill(0)
	}

	public *records(): Generator<[Uint8Array, ArenaLocation]> {
		while (this._next < this._offset) {
			const start = this._next
			const totalLength = this._view32[this._idx32(start) + HEADERS.TOTAL_LENGTH_0_32]!
			const payloadLength = this._view32[this._idx32(start) + HEADERS.PAYLOAD_LENGTH_0_32]!

			if (totalLength === 0) {
				this._next = (start + 16) & ~15
				continue
			}

			const isDeleted = this._view8[start + HEADERS.DELETED_8] === 1
			const ptr = this._makePtr(start, this._view32[this._idx32(start) + HEADERS.GENERATION_BYTE_0_32]!)

			this._next += totalLength

			if (!isDeleted) {
				yield [
					this._view8.subarray(start + this.HEADER_SIZE_BYTES, start + this.HEADER_SIZE_BYTES + payloadLength),
					ptr
				]
			}
		}
	}
	public reset() {
		this._next = 0
	}
}
