import { pipeline } from "node:stream/promises";
import { noopWriter, stream } from "./init.ts"

const array: Array<string> = [];
const decode = new TextDecoder()
let tmp: Uint8Array | null = null // Rest vom vorherigen Chunk
const arraytransform = new WritableStream<Uint8Array>({
	write(chunk) {
		if (tmp) {
			const combined = new Uint8Array(tmp.byteLength + chunk.byteLength)
			combined.set(tmp, 0)
			combined.set(chunk, tmp.byteLength)
			chunk = combined
			tmp = null
		}

		let firstIdx = 0
		let idx: number

		while ((idx = chunk.indexOf(10, firstIdx)) !== -1) {
			const lineLength = idx - firstIdx
			if (lineLength > 0) {
				array.push(decode.decode(chunk.subarray(firstIdx, idx)!)!)
			}
			firstIdx = idx + 1
		}

		if (firstIdx < chunk.byteLength) {
			tmp = chunk.subarray(firstIdx)
		}
	},
	close() {
		if (tmp) {
			//@ts-ignore
			array.push(tmp)
			tmp = null
		}
	}
});


(async () => {
	const reader = stream()
	const start = performance.now()
	await pipeline(
		reader,
		arraytransform,
	)
	const end = performance.now()

	for (const iter of array) noopWriter(iter)
	console.log(`Count: ${array.length}`)
	console.log(`${(end - start).toFixed(2)} ms`)
	console.log(process.memoryUsage())
})();
