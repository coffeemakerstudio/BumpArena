import { testfile } from "./init.ts"
import { exists, unlink } from "node:fs/promises";
import { createReadStream } from "node:fs";
import { Arena, HEADERS } from "../arena.ts";
import { fastParseNumber } from "./helper.ts";

// const finalresult = 1250153526357600n
const finalresult = 5554728545810779096126n
const shmPath = "/dev/shm/Bumparena_arena.db";
const start = performance.now()
let ingest: number = 0;
let end: number = 0;
let totalSum = 0n;
let newTotalSum = 0n;

const arena = new Arena({ bucketCapacities: [], initialSize: 2 ** 32 })
const rf = createReadStream(testfile(), { highWaterMark: 16 * 1024 * 1024 });
const Bigstoragelen = 1024 - HEADERS.Total_Size_In_Bytes / 8;
const BigStorage = new Float64Array(Bigstoragelen);
let bigstorageidx = 0;
let totalRecords = 0;

function processNumber(buf: Uint8Array) {
	if (bigstorageidx >= Bigstoragelen) {
		arena.allocNoPtr(BigStorage);
		totalRecords += bigstorageidx;
		bigstorageidx = 0;
	}

	fastParseNumber(buf, 0, buf.length, BigStorage, bigstorageidx++);
}

(async () => {
	if (await exists(shmPath)) await unlink(shmPath);


	let leftover: Uint8Array | null = null;

	for await (const chunk of rf) {
		let data = chunk as Uint8Array;

		if (leftover) {
			const joined = Buffer.allocUnsafe(leftover.length + chunk.length);
			joined.set(leftover);
			joined.set(chunk, leftover.length);
			data = joined;
			leftover = null;
		}

		let i = 0;
		while (true) {
			const pos = data.indexOf(10, i);

			if (pos === -1) {
				const remaining = data.subarray(i);
				if (remaining.length > 0) {
					leftover = Buffer.allocUnsafe(remaining.length);
					leftover.set(remaining);
				}
				break;
			}

			processNumber(data.subarray(i, pos));
			i = pos + 1;
		}
	}

	if (bigstorageidx > 0) {
		console.log("Letzter Batch hat nur", bigstorageidx, "Elemente.");
		arena.allocNoPtr(BigStorage.subarray(0, bigstorageidx));
		totalRecords += bigstorageidx;
		bigstorageidx = 0;
	}

	arena.collectActiveRecords("Float64Array", (data) => {
		for (const item of data) {
			totalSum += BigInt(item);
		}
	})
	ingest = performance.now()
	await Bun.write(shmPath, arena.getBuffer())
	const persist = performance.now()
	arena.clear()
	const newFile = Bun.mmap(shmPath)
	arena.import(newFile.buffer)
	const recover = performance.now()
	arena.collectActiveRecords("Float64Array", () => { })
	const recover2 = performance.now()
	arena.collectActiveRecords("Float64Array", () => { })
	end = performance.now()
	arena.collectActiveRecords("Float64Array", (data) => {
		for (const item of data) {
			newTotalSum += BigInt(item)
		}
	})

	console.log(`Total Time: ${(end - start).toFixed(3)} ms`)
	const stats = {
		items: totalRecords,
		throughput_in: Math.round(totalRecords / ((ingest - start) / 1000)).toLocaleString() + " lines/s",
		throughput_out: Math.round(totalRecords / (end - recover)).toLocaleString() + " lines/s",
		throughput_out_raw: `${Math.round(totalRecords / (recover2 - recover)).toLocaleString()} lines/s`,
		rss: `${(process.memoryUsage().rss / 1024 ** 3).toFixed(3)} GB`,
		heap: `${(process.memoryUsage().heapUsed / 1024 ** 3).toFixed(3)} GB`,
		persist: `${((persist - ingest)).toFixed(3)} ms`,
		recover: `${((recover - persist)).toFixed(3)} ms`,
	};
	if (process.env.BENCH_JSON) {
		process.stdout.write(`---JSON---${JSON.stringify(stats)}`);
	} else {
		console.log("Integrity Check at 500M items:", totalSum === newTotalSum && totalSum === finalresult);
		console.table(stats);
		console.log(`Arena size: ${arena.size()} bytes`)
	}
	if (await exists(shmPath)) await unlink(shmPath);
})()
