import { Arena } from "../arena"


export function TestCheckReserve(): boolean {
	//Init
	const count = 1_000
	const a = new Arena()
	const testdata = new Array<Uint8Array>()
	for (let i = 0; i < count; i++) {
		const data = new Uint8Array([i, 1, 2, 3, 4, 5, 6, 7])
		testdata.push(data)

		const buf = a.reserve(data.byteLength)
		buf.set(data)
	}

	const ptrs = a.label()

	for (let i = 0; i < ptrs.length; i++) {
		const buf = a.read(ptrs[i])
		if (!buf) throw new Error(`reservation failed at item: ${i}`)
		for (let j = 0; j < ptrs.length; j++) {
			if (buf[j] !== testdata[i][j]) throw new Error(`reservation failed at item ${i}:${j}`)
		}
	}

	return true
}
