import { Arena } from "../arena";

export function TestIteratorAccess(): boolean {
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
	let i = 0;
	for (let buf: Uint8Array | undefined; buf = a.next(); i++) {
		if (!buf) throw new Error(`No Item at index ${i}`);

		const expected = testdata[i];
		if (buf.length !== expected!.length) throw new Error(`Payload length mismatch at item: ${i} got: ${buf.length} needed: ${expected.length}`);
		for (let j = 0; j < buf.length; j++) {
			if (buf[j] !== expected![j]) throw new Error(`Data mismatch at item ${i}:${j}`);
		}

	}
	return true;
}
