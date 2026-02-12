import { devNull } from "node:os";
import { Arena } from "./arena.ts"
import { createWriteStream } from "node:fs"

function splitmix32(a: number) {
	return function() {
		a |= 0; a = a + 0x9e3779b9 | 0;
		let t = a ^ a >>> 16; t = Math.imul(t, 0x21f0aaad);
		t = t ^ t >>> 15; t = Math.imul(t, 0x735a2d97);
		return ((t = t ^ t >>> 15) >>> 0) / 4294967296;
	}
}

const random = splitmix32(12345);
function generateTestDataArray(count: number) {
	const data = [];
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (let i = 0; i < count; i++) {
		let str = '';
		const len = Math.floor(random() * 10) + 5;
		for (let j = 0; j < len; j++) {
			str += characters.charAt(Math.floor(Math.random() * characters.length));
		}
		//@ts-ignore
		data.push(str);
	}
	return data;
}
function generateTestDataArena(count: number, arena: Arena) {
	const encoder = new TextEncoder()
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (let i = 0; i < count; i++) {
		let str = '';
		const len = Math.floor(random() * 10) + 5;
		for (let j = 0; j < len; j++) {
			str += characters.charAt(Math.floor(Math.random() * characters.length));
		}
		//slow
		// checks.push(arena.alloc(encoder.encode(str)))
		//fast 
		const uint8 = arena.reserve(str.length)
		encoder.encodeInto(str, uint8)
	}
	return arena.label()

}

(async () => {
	const count = (parseInt(process.argv[3] || "") || 1_000_000)
	switch (process.argv[2]?.slice(0, 5)) {
		case "array": {
			console.log(`Starting Test for Array: ObjectsCount: ${count}`)
			const writer = createWriteStream(devNull)
			const array = generateTestDataArray(count)
			const start = performance.now()
			for (let i = 0; i < array.length; i++) {
				if (!writer.write(array[i]!)) {
					await new Promise((res, _rej) => {
						writer.once("drain", res)
					})
				}
				if (i % 2) {
					const getdata = array.pop()!;
					array.push(getdata);
				}
			}
			await new Promise((res, _rej) => {
				writer.end(res)
			})
			const end = performance.now()
			console.log(`${(end - start).toFixed(4)} ms\nHeap: ${process.memoryUsage().heapUsed / 1024}`)
		}
			break
		default: {
			console.log(`Starting Test for Arena: ObjectsCount: ${count}`)
			const writer = createWriteStream(devNull)
			const encode = new TextEncoder()
			const decode = new TextDecoder()
			let size = 0
			const start = performance.now()
			{
				const arena = new Arena()
				const ptrArray = generateTestDataArena(count, arena)!
				console.log(ptrArray.length)
				for (let i = 0; i < ptrArray.length; i++) {
					if (!writer.write(arena.read(ptrArray[i]!))) {
						await new Promise((res, _rej) => {
							writer.once("drain", res)
						})
					}
					if (i % 2 == 0) {
						const getString = decode.decode(arena.read(ptrArray[i])!)
						arena.free(ptrArray[i]!)
						//update reference to ptr
						ptrArray[i] = arena.alloc(encode.encode(getString))
					}
				}

				//fastest O(1)*
				// writer.write(arena.getBuffer())
				await new Promise((res, _rej) => {
					writer.end(res)
				})
				size = arena.size()
			}
			const end = performance.now()
			console.log(`ArenaTime: ${(end - start).toFixed(4)} ms\nHeap: ${process.memoryUsage().heapUsed / 1024}\nSize: ${size}`);
		}
	}
})()
