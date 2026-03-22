import Bun from "bun";
import { Arena } from "../arena.ts";

const file = Bun.mmap("./test.txt");
const arena = new Arena({ initialSize: (2 ** 32) });

(() => {
	const start = performance.now()
	for (let pos = 0; pos < file.length;) {
		const idx = file.indexOf(10, pos)
		if (idx === -1) { arena.directAlloc(file, pos, file.length); break; }
		arena.directAlloc(file, pos, idx)
		pos = idx + 1
	}
	const injest = performance.now()
	let i = 0
	for (const item of arena.fastRecords()!) {
		if (!item) break
		i++
	}
	const iteratefast = performance.now()
	arena.reset()
	i = 0
	for (const _ of arena.records()) {
		i++
	}
	const end = performance.now()
	const totalTime = (end - start) / 1000
	const injestTime = (injest - start) / 1000
	const iterateFastTime = (iteratefast - injest) / 1000
	const iterateSlowTime = (end - iteratefast) / 1000

	console.log(`Items: ${i}`)
	console.log(`Total: ${(totalTime).toFixed(2)} ms`)
	console.log(`Injest: ${(injestTime).toFixed(2)} ms`)
	console.log(`iteration_slow: ${(iterateFastTime).toFixed(2)} ms`)
	console.log(`iteration_fast: ${(iterateSlowTime).toFixed(2)} ms`)
	console.log(`Arena Size: ${arena.size() / (1024 * 1024 * 1024)} GB`)
})()

Bun.write("output.db", arena.getBuffer())


