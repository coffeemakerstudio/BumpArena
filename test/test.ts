import { Arena, ArenaCustomHeaders } from "../arena.ts"

//Tests
function Test() {
	console.log("running Tests")
	const a = new Arena()
	const testdata = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7])
	const headers = { header0: 42, header1: 24, header2: 240 };
	_testCheckPtrAccess(a, testdata, headers)
}

function _testCheckPtrAccess(a: Arena, testdata: Uint8Array, headers: ArenaCustomHeaders) {
	// USE-AFTER-FREE
	const useAfterFreePtr = a.alloc(testdata, headers)
	a.free(useAfterFreePtr)
	// free Slot reuse
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
		throw new Error(`${testdata} had a problem with data integrety`)
	}
	//final use after free with Generation this should never be possible
	if (a.read(useAfterFreePtr) !== null) {
		throw new Error(`Use after Free is Possible, this is a big Problem`)
	}
	console.log("CheckPtrAccess Done!")
}

Test()
