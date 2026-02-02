
export type ArenaLocation = bigint & { readonly __data_pointer: unique symbol };
export interface ArenaOptions {
	initalSize?: number
	littleEndian?: boolean
	allignment?: 8 | 16 | 32 | 64
	bucketOffsets?: number[];
	bucketCapacities?: number[];
}
export interface ArenaCustomHeaders {
	header0: number,
	header1: number,
	header2: number
}
export interface ArenaHeaders {
	totalLength: number
	payloadlength: number
	deleted: boolean
	header0: number
	header1: number
	header2: number
}
const enum SHIFTOFFSETS {
	BYTE_8 = 0, // No SHIFT needed
	BYTE_16 = 1,
	BYTE_32 = 2,
	BYTE_64 = 3,
}
const enum HEADERS {
	TOTAL_LENGTH_0_32 = 0,
	PAYLOAD_LENGTH_0_32 = 1,
	GENERATION_BYTE_0_32 = 2,
	DELETED_8 = 12,
	USER_STATUS_0_8 = 13,
	USER_STATUS_1_8 = 14,
	USER_STATUS_2_8 = 15,
}

export class Arena {
	private HEADER_SIZE_BYTES = 16
	private _buffer: ArrayBuffer
	private _view8: Uint8Array
	private _view32: Uint32Array
	private _offset: number
	private _emptySpots: Uint32Array
	private _allignMask: 7 | 15 | 31 | 63
	private _allignShift: number
	private _bucketOffsets: number[];
	private _bucketCapacities: number[];
	private _bucketcount: number;

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

	private _initBlock(start: number, dataLength: number, { header0, header1, header2 }: { header0?: number, header1?: number, header2?: number }) {
		const h0 = (header0 || 0) & 0xFF;
		const h1 = (header1 || 0) & 0xFF;
		const h2 = (header2 || 0) & 0xFF;
		const shift32 = start >> SHIFTOFFSETS.BYTE_32
		this._view32[shift32 + HEADERS.TOTAL_LENGTH_0_32] = (dataLength + this.HEADER_SIZE_BYTES + this._allignMask) & ~this._allignMask
		this._view32[shift32 + HEADERS.PAYLOAD_LENGTH_0_32] = dataLength
		this._view32[shift32 + (HEADERS.DELETED_8 >> SHIFTOFFSETS.BYTE_32)] = (h2 << 24) | (h1 << 16) | (h0 << 8) | 0
	}

	public alloc(data: Uint8Array, headers?: ArenaCustomHeaders): ArenaLocation {
		const totalBlockSize = (data.byteLength + this.HEADER_SIZE_BYTES + this._allignMask) & ~this._allignMask;
		const bucketIdx = (totalBlockSize >> this._allignShift) - 1;
		if (bucketIdx >= 0 && bucketIdx < this._bucketcount) {
			const count = this._getBucketCount(bucketIdx);
			if (count > 0) {
				const recycledOffset = this._getBucketOffset(bucketIdx, count - 1);
				this._setBucketCount(bucketIdx, count - 1);
				this._initBlock(recycledOffset, data.length, headers || {});
				return (BigInt(recycledOffset) << 32n | BigInt(this._view32[(recycledOffset >> SHIFTOFFSETS.BYTE_32) + HEADERS.GENERATION_BYTE_0_32]!)) as ArenaLocation
			}
		}
		const start = this._offset
		this._checkForSpace(data.byteLength + this.HEADER_SIZE_BYTES) && this._resize()
		this._initBlock(start, data.byteLength, headers || {})
		this._view8.set(data, start + this.HEADER_SIZE_BYTES)
		this._offset = (data.byteLength + this.HEADER_SIZE_BYTES + this._offset + this._allignMask) & ~this._allignMask;
		return (BigInt(start) << 32n | BigInt(this._view32[(start >> SHIFTOFFSETS.BYTE_32) + HEADERS.GENERATION_BYTE_0_32]!)) as ArenaLocation
	}
	public read(location: ArenaLocation): Uint8Array | null {
		let start = Number(BigInt(location as bigint) >> 32n)
		const generation = BigInt(location as bigint) & 0xFFFFFFFFn
		let length = this._view32[(start >> SHIFTOFFSETS.BYTE_32) + HEADERS.PAYLOAD_LENGTH_0_32]!
		const diff = generation ^ BigInt(this._view32[((start >> SHIFTOFFSETS.BYTE_32) + HEADERS.GENERATION_BYTE_0_32)]!)
		console.log(start, generation, diff)
		if (diff !== 0n) return null
		return this._view8.subarray(start + this.HEADER_SIZE_BYTES, start + this.HEADER_SIZE_BYTES + Number(length))
	}
	public free(location: ArenaLocation): ArenaLocation {
		let start = Number(BigInt(location as bigint) >> 32n)
		const currgen = this._view32[(start >> SHIFTOFFSETS.BYTE_32) + HEADERS.GENERATION_BYTE_0_32]!
		this._view32[(start >> SHIFTOFFSETS.BYTE_32) + HEADERS.GENERATION_BYTE_0_32] = ((currgen + 1) & 0xFFFF)
		this._view8[start + HEADERS.DELETED_8] = 1
		const totalBlockSize = this._view32[(start >> SHIFTOFFSETS.BYTE_32) + HEADERS.TOTAL_LENGTH_0_32]!
		const bucketIdx = (totalBlockSize >> this._allignShift) - 1
		if (bucketIdx >= 0 && bucketIdx < this._bucketcount) {
			const count = this._getBucketCount(bucketIdx)
			const capacity = this._bucketCapacities[bucketIdx]!
			if (count < capacity) {
				this._setBucketOffset(bucketIdx, count, start);
				this._setBucketCount(bucketIdx, count + 1);
			}
		}
		return 0n as ArenaLocation
	}

	private _checkForSpace(size: number): boolean {
		if (this._buffer.byteLength >= this._offset + size) return false
		return true
	}

	private _resize() {
		//@ts-ignore
		this._buffer = this._buffer.transfer(this._buffer.byteLength * 2)
		this._view8 = new Uint8Array(this._buffer)
		this._view32 = new Uint32Array(this._buffer)
	}
	public size(): number {
		return this._buffer.byteLength
	}
	public getBuffer(): Uint8Array {
		return this._view8.subarray(0, this._offset)
	}
	public reserve(size: number): Uint8Array {
		const start = this._offset
		this._checkForSpace(start + this.HEADER_SIZE_BYTES + size + this._allignMask & ~this._allignMask) && this._resize()
		this._view32[(start >> SHIFTOFFSETS.BYTE_32) + HEADERS.PAYLOAD_LENGTH_0_32] = size
		this._view8[start + HEADERS.DELETED_8] = 0
		this._offset = this._offset + size + this.HEADER_SIZE_BYTES + this._allignMask & ~this._allignMask
		return this._view8.subarray(start + this.HEADER_SIZE_BYTES, start + this.HEADER_SIZE_BYTES + size)
	}
	public translate(ptr: ArenaLocation) {
		let start = Number(BigInt(ptr as bigint) >> 32n)
		const generation = BigInt(this._view32[(start >> SHIFTOFFSETS.BYTE_32) + HEADERS.GENERATION_BYTE_0_32]!)
		console.log({ start, generation })
	}
	public label(): Array<ArenaLocation> {
		const ptrArray = new Array<ArenaLocation>()
		const limit = this._offset;
		let pos = 0
		while (pos < limit) {
			const totalLength = this._view32[pos >> SHIFTOFFSETS.BYTE_32]!;
			if (totalLength === 0) {
				pos = (pos + 16) & ~15
				continue;
			}
			const isDeleted = this._view8[pos + HEADERS.DELETED_8] === 1
			if (!isDeleted) {
				ptrArray.push(((BigInt(pos) << 32n) | BigInt(this._view32[(pos >> SHIFTOFFSETS.BYTE_32) + HEADERS.GENERATION_BYTE_0_32]!)) as ArenaLocation);
			}
			pos += totalLength
			if (totalLength === 0) break;
		}
		return ptrArray
	}
	public getHeaders(ptr: ArenaLocation): ArenaHeaders {
		let start = Number(BigInt(ptr as bigint) >> 32n)
		return {
			totalLength: Number(this._view32[(start >> SHIFTOFFSETS.BYTE_32) + HEADERS.TOTAL_LENGTH_0_32]!.toString()),
			payloadlength: Number(this._view32[(start >> SHIFTOFFSETS.BYTE_32) + HEADERS.PAYLOAD_LENGTH_0_32]!.toString()),
			deleted: this._view8[start + HEADERS.DELETED_8] === 1,
			header0: Number(this._view8[start + HEADERS.USER_STATUS_0_8]!.toString()),
			header1: Number(this._view8[start + HEADERS.USER_STATUS_1_8]!.toString()),
			header2: Number(this._view8[start + HEADERS.USER_STATUS_2_8]!.toString()),
		}
	}
}
if (process.argv[1] === `${__filename}`) {
	console.log("running Tests")

	const a = new Arena()
	const testdata = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7])
	const headers = { header0: 42, header1: 24, header2: 240 };
	CheckPtrAccess(a, testdata, headers)
}

function CheckPtrAccess(a: Arena, testdata: Uint8Array, headers: ArenaCustomHeaders) {
	const ptr = a.alloc(testdata, headers)
	const res = a.read(ptr)
	if (res == null) throw new Error(`${testdata} Could not read data`)
	const resultheaders = a.getHeaders(ptr)

	if (resultheaders.totalLength !== testdata.byteLength + 16) throw new Error(`totalLength not right: got: ${resultheaders.totalLength} needed: ${testdata.byteLength}`)
	if (resultheaders.payloadlength !== testdata.byteLength) throw new Error(`payloadLength not right: got: ${resultheaders.payloadlength} needed: ${testdata.byteLength}`)
	if (resultheaders.header0 !== headers.header0) throw new Error(`header0: got: ${resultheaders.header0} needed: ${headers.header0}`)
	if (resultheaders.header1 !== headers.header1) throw new Error(`header1: got: ${resultheaders.header1} needed: ${headers.header1}`)
	if (resultheaders.header2 !== headers.header2) throw new Error(`header2: got: ${resultheaders.header2} needed: ${headers.header2}`)

	if (res.toString() !== testdata.toString()) {
		console.log(a.getBuffer())
		throw new Error(`${testdata} had a problem with data integrety`)
	}
}
