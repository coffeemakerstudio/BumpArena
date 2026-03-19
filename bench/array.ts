import { pipeline } from "node:stream/promises";
import { noopWriter, stream } from "./init.ts"

const array: Array<string> = [];
const decode = new TextDecoder()
let tmp: Uint8Array | null = null 
function getNewArrayTransformStream() {
	return new WritableStream<Uint8Array>({
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
	})
};


await (async () => {
	const start = performance.now()
	for (let i = 0; i < 100; i++) {
		array.length = 0
		tmp = null
		const arraytransform = getNewArrayTransformStream()
		const reader = stream()
		await pipeline(
			reader,
			arraytransform,
		)
		for (const iter of array) noopWriter(iter)
	}
	const end = performance.now()
	console.log(`${(end - start).toFixed(2)} ms`)
	console.log(`Count: ${array.length}`)
	console.log(process.memoryUsage())
})();
