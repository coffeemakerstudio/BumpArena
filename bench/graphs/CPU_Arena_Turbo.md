# CPU Profile

| Duration | Samples | Interval | Functions |
|----------|---------|----------|----------|
| 3.28s | 2784 | 1.0ms | 54 |

**Top 10:** `subarray` 43.0%, `Uint8Array` 16.2%, `async (anonymous)` 11.8%, `collectActiveRecords` 7.4%, `set` 5.8%, `_initBlock` 4.9%, `allocNoPtr` 4.1%, `allocNoPtr` 2.2%, `get byteLength` 1.3%, `get buffer` 0.9%

## Hot Functions (Self Time)

| Self% | Self | Total% | Total | Function | Location |
|------:|-----:|-------:|------:|----------|----------|
| 43.0% | 1.41s | 43.0% | 1.41s | `subarray` | `[native code]` |
| 16.2% | 532.1ms | 16.2% | 532.1ms | `Uint8Array` | `[native code]` |
| 11.8% | 389.5ms | 48.1% | 1.58s | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:36` |
| 7.4% | 245.0ms | 30.5% | 1.00s | `collectActiveRecords` | `/home/eugen/projekte/jsarena/arena.ts:283` |
| 5.8% | 193.0ms | 5.8% | 193.0ms | `set` | `[native code]` |
| 4.9% | 161.9ms | 4.9% | 161.9ms | `_initBlock` | `/home/eugen/projekte/jsarena/arena.ts` |
| 4.1% | 137.8ms | 10.1% | 331.8ms | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts:332` |
| 2.2% | 75.0ms | 18.4% | 607.1ms | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts:308` |
| 1.3% | 42.9ms | 1.3% | 42.9ms | `get byteLength` | `[native code]` |
| 0.9% | 30.9ms | 0.9% | 30.9ms | `get buffer` | `[native code]` |
| 0.4% | 15.3ms | 20.4% | 670.7ms | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:33` |
| 0.2% | 7.2ms | 1.5% | 50.1ms | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts:328` |
| 0.2% | 7.1ms | 0.2% | 7.1ms | `toLocaleString` | `[native code]` |
| 0.1% | 5.4ms | 0.8% | 28.5ms | `anonymous` | `[native code]` |
| 0.1% | 4.6ms | 0.3% | 11.0ms | `parseModule` | `[native code]` |
| 0.1% | 4.3ms | 1.0% | 35.2ms | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts:309` |
| 0.1% | 4.2ms | 5.0% | 166.2ms | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts:331` |
| 0.0% | 3.1ms | 0.1% | 5.2ms | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:50` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `fastParseInt` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:9` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `subarray` | `/home/eugen/projekte/jsarena/arena.ts:332` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `fastParseInt` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts` |
| 0.0% | 1.0ms | 0.0% | 3.1ms | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:37` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:32` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `set` | `/home/eugen/projekte/jsarena/arena.ts` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `write` | `[native code]` |
| 0.0% | 943us | 0.0% | 943us | `forEach` | `[native code]` |
| 0.0% | 901us | 0.0% | 901us | `fastParseInt` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:12` |

## Call Tree (Total Time)

| Total% | Total | Self% | Self | Function | Location |
|-------:|------:|------:|-----:|----------|----------|
| 100.0% | 4.51s | 0.0% | 0us | `moduleEvaluation` | `[native code]` |
| 68.6% | 2.25s | 0.0% | 0us | `evaluate` | `[native code]` |
| 68.6% | 2.25s | 0.0% | 0us | `async loadAndEvaluateModule` | `[native code]` |
| 68.6% | 2.25s | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:19` |
| 68.6% | 2.25s | 0.0% | 0us | `(module)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:76` |
| 48.1% | 1.58s | 11.8% | 389.5ms | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:36` |
| 43.0% | 1.41s | 43.0% | 1.41s | `subarray` | `[native code]` |
| 30.7% | 1.01s | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:49` |
| 30.5% | 1.00s | 7.4% | 245.0ms | `collectActiveRecords` | `/home/eugen/projekte/jsarena/arena.ts:283` |
| 20.4% | 670.7ms | 0.4% | 15.3ms | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:33` |
| 18.4% | 607.1ms | 2.2% | 75.0ms | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts:308` |
| 16.2% | 532.1ms | 16.2% | 532.1ms | `Uint8Array` | `[native code]` |
| 10.1% | 331.8ms | 4.1% | 137.8ms | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts:332` |
| 5.8% | 193.0ms | 5.8% | 193.0ms | `set` | `[native code]` |
| 5.0% | 166.2ms | 0.1% | 4.2ms | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts:331` |
| 4.9% | 161.9ms | 4.9% | 161.9ms | `_initBlock` | `/home/eugen/projekte/jsarena/arena.ts` |
| 1.5% | 50.1ms | 0.2% | 7.2ms | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts:328` |
| 1.3% | 42.9ms | 1.3% | 42.9ms | `get byteLength` | `[native code]` |
| 1.0% | 35.2ms | 0.1% | 4.3ms | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts:309` |
| 0.9% | 30.9ms | 0.9% | 30.9ms | `get buffer` | `[native code]` |
| 0.8% | 28.5ms | 0.1% | 5.4ms | `anonymous` | `[native code]` |
| 0.3% | 11.0ms | 0.0% | 0us | `async (anonymous)` | `[native code]` |
| 0.3% | 11.0ms | 0.1% | 4.6ms | `parseModule` | `[native code]` |
| 0.2% | 7.1ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:60` |
| 0.2% | 7.1ms | 0.2% | 7.1ms | `toLocaleString` | `[native code]` |
| 0.1% | 5.2ms | 0.0% | 3.1ms | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:50` |
| 0.1% | 5.2ms | 0.0% | 0us | `collectActiveRecords` | `/home/eugen/projekte/jsarena/arena.ts:292` |
| 0.1% | 3.4ms | 0.0% | 0us | `internal:fs/streams` | `internal:fs/streams:2` |
| 0.1% | 3.4ms | 0.0% | 0us | `node:stream` | `node:stream:2` |
| 0.1% | 3.4ms | 0.0% | 0us | `get ReadStream` | `node:fs:577` |
| 0.0% | 3.1ms | 0.0% | 1.0ms | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:37` |
| 0.0% | 2.9ms | 0.0% | 0us | `node:fs` | `node:fs:2` |
| 0.0% | 2.2ms | 0.0% | 0us | `internal:streams/operators` | `internal:streams/operators:2` |
| 0.0% | 2.2ms | 0.0% | 0us | `internal:stream` | `internal:stream:2` |
| 0.0% | 2.2ms | 0.0% | 0us | `internal:streams/compose` | `internal:streams/compose:2` |
| 0.0% | 2.1ms | 0.0% | 2.1ms | `fastParseInt` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:9` |
| 0.0% | 1.9ms | 0.0% | 0us | `node:events` | `node:events:9` |
| 0.0% | 1.2ms | 0.0% | 0us | `internal:streams/pipeline` | `internal:streams/pipeline:2` |
| 0.0% | 1.2ms | 0.0% | 0us | `internal:streams/duplex` | `internal:streams/duplex:2` |
| 0.0% | 1.2ms | 0.0% | 0us | `internal:streams/readable` | `internal:streams/readable:2` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `subarray` | `/home/eugen/projekte/jsarena/arena.ts:332` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `fastParseInt` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:32` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `set` | `/home/eugen/projekte/jsarena/arena.ts` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `write` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:44` |
| 0.0% | 943us | 0.0% | 0us | `internal:shared` | `internal:shared:2` |
| 0.0% | 943us | 0.0% | 0us | `makeSafe` | `internal:primordials:30` |
| 0.0% | 943us | 0.0% | 943us | `forEach` | `[native code]` |
| 0.0% | 943us | 0.0% | 0us | `internal:validators` | `internal:validators:2` |
| 0.0% | 943us | 0.0% | 0us | `internal:primordials` | `internal:primordials:78` |
| 0.0% | 943us | 0.0% | 0us | `bound call` | `[native code]` |
| 0.0% | 930us | 0.0% | 0us | `node:fs/promises` | `node:fs/promises:2` |
| 0.0% | 901us | 0.0% | 901us | `fastParseInt` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:12` |

## Function Details

### `subarray`
`[native code]` | Self: 43.0% (1.41s) | Total: 43.0% (1.41s) | Samples: 1048

**Called by:**
- `async (anonymous)` (614)
- `collectActiveRecords` (434)

### `Uint8Array`
`[native code]` | Self: 16.2% (532.1ms) | Total: 16.2% (532.1ms) | Samples: 492

**Called by:**
- `allocNoPtr` (492)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:36` | Self: 11.8% (389.5ms) | Total: 48.1% (1.58s) | Samples: 361

**Called by:**
- `async (anonymous)` (1468)

**Calls:**
- `allocNoPtr` (561)
- `allocNoPtr` (310)
- `allocNoPtr` (156)
- `allocNoPtr` (47)
- `allocNoPtr` (33)

### `collectActiveRecords`
`/home/eugen/projekte/jsarena/arena.ts:283` | Self: 7.4% (245.0ms) | Total: 30.5% (1.00s) | Samples: 227

**Called by:**
- `async (anonymous)` (661)

**Calls:**
- `subarray` (434)

### `set`
`[native code]` | Self: 5.8% (193.0ms) | Total: 5.8% (193.0ms) | Samples: 180

**Called by:**
- `allocNoPtr` (180)

### `_initBlock`
`/home/eugen/projekte/jsarena/arena.ts` | Self: 4.9% (161.9ms) | Total: 4.9% (161.9ms) | Samples: 152

**Called by:**
- `allocNoPtr` (152)

### `allocNoPtr`
`/home/eugen/projekte/jsarena/arena.ts:332` | Self: 4.1% (137.8ms) | Total: 10.1% (331.8ms) | Samples: 129

**Called by:**
- `async (anonymous)` (310)

**Calls:**
- `set` (180)
- `set` (1)

### `allocNoPtr`
`/home/eugen/projekte/jsarena/arena.ts:308` | Self: 2.2% (75.0ms) | Total: 18.4% (607.1ms) | Samples: 69

**Called by:**
- `async (anonymous)` (561)

**Calls:**
- `Uint8Array` (492)

### `get byteLength`
`[native code]` | Self: 1.3% (42.9ms) | Total: 1.3% (42.9ms) | Samples: 40

**Called by:**
- `allocNoPtr` (40)

### `get buffer`
`[native code]` | Self: 0.9% (30.9ms) | Total: 0.9% (30.9ms) | Samples: 29

**Called by:**
- `allocNoPtr` (29)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:33` | Self: 0.4% (15.3ms) | Total: 20.4% (670.7ms) | Samples: 14

**Called by:**
- `async (anonymous)` (629)

**Calls:**
- `subarray` (614)
- `subarray` (1)

### `allocNoPtr`
`/home/eugen/projekte/jsarena/arena.ts:328` | Self: 0.2% (7.2ms) | Total: 1.5% (50.1ms) | Samples: 7

**Called by:**
- `async (anonymous)` (47)

**Calls:**
- `get byteLength` (40)

### `toLocaleString`
`[native code]` | Self: 0.2% (7.1ms) | Total: 0.2% (7.1ms) | Samples: 6

**Called by:**
- `async (anonymous)` (6)

### `anonymous`
`[native code]` | Self: 0.1% (5.4ms) | Total: 0.8% (28.5ms) | Samples: 5

**Called by:**
- `node:stream` (3)
- `node:fs` (3)
- `get ReadStream` (3)
- `internal:fs/streams` (3)
- `internal:stream` (2)
- `internal:streams/operators` (2)
- `internal:streams/compose` (2)
- `node:events` (2)
- `internal:shared` (1)
- `node:fs/promises` (1)
- `internal:streams/duplex` (1)
- `internal:streams/readable` (1)
- `internal:validators` (1)
- `internal:streams/pipeline` (1)

**Calls:**
- `node:stream` (3)
- `internal:fs/streams` (3)
- `internal:stream` (2)
- `internal:streams/operators` (2)
- `internal:streams/compose` (2)
- `node:events` (2)
- `internal:shared` (1)
- `internal:primordials` (1)
- `internal:streams/duplex` (1)
- `node:fs/promises` (1)
- `internal:streams/readable` (1)
- `internal:validators` (1)
- `internal:streams/pipeline` (1)

### `parseModule`
`[native code]` | Self: 0.1% (4.6ms) | Total: 0.3% (11.0ms) | Samples: 4

**Called by:**
- `async (anonymous)` (10)

**Calls:**
- `get ReadStream` (3)
- `node:fs` (3)

### `allocNoPtr`
`/home/eugen/projekte/jsarena/arena.ts:309` | Self: 0.1% (4.3ms) | Total: 1.0% (35.2ms) | Samples: 4

**Called by:**
- `async (anonymous)` (33)

**Calls:**
- `get buffer` (29)

### `allocNoPtr`
`/home/eugen/projekte/jsarena/arena.ts:331` | Self: 0.1% (4.2ms) | Total: 5.0% (166.2ms) | Samples: 4

**Called by:**
- `async (anonymous)` (156)

**Calls:**
- `_initBlock` (152)

### `(anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:50` | Self: 0.0% (3.1ms) | Total: 0.1% (5.2ms) | Samples: 3

**Called by:**
- `collectActiveRecords` (5)

**Calls:**
- `fastParseInt` (2)

### `fastParseInt`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:9` | Self: 0.0% (2.1ms) | Total: 0.0% (2.1ms) | Samples: 2

**Called by:**
- `(anonymous)` (2)

### `subarray`
`/home/eugen/projekte/jsarena/arena.ts:332` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `fastParseInt`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:37` | Self: 0.0% (1.0ms) | Total: 0.0% (3.1ms) | Samples: 1

**Called by:**
- `async (anonymous)` (3)

**Calls:**
- `fastParseInt` (1)
- `fastParseInt` (1)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:32` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `set`
`/home/eugen/projekte/jsarena/arena.ts` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `allocNoPtr` (1)

### `write`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `forEach`
`[native code]` | Self: 0.0% (943us) | Total: 0.0% (943us) | Samples: 1

**Called by:**
- `bound call` (1)

### `fastParseInt`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:12` | Self: 0.0% (901us) | Total: 0.0% (901us) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `node:fs/promises`
`node:fs/promises:2` | Self: 0.0% (0us) | Total: 0.0% (930us) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `bound call`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (943us) | Samples: 0

**Called by:**
- `makeSafe` (1)

**Calls:**
- `forEach` (1)

### `internal:streams/duplex`
`internal:streams/duplex:2` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `internal:stream`
`internal:stream:2` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `anonymous` (2)

### `evaluate`
`[native code]` | Self: 0.0% (0us) | Total: 68.6% (2.25s) | Samples: 0

**Called by:**
- `moduleEvaluation` (2102)

**Calls:**
- `(module)` (2102)

### `internal:streams/operators`
`internal:streams/operators:2` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `anonymous` (2)

### `async (anonymous)`
`[native code]` | Self: 0.0% (0us) | Total: 0.3% (11.0ms) | Samples: 0

**Calls:**
- `parseModule` (10)

### `async loadAndEvaluateModule`
`[native code]` | Self: 0.0% (0us) | Total: 68.6% (2.25s) | Samples: 0

**Calls:**
- `moduleEvaluation` (2102)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:60` | Self: 0.0% (0us) | Total: 0.2% (7.1ms) | Samples: 0

**Calls:**
- `toLocaleString` (6)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:19` | Self: 0.0% (0us) | Total: 68.6% (2.25s) | Samples: 0

**Called by:**
- `(module)` (2102)

**Calls:**
- `async (anonymous)` (1468)
- `async (anonymous)` (629)
- `async (anonymous)` (3)
- `async (anonymous)` (1)
- `async (anonymous)` (1)

### `internal:validators`
`internal:validators:2` | Self: 0.0% (0us) | Total: 0.0% (943us) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `node:stream`
`node:stream:2` | Self: 0.0% (0us) | Total: 0.1% (3.4ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `anonymous` (3)

### `node:events`
`node:events:9` | Self: 0.0% (0us) | Total: 0.0% (1.9ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `anonymous` (2)

### `internal:streams/pipeline`
`internal:streams/pipeline:2` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `collectActiveRecords`
`/home/eugen/projekte/jsarena/arena.ts:292` | Self: 0.0% (0us) | Total: 0.1% (5.2ms) | Samples: 0

**Called by:**
- `async (anonymous)` (5)

**Calls:**
- `(anonymous)` (5)

### `node:fs`
`node:fs:2` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `parseModule` (3)

**Calls:**
- `anonymous` (3)

### `moduleEvaluation`
`[native code]` | Self: 0.0% (0us) | Total: 100.0% (4.51s) | Samples: 0

**Called by:**
- `moduleEvaluation` (2102)
- `async loadAndEvaluateModule` (2102)

**Calls:**
- `moduleEvaluation` (2102)
- `evaluate` (2102)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:49` | Self: 0.0% (0us) | Total: 30.7% (1.01s) | Samples: 0

**Calls:**
- `collectActiveRecords` (661)
- `collectActiveRecords` (5)

### `internal:streams/compose`
`internal:streams/compose:2` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `anonymous` (2)

### `internal:streams/readable`
`internal:streams/readable:2` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `internal:shared`
`internal:shared:2` | Self: 0.0% (0us) | Total: 0.0% (943us) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:44` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `write` (1)

### `makeSafe`
`internal:primordials:30` | Self: 0.0% (0us) | Total: 0.0% (943us) | Samples: 0

**Called by:**
- `internal:primordials` (1)

**Calls:**
- `bound call` (1)

### `internal:fs/streams`
`internal:fs/streams:2` | Self: 0.0% (0us) | Total: 0.1% (3.4ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `anonymous` (3)

### `(module)`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:76` | Self: 0.0% (0us) | Total: 68.6% (2.25s) | Samples: 0

**Called by:**
- `evaluate` (2102)

**Calls:**
- `async (anonymous)` (2102)

### `get ReadStream`
`node:fs:577` | Self: 0.0% (0us) | Total: 0.1% (3.4ms) | Samples: 0

**Called by:**
- `parseModule` (3)

**Calls:**
- `anonymous` (3)

### `internal:primordials`
`internal:primordials:78` | Self: 0.0% (0us) | Total: 0.0% (943us) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `makeSafe` (1)

## Files

| Self% | Self | File |
|------:|-----:|------|
| 67.9% | 2.23s | `[native code]` |
| 19.4% | 637.9ms | `/home/eugen/projekte/jsarena/arena.ts` |
| 12.6% | 414.3ms | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts` |
