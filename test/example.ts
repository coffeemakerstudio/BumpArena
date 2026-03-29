import { Arena } from "../arena";
import fs from "node:fs";


// 1. Initialize (e.g., 1GB Arena)
const arena = new Arena({ initialSize: 1024 * 1024 * 1024 });

// 2. Map data instantly (Zero-Copy)
const data = new Uint8Array([10, 20, 30, 40]);
const ptr = arena.alloc(data, 0, data.length);
// Create another Payload
const payload = new Uint8Array(20);
payload.forEach((_, id: number, arr: Uint8Array) => { arr[id] = id });
arena.alloc(payload, 0, payload.length)
arena.alloc(payload.reverse(), 0, payload.length)

// 3. Retrieve (O(1) access)
const _data_payload = arena.read(ptr);

// 4. Write it to Disk
fs.writeFileSync("database.bin", arena.getBuffer())

// 5. Reload (Zero Parsing Time)
// Simply load the bytes back into a new Arena buffer
const savedData = fs.readFileSync("database.bin");
const restoredArena = new Arena({ initialSize: 1024 * 1024 * 1024 }) // Structure is restored instantly
	.import(savedData.buffer);
// Clean the Mess up we did earlier
// fs.rmSync("database.bin")

// Free some Items 
restoredArena.free(ptr)


// your can even iterate over all items to not strain your PC
const r = restoredArena.records()
for (const i of r!) {
	console.log(i)
	//[Uint8Array(20)[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],103079215104n]
	//[Uint8Array(20)[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0],274877906944n]
}
const ptrdata = arena.inspect(ptr)
delete ptrdata.payload
console.table(ptrdata)
// ┌────────────────┬────────┐
// │                │ Values │
// ├────────────────┼────────┤
// │         offset │ 0      │
// │ generation_ptr │ 0      │
// │     generation │ 0      │
// │         isSafe │ true   │
// │    totalLength │ 24     │
// │  payloadLength │ 4      │
// │      isDeleted │ false  │
// │  UserMetaData0 │ 0      │
// │  UserMetaData1 │ 0      │
// │  UserMetaData2 │ 0      │
// └────────────────┴────────┘
//
//
