import { createWriteStream } from "node:fs";
export function testfile() {
	if (process.cwd().endsWith("/bench")) {
		return "bigtest.txt"
	}
	return "bench/bigtest.txt"
}
function splitmix32(a: number) {
	return function() {
		a |= 0; a = a + 0x9e3779b9 | 0;
		let t = a ^ a >>> 16; t = Math.imul(t, 0x21f0aaad);
		t = t ^ t >>> 15; t = Math.imul(t, 0x735a2d97);
		return ((t = t ^ t >>> 15) >>> 0) / 4294967296;
	}
};

export async function generateData(seed: number, count: number) {
	const writer = createWriteStream(testfile(), { highWaterMark: 1 * 1024 * 1024 });
	const random = splitmix32(seed);

	const BATCH_SIZE = 10000;
	const characters = '0123456789';

	for (let i = 0; i < count; i += BATCH_SIZE) {
		let chunk = "";

		for (let k = 0; k < BATCH_SIZE && (i + k) < count; k++) {
			const len = Math.floor(random() * 5) + 10;
			let item = "";
			for (let j = 0; j < len; j++) {
				item += characters[Math.floor(random() * 10)];
			}
			chunk += item + "\n";
		}

		if (!writer.write(chunk)) {
			await new Promise(res => writer.once("drain", res));
		}

		if (i % 100_000 === 0) process.stderr.write(`\r${((i / count) * 100).toFixed(2)} % `);
	}
	writer.end();
}
