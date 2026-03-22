import { Arena } from "../arena"


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

	const seen = new Set<number>();
	a.collectActiveRecords((data, ptr, idx) => {
		const { offset: start } = a.inspect(ptr!);

		if (seen.has(start)) throw new Error(`Overlap detected at item ${idx}`);
		seen.add(start);

		const alignMask = 7;
		if ((start & alignMask) !== 0) throw new Error(`Alignment error at item ${idx}`);

		const expected = testdata[idx];
		if (data.length !== expected!.length) throw new Error(`Payload length mismatch at item ${idx}`);
		for (let j = 0; j < data.length; j++) {
			if (data[j] !== expected![j]) throw new Error(`Data mismatch at item ${idx}:${j}`);
		}
	});

	return true;
}

