import { existsSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import { Arena } from "../arena.ts";
import { testfile } from "./init.ts";
const shmPath = "/dev/shm/Bumparena_slow.db";
const decoder = new TextDecoder()
function bytesToBigInt(uint8Array: Uint8Array, start: number, len: number): bigint {
	const view = uint8Array.subarray(start, start + len);
	return BigInt(decoder.decode(view));
}

function jsonparse(uint8Array: Uint8Array, start: number, len: number): bigint {
	let offset = start
	for (let i = 0; i < len; i++) {
		if (uint8Array[i + start] == 48) offset++;
		else break;
	}
	console.log(offset, Buffer.from(uint8Array.subarray(offset, len)).toString("utf8"), Buffer.from(uint8Array.subarray(start, len)).toString("utf8"))
	const n = Buffer.from(uint8Array.subarray(offset, offset + len)).toString("utf8")
	return BigInt(JSON.parse(n))
}
function bytesToBigIntFast(uint8Array: Uint8Array, start: number, len: number): bigint {
	let result = 0n;
	const end = start + len;

	for (let i = start; i < end; i++) {
		const digit = uint8Array[i]! - 48;
		result = result * 10n + BigInt(digit);
	}
	return result;
}
(async () => {
	if (existsSync(shmPath)) unlinkSync(shmPath);

	const start = performance.now();
	const arena = new Arena({ initialSize: 320000000 });

	const file = readFileSync(testfile);

	let totalRecords = 0;
	const scratch = new BigInt64Array(1)
	let i = 0;
	let count = 0;
	const len = file.length;

	while (i < len) {
		const pos = file.indexOf(10, i);

		const end = (pos === -1) ? len : pos;

		const length = end - i;

		if (length > 0) {
			scratch[0] = bytesToBigInt(file, i, length);
			arena.allocNoPtr(scratch);
			count++;
		}

		if (pos === -1) break;
		i = pos + 1;
		totalRecords++
	}


	let totalSum = 0n;
	arena.collectActiveRecords("bigint", data => totalSum += data)

	// await Bun.write(shmPath, arena.getBuffer());
	writeFileSync(shmPath, arena.getBuffer())
	arena.clear()
	const persist = performance.now();

	const recoveredBuffer = readFileSync(shmPath);
	let newTotalSum = 0n;
	arena.import(recoveredBuffer.buffer)
	const recover = performance.now();
	arena.collectActiveRecords("bigint", (data) => newTotalSum += data);

	const endtimer = performance.now()
	const durationSec = (endtimer - start) / 1000
	const stats = {
		totalTime: durationSec.toFixed(3) + "s",
		throughput: Math.round(totalRecords / durationSec).toLocaleString() + " lines/s",
		rss: (process.memoryUsage().rss / 1024 ** 3).toFixed(2) + " GB",
		heap: (process.memoryUsage().heapUsed / 1024 ** 3).toFixed(2) + " GB",
		persist: ((persist - start) / 1000).toFixed(3) + "s",
		recover: ((recover - persist) / 1000).toFixed(3) + "s",
	};

	if (process.env.BENCH_JSON) {
		console.log(`---JSON---${JSON.stringify(stats)}`);
	} else {
		const res = (totalSum === newTotalSum) && 111258601765802987051n
		if (res) console.log("Integrity Check: ", true);
		else {
			console.log({ newTotalSum, totalSum, needed: 111304187885967550850n });
		}
		console.table(stats);
	}
})();
