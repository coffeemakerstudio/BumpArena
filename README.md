# 🚀 BumpArena: High-Performance Memory Management for Bun/TS

[![npm version](https://img.shields.io/npm/v/bumparena.svg?style=flat-square)](https://www.npmjs.com/package/bumparena)
[![npm downloads](https://img.shields.io/npm/dw/bumparena?style=flat-square&color=blue)](https://www.npmjs.com/package/bumparena)
[![license](https://img.shields.io/npm/l/bumparena.svg?style=flat-square)](https://github.com/eugen252009/bumparena/blob/main/LICENSE)
[![Logic Test](https://github.com/eugen252009/BumpArena/actions/workflows/logic%20test.yml/badge.svg)](https://github.com/eugen252009/BumpArena/actions/workflows/logic%20test.yml)
[![GitHub stars](https://img.shields.io/github/stars/eugen252009/bumparena?style=flat-square&color=gold)](https://github.com/eugen252009/bumparena/stargazers)
[![types](https://img.shields.io/npm/types/bumparena?style=flat-square&color=blue)](https://www.npmjs.com/package/bumparena)
[![maintenance](https://img.shields.io/badge/maintained-yes-brightgreen.svg?style=flat-square)](https://github.com/eugen252009/bumparena/graphs/commit-activity)
[![GitHub discussions](https://img.shields.io/github/discussions/eugen252009/bumparena?style=flat-square&color=blueviolet)](https://github.com/eugen252009/bumparena/discussions)

BumpArena is a high-performance memory arena designed for JavaScript and TypeScript (optimized for Bun). It provides contiguous memory allocation, fast pointer-based access, and minimal Garbage Collection (GC) overhead—ideal for handling industrial-scale datasets and real-time telemetry.


---

## 📊 Performance Benchmark (10M Records)

Comparison of **BumpArena** against standard Array implementations when parsing, storing, restoring, and reprocessing 10 million records.
[Full Benchmark Details](https://github.com/eugen252009/BumpArena/blob/main/bench/bench.md)

| Metric | Naive Array | Standard Array | **BumpArena** | **BumpArena (TURBO)** |
| :--- | :--- | :--- | :--- | :--- |
| **Total Time** | 2.99s | 6.21s | 5.35s | **4.02s** |
| **Throughput** | 3.3M lines/s | 1.6M lines/s | 1.8M lines/s | **2.4M lines/s** |
| **RSS (Memory)** | 1.75 GB | 1.73 GB | 2.25 GB | **1.39 GB** |
| **Heap Usage** | 0.63 GB | 0.69 GB | 0.64 GB | **0.60 GB** |

---

## 🚀 Performance Analysis: Engine-Bound, Not Logic-Bound

Profiling reveals a critical architectural insight: **BumpArena is so efficient that the primary bottleneck is no longer the library's logic, but the JavaScript engine's native data handling.**

### Where the time is spent:
* **Arena Logic Overhead (< 7%):** Internal management (allocation, header checks, pointer tracking) is near-instant.
* **Native Engine Overhead (> 34%):** The majority of execution time is consumed by native operations: `BigInt` casting, `Buffer` allocations, and `UTF-8` decoding.

### What this means for you:
BumpArena is **Runtime-Bound** (or "Type-Conversion-Bound"). Because the logic overhead is negligible, the library does not create a "performance ceiling." Performance scales **linearly with your hardware**:
* **CPU Single-Core Clock:** Speeds up BigInt/String conversions.
* **Higher Memory Bandwidth:** Accelerates raw Buffer operations.
* **Zero GC Pressure:** Unlike native Arrays, BumpArena doesn't slow down as your data grows.

> **Technical Note:** While the term "IO-Bound" is often used for disk access, in this context it refers to the **JS-to-Binary bridge**. BumpArena hits the limits of the runtime's conversion speed, staying out of the way of your silicon.

---

## 📊 Understanding the Benchmark

To push **BumpArena** to its limits, the benchmark simulates a high-throughput pipeline processing **10 million records**.

### 1. Data Ingestion (The "Engine-Bound" Phase)
Ingesting massive amounts of data involves expensive string parsing and type conversion. Here, the JS engine hits its limits (JS-to-Binary Bridge) while the Arena logic is already waiting for the data.

### 2. Allocation Strategy: Arena vs. Native

While native Arrays must constantly resize and trigger the Garbage Collector (GC), BumpArena uses a **single-instruction pointer operation**. No resizing, no fragmentation.

### 3. Persistence & Recovery
* **Persistence:** We perform a **Direct Buffer Dump**. The raw binary memory is written 1:1 to the SSD—as fast as your hardware allows.
* **Recovery:** Restoring 50M records typically takes **< 100ms**. We don't "parse" anything; we memory-map the buffer back into memory. The data is ready to use instantly.

---

## 🎯 Case Studies: When to use BumpArena?

### ☁️ When RAM = Money (Cloud & VPS)
In the cloud, you pay for provisioned RAM. 
* **Problem:** 20M+ records in standard Arrays often force an upgrade to more expensive instances (e.g., 16GB instead of 4GB) to avoid `Out of Memory` errors.
* **Solution:** **BumpArena (TURBO)** handles the same 20M records using only **1.39 GB RSS**. You stay on the cheaper tier.

### ⚡ When Garbage Collection (GC) kills Real-Time
Native JS Arrays cause massive "Stop-the-World" pauses.
* **Use Case:** Trading bots, game servers, or high-frequency telemetry.
* **Advantage:** Since data lives in a pre-allocated buffer, the GC doesn't have to scan millions of small objects, eliminating random micro-lags.

### 💾 When Startup Time is Critical
JSON or CSV parsing takes seconds every time your app restarts.
* **Advantage:** Load a binary image of your data via `readFileSync` and use it **instantly** (Zero-Copy). This is the "Instant-On" principle for data persistence.

---

## 🛠 Features & Spec

- **Zero-Copy:** Cast binary data directly to structures (TS, C++, Rust, Go).
- **Stale Pointer Protection:** Generation field prevents access to invalid pointers.
- **Alignment:** 16-byte boundaries optimized for modern CPU architectures.
- **Mmap-Compatible:** Memory-map blocks for shared access across processes.

### Binary Header Specification (16-Byte Packed)

| Offset | Field | Type | Description |
| :--- | :--- | :--- | :--- |
| `0x00` | `total_length` | `uint32` | Header + Payload + Alignment Padding |
| `0x04` | `payload_length` | `uint32` | Exact size of user data |
| `0x08` | `generation` | `uint32` | Validation counter (prevents ABA issues) |
| `0x0C` | `status` | `uint8` | Status flag (`0x00`=Ready, `0x01`=Deleted) |
| `0x0D` | `magic` | `uint8[2]` | Magic Bytes `0xDB 0xDB` |
| `0x0F` | `version` | `uint8` | Protocol Version `0x01` |
| `0x10` | **Payload** | `u8[]` | User data starts here |

---

## 🚫 When NOT to use it
* **Small Datasets:** For < 100,000 items, standard V8/JSC optimization is usually "good enough."
* **High Volatility:** If your data structure changes constantly or you need frequent random inserts/deletes, a classic collection might be more flexible.

---

## 🏗️ Built with BumpArena?

Are you using **BumpArena** in your project? Whether you are building a high-frequency trading bot, a custom database engine, or a real-time game server—I’d love to hear about it!

* **Showcase your work:** Open a [Discussion](https://github.com/eugen252009/bumparena/discussions) or an [Issue](https://github.com/eugen252009/bumparena/issues) with a short description of your project.
* **Get Featured:** I will feature interesting use cases right here in the README with a link to your repository or website.

It’s a great way to show the community what’s possible when you move past standard JavaScript memory limits.

---

## License

MIT @ Coffee Maker Studio

*„Part of the Coffee Maker Studio ecosystem. Built for performance, licensed for everyone.“*
