export function FastParseVariableBigUint(uint8: Uint8Array): bigint {
	let num = 0n;
	const len = uint8.length;

	for (let i = 0; i < len; i++) {
		num = (num << 3n) + (num << 1n) + BigInt(uint8[i]! - 48);
	}
	return num;
}
