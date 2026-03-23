import { existsSync, readFileSync, unlinkSync } from "node:fs";
import { Arena } from "../arena";
import { testfile } from "./init";

function fastParseInt(uint8: Uint8Array): number {
	let num = 0;
	for (let i = 0; i < uint8.length; i++) {
		num = num * 10 + (uint8[i] - 48);
	}
	return num;
}
const shmPath = "/dev/shm/Bumparena_slow.db";
(async () => {
	if (existsSync(shmPath)) unlinkSync(shmPath);

	const arena = new Arena();
	const file = readFileSync(testfile); // Die Rohdaten

	let totalSum = 0;
	let totalRecords = 0;
	const start = performance.now();

	for (let i = 0; i < file.length;) {
		const pos = file.indexOf(10, i);
		if (pos === -1) break;

		const line = file.subarray(i, pos);
		if (line.length > 0) {
			arena.directAlloc(file, i, pos);

			totalSum += fastParseInt(line);
			totalRecords++;
		}
		i = pos + 1;
	}

	await Bun.write(shmPath, arena.getBuffer());

	const recoveredBuffer = readFileSync(shmPath);
	const recoveryArena = new Arena();
	recoveryArena.import(recoveredBuffer.buffer);

	let newTotalSum = 0;
	recoveryArena.collectActiveRecords((data) => {
		newTotalSum += fastParseInt(data);
	});

	const end = performance.now();
	const durationSec = (end - start) / 1000;

	const stats = {
		totalTime: durationSec.toFixed(3) + "s",
		throughput: Math.round(totalRecords / durationSec).toLocaleString() + " lines/s",
		rss: (process.memoryUsage().rss / 1024 ** 3).toFixed(2) + " GB",
		heap: (process.memoryUsage().heapUsed / 1024 ** 3).toFixed(2) + " GB"
	};

	if (process.env.BENCH_JSON) {
		console.log(`---JSON---${JSON.stringify(stats)}`);
	} else {
		console.log("Integrity Check:", newTotalSum === totalSum);
		console.table(stats);
	}
})();
