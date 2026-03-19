import { createWriteStream, createReadStream } from "node:fs";
const testfile = "./bigtest.txt"
function splitmix32(a: number) {
	return function() {
		a |= 0; a = a + 0x9e3779b9 | 0;
		let t = a ^ a >>> 16; t = Math.imul(t, 0x21f0aaad);
		t = t ^ t >>> 15; t = Math.imul(t, 0x735a2d97);
		return ((t = t ^ t >>> 15) >>> 0) / 4294967296;
	}
};

export function noopWriter(_data: any) { return true; };

async function generateTestData(seed: number, count: number) {
	const writer = createWriteStream(testfile, { highWaterMark: 16 * 1024 * 1024 })
	const random = splitmix32(seed)
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (let i = 0; i < count; i++) {
		let str = '';
		const len = Math.floor(random() * 5) + 10;
		for (let j = 0; j < len; j++) {
			str += characters.charAt(Math.floor(Math.random() * characters.length));
		}
		if (!writer.write(str + "\n")) {
			await new Promise((res, _rej) => {
				writer.once("drain", res)
			})
		}
	}
};

export const stream = () => {
	return createReadStream(testfile)
};

export function generateData(seed: number, count: number) {
	generateTestData(seed, count);
}
