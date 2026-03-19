import { Arena } from "../arena"


export function TestCheckPtrAccess(): boolean {
	//Init
	const a = new Arena()
	const testdata = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7])
	const headers = { header0: 42, header1: 24, header2: 240 };

	// free Slot reuse
	const ptr = a.alloc(testdata, headers)
	const res = a.read(ptr)
	if (res == null) throw new Error(`${testdata} Could not read data`)
	const resultheaders = a.getHeaders(ptr)

	if (resultheaders.totalLength !== testdata.byteLength + 16) throw new Error(`totalLength not right: got: ${resultheaders.totalLength} needed: ${testdata.byteLength}`)
	if (resultheaders.payloadLength !== testdata.byteLength) throw new Error(`payloadLength not right: got: ${resultheaders.payloadLength} needed: ${testdata.byteLength}`)
	if (resultheaders.header0 !== headers.header0) throw new Error(`header0: got: ${resultheaders.header0} needed: ${headers.header0}`)
	if (resultheaders.header1 !== headers.header1) throw new Error(`header1: got: ${resultheaders.header1} needed: ${headers.header1}`)
	if (resultheaders.header2 !== headers.header2) throw new Error(`header2: got: ${resultheaders.header2} needed: ${headers.header2}`)
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
	const resultheaders = a.getHeaders(ptr)

	if (resultheaders.totalLength !== testdata.byteLength + 16) throw new Error(`totalLength not right: got: ${resultheaders.totalLength} needed: ${testdata.byteLength}`)
	if (resultheaders.payloadLength !== testdata.byteLength) throw new Error(`payloadLength not right: got: ${resultheaders.payloadLength} needed: ${testdata.byteLength}`)
	if (res.toString() !== testdata.toString()) throw new Error(`${testdata} had a problem with data integrety`)

	return true
}
export function TestUseAfterFree(): boolean {
	//Init
	const a = new Arena()
	const testdata = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7])

	const useAfterFreePtr = a.alloc(testdata)
	a.free(useAfterFreePtr)
	if (a.read(useAfterFreePtr) !== null) throw new Error(`Use after Free is Possible, this is a big Problem`)

	return true
}

