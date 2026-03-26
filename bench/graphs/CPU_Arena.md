# CPU Profile

| Duration | Samples | Interval | Functions |
|----------|---------|----------|----------|
| 5.26s | 4629 | 1.0ms | 63 |

**Top 10:** `Buffer` 13.2%, `BigInt` 11.4%, `collectActiveRecords` 9.8%, `decode` 9.7%, `Uint8Array` 9.4%, `(anonymous)` 8.5%, `(anonymous)` 5.8%, `indexOf` 4.1%, `set` 3.4%, `async (anonymous)` 3.3%

## Hot Functions (Self Time)

| Self% | Self | Total% | Total | Function | Location |
|------:|-----:|-------:|------:|----------|----------|
| 13.2% | 696.9ms | 13.2% | 696.9ms | `Buffer` | `[native code]` |
| 11.4% | 601.5ms | 11.4% | 601.5ms | `BigInt` | `[native code]` |
| 9.8% | 517.1ms | 9.8% | 517.1ms | `collectActiveRecords` | `/home/eugen/projekte/jsarena/arena.ts:274` |
| 9.7% | 515.9ms | 9.7% | 515.9ms | `decode` | `[native code]` |
| 9.4% | 496.1ms | 9.4% | 496.1ms | `Uint8Array` | `[native code]` |
| 8.5% | 449.8ms | 8.5% | 449.8ms | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena.ts:65` |
| 5.8% | 307.1ms | 5.8% | 307.1ms | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena.ts:76` |
| 4.1% | 217.0ms | 4.1% | 217.0ms | `indexOf` | `[native code]` |
| 3.4% | 183.0ms | 3.4% | 183.0ms | `set` | `[native code]` |
| 3.3% | 174.1ms | 41.6% | 2.19s | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena.ts:53` |
| 2.8% | 148.0ms | 2.8% | 148.0ms | `get buffer` | `[native code]` |
| 2.5% | 133.1ms | 11.9% | 629.2ms | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts:308` |
| 2.5% | 132.9ms | 6.0% | 316.0ms | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts:332` |
| 2.1% | 111.1ms | 16.4% | 868.2ms | `collectActiveRecords` | `/home/eugen/projekte/jsarena/arena.ts:292` |
| 1.9% | 102.4ms | 17.0% | 895.6ms | `(anonymous)` | `[native code]` |
| 1.8% | 98.0ms | 2.1% | 114.0ms | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts:328` |
| 1.7% | 92.0ms | 5.8% | 309.1ms | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena.ts:46` |
| 1.2% | 65.2ms | 1.2% | 65.2ms | `BigInt64Array` | `[native code]` |
| 1.2% | 64.8ms | 2.4% | 129.7ms | `writeFileSync` | `[native code]` |
| 1.1% | 58.5ms | 2.2% | 117.0ms | `readFileSync` | `[native code]` |
| 0.8% | 44.3ms | 22.2% | 1.16s | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena.ts:54` |
| 0.3% | 16.0ms | 0.3% | 16.0ms | `get byteLength` | `[native code]` |
| 0.2% | 11.3ms | 1.2% | 65.4ms | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts:309` |
| 0.1% | 8.1ms | 9.9% | 524.1ms | `bytesToBigInt` | `/home/eugen/projekte/jsarena/bench/implementation_arena.ts:8` |
| 0.1% | 6.6ms | 0.1% | 6.6ms | `toLocaleString` | `[native code]` |
| 0.1% | 5.5ms | 0.5% | 26.9ms | `anonymous` | `[native code]` |
| 0.0% | 2.7ms | 0.1% | 9.5ms | `parseModule` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `uncurryThis` | `internal:primordials:20` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `trunc` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `fetch` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena.ts` |
| 0.0% | 1.0ms | 0.0% | 2.0ms | `unlinkSync` | `[native code]` |

## Call Tree (Total Time)

| Total% | Total | Self% | Self | Function | Location |
|-------:|------:|------:|-----:|----------|----------|
| 100.0% | 10.51s | 0.0% | 0us | `moduleEvaluation` | `[native code]` |
| 99.7% | 5.25s | 0.0% | 0us | `(module)` | `/home/eugen/projekte/jsarena/bench/implementation_arena.ts:97` |
| 99.7% | 5.25s | 0.0% | 0us | `async loadAndEvaluateModule` | `[native code]` |
| 99.7% | 5.25s | 0.0% | 0us | `evaluate` | `[native code]` |
| 41.6% | 2.19s | 3.3% | 174.1ms | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena.ts:53` |
| 22.2% | 1.16s | 0.8% | 44.3ms | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena.ts:54` |
| 17.0% | 895.6ms | 1.9% | 102.4ms | `(anonymous)` | `[native code]` |
| 16.9% | 894.4ms | 0.0% | 0us | `bytesToBigInt` | `/home/eugen/projekte/jsarena/bench/implementation_arena.ts:7` |
| 16.4% | 868.2ms | 2.1% | 111.1ms | `collectActiveRecords` | `/home/eugen/projekte/jsarena/arena.ts:292` |
| 13.3% | 704.0ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena.ts:76` |
| 13.2% | 696.9ms | 13.2% | 696.9ms | `Buffer` | `[native code]` |
| 12.9% | 681.3ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena.ts:65` |
| 11.9% | 629.2ms | 2.5% | 133.1ms | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts:308` |
| 11.4% | 601.5ms | 11.4% | 601.5ms | `BigInt` | `[native code]` |
| 9.9% | 524.1ms | 0.1% | 8.1ms | `bytesToBigInt` | `/home/eugen/projekte/jsarena/bench/implementation_arena.ts:8` |
| 9.8% | 517.1ms | 9.8% | 517.1ms | `collectActiveRecords` | `/home/eugen/projekte/jsarena/arena.ts:274` |
| 9.7% | 515.9ms | 9.7% | 515.9ms | `decode` | `[native code]` |
| 9.4% | 496.1ms | 9.4% | 496.1ms | `Uint8Array` | `[native code]` |
| 8.5% | 449.8ms | 8.5% | 449.8ms | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena.ts:65` |
| 6.0% | 316.0ms | 2.5% | 132.9ms | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts:332` |
| 5.8% | 309.1ms | 1.7% | 92.0ms | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena.ts:46` |
| 5.8% | 307.1ms | 5.8% | 307.1ms | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena.ts:76` |
| 4.1% | 217.0ms | 4.1% | 217.0ms | `indexOf` | `[native code]` |
| 3.4% | 183.0ms | 3.4% | 183.0ms | `set` | `[native code]` |
| 2.8% | 148.0ms | 2.8% | 148.0ms | `get buffer` | `[native code]` |
| 2.4% | 129.7ms | 1.2% | 64.8ms | `writeFileSync` | `[native code]` |
| 2.2% | 117.0ms | 1.1% | 58.5ms | `readFileSync` | `[native code]` |
| 2.1% | 114.0ms | 1.8% | 98.0ms | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts:328` |
| 1.2% | 65.4ms | 0.2% | 11.3ms | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts:309` |
| 1.2% | 65.2ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena.ts:40` |
| 1.2% | 65.2ms | 1.2% | 65.2ms | `BigInt64Array` | `[native code]` |
| 1.2% | 64.8ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena.ts:68` |
| 0.5% | 30.4ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena.ts:72` |
| 0.5% | 28.0ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena.ts:37` |
| 0.5% | 26.9ms | 0.1% | 5.5ms | `anonymous` | `[native code]` |
| 0.3% | 16.0ms | 0.3% | 16.0ms | `get byteLength` | `[native code]` |
| 0.2% | 11.8ms | 0.0% | 0us | `async (anonymous)` | `[native code]` |
| 0.1% | 9.5ms | 0.0% | 2.7ms | `parseModule` | `[native code]` |
| 0.1% | 6.6ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena.ts:82` |
| 0.1% | 6.6ms | 0.1% | 6.6ms | `toLocaleString` | `[native code]` |
| 0.0% | 4.5ms | 0.0% | 0us | `get ReadStream` | `node:fs:577` |
| 0.0% | 3.4ms | 0.0% | 0us | `node:stream` | `node:stream:2` |
| 0.0% | 3.4ms | 0.0% | 0us | `internal:stream` | `internal:stream:2` |
| 0.0% | 3.4ms | 0.0% | 0us | `internal:fs/streams` | `internal:fs/streams:2` |
| 0.0% | 2.4ms | 0.0% | 0us | `internal:streams/operators` | `internal:streams/operators:2` |
| 0.0% | 2.2ms | 0.0% | 0us | `node:fs` | `node:fs:2` |
| 0.0% | 2.0ms | 0.0% | 1.0ms | `unlinkSync` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `internal:streams/compose` | `internal:streams/compose:2` |
| 0.0% | 1.2ms | 0.0% | 0us | `internal:streams/pipeline` | `internal:streams/pipeline:2` |
| 0.0% | 1.2ms | 0.0% | 0us | `internal:streams/duplex` | `internal:streams/duplex:2` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `uncurryThis` | `internal:primordials:20` |
| 0.0% | 1.2ms | 0.0% | 0us | `internal:validators` | `internal:validators:2` |
| 0.0% | 1.2ms | 0.0% | 0us | `internal:primordials` | `internal:primordials:50` |
| 0.0% | 1.2ms | 0.0% | 0us | `internal:shared` | `internal:shared:2` |
| 0.0% | 1.2ms | 0.0% | 0us | `node:events` | `node:events:9` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `trunc` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `adjustOffset` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `requestSatisfyUtil` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `fetch` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `requestInstantiate` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `requestFetch` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena.ts` |
| 0.0% | 1.0ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena.ts:32` |

## Function Details

### `Buffer`
`[native code]` | Self: 13.2% (696.9ms) | Total: 13.2% (696.9ms) | Samples: 647

**Called by:**
- `(anonymous)` (647)

### `BigInt`
`[native code]` | Self: 11.4% (601.5ms) | Total: 11.4% (601.5ms) | Samples: 560

**Called by:**
- `async (anonymous)` (560)

### `collectActiveRecords`
`/home/eugen/projekte/jsarena/arena.ts:274` | Self: 9.8% (517.1ms) | Total: 9.8% (517.1ms) | Samples: 484

**Called by:**
- `async (anonymous)` (269)
- `async (anonymous)` (215)

### `decode`
`[native code]` | Self: 9.7% (515.9ms) | Total: 9.7% (515.9ms) | Samples: 481

**Called by:**
- `bytesToBigInt` (481)

### `Uint8Array`
`[native code]` | Self: 9.4% (496.1ms) | Total: 9.4% (496.1ms) | Samples: 463

**Called by:**
- `allocNoPtr` (463)

### `(anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena.ts:65` | Self: 8.5% (449.8ms) | Total: 8.5% (449.8ms) | Samples: 418

**Called by:**
- `collectActiveRecords` (418)

### `(anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena.ts:76` | Self: 5.8% (307.1ms) | Total: 5.8% (307.1ms) | Samples: 286

**Called by:**
- `collectActiveRecords` (286)

### `indexOf`
`[native code]` | Self: 4.1% (217.0ms) | Total: 4.1% (217.0ms) | Samples: 201

**Called by:**
- `async (anonymous)` (201)

### `set`
`[native code]` | Self: 3.4% (183.0ms) | Total: 3.4% (183.0ms) | Samples: 172

**Called by:**
- `allocNoPtr` (172)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena.ts:53` | Self: 3.3% (174.1ms) | Total: 41.6% (2.19s) | Samples: 161

**Called by:**
- `(module)` (2040)

**Calls:**
- `bytesToBigInt` (830)
- `BigInt` (560)
- `bytesToBigInt` (489)

### `get buffer`
`[native code]` | Self: 2.8% (148.0ms) | Total: 2.8% (148.0ms) | Samples: 137

**Called by:**
- `(anonymous)` (87)
- `allocNoPtr` (50)

### `allocNoPtr`
`/home/eugen/projekte/jsarena/arena.ts:308` | Self: 2.5% (133.1ms) | Total: 11.9% (629.2ms) | Samples: 124

**Called by:**
- `async (anonymous)` (587)

**Calls:**
- `Uint8Array` (463)

### `allocNoPtr`
`/home/eugen/projekte/jsarena/arena.ts:332` | Self: 2.5% (132.9ms) | Total: 6.0% (316.0ms) | Samples: 122

**Called by:**
- `async (anonymous)` (294)

**Calls:**
- `set` (172)

### `collectActiveRecords`
`/home/eugen/projekte/jsarena/arena.ts:292` | Self: 2.1% (111.1ms) | Total: 16.4% (868.2ms) | Samples: 2

**Called by:**
- `async (anonymous)` (419)
- `async (anonymous)` (287)

**Calls:**
- `(anonymous)` (418)
- `(anonymous)` (286)

### `(anonymous)`
`[native code]` | Self: 1.9% (102.4ms) | Total: 17.0% (895.6ms) | Samples: 95

**Called by:**
- `bytesToBigInt` (830)

**Calls:**
- `Buffer` (647)
- `get buffer` (87)
- `requestSatisfyUtil` (1)
- `adjustOffset` (1)

### `allocNoPtr`
`/home/eugen/projekte/jsarena/arena.ts:328` | Self: 1.8% (98.0ms) | Total: 2.1% (114.0ms) | Samples: 92

**Called by:**
- `async (anonymous)` (107)

**Calls:**
- `get byteLength` (15)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena.ts:46` | Self: 1.7% (92.0ms) | Total: 5.8% (309.1ms) | Samples: 86

**Called by:**
- `(module)` (287)

**Calls:**
- `indexOf` (201)

### `BigInt64Array`
`[native code]` | Self: 1.2% (65.2ms) | Total: 1.2% (65.2ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `writeFileSync`
`[native code]` | Self: 1.2% (64.8ms) | Total: 2.4% (129.7ms) | Samples: 2

**Called by:**
- `async (anonymous)` (2)
- `writeFileSync` (2)

**Calls:**
- `writeFileSync` (2)

### `readFileSync`
`[native code]` | Self: 1.1% (58.5ms) | Total: 2.2% (117.0ms) | Samples: 2

**Called by:**
- `readFileSync` (2)
- `async (anonymous)` (1)
- `async (anonymous)` (1)

**Calls:**
- `readFileSync` (2)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena.ts:54` | Self: 0.8% (44.3ms) | Total: 22.2% (1.16s) | Samples: 41

**Called by:**
- `(module)` (1090)

**Calls:**
- `allocNoPtr` (587)
- `allocNoPtr` (294)
- `allocNoPtr` (107)
- `allocNoPtr` (61)

### `get byteLength`
`[native code]` | Self: 0.3% (16.0ms) | Total: 0.3% (16.0ms) | Samples: 15

**Called by:**
- `allocNoPtr` (15)

### `allocNoPtr`
`/home/eugen/projekte/jsarena/arena.ts:309` | Self: 0.2% (11.3ms) | Total: 1.2% (65.4ms) | Samples: 11

**Called by:**
- `async (anonymous)` (61)

**Calls:**
- `get buffer` (50)

### `bytesToBigInt`
`/home/eugen/projekte/jsarena/bench/implementation_arena.ts:8` | Self: 0.1% (8.1ms) | Total: 9.9% (524.1ms) | Samples: 8

**Called by:**
- `async (anonymous)` (489)

**Calls:**
- `decode` (481)

### `toLocaleString`
`[native code]` | Self: 0.1% (6.6ms) | Total: 0.1% (6.6ms) | Samples: 6

**Called by:**
- `async (anonymous)` (6)

### `anonymous`
`[native code]` | Self: 0.1% (5.5ms) | Total: 0.5% (26.9ms) | Samples: 5

**Called by:**
- `get ReadStream` (4)
- `node:stream` (3)
- `internal:stream` (3)
- `internal:fs/streams` (3)
- `node:fs` (2)
- `internal:streams/operators` (2)
- `internal:shared` (1)
- `internal:streams/duplex` (1)
- `internal:streams/compose` (1)
- `internal:validators` (1)
- `internal:streams/pipeline` (1)
- `node:events` (1)

**Calls:**
- `node:stream` (3)
- `internal:stream` (3)
- `internal:fs/streams` (3)
- `internal:streams/operators` (2)
- `internal:streams/duplex` (1)
- `internal:primordials` (1)
- `internal:shared` (1)
- `internal:streams/compose` (1)
- `internal:validators` (1)
- `internal:streams/pipeline` (1)
- `node:events` (1)

### `parseModule`
`[native code]` | Self: 0.0% (2.7ms) | Total: 0.1% (9.5ms) | Samples: 2

**Called by:**
- `async (anonymous)` (8)

**Calls:**
- `get ReadStream` (4)
- `node:fs` (2)

### `uncurryThis`
`internal:primordials:20` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `internal:primordials` (1)

### `trunc`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `adjustOffset` (1)

### `fetch`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `requestFetch` (1)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena.ts` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `(module)` (1)

### `unlinkSync`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (2.0ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)
- `unlinkSync` (1)

**Calls:**
- `unlinkSync` (1)

### `async (anonymous)`
`[native code]` | Self: 0.0% (0us) | Total: 0.2% (11.8ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)
- `requestInstantiate` (1)

**Calls:**
- `parseModule` (8)
- `requestFetch` (1)
- `async (anonymous)` (1)

### `internal:streams/operators`
`internal:streams/operators:2` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `anonymous` (2)

### `async loadAndEvaluateModule`
`[native code]` | Self: 0.0% (0us) | Total: 99.7% (5.25s) | Samples: 0

**Calls:**
- `moduleEvaluation` (4620)

### `evaluate`
`[native code]` | Self: 0.0% (0us) | Total: 99.7% (5.25s) | Samples: 0

**Called by:**
- `moduleEvaluation` (4620)

**Calls:**
- `(module)` (4620)

### `internal:stream`
`internal:stream:2` | Self: 0.0% (0us) | Total: 0.0% (3.4ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `anonymous` (3)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena.ts:37` | Self: 0.0% (0us) | Total: 0.5% (28.0ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `readFileSync` (1)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena.ts:82` | Self: 0.0% (0us) | Total: 0.1% (6.6ms) | Samples: 0

**Called by:**
- `(module)` (6)

**Calls:**
- `toLocaleString` (6)

### `internal:streams/duplex`
`internal:streams/duplex:2` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena.ts:76` | Self: 0.0% (0us) | Total: 13.3% (704.0ms) | Samples: 0

**Called by:**
- `(module)` (556)

**Calls:**
- `collectActiveRecords` (287)
- `collectActiveRecords` (269)

### `internal:primordials`
`internal:primordials:50` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `uncurryThis` (1)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena.ts:65` | Self: 0.0% (0us) | Total: 12.9% (681.3ms) | Samples: 0

**Called by:**
- `(module)` (634)

**Calls:**
- `collectActiveRecords` (419)
- `collectActiveRecords` (215)

### `internal:validators`
`internal:validators:2` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `requestInstantiate`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `requestSatisfyUtil` (1)

**Calls:**
- `async (anonymous)` (1)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena.ts:68` | Self: 0.0% (0us) | Total: 1.2% (64.8ms) | Samples: 0

**Called by:**
- `(module)` (2)

**Calls:**
- `writeFileSync` (2)

### `requestSatisfyUtil`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `requestInstantiate` (1)

### `(module)`
`/home/eugen/projekte/jsarena/bench/implementation_arena.ts:97` | Self: 0.0% (0us) | Total: 99.7% (5.25s) | Samples: 0

**Called by:**
- `evaluate` (4620)

**Calls:**
- `async (anonymous)` (2040)
- `async (anonymous)` (1090)
- `async (anonymous)` (634)
- `async (anonymous)` (556)
- `async (anonymous)` (287)
- `async (anonymous)` (6)
- `async (anonymous)` (2)
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `async (anonymous)` (1)

### `adjustOffset`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `trunc` (1)

### `moduleEvaluation`
`[native code]` | Self: 0.0% (0us) | Total: 100.0% (10.51s) | Samples: 0

**Called by:**
- `moduleEvaluation` (4620)
- `async loadAndEvaluateModule` (4620)

**Calls:**
- `moduleEvaluation` (4620)
- `evaluate` (4620)

### `bytesToBigInt`
`/home/eugen/projekte/jsarena/bench/implementation_arena.ts:7` | Self: 0.0% (0us) | Total: 16.9% (894.4ms) | Samples: 0

**Called by:**
- `async (anonymous)` (830)

**Calls:**
- `(anonymous)` (830)

### `internal:streams/compose`
`internal:streams/compose:2` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `node:fs`
`node:fs:2` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `parseModule` (2)

**Calls:**
- `anonymous` (2)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena.ts:72` | Self: 0.0% (0us) | Total: 0.5% (30.4ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `readFileSync` (1)

### `internal:shared`
`internal:shared:2` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `node:stream`
`node:stream:2` | Self: 0.0% (0us) | Total: 0.0% (3.4ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `anonymous` (3)

### `internal:fs/streams`
`internal:fs/streams:2` | Self: 0.0% (0us) | Total: 0.0% (3.4ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `anonymous` (3)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena.ts:40` | Self: 0.0% (0us) | Total: 1.2% (65.2ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `BigInt64Array` (1)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena.ts:32` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `unlinkSync` (1)

### `internal:streams/pipeline`
`internal:streams/pipeline:2` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `node:events`
`node:events:9` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `requestFetch`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `fetch` (1)

### `get ReadStream`
`node:fs:577` | Self: 0.0% (0us) | Total: 0.0% (4.5ms) | Samples: 0

**Called by:**
- `parseModule` (4)

**Calls:**
- `anonymous` (4)

## Files

| Self% | Self | File |
|------:|-----:|------|
| 60.4% | 3.18s | `[native code]` |
| 20.4% | 1.07s | `/home/eugen/projekte/jsarena/bench/implementation_arena.ts` |
| 19.0% | 1.00s | `/home/eugen/projekte/jsarena/arena.ts` |
| 0.0% | 1.2ms | `internal:primordials` |
