# BumpArena

**4x faster than standard arrays and uses only ~40% of the RAM!** 🚀💾

BumpArena is a high-performance memory arena for JavaScript and TypeScript. It provides contiguous memory allocation, fast pointer-based access, and minimal garbage collection overhead, making it ideal for handling large datasets efficiently.

---

## Features

- Contiguous memory buffer for fast allocations
- Pointer-based access with generation tracking
- Recycled buckets for efficient memory reuse
- Compact memory footprint
- Compatible with TypeScript and JavaScript

---

## Installation

```bash
npm install bumparena
```

or using Yarn:

```bash
yarn add bumparena
```

---

## Quick Start

```ts
import { Arena } from "bumparena";
import fs from "node:fs";

// 1. Initialize (e.g., 1GB Arena)
const arena = new Arena({ initalSize: 1024 * 1024 * 1024 });

// 2. Map data instantly (Zero-Copy)
const data = new Uint8Array([10, 20, 30, 40]);
const ptr = arena.alloc(data); 

// 3. Retrieve (O(1) access)
const view = arena.read(ptr);

// 4. Persistence "From Nothing"
// Save the entire memory state 1:1 as a binary image
fs.writeFileSync("database.bin", arena.getBuffer());

// 5. Reload (Zero Parsing Time)
// Simply load the bytes back into a new Arena buffer
const savedData = fs.readFileSync("database.bin");
const restoredArena = new Arena({ initalSize: savedData.byteLength });
restoredArena.putBytes(savedData); // Structure is restored instantly

//Clear your Arena, if you want a restart
arena.clear()
```

---

## Advanced Usage

- Direct allocation from existing buffers with `directAlloc()`
- Custom headers for allocations (`header0`, `header1`, `header2`)
- Iterate all allocations using `label()`
- Estimate memory usage with `estimate(size, amount)`

---
## Header

```c 
typedef struct __attribute__((packed)) {
  uint32_t total_length;
  uint32_t payload_length;
  uint32_t generation;
  uint8_t deleted;
  uint8_t user_header0;
  uint8_t user_header1;
  uint8_t user_header2;
} ArenaData;```

---

## Benchmarks

| Implementation | Time | Heap Used | Notes |
|-----------------------|------------|-----------|------------|
| BumpArena (Optimized) | 183,098 ms | 4.82 GB | 50M items |
| Standard Array | 765,961 ms | 11.22 GB | 50M items |

> ~4x faster and uses ~40% of the RAM compared to standard JavaScript arrays

---

## Compatibility

- Node.js ✅
- Bun ✅
- Browser (via compiled JS) ✅

---

## License

MIT © eugen252009
