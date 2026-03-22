import { Arena } from "../arena.ts"

export function FuzzAlloc() {
	const arena = new Arena({ initialSize: 1024 * 1024 * 10 }); // 10MB Start
	const activePointers = new Map<number, { ptr: any, data: Uint8Array }>();
	let nextId = 0;

	for (let i = 0; i < 100000; i++) {
		const action = Math.random();

		if (action > 0.3 || activePointers.size === 0) {
			const size = Math.floor(Math.random() * 100) + 1;
			const mockData = new Uint8Array(size).fill(i % 255);
			const ptr = arena.alloc(mockData);

			activePointers.set(nextId++, { ptr, data: mockData });
		} else {
			const ids = Array.from(activePointers.keys());
			const randomId = ids[Math.floor(Math.random() * ids.length)];
			const { ptr } = activePointers.get(randomId)!;

			arena.free(ptr);
			activePointers.delete(randomId);
		}
	}

	console.log(`Fuzzing beendet. Aktive Records: ${activePointers.size}`);

	for (const [id, { ptr, data }] of activePointers) {
		const storedData = arena.read(ptr)!;

		if (Buffer.from(storedData).compare(data) !== 0) {
			console.log(id, ptr, data, storedData, data)
			throw new Error("Inhalt passt nicht!");
		}
	}

	let foundCount = 0;
	arena.collectActiveRecords((data, ptr, idx) => {
		foundCount++;
		// Optional: Prüfen ob dieser Pointer in unserer Map bekannt ist
		// (Vorsicht: BigInt Pointer Vergleich beachten)
	});

	if (foundCount !== activePointers.size) return false
	return true
};

export function FuzzDirectAlloc() {
	const arena = new Arena({ initialSize: 1024 * 1024 * 10 }); // 10MB Start
	const activePointers = new Map<number, { ptr: any, data: Uint8Array }>();
	let nextId = 0;

	for (let i = 0; i < 100000; i++) {
		const action = Math.random();

		if (action > 0.3 || activePointers.size === 0) {
			const size = Math.floor(Math.random() * 100) + 1;
			const mockData = new Uint8Array(size).fill(i % 255);
			const ptr = arena.directAlloc(mockData, 0, mockData.length);

			activePointers.set(nextId++, { ptr, data: mockData });
		} else {
			const ids = Array.from(activePointers.keys());
			const randomId = ids[Math.floor(Math.random() * ids.length)];
			const { ptr } = activePointers.get(randomId)!;

			arena.free(ptr);
			activePointers.delete(randomId);
		}
	}

	console.log(`Fuzzing beendet. Aktive Records: ${activePointers.size}`);

	for (const [id, { ptr, data }] of activePointers) {
		const storedData = arena.read(ptr)!;

		if (Buffer.from(storedData).compare(data) !== 0) {
			console.log(id, ptr, data, storedData, data)
			throw new Error("Inhalt passt nicht!");
		}
	}

	let foundCount = 0;
	arena.collectActiveRecords(() => {
		foundCount++;
	});

	if (foundCount !== activePointers.size) return false
	return true
};
