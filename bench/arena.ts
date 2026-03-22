import { pipeline } from "node:stream/promises";
import { Arena } from "../arena";
import { stream } from "./init.ts"

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
const tries = 2;
(async () => {
	const runs: Array<any> = [];
	for (let i = 0; i < tries; i++) {
		const start = performance.now()
		tmp = null
		const arenatransform = getNewArenaTransform()
		const reader = stream()
		await pipeline(
			reader,
			arenatransform
		)
		const end = performance.now();
		const totalTime = end - start;
		const totalRecords = 10_000_000;
		const mem = process.memoryUsage();
		runs.push([
			{
				Metric: "Records",
				Arena: totalRecords,
			},
			{
				Metric: "Total Time (s)",
				Arena: (totalTime / 1000).toFixed(2),
			},
			{
				Metric: "Throughput (records/sec)",
				Arena: (totalRecords / (totalTime / 1000)).toLocaleString(),
			},
			{
				Metric: "Heap Used (GB)",
				Arena: (mem.heapUsed / 1024 / 1024 / 1024).toFixed(2),
			},
			{
				Metric: "RSS (GB)",
				Arena: (mem.rss / 1024 / 1024 / 1024).toFixed(2),
			}
		]);
	}

})()
