import { existsSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import { testfile } from "./init.ts"

const shmPath = "/dev/shm/array.bin";

await (async () => {
	if (existsSync(shmPath)) unlinkSync(shmPath);
	const start = performance.now();
	let totalSum: bigint = 0n;
	const Storage: Array<bigint> = [];

	if (!existsSync(testfile)) { process.exit(1) }
	//reading file and Storing the data
	readFileSync(testfile, "utf8").split("\n").forEach(x => Storage.push(BigInt(x)))

	//adding all items up
	totalSum = Storage.reduce((acc: bigint, x: bigint) => acc + x, 0n)

	//creating a persistence layer
	const data = new ArrayBuffer(Storage.length * 8)
	const buf = new BigInt64Array(data)
	Storage.forEach((x, id) => {
		buf[id] = x
	})
	//writing the "backup" file
	writeFileSync(shmPath, buf)
	//clearing the internal Storage
	Storage.length = 0
	const persist = performance.now();

	//recreating the storage
	const file = readFileSync(shmPath)
	const numbers = new BigInt64Array(file.buffer)
	numbers.forEach(x => Storage.push(x))
	const recover = performance.now();

	//adding all items up
	const result = numbers.reduce((acc, x) => acc + x)

	const end = performance.now();

	let totalRecords = Storage.length;
	const durationSec = (end - start) / 1000;



	const stats = {
		totalTime: durationSec.toFixed(3) + "s",
		throughput: Math.round(totalRecords / durationSec).toLocaleString() + " lines/s",
		rss: (process.memoryUsage().rss / 1024 ** 3).toFixed(2) + " GB",
		heap: (process.memoryUsage().heapUsed / 1024 ** 3).toFixed(2) + " GB",
		persist: ((persist - start) / 1000).toFixed(3) + "s",
		recover: ((recover - persist) / 1000).toFixed(3) + "s",
	};

	if (existsSync(shmPath)) unlinkSync(shmPath);
	if (process.env.BENCH_JSON) {
		process.stdout.write(`---JSON---${JSON.stringify(stats)}`);
	} else {
		console.log("Integrity Check:", result === totalSum, result === 111304187885967550850n);
		console.table(stats);
	}
})();
