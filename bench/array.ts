import { createReadStream, readFileSync } from "node:fs";
import { createInterface } from "node:readline";
import { testfile } from "./init.ts"

const shmPath = "/dev/shm/array.bin";

await (async () => {
	const start = performance.now();
	const arrayStorage: bigint[] = [];
	let totalSum: bigint = 0n;

	const rl = createInterface({
		input: createReadStream(testfile),
		terminal: false
	});

	for await (const line of rl) {
		if (line.length > 0) {
			const n = BigInt(line);
			totalSum += n;
			arrayStorage.push(n);
		}
	}

	const totalRecords = arrayStorage.length;

	const buf = new ArrayBuffer(8 * totalRecords);
	const view = new BigInt64Array(buf);
	for (let i = 0; i < totalRecords; i++) {
		view[i] = arrayStorage[i];
	}

	await Bun.write(shmPath, buf);

	const file = readFileSync(shmPath);
	const view2 = new BigInt64Array(file.buffer, file.byteOffset, file.length / 8);

	const result = view2.reduce((acc, n) => acc + n, 0n);

	const end = performance.now();
	const durationSec = (end - start) / 1000;


	const stats = {
		totalTime: durationSec.toFixed(2) + "s",
		throughput: Math.round(totalRecords / durationSec).toLocaleString() + " lines/s",
		rss: (process.memoryUsage().rss / 1024 ** 3).toFixed(2) + " GB",
		heap: (process.memoryUsage().heapUsed / 1024 ** 3).toFixed(2) + " GB"
	};

	if (process.env.BENCH_JSON) {
		process.stdout.write(`---JSON---${JSON.stringify(stats)}`);
	} else {
		console.log("Integrity Check:", result === totalSum);
		console.table(stats);
	}
})();
