import { Arena } from "../arena.ts"

export function TestDirectAlloc(): boolean {
	//Init
	const count = 255
	const a = new Arena()
	const testdata = new Array<Uint8Array>()
	for (let i = 0; i < count; i++) {
		const data = new Uint8Array([i, 1, 2, 3, 4, 5, 6, 7])
		testdata.push(data)

		a.alloc(data, 0, data.length)
	}

	a.collectActiveRecords("Uint8Array", (data: Uint8Array, idx: number) => {
		if (!data) throw new Error(`data at index ${idx} is Empty.`)

		for (let j = 0; j < testdata.length; j++) {
			if (data[j] !== testdata[idx]![j]) throw new Error(`dataset ${idx} at ${j} is broken!`)
		}
	})
	return true
}

