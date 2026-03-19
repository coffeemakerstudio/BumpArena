export type ArenaLocation = bigint & { readonly __data_pointer: unique symbol };
export interface ArenaOptions {
	initialSize?: number
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
export interface InspectStruct {
	offset: number;
	generation_ptr: number;
	generation: number;
	isSafe: boolean;
	totalLength: number;
	payloadLength: number;
	isDeleted: boolean;
	UserMetaData0: number;
	UserMetaData1: number;
	UserMetaData2: number;
	payload?: Uint8Array;
}
export interface ArenaHeaders {
	totalLength: number
	payloadLength: number
	deleted: boolean
	header0: number
	header1: number
	header2: number
}
export interface IStorageStrategy {
	alloc(data: Uint8Array, headers?: ArenaCustomHeaders): ArenaLocation
	read(location: ArenaLocation): Uint8Array | null
	free(location: ArenaLocation): ArenaLocation
	estimate(size: number, amnt: number): number
	reset(): void
	clear(): void

	/** Eager Collection */
	collectActiveRecords(): ArenaLocation[]

	/** Lazy Iterator */
	records(): Generator<[Uint8Array, ArenaLocation]>
}
