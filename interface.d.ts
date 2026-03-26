export type ArenaLocation = bigint & { readonly __data_pointer: unique symbol };
export interface ArenaOptions {
	initialSize?: number
	littleEndian?: boolean
	alignment?: 8 | 16 | 32 | 64
	bucketOffsets?: number[];
	bucketCapacities?: number[];
}
export interface InspectStruct {
	offset: number;
	generation_ptr: number;
	generation: number;
	isSafe: boolean;
	totalLength: number;
	payloadLength: number;
	isDeleted: boolean;
	payload?: Uint8Array;
}
export interface IStorageStrategy {
	alloc(data: Uint8Array, headers?: ArenaCustomHeaders): ArenaLocation
	read(location: ArenaLocation): Uint8Array | null
	free(location: ArenaLocation): ArenaLocation
	estimate(size: number, amnt: number): number
	reset(): void
	clear(): void

	collectActiveRecords<T extends ArenaType = "Uint8Array">(
		callback: (data: any, ptr: ArenaLocation, idx: number) => void,
		type: T = "Uint8" as T
	): void;
	records(): [Uint8Array, ArenaLocation] | undefined;
}
