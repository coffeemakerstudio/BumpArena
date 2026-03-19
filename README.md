# 🚀 BumpArena: High-Performance Memory Management for Bun/TS

[![npm version](https://img.shields.io/npm/v/bumparena.svg?style=flat-square)](https://www.npmjs.com/package/bumparena)
[![license](https://img.shields.io/npm/l/bumparena.svg?style=flat-square)](https://github.com/dein-nutzername/bumparena/blob/main/LICENSE)

**4.2x faster than standard arrays while using ~60% less RAM!** 💾⚡

BumpArena is a high-performance memory arena designed for JavaScript and TypeScript (optimized for Bun). It provides contiguous memory allocation, fast pointer-based access, and minimal Garbage Collection (GC) overhead, making it the ideal choice for handling industrial-scale datasets and real-time telemetry.

---

## 📊 Performance Benchmark (50M Objects)

I compared the **BumpArena** implementation against a standard **Array-based** approach by processing a dataset of 50 million records.

| Metric | Standard Array | **BumpArena** | Improvement |
| :--- | :--- | :--- | :--- |
| **Total Time** | 765.9s (12.7 min) | **183.1s (3.05 min)** | **4.2x Faster** 🚀 |
| **Throughput** | ~652k lines/s | **~2.73M lines/s** | **+318% Speed** |
| **RAM Usage (RSS)** | 28.04 GB | **11.24 GB** | **16.8 GB Saved** 📉 |
| **Heap Efficiency** | 11.22 GB | **4.82 GB** | **2.3x Lower Usage** |

### 🛠 Why it's faster:
* **Zero GC Pressure:** By using a pre-allocated buffer, we bypass the costly JavaScript Garbage Collector.
* **Cache Locality:** Contiguous memory layout ensures the CPU stays fast and avoids cache misses.
* **Industrial Scale:** Designed to handle 50M+ data points without breaking the heap.

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

To ensure cross-language compatibility, the Arena uses a packed binary header. This allows C/C++, Rust, or Zig to map the memory-dump directly without translation.

```c 
typedef struct __attribute__((packed)) {
  uint32_t total_length;
  uint32_t payload_length;
  uint32_t generation;
  uint8_t deleted;
  uint8_t user_header0;
  uint8_t user_header1;
  uint8_t user_header2;
} ArenaData;

```

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
