import { Arena } from "../arena.ts"


export function TestCheckPtrAccess(): boolean {
	//Init
	const a = new Arena()
	const testdata = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7])

	// free Slot reuse
	const ptr = a.alloc(testdata)
	const res = a.read(ptr)
	if (res == null) throw new Error(`${testdata} Could not read data`)
	if (res.toString() !== testdata.toString()) throw new Error(`${testdata} had a problem with data integrety`)

	return true
}

export function TestCheckDirectPtrAccess(): boolean {
	//Init
	const a = new Arena()
	const testdata = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7])

	// free Slot reuse
	const ptr = a.directAlloc(testdata, 0, testdata.length)
	const res = a.read(ptr)
	if (res == null) throw new Error(`${testdata} Could not read data`)
	if (res.toString() !== testdata.toString()) throw new Error(`${testdata} had a problem with data integrety`)

	return true
}
export function TestUseAfterFree(): boolean {
	const a = new Arena()
	const testdata = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7])

	const useAfterFreePtr = a.alloc(testdata)
	a.free(useAfterFreePtr)
	if (a.read(useAfterFreePtr) !== null) throw new Error(`Use after Free is Possible, this is a big Problem`)

	return true
}

