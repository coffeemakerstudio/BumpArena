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

## Binary Header Specification

BumpArena uses a fixed 16-byte packed header. Alignment is applied to the entire block, ensuring that every new Header starts at a memory address divisible by your chosen alignment (e.g., 8, 16, 32 bytes).

### Memory Layout & Alignment

The total_length field does not just represent the sum of the header and data; it includes the padding required to align the next block in the Arena.

| Offset (Byte) | Field | Type | Description |
| :--- | :--- | :--- | :--- |
| `0x00` | `total_length` | `uint32` | Header + Payload + Alignment Padding |
| `0x04` | `payload_length` | `uint32` | Exact size of the user data |
| `0x08` | `generation` | `uint32` | Validation counter (prevents ABA/stale pointer issues) |
| `0x0C` | `deleted` | `uint8` | Status flag (`0x01` = deleted, `0x00` = active) |
| `0x0D` | `user_header0` | `uint8` | Custom metadata slot 1 |
| `0x0E` | `user_header1` | `uint8` | Custom metadata slot 2 |
| `0x0F` | `user_header2` | `uint8` | Custom metadata slot 3 |
| `0x10` | **Payload** | `u8[]` | User data starts here (Fixed Offset) |
| `...` | **Padding** | `u8[N]` | Internal padding to align the next Block |

### Implementation Examples

Typescript

```ts
// Example: How BumpArena maps the header internally
const view = new DataView(arena.getBuffer().buffer);
const ptr = 0x1234; // Current allocation pointer

const header = {
    totalLength:   view.getUint32(ptr + 0,  true), // Little-endian
    payloadLength: view.getUint32(ptr + 4,  true),
    generation:    view.getUint32(ptr + 8,  true),
    deleted:       view.getUint8(ptr + 12),
    userHeader:    new Uint8Array(arena.getBuffer().buffer, ptr + 13, 3)
};

// The actual payload starts at ptr + 16
const payload = new Uint8Array(arena.getBuffer().buffer, ptr + 16, header.payloadLength);
```

C/++

```c
typedef struct __attribute__((packed)) {
  uint32_t total_length; // Jump to next header: current_ptr + total_length
  uint32_t payload_length;
  uint32_t generation;
  uint8_t deleted;
  uint8_t user_header0;
  uint8_t user_header1;
  uint8_t user_header2;uint8_t  payload[];      // Data starts at offset 16 (0x10)
} ArenaData;
```

Rust

```rust
#[repr(C, packed)]
pub struct ArenaData {
    pub total_length: u32, // Jump to next header: current_ptr + total_length
    pub payload_length: u32,
    pub generation: u32,
    pub deleted: u8,
    pub user_header0: u8,
    pub user_header1: u8,
    pub user_header2: u8,
    // Payload follows immediately at offset 16
}
```

go

```go
type ArenaData struct {
	TotalLength   uint32  // Jump to next header: current_ptr + total_length
	PayloadLength uint32  // the length of the Payload itself
	Generation    uint32  // The Generation bits
	Deleted       uint8   // 0x1=true,0x0=false
	UserHeader   [3]uint8 // User Metadata
  // Payload follows immediately at offset 16
}
```

Key Advantages
Zero-Copy: Directly cast your binary data to these structures in any language.

Stale Pointer Protection: The generation field allows you to verify if a pointer still refers to the original data or if the memory has been reused.

Alignment: 16-byte boundaries are a "sweet spot" for modern hardware architectures,.

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
