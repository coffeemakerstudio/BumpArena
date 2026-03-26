import Bun from "bun";
import { Arena } from "../arena.ts";
import { testfile } from "./init.ts"
import { unlinkSync, existsSync } from "node:fs";
const MAX_SAFE = 9007199254740991;
const shmPath = "/dev/shm/Bumparena.db";
function fastParseInt(uint8: Uint8Array): number {
	let num = 0;
	for (let i = 0; i < uint8.length; i++) {
		const digit = uint8[i]! - 48;
		num = num * 10 + (uint8[i]! - 48);
		if (num > (MAX_SAFE - digit) / 10) {
			throw new Error("BumpArena: Numeric overflow - value exceeds MAX_SAFE_INTEGER. Use BigInt for this dataset.");
		}
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
				arena.allocNoPtr(file, pos, i);
				totalSum += fastParseInt(line);
				totalRecords++;
			}
			pos = i + 1;
		}
	}

	await Bun.write(shmPath, arena.getBuffer())
	arena.clear()
	const persist = performance.now();
	const file2 = Bun.mmap(shmPath)
	arena.import(file2.buffer)
	const recover = performance.now();
	let newTotalSum = 0;
	arena.collectActiveRecords("Uint8Array", (data) => {
		newTotalSum += fastParseInt(data)
	})


	const end = performance.now();
	const totalTimeMs = end - start;
	const durationSec = totalTimeMs / 1000;

	const stats = {
		totalTime: durationSec.toFixed(3) + "s",
		throughput: Math.round(totalRecords / durationSec).toLocaleString() + " lines/s",
		rss: (process.memoryUsage().rss / 1024 ** 3).toFixed(2) + " GB",
		heap: (process.memoryUsage().heapUsed / 1024 ** 3).toFixed(2) + " GB",
		persist: ((persist - start) / 1000).toFixed(3) + "s",
		recover: ((recover - persist) / 1000).toFixed(3) + "s",
	};

	if (process.env.BENCH_JSON) {
		process.stdout.write(`---JSON---${JSON.stringify(stats)}`);
	} else {
		const res = !!((totalSum === newTotalSum) && 111258601765802987051n)
		if (res) console.log("Integrity Check: ", res);
		else {
			console.log({ newTotalSum, totalSum, needed: 111258601765802987051n });
		}
		console.table(stats);
	}

	if (existsSync(shmPath)) {
		unlinkSync(shmPath);
	}
})()
