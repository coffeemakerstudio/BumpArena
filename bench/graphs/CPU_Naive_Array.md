# CPU Profile

| Duration | Samples | Interval | Functions |
|----------|---------|----------|----------|
| 3.04s | 2672 | 1.0ms | 49 |

**Top 10:** `BigInt` 22.8%, `stringSplitFast` 17.3%, `(anonymous)` 11.7%, `(anonymous)` 10.9%, `reduce` 10.7%, `(anonymous)` 6.5%, `forEach` 5.6%, `(anonymous)` 5.3%, `(anonymous)` 3.5%, `readFileSync` 2.6%

## Hot Functions (Self Time)

| Self% | Self | Total% | Total | Function | Location |
|------:|-----:|-------:|------:|----------|----------|
| 22.8% | 694.6ms | 22.8% | 694.6ms | `BigInt` | `[native code]` |
| 17.3% | 528.4ms | 17.3% | 528.4ms | `stringSplitFast` | `[native code]` |
| 11.7% | 357.8ms | 11.7% | 357.8ms | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:17` |
| 10.9% | 334.6ms | 10.9% | 334.6ms | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:38` |
| 10.7% | 326.4ms | 33.4% | 1.01s | `reduce` | `[native code]` |
| 6.5% | 200.0ms | 29.3% | 894.6ms | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:14` |
| 5.6% | 171.4ms | 43.9% | 1.33s | `forEach` | `[native code]` |
| 5.3% | 164.3ms | 5.3% | 164.3ms | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:23` |
| 3.5% | 107.8ms | 3.5% | 107.8ms | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:34` |
| 2.6% | 81.5ms | 5.3% | 163.1ms | `readFileSync` | `[native code]` |
| 1.2% | 36.7ms | 1.2% | 36.7ms | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:33` |
| 0.7% | 23.4ms | 1.5% | 46.9ms | `writeFileSync` | `[native code]` |
| 0.1% | 5.4ms | 0.1% | 5.4ms | `toLocaleString` | `[native code]` |
| 0.1% | 5.3ms | 0.8% | 27.3ms | `anonymous` | `[native code]` |
| 0.0% | 2.3ms | 0.2% | 8.8ms | `parseModule` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `set` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `memoryUsage` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 2.4ms | `unlinkSync` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `hideFromStack` | `internal:shared` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `moduleDeclarationInstantiation` | `[native code]` |

## Call Tree (Total Time)

| Total% | Total | Self% | Self | Function | Location |
|-------:|------:|------:|-----:|----------|----------|
| 99.6% | 3.03s | 0.0% | 0us | `async asyncModuleEvaluation` | `[native code]` |
| 99.6% | 3.03s | 0.0% | 0us | `evaluate` | `[native code]` |
| 99.6% | 3.03s | 0.0% | 0us | `(module)` | `/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:61` |
| 49.1% | 1.49s | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:14` |
| 43.9% | 1.33s | 5.6% | 171.4ms | `forEach` | `[native code]` |
| 33.4% | 1.01s | 10.7% | 326.4ms | `reduce` | `[native code]` |
| 29.3% | 894.6ms | 6.5% | 200.0ms | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:14` |
| 22.8% | 694.6ms | 22.8% | 694.6ms | `BigInt` | `[native code]` |
| 21.6% | 659.7ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:38` |
| 17.3% | 528.4ms | 17.3% | 528.4ms | `stringSplitFast` | `[native code]` |
| 11.7% | 359.1ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:17` |
| 11.7% | 357.8ms | 11.7% | 357.8ms | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:17` |
| 10.9% | 334.6ms | 10.9% | 334.6ms | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:38` |
| 9.1% | 278.4ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:34` |
| 5.3% | 164.3ms | 5.3% | 164.3ms | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:23` |
| 5.3% | 164.3ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:22` |
| 5.3% | 163.1ms | 2.6% | 81.5ms | `readFileSync` | `[native code]` |
| 3.5% | 107.8ms | 3.5% | 107.8ms | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:34` |
| 1.5% | 46.9ms | 0.7% | 23.4ms | `writeFileSync` | `[native code]` |
| 1.2% | 36.7ms | 1.2% | 36.7ms | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:33` |
| 0.8% | 27.3ms | 0.1% | 5.3ms | `anonymous` | `[native code]` |
| 0.7% | 23.4ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:26` |
| 0.3% | 10.0ms | 0.0% | 0us | `async (anonymous)` | `[native code]` |
| 0.3% | 9.5ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:32` |
| 0.2% | 8.8ms | 0.0% | 2.3ms | `parseModule` | `[native code]` |
| 0.1% | 5.4ms | 0.1% | 5.4ms | `toLocaleString` | `[native code]` |
| 0.1% | 5.4ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:49` |
| 0.1% | 3.3ms | 0.0% | 0us | `internal:fs/streams` | `internal:fs/streams:2` |
| 0.1% | 3.3ms | 0.0% | 0us | `get ReadStream` | `node:fs:577` |
| 0.1% | 3.3ms | 0.0% | 0us | `internal:stream` | `internal:stream:2` |
| 0.1% | 3.3ms | 0.0% | 0us | `node:stream` | `node:stream:2` |
| 0.0% | 2.4ms | 0.0% | 1.2ms | `unlinkSync` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 0us | `internal:streams/operators` | `internal:streams/operators:2` |
| 0.0% | 2.2ms | 0.0% | 0us | `internal:streams/pipeline` | `internal:streams/pipeline:2` |
| 0.0% | 2.2ms | 0.0% | 0us | `internal:streams/compose` | `internal:streams/compose:2` |
| 0.0% | 2.2ms | 0.0% | 0us | `internal:streams/duplex` | `internal:streams/duplex:2` |
| 0.0% | 2.0ms | 0.0% | 0us | `node:fs` | `node:fs:2` |
| 0.0% | 2.0ms | 0.0% | 0us | `node:events` | `node:events:9` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `set` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:50` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `memoryUsage` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:56` |
| 0.0% | 1.1ms | 0.0% | 0us | `internal:validators` | `internal:validators:47` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `hideFromStack` | `internal:shared` |
| 0.0% | 1.1ms | 0.0% | 0us | `link` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `linkAndEvaluateModule` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `moduleDeclarationInstantiation` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `async loadAndEvaluateModule` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `node:fs` | `node:fs:307` |

## Function Details

### `BigInt`
`[native code]` | Self: 22.8% (694.6ms) | Total: 22.8% (694.6ms) | Samples: 645

**Called by:**
- `(anonymous)` (645)

### `stringSplitFast`
`[native code]` | Self: 17.3% (528.4ms) | Total: 17.3% (528.4ms) | Samples: 494

**Called by:**
- `async (anonymous)` (494)

### `(anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:17` | Self: 11.7% (357.8ms) | Total: 11.7% (357.8ms) | Samples: 331

**Called by:**
- `reduce` (331)

### `(anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:38` | Self: 10.9% (334.6ms) | Total: 10.9% (334.6ms) | Samples: 302

**Called by:**
- `reduce` (302)

### `reduce`
`[native code]` | Self: 10.7% (326.4ms) | Total: 33.4% (1.01s) | Samples: 302

**Called by:**
- `async (anonymous)` (603)
- `async (anonymous)` (332)

**Calls:**
- `(anonymous)` (331)
- `(anonymous)` (302)

### `(anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:14` | Self: 6.5% (200.0ms) | Total: 29.3% (894.6ms) | Samples: 186

**Called by:**
- `forEach` (831)

**Calls:**
- `BigInt` (645)

### `forEach`
`[native code]` | Self: 5.6% (171.4ms) | Total: 43.9% (1.33s) | Samples: 139

**Called by:**
- `async (anonymous)` (832)
- `async (anonymous)` (232)
- `async (anonymous)` (152)

**Calls:**
- `(anonymous)` (831)
- `(anonymous)` (152)
- `(anonymous)` (94)

### `(anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:23` | Self: 5.3% (164.3ms) | Total: 5.3% (164.3ms) | Samples: 152

**Called by:**
- `forEach` (152)

### `(anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:34` | Self: 3.5% (107.8ms) | Total: 3.5% (107.8ms) | Samples: 94

**Called by:**
- `forEach` (94)

### `readFileSync`
`[native code]` | Self: 2.6% (81.5ms) | Total: 5.3% (163.1ms) | Samples: 7

**Called by:**
- `readFileSync` (7)
- `async (anonymous)` (6)
- `async (anonymous)` (1)

**Calls:**
- `readFileSync` (7)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:33` | Self: 1.2% (36.7ms) | Total: 1.2% (36.7ms) | Samples: 1

**Called by:**
- `(module)` (1)

### `writeFileSync`
`[native code]` | Self: 0.7% (23.4ms) | Total: 1.5% (46.9ms) | Samples: 2

**Called by:**
- `async (anonymous)` (2)
- `writeFileSync` (2)

**Calls:**
- `writeFileSync` (2)

### `toLocaleString`
`[native code]` | Self: 0.1% (5.4ms) | Total: 0.1% (5.4ms) | Samples: 5

**Called by:**
- `async (anonymous)` (5)

### `anonymous`
`[native code]` | Self: 0.1% (5.3ms) | Total: 0.8% (27.3ms) | Samples: 5

**Called by:**
- `node:stream` (3)
- `internal:stream` (3)
- `get ReadStream` (3)
- `internal:fs/streams` (3)
- `internal:streams/pipeline` (2)
- `internal:streams/duplex` (2)
- `internal:streams/operators` (2)
- `internal:streams/compose` (2)
- `node:fs` (2)
- `node:events` (2)
- `node:fs` (1)

**Calls:**
- `node:stream` (3)
- `internal:stream` (3)
- `internal:fs/streams` (3)
- `internal:streams/duplex` (2)
- `internal:streams/operators` (2)
- `internal:streams/compose` (2)
- `internal:streams/pipeline` (2)
- `node:events` (2)
- `internal:validators` (1)

### `parseModule`
`[native code]` | Self: 0.0% (2.3ms) | Total: 0.2% (8.8ms) | Samples: 2

**Called by:**
- `async (anonymous)` (8)

**Calls:**
- `get ReadStream` (3)
- `node:fs` (2)
- `node:fs` (1)

### `set`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `memoryUsage`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `unlinkSync`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (2.4ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)
- `unlinkSync` (1)

**Calls:**
- `unlinkSync` (1)

### `hideFromStack`
`internal:shared` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `internal:validators` (1)

### `moduleDeclarationInstantiation`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `link` (1)

### `node:fs`
`node:fs:2` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `parseModule` (2)

**Calls:**
- `anonymous` (2)

### `async loadAndEvaluateModule`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Calls:**
- `linkAndEvaluateModule` (1)

### `node:stream`
`node:stream:2` | Self: 0.0% (0us) | Total: 0.1% (3.3ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `anonymous` (3)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:50` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `memoryUsage` (1)

### `internal:streams/duplex`
`internal:streams/duplex:2` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `anonymous` (2)

### `internal:validators`
`internal:validators:47` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `hideFromStack` (1)

### `internal:stream`
`internal:stream:2` | Self: 0.0% (0us) | Total: 0.1% (3.3ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `anonymous` (3)

### `evaluate`
`[native code]` | Self: 0.0% (0us) | Total: 99.6% (3.03s) | Samples: 0

**Called by:**
- `async asyncModuleEvaluation` (2662)

**Calls:**
- `(module)` (2662)

### `internal:streams/operators`
`internal:streams/operators:2` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `anonymous` (2)

### `async (anonymous)`
`[native code]` | Self: 0.0% (0us) | Total: 0.3% (10.0ms) | Samples: 0

**Calls:**
- `parseModule` (8)
- `set` (1)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:49` | Self: 0.0% (0us) | Total: 0.1% (5.4ms) | Samples: 0

**Called by:**
- `(module)` (5)

**Calls:**
- `toLocaleString` (5)

### `internal:streams/compose`
`internal:streams/compose:2` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `anonymous` (2)

### `node:fs`
`node:fs:307` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `parseModule` (1)

**Calls:**
- `anonymous` (1)

### `async asyncModuleEvaluation`
`[native code]` | Self: 0.0% (0us) | Total: 99.6% (3.03s) | Samples: 0

**Calls:**
- `evaluate` (2662)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:38` | Self: 0.0% (0us) | Total: 21.6% (659.7ms) | Samples: 0

**Called by:**
- `(module)` (603)

**Calls:**
- `reduce` (603)

### `get ReadStream`
`node:fs:577` | Self: 0.0% (0us) | Total: 0.1% (3.3ms) | Samples: 0

**Called by:**
- `parseModule` (3)

**Calls:**
- `anonymous` (3)

### `internal:fs/streams`
`internal:fs/streams:2` | Self: 0.0% (0us) | Total: 0.1% (3.3ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `anonymous` (3)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:14` | Self: 0.0% (0us) | Total: 49.1% (1.49s) | Samples: 0

**Called by:**
- `(module)` (1332)

**Calls:**
- `forEach` (832)
- `stringSplitFast` (494)
- `readFileSync` (6)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:26` | Self: 0.0% (0us) | Total: 0.7% (23.4ms) | Samples: 0

**Called by:**
- `(module)` (2)

**Calls:**
- `writeFileSync` (2)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:32` | Self: 0.0% (0us) | Total: 0.3% (9.5ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `readFileSync` (1)

### `link`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `linkAndEvaluateModule` (1)

**Calls:**
- `moduleDeclarationInstantiation` (1)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:56` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `unlinkSync` (1)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:34` | Self: 0.0% (0us) | Total: 9.1% (278.4ms) | Samples: 0

**Called by:**
- `(module)` (232)

**Calls:**
- `forEach` (232)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:17` | Self: 0.0% (0us) | Total: 11.7% (359.1ms) | Samples: 0

**Called by:**
- `(module)` (332)

**Calls:**
- `reduce` (332)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:22` | Self: 0.0% (0us) | Total: 5.3% (164.3ms) | Samples: 0

**Called by:**
- `(module)` (152)

**Calls:**
- `forEach` (152)

### `linkAndEvaluateModule`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async loadAndEvaluateModule` (1)

**Calls:**
- `link` (1)

### `internal:streams/pipeline`
`internal:streams/pipeline:2` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `anonymous` (2)

### `(module)`
`/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts:61` | Self: 0.0% (0us) | Total: 99.6% (3.03s) | Samples: 0

**Called by:**
- `evaluate` (2662)

**Calls:**
- `async (anonymous)` (1332)
- `async (anonymous)` (603)
- `async (anonymous)` (332)
- `async (anonymous)` (232)
- `async (anonymous)` (152)
- `async (anonymous)` (5)
- `async (anonymous)` (2)
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `async (anonymous)` (1)

### `node:events`
`node:events:9` | Self: 0.0% (0us) | Total: 0.0% (2.0ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `anonymous` (2)

## Files

| Self% | Self | File |
|------:|-----:|------|
| 60.5% | 1.84s | `[native code]` |
| 39.4% | 1.20s | `/home/eugen/projekte/jsarena/bench/implementation_naive-array.ts` |
| 0.0% | 1.1ms | `internal:shared` |
