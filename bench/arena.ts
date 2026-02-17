import { pipeline } from "node:stream/promises";
import { Arena } from "../arena";
import { stream } from "./init.ts"


const arena = new Arena({ initalSize: 1024 * 1024 * 1024 * 4 - 4 })
let tmp: Uint8Array | null = null // Rest vom vorherigen Chunk
const arenatransform = new WritableStream<Uint8Array>({
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
				// arena.alloc(chunk.subarray(firstIdx, idx))
				const buf = arena.reserve(lineLength)
				buf.set(chunk.subarray(firstIdx, idx))
			}
			firstIdx = idx + 1
		}

		if (firstIdx < chunk.byteLength) {
			tmp = chunk.subarray(firstIdx)
		}
	},
	close() {
		if (tmp) {
			// arena.alloc(tmp)
			const buf = arena.reserve(tmp.byteLength)
			buf.set(tmp)
			tmp = null
		}
	}
});
(async () => {
	const reader = stream()
	const start = performance.now()

	await pipeline(
		// stdin,
		reader,
		arenatransform
	)
	const ptr = arena.label()
	const end = performance.now()
	console.log(`count: ${ptr.length}`)
	console.log(`${(end - start).toFixed(2)} ms`)
	console.log(process.memoryUsage())
	console.log(`arenasize: ${arena.size() / 1024} KB`)
	// writeFileSync("arena.bin", arena.getBuffer())
})();
