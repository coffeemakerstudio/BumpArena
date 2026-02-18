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

// Create a new arena with default settings
const arena = new Arena();

// Allocate some data
const data = new Uint8Array([1, 2, 3, 4, 5]);
const ptr = arena.alloc(data);

// Read the data back
const readData = arena.read(ptr);
console.log(readData); // Uint8Array [1,2,3,4,5]

// Free the allocation
arena.free(ptr);

// Reserve a block for manual writes
const reserved = arena.reserve(10);
reserved.set(new Uint8Array([10, 20, 30]));
console.log(reserved);
```

---

## Advanced Usage

- Direct allocation from existing buffers with `directAlloc()`
- Custom headers for allocations (`header0`, `header1`, `header2`)
- Iterate all allocations using `label()`
- Estimate memory usage with `estimate(size, amount)`

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
