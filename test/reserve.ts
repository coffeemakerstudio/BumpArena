import { Arena } from "../arena.ts"


export function TestCheckReserve(): boolean {
	const count = 1_000;
	const a = new Arena();
	const testdata: Uint8Array[] = [];
	const offsets: number[] = [];

	for (let i = 0; i < count; i++) {
		const length = i % 20;
		const data = new Uint8Array(length);
		for (let j = 0; j < length; j++) data[j] = (i + j) & 0xFF;
		testdata.push(data);

		const buf = a.reserve(length);

		if (buf.length !== length) throw new Error(`Buffer length mismatch at ${i}`);

		buf.set(data);

		offsets.push((a.getBuffer().subarray(0, buf.byteLength)).byteOffset);
	}

	const ptrs = a.collectActiveRecords();

	if (ptrs.length !== count) throw new Error(`Label count mismatch: ${ptrs.length} != ${count}`);

	const seen = new Set<number>();
	for (let i = 0; i < ptrs.length; i++) {
		const buf = a.read(ptrs[i]!);
		if (!buf) throw new Error(`Reservation failed at item ${i}`);

		const { offset: start } = a.inspect(ptrs[i]!);

		if (seen.has(start)) throw new Error(`Overlap detected at item ${i}`);
		seen.add(start);

		//Check Alignment
		const alignMask = 7;
		if ((start & alignMask) !== 0) throw new Error(`Alignment error at item ${i}`);

		const expected = testdata[i];
		if (buf.length !== expected!.length) throw new Error(`Payload length mismatch at item ${i}`);
		for (let j = 0; j < buf.length; j++) {
			if (buf[j] !== expected![j]) throw new Error(`Data mismatch at item ${i}:${j}`);
		}
	}

	return true;
}

