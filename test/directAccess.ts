import { Arena } from "../arena"

export function TestDirectAlloc(): boolean {
	//Init
	const count = 255
	const a = new Arena()
	const testdata = new Array<Uint8Array>()
	for (let i = 0; i < count; i++) {
		const data = new Uint8Array([i, 1, 2, 3, 4, 5, 6, 7])
		testdata.push(data)

		a.directAlloc(data, 0, data.length)
	}

	const ptrs = a.label()
	if (ptrs.length !== count) throw new Error(`Allocated wrong amount of items!: needed: ${count}, got: ${ptrs.length}`)

	for (let i = 0; i < ptrs.length; i++) {
		const buf = a.read(ptrs[i])
		if (!buf) throw new Error(`data at index ${i} is Empty.`)

		for (let j = 0; j < testdata.length; j++) {
			if (buf[j] !== testdata[i][j]) throw new Error(`dataset ${i} at ${j} is broken!`)
		}
	}
	return true
}

