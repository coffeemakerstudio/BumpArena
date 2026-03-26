import Bun from "bun";
import { Arena } from "../arena.ts";
import { testfile } from "./init.ts"
import { unlinkSync, existsSync } from "node:fs";

const shmPath = "/dev/shm/Bumparena.db";
function fastParseInt(uint8: Uint8Array): number {
	let num = 0;
	for (let i = 0; i < uint8.length; i++) {
		num = num * 10 + (uint8[i]! - 48);
	}
	return num;
}

(async () => {
	if (existsSync(shmPath)) {
		unlinkSync(shmPath);
	}
	const start = performance.now()
	const file = Bun.mmap(testfile);
	const arena = new Arena({ initialSize: 320000000 });

	let totalSum = 0;
	let totalRecords = 0;
	let pos = 0;

	for (let i = 0; i < file.length; i++) {
		if (file[i] === 10) {
			const line = file.subarray(pos, i);

			if (line.length > 0) {
				arena.alloc(file, pos, i);
				totalSum += fastParseInt(line);
				totalRecords++;
			}
			pos = i + 1;
		}
	}

	await Bun.write(shmPath, arena.getBuffer())
	arena.clear()
	const file2 = Bun.mmap(shmPath)
	arena.import(file2.buffer)
	let newTotalSum = 0;
	arena.collectActiveRecords("Uint8Array", (data) => {
		newTotalSum += fastParseInt(data)
	})


	const end = performance.now();
	const totalTimeMs = end - start;
	const totalTimeSec = totalTimeMs / 1000;

	const stats = {
		totalTime: totalTimeSec.toFixed(3) + "s",
		throughput: Math.round(totalRecords / totalTimeSec).toLocaleString() + " lines/s",
		rss: (process.memoryUsage().rss / 1024 / 1024 / 1024).toFixed(2) + " GB",
		heap: (process.memoryUsage().heapUsed / 1024 / 1024 / 1024).toFixed(2) + " GB"
	};

	if (process.env.BENCH_JSON) {
		process.stdout.write(`---JSON---${JSON.stringify(stats)}`);
	} else {
		console.log("Integrity Check:", newTotalSum === totalSum);
		console.table(stats);
	}

	if (existsSync(shmPath)) {
		unlinkSync(shmPath);
	}
})()
