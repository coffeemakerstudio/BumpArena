import { pipeline } from "node:stream/promises";
import { Arena } from "../arena";
import { noopWriter, stream } from "./init.ts"


let tmp: Uint8Array | null = null
function getNewArenaTransform() {
	return new WritableStream<Uint8Array>({
		write(chunk) {
			let sourceIdx = 0;
			const chunkLen = chunk.byteLength;

			if (tmp) {
				const nextNewline = chunk.indexOf(10);
				if (nextNewline !== -1) {
					const totalLen = tmp.byteLength + nextNewline;
					const target = new Uint8Array(totalLen)
					target.set(tmp, 0);
					target.set(chunk.subarray(0, nextNewline), tmp.byteLength);
					arena.directAlloc(target, 0, target.length)
					sourceIdx = nextNewline + 1;
					tmp = null;
				} else {
					const newTmp = new Uint8Array(tmp.byteLength + chunkLen);
					newTmp.set(tmp);
					newTmp.set(chunk);
					tmp = newTmp;
					return;
				}
			}

			while (true) {
				const idx = chunk.indexOf(10, sourceIdx);
				if (idx === -1) break;

				const lineLength = idx - sourceIdx;
				if (lineLength > 0) {
					arena.directAlloc(chunk, 0, lineLength);
				}
				sourceIdx = idx + 1;
			}

			if (sourceIdx < chunkLen) {
				tmp = chunk.slice(sourceIdx);
			}
		},
		close() {
			if (tmp) {
				arena.directAlloc(tmp, 0, tmp.length)
				tmp = null
			}
		}
	})
};
const arena = new Arena();
(async () => {
	const start = performance.now()
	for (let i = 0; i < 10; i++) {
		tmp = null
		const arenatransform = getNewArenaTransform()
		const reader = stream()

		await pipeline(
			reader,
			arenatransform
		)
		// const decode = new TextDecoder()
		// for (const itemptr of arena.records()) {
		// 	noopWriter(decode.decode(itemptr[0]))
		// }
		// arena.clear()
	}
	const end = performance.now()
	console.log(`${(end - start).toFixed(2)} ms`)
	console.log(process.memoryUsage())
	console.log(`arenasize: ${arena.size() / 1024} KB`)
})();
