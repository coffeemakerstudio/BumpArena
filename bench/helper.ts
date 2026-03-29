export const MAX_SAFE = 9007199254740991;
export function fastParseNumber(uint8: Uint8Array, offset: number, len: number, output: Float64Array, writingid: number) {

	let num = 0;
	for (let i = offset; i < len; i++) {
		const digit = uint8[i]! - 48;
		num = num * 10 + digit;
		if (num > (MAX_SAFE - digit) / 10)
			throw new Error("BumpArena: Numeric overflow - value exceeds MAX_SAFE_INTEGER. Use BigInt for this dataset.");
	}
	output[writingid] = num
}

{// Small test for the fastParseNumber() function
	const arr = new ArrayBuffer(8 + 13)
	const test = new Float64Array(arr, 0, 1)
	const res1 = new Uint8Array(arr, 8, 13)
	"3751496622663".split("").forEach((x, id) => res1[id] = x.charCodeAt(0))
	fastParseNumber(res1, 0, res1.length, test, 0)
	console.log("Parsing test is: ", test[0] == 3751496622663)
}
