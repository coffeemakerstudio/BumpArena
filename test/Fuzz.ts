import { Arena } from "../arena.js"
const isCI = !!process.env.CI;
const iterations = isCI ? 5_000 : 10_0000;

export function FuzzAlloc() {
	const arena = new Arena({ initialSize: 1024 * 1024 * 10 });
	const activePointers = new Map<number, { ptr: any, data: Uint8Array }>();
	let nextId = 0;

	for (let i = 0; i < iterations; i++) {
		const action = Math.random();

		if (action > 0.3 || activePointers.size === 0) {
			const size = Math.floor(Math.random() * 100) + 1;
			const mockData = new Uint8Array(size).fill(i % 255);
			const ptr = arena.alloc(mockData);

			activePointers.set(nextId++, { ptr, data: mockData });
		} else {
			const ids = Array.from(activePointers.keys());
			const randomId = ids[Math.floor(Math.random() * ids.length)];
			const { ptr } = activePointers.get(randomId!)!;

			arena.free(ptr);
			activePointers.delete(randomId!);
		}
	}

	console.log(`Fuzzing ended. active Records: ${activePointers.size}`);

	for (const [_id, { ptr, data }] of activePointers) {
		const storedData = arena.read(ptr)!;

		if (Buffer.from(storedData).compare(data) !== 0) {
			throw new Error("data isn't matching!");
		}
	}

	let foundCount = 0;
	arena.collectActiveRecords((_data, _ptr, _idx) => {
		foundCount++;
	});

	if (foundCount !== activePointers.size) return false
	return true
};

export function FuzzDirectAlloc() {
	const arena = new Arena({ initialSize: 1024 * 1024 * 10 });
	const activePointers = new Map<number, { ptr: any, data: Uint8Array }>();
	let nextId = 0;

	for (let i = 0; i < iterations; i++) {
		const action = Math.random();

		if (action > 0.3 || activePointers.size === 0) {
			const size = Math.floor(Math.random() * 100) + 1;
			const mockData = new Uint8Array(size).fill(i % 255);
			const ptr = arena.directAlloc(mockData, 0, mockData.length);

			activePointers.set(nextId++, { ptr, data: mockData });
		} else {
			const ids = Array.from(activePointers.keys());
			const randomId = ids[Math.floor(Math.random() * ids.length)];
			const { ptr } = activePointers.get(randomId!)!;

			arena.free(ptr);
			activePointers.delete(randomId!);
		}
	}

	console.log(`Fuzzing ended. active Records: ${activePointers.size}`);

	for (const [id, { ptr, data }] of activePointers) {
		const storedData = arena.read(ptr)!;

		if (Buffer.from(storedData).compare(data) !== 0) {
			console.log(id, ptr, data, storedData, data)
			throw new Error("data isn't matching!");
		}
	}

	let foundCount = 0;
	arena.collectActiveRecords(() => {
		foundCount++;
	});

	if (foundCount !== activePointers.size) return false
	return true
};
