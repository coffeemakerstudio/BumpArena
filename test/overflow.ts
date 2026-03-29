import { Arena, HEADERS } from "../arena.ts";


export function nearoverflow() {
	const arena = new Arena({ initialSize: 2 ** 32, bucketCapacities: [] })

	const arrbuf = new ArrayBuffer(2 ** 16 - HEADERS.Total_Size_In_Bytes)
	const arr = new Float64Array(arrbuf)

	for (let i = 0; i < arr.length; i++) arr[i] = i

	arena.allocNoPtr(arr)
	arena.allocNoPtr(arr)

	arena.collectActiveRecords("Float64Array", (data) => {
		for (let i = 0; i < data.length; i++)
			if (arr[i] !== data[i]) throw new Error(`overflow at index: ${i} detected! got: ${data[i]} needed: ${arr[i]}`)

	})
	return true
}

export function nearoverflow2() {
	const arena = new Arena({ initialSize: 2 ** 32, bucketCapacities: [] })

	const arrbuf = new ArrayBuffer(2 ** 16 - HEADERS.Total_Size_In_Bytes)
	const arr = new Float64Array(arrbuf)

	for (let i = 0; i < arr.length; i++) arr[i] = i
	arena.alloc(arr)
	arena.alloc(arr)
	arena.collectActiveRecords("Float64Array", (data) => {
		for (let i = 0; i < data.length; i++) {
			if (arr[i] !== data[i])
				throw new Error(`overflow at index:${i} got: ${data[i]} needed: ${arr[i]}`)
		}
	})
	return true
}

export function nearoverflow3() {
	const arena = new Arena({ initialSize: 2 ** 32, bucketCapacities: [] })

	const arrbuf = new ArrayBuffer(2 ** 16 - HEADERS.Total_Size_In_Bytes)
	const arr = new Float64Array(arrbuf)

	for (let i = 0; i < arr.length; i++) arr[i] = i

	const buf = arena.reserve(arr.byteLength)
	buf.set(arr)
	const buf2 = arena.reserve(arr.byteLength)
	buf2.set(arr)
	arena.collectActiveRecords("Float64Array", (data) => {
		for (let i = 0; i < data.length; i++) {
			if (arr[i] !== data[i])
				throw new Error(`overflow at index:${i} got: ${data[i]} needed: ${arr[i]}`)
		}
	})
	return true
}

export function nearoverflow4() {
	const arena = new Arena({ initialSize: 2 ** 32, bucketCapacities: [] })

	const arrbuf = new ArrayBuffer(2 ** 16 - HEADERS.Total_Size_In_Bytes)
	const arr = new Float64Array(arrbuf)

	for (let i = 0; i < arr.length; i++) {
		arr[i] = i
		arena.allocNoPtr(arr, i, 1)
		arena.allocNoPtr(arr, i, 1)
	}


	arena.collectActiveRecords("Float64Array", (data) => {
		for (let i = 0; i < data.length; i++) {
			if (arr[i] !== data[i])
				throw new Error(`overflow at index:${i} got: ${data[i]} needed: ${arr[i]}`)
		}
	})
	return true
}
