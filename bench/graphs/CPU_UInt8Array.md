# CPU Profile

| Duration | Samples | Interval | Functions |
|----------|---------|----------|----------|
| 118.29s | 101188 | 1.0ms | 95 |

**Top 10:** `BigInt` 19.2%, `Buffer` 16.7%, `(anonymous)` 11.4%, `async (anonymous)` 10.3%, `async (anonymous)` 9.2%, `typedArrayViewLength` 7.9%, `set` 4.8%, `typedArrayViewIsDetached` 4.3%, `indexOf` 4.2%, `arrayIteratorNextHelper` 4.0%

## Hot Functions (Self Time)

| Self% | Self | Total% | Total | Function | Location |
|------:|-----:|-------:|------:|----------|----------|
| 19.2% | 22.72s | 19.2% | 22.72s | `BigInt` | `[native code]` |
| 16.7% | 19.85s | 16.7% | 19.85s | `Buffer` | `[native code]` |
| 11.4% | 13.54s | 100.0% | 155.59s | `(anonymous)` | `[native code]` |
| 10.3% | 12.28s | 17.8% | 21.08s | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:92` |
| 9.2% | 10.99s | 21.0% | 24.92s | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:78` |
| 7.9% | 9.39s | 7.9% | 9.39s | `typedArrayViewLength` | `[native code]` |
| 4.8% | 5.73s | 4.8% | 5.73s | `set` | `[native code]` |
| 4.3% | 5.15s | 4.3% | 5.15s | `typedArrayViewIsDetached` | `[native code]` |
| 4.2% | 4.99s | 4.2% | 4.99s | `indexOf` | `[native code]` |
| 4.0% | 4.79s | 12.0% | 14.19s | `arrayIteratorNextHelper` | `[native code]` |
| 3.3% | 3.97s | 3.3% | 3.97s | `get buffer` | `[native code]` |
| 2.2% | 2.64s | 18.6% | 21.99s | `next` | `[native code]` |
| 1.0% | 1.20s | 5.2% | 6.20s | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:50` |
| 0.6% | 735.8ms | 0.6% | 735.8ms | `write` | `[native code]` |
| 0.0% | 23.9ms | 0.0% | 23.9ms | `allocUnsafe` | `[native code]` |
| 0.0% | 19.3ms | 0.0% | 19.3ms | `async unlink` | `node:fs/promises:148` |
| 0.0% | 15.8ms | 41.7% | 49.40s | `addChunk` | `internal:streams/readable:265` |
| 0.0% | 13.7ms | 0.0% | 13.7ms | `readableAddChunkPushByteMode` | `internal:streams/readable:227` |
| 0.0% | 13.6ms | 0.0% | 13.6ms | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:42` |
| 0.0% | 10.5ms | 0.0% | 10.5ms | `fastParseNumber` | `/home/eugen/projekte/jsarena/bench/helper.ts` |
| 0.0% | 10.1ms | 0.0% | 10.1ms | `processNumber` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts` |
| 0.0% | 8.8ms | 0.0% | 8.8ms | `(anonymous)` | `internal:fs/streams:144` |
| 0.0% | 8.6ms | 0.0% | 8.6ms | `copy` | `[native code]` |
| 0.0% | 8.3ms | 0.0% | 8.3ms | `addChunk` | `internal:streams/readable:260` |
| 0.0% | 8.2ms | 0.0% | 8.2ms | `emit` | `node:events:79` |
| 0.0% | 6.6ms | 0.0% | 6.6ms | `allocUnsafeSlow` | `[native code]` |
| 0.0% | 6.6ms | 33.3% | 39.49s | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:61` |
| 0.0% | 6.3ms | 0.0% | 6.3ms | `toLocaleString` | `[native code]` |
| 0.0% | 5.8ms | 0.0% | 26.2ms | `anonymous` | `[native code]` |
| 0.0% | 4.4ms | 0.0% | 4.4ms | `read` | `[native code]` |
| 0.0% | 3.3ms | 0.0% | 3.3ms | `(anonymous)` | `internal:fs/streams:150` |
| 0.0% | 3.0ms | 4.4% | 5.31s | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:91` |
| 0.0% | 2.3ms | 4.9% | 5.82s | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:77` |
| 0.0% | 2.3ms | 0.0% | 2.3ms | `then` | `[native code]` |
| 0.0% | 2.3ms | 1.7% | 2.09s | `processNumber` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:22` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `listenerCount` | `node:events` |
| 0.0% | 2.2ms | 0.0% | 9.1ms | `parseModule` | `[native code]` |
| 0.0% | 1.9ms | 9.1% | 10.85s | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:88` |
| 0.0% | 1.8ms | 0.0% | 1.8ms | `(anonymous)` | `internal:streams/readable:366` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `howMuchToRead` | `internal:streams/readable:302` |
| 0.0% | 1.2ms | 0.0% | 13.8ms | `async (anonymous)` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `nextTick` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 20.7ms | `maybeReadMore_` | `internal:streams/readable:406` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `internal:streams/readable:365` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `fetch` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `shift` | `internal:fixed_queue:22` |
| 0.0% | 1.0ms | 99.9% | 118.24s | `processTicksAndRejections` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `canPushMore` | `internal:streams/readable:257` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `node:fs` | `node:fs:299` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts` |
| 0.0% | 943us | 0.0% | 2.2ms | `(anonymous)` | `internal:streams/readable:332` |
| 0.0% | 941us | 0.0% | 7.5ms | `(anonymous)` | `internal:fs/streams:137` |
| 0.0% | 914us | 0.0% | 2.1ms | `addChunk` | `internal:streams/readable:277` |

## Call Tree (Total Time)

| Total% | Total | Self% | Self | Function | Location |
|-------:|------:|------:|-----:|----------|----------|
| 100.0% | 155.59s | 11.4% | 13.54s | `(anonymous)` | `[native code]` |
| 99.9% | 118.24s | 0.0% | 1.0ms | `processTicksAndRejections` | `[native code]` |
| 41.8% | 49.44s | 0.0% | 0us | `(anonymous)` | `node:fs:194` |
| 41.7% | 49.42s | 0.0% | 0us | `(anonymous)` | `internal:fs/streams:148` |
| 41.7% | 49.41s | 0.0% | 0us | `readableAddChunkPushByteMode` | `internal:streams/readable:243` |
| 41.7% | 49.40s | 0.0% | 15.8ms | `addChunk` | `internal:streams/readable:265` |
| 41.7% | 49.37s | 0.0% | 0us | `emit` | `node:events:95` |
| 33.3% | 39.49s | 0.0% | 6.6ms | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:61` |
| 21.0% | 24.92s | 9.2% | 10.99s | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:78` |
| 19.2% | 22.72s | 19.2% | 22.72s | `BigInt` | `[native code]` |
| 18.6% | 21.99s | 2.2% | 2.64s | `next` | `[native code]` |
| 17.8% | 21.08s | 10.3% | 12.28s | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:92` |
| 16.7% | 19.85s | 16.7% | 19.85s | `Buffer` | `[native code]` |
| 12.0% | 14.19s | 4.0% | 4.79s | `arrayIteratorNextHelper` | `[native code]` |
| 9.1% | 10.85s | 0.0% | 1.9ms | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:88` |
| 7.9% | 9.39s | 7.9% | 9.39s | `typedArrayViewLength` | `[native code]` |
| 5.2% | 6.20s | 1.0% | 1.20s | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:50` |
| 4.9% | 5.82s | 0.0% | 2.3ms | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:77` |
| 4.8% | 5.73s | 4.8% | 5.73s | `set` | `[native code]` |
| 4.4% | 5.31s | 0.0% | 3.0ms | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:91` |
| 4.3% | 5.15s | 4.3% | 5.15s | `typedArrayViewIsDetached` | `[native code]` |
| 4.2% | 4.99s | 4.2% | 4.99s | `indexOf` | `[native code]` |
| 3.3% | 3.97s | 3.3% | 3.97s | `get buffer` | `[native code]` |
| 3.0% | 3.63s | 0.0% | 0us | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:43` |
| 1.7% | 2.09s | 0.0% | 2.3ms | `processNumber` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:22` |
| 0.6% | 735.8ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:81` |
| 0.6% | 735.8ms | 0.6% | 735.8ms | `write` | `[native code]` |
| 0.0% | 26.2ms | 0.0% | 5.8ms | `anonymous` | `[native code]` |
| 0.0% | 23.9ms | 0.0% | 23.9ms | `allocUnsafe` | `[native code]` |
| 0.0% | 23.9ms | 0.0% | 0us | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:41` |
| 0.0% | 20.7ms | 0.0% | 1.1ms | `maybeReadMore_` | `internal:streams/readable:406` |
| 0.0% | 19.3ms | 0.0% | 19.3ms | `async unlink` | `node:fs/promises:148` |
| 0.0% | 19.3ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:115` |
| 0.0% | 14.3ms | 0.0% | 0us | `(anonymous)` | `internal:streams/readable:346` |
| 0.0% | 13.8ms | 0.0% | 1.2ms | `async (anonymous)` | `[native code]` |
| 0.0% | 13.7ms | 0.0% | 13.7ms | `readableAddChunkPushByteMode` | `internal:streams/readable:227` |
| 0.0% | 13.6ms | 0.0% | 13.6ms | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:42` |
| 0.0% | 10.5ms | 0.0% | 10.5ms | `fastParseNumber` | `/home/eugen/projekte/jsarena/bench/helper.ts` |
| 0.0% | 10.5ms | 0.0% | 0us | `processNumber` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:28` |
| 0.0% | 10.1ms | 0.0% | 10.1ms | `processNumber` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts` |
| 0.0% | 9.1ms | 0.0% | 2.2ms | `parseModule` | `[native code]` |
| 0.0% | 8.8ms | 0.0% | 8.8ms | `(anonymous)` | `internal:fs/streams:144` |
| 0.0% | 8.6ms | 0.0% | 0us | `(anonymous)` | `internal:fs/streams:146` |
| 0.0% | 8.6ms | 0.0% | 8.6ms | `copy` | `[native code]` |
| 0.0% | 8.3ms | 0.0% | 8.3ms | `addChunk` | `internal:streams/readable:260` |
| 0.0% | 8.2ms | 0.0% | 8.2ms | `emit` | `node:events:79` |
| 0.0% | 7.5ms | 0.0% | 941us | `(anonymous)` | `internal:fs/streams:137` |
| 0.0% | 6.7ms | 0.0% | 0us | `read` | `node:fs:194` |
| 0.0% | 6.7ms | 0.0% | 0us | `(anonymous)` | `internal:fs/streams:138` |
| 0.0% | 6.6ms | 0.0% | 6.6ms | `allocUnsafeSlow` | `[native code]` |
| 0.0% | 6.3ms | 0.0% | 6.3ms | `toLocaleString` | `[native code]` |
| 0.0% | 6.3ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:98` |
| 0.0% | 4.7ms | 0.0% | 0us | `async loadAndEvaluateModule` | `[native code]` |
| 0.0% | 4.5ms | 0.0% | 0us | `moduleEvaluation` | `[native code]` |
| 0.0% | 4.4ms | 0.0% | 4.4ms | `read` | `[native code]` |
| 0.0% | 3.4ms | 0.0% | 0us | `internal:stream` | `internal:stream:2` |
| 0.0% | 3.4ms | 0.0% | 0us | `node:stream` | `node:stream:2` |
| 0.0% | 3.4ms | 0.0% | 0us | `get ReadStream` | `node:fs:577` |
| 0.0% | 3.4ms | 0.0% | 0us | `internal:fs/streams` | `internal:fs/streams:2` |
| 0.0% | 3.3ms | 0.0% | 3.3ms | `(anonymous)` | `internal:fs/streams:150` |
| 0.0% | 2.4ms | 0.0% | 0us | `async loadModule` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 0us | `node:fs/promises` | `node:fs/promises:2` |
| 0.0% | 2.3ms | 0.0% | 0us | `requestSatisfyUtil` | `[native code]` |
| 0.0% | 2.3ms | 0.0% | 0us | `requestInstantiate` | `[native code]` |
| 0.0% | 2.3ms | 0.0% | 2.3ms | `then` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 943us | `(anonymous)` | `internal:streams/readable:332` |
| 0.0% | 2.2ms | 0.0% | 0us | `evaluate` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 0us | `Readable` | `internal:streams/readable:162` |
| 0.0% | 2.2ms | 0.0% | 0us | `ReadStream` | `internal:fs/streams:86` |
| 0.0% | 2.2ms | 0.0% | 0us | `construct` | `internal:streams/destroy:122` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `listenerCount` | `node:events` |
| 0.0% | 2.2ms | 0.0% | 0us | `(module)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:15` |
| 0.0% | 2.2ms | 0.0% | 0us | `createReadStream` | `node:fs:353` |
| 0.0% | 2.2ms | 0.0% | 0us | `internal:streams/compose` | `internal:streams/compose:2` |
| 0.0% | 2.2ms | 0.0% | 0us | `internal:streams/pipeline` | `internal:streams/pipeline:2` |
| 0.0% | 2.2ms | 0.0% | 0us | `internal:streams/operators` | `internal:streams/operators:2` |
| 0.0% | 2.1ms | 0.0% | 914us | `addChunk` | `internal:streams/readable:277` |
| 0.0% | 1.8ms | 0.0% | 1.8ms | `(anonymous)` | `internal:streams/readable:366` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `howMuchToRead` | `internal:streams/readable:302` |
| 0.0% | 1.2ms | 0.0% | 0us | `requestSatisfy` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `maybeReadMore` | `internal:streams/readable:401` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `nextTick` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `node:events` | `node:events:9` |
| 0.0% | 1.1ms | 0.0% | 0us | `internal:validators` | `internal:validators:2` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `internal:streams/readable:365` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `fetch` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 0us | `requestFetch` | `[native code]` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `shift` | `internal:fixed_queue:22` |
| 0.0% | 1.1ms | 0.0% | 0us | `shift` | `internal:fixed_queue:44` |
| 0.0% | 1.0ms | 0.0% | 0us | `internal:streams/duplex` | `internal:streams/duplex:2` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `canPushMore` | `internal:streams/readable:257` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `node:fs` | `node:fs:299` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts` |
| 0.0% | 1.0ms | 0.0% | 0us | `emitCloseNT` | `internal:streams/destroy:78` |
| 0.0% | 1.0ms | 0.0% | 0us | `emit` | `node:events:92` |

## Function Details

### `BigInt`
`[native code]` | Self: 19.2% (22.72s) | Total: 19.2% (22.72s) | Samples: 20684

**Called by:**
- `async (anonymous)` (12670)
- `async (anonymous)` (8014)

### `Buffer`
`[native code]` | Self: 16.7% (19.85s) | Total: 16.7% (19.85s) | Samples: 18091

**Called by:**
- `(anonymous)` (18091)

### `(anonymous)`
`[native code]` | Self: 11.4% (13.54s) | Total: 100.0% (155.59s) | Samples: 12351

**Called by:**
- `processTicksAndRejections` (101155)
- `(anonymous)` (34070)

**Calls:**
- `(anonymous)` (42271)
- `async (anonymous)` (22647)
- `async (anonymous)` (19218)
- `Buffer` (18091)
- `async (anonymous)` (6857)
- `async (anonymous)` (5311)
- `async (anonymous)` (4842)
- `get buffer` (3628)
- `async (anonymous)` (6)
- `async (anonymous)` (2)
- `requestSatisfyUtil` (1)
- `async (anonymous)` (1)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts:92` | Self: 10.3% (12.28s) | Total: 17.8% (21.08s) | Samples: 11204

**Called by:**
- `(anonymous)` (19218)

**Calls:**
- `BigInt` (8014)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts:78` | Self: 9.2% (10.99s) | Total: 21.0% (24.92s) | Samples: 9977

**Called by:**
- `(anonymous)` (22647)

**Calls:**
- `BigInt` (12670)

### `typedArrayViewLength`
`[native code]` | Self: 7.9% (9.39s) | Total: 7.9% (9.39s) | Samples: 8562

**Called by:**
- `arrayIteratorNextHelper` (8562)

### `set`
`[native code]` | Self: 4.8% (5.73s) | Total: 4.8% (5.73s) | Samples: 2523

**Called by:**
- `processNumber` (1859)
- `(anonymous)` (664)

### `typedArrayViewIsDetached`
`[native code]` | Self: 4.3% (5.15s) | Total: 4.3% (5.15s) | Samples: 1653

**Called by:**
- `next` (1653)

### `indexOf`
`[native code]` | Self: 4.2% (4.99s) | Total: 4.2% (4.99s) | Samples: 4551

**Called by:**
- `(anonymous)` (4551)

### `arrayIteratorNextHelper`
`[native code]` | Self: 4.0% (4.79s) | Total: 12.0% (14.19s) | Samples: 4381

**Called by:**
- `next` (12941)
- `async (anonymous)` (1)
- `async (anonymous)` (1)

**Calls:**
- `typedArrayViewLength` (8562)

### `get buffer`
`[native code]` | Self: 3.3% (3.97s) | Total: 3.3% (3.97s) | Samples: 3628

**Called by:**
- `(anonymous)` (3628)

### `next`
`[native code]` | Self: 2.2% (2.64s) | Total: 18.6% (21.99s) | Samples: 2407

**Called by:**
- `async (anonymous)` (6854)
- `async (anonymous)` (5308)
- `async (anonymous)` (4839)

**Calls:**
- `arrayIteratorNextHelper` (12941)
- `typedArrayViewIsDetached` (1653)

### `(anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts:50` | Self: 1.0% (1.20s) | Total: 5.2% (6.20s) | Samples: 1091

**Called by:**
- `emit` (5642)

**Calls:**
- `indexOf` (4551)

### `write`
`[native code]` | Self: 0.6% (735.8ms) | Total: 0.6% (735.8ms) | Samples: 2

**Called by:**
- `async (anonymous)` (2)

### `allocUnsafe`
`[native code]` | Self: 0.0% (23.9ms) | Total: 0.0% (23.9ms) | Samples: 3

**Called by:**
- `(anonymous)` (3)

### `async unlink`
`node:fs/promises:148` | Self: 0.0% (19.3ms) | Total: 0.0% (19.3ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `addChunk`
`internal:streams/readable:265` | Self: 0.0% (15.8ms) | Total: 41.7% (49.40s) | Samples: 2

**Called by:**
- `readableAddChunkPushByteMode` (42261)

**Calls:**
- `emit` (42258)
- `emit` (1)

### `readableAddChunkPushByteMode`
`internal:streams/readable:227` | Self: 0.0% (13.7ms) | Total: 0.0% (13.7ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `(anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts:42` | Self: 0.0% (13.6ms) | Total: 0.0% (13.6ms) | Samples: 1

**Called by:**
- `emit` (1)

### `fastParseNumber`
`/home/eugen/projekte/jsarena/bench/helper.ts` | Self: 0.0% (10.5ms) | Total: 0.0% (10.5ms) | Samples: 1

**Called by:**
- `processNumber` (1)

### `processNumber`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts` | Self: 0.0% (10.1ms) | Total: 0.0% (10.1ms) | Samples: 10

**Called by:**
- `(anonymous)` (10)

### `(anonymous)`
`internal:fs/streams:144` | Self: 0.0% (8.8ms) | Total: 0.0% (8.8ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `copy`
`[native code]` | Self: 0.0% (8.6ms) | Total: 0.0% (8.6ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `addChunk`
`internal:streams/readable:260` | Self: 0.0% (8.3ms) | Total: 0.0% (8.3ms) | Samples: 1

**Called by:**
- `readableAddChunkPushByteMode` (1)

### `emit`
`node:events:79` | Self: 0.0% (8.2ms) | Total: 0.0% (8.2ms) | Samples: 1

**Called by:**
- `addChunk` (1)

### `allocUnsafeSlow`
`[native code]` | Self: 0.0% (6.6ms) | Total: 0.0% (6.6ms) | Samples: 6

**Called by:**
- `(anonymous)` (6)

### `(anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts:61` | Self: 0.0% (6.6ms) | Total: 33.3% (39.49s) | Samples: 6

**Called by:**
- `emit` (35948)

**Calls:**
- `(anonymous)` (34070)
- `processNumber` (1861)
- `processNumber` (10)
- `processNumber` (1)

### `toLocaleString`
`[native code]` | Self: 0.0% (6.3ms) | Total: 0.0% (6.3ms) | Samples: 6

**Called by:**
- `async (anonymous)` (6)

### `anonymous`
`[native code]` | Self: 0.0% (5.8ms) | Total: 0.0% (26.2ms) | Samples: 5

**Called by:**
- `node:stream` (3)
- `internal:stream` (3)
- `get ReadStream` (3)
- `internal:fs/streams` (3)
- `node:fs/promises` (2)
- `internal:streams/operators` (2)
- `internal:streams/compose` (2)
- `internal:streams/pipeline` (2)
- `internal:streams/duplex` (1)
- `internal:validators` (1)
- `node:events` (1)

**Calls:**
- `node:stream` (3)
- `internal:stream` (3)
- `internal:fs/streams` (3)
- `internal:streams/operators` (2)
- `internal:streams/compose` (2)
- `internal:streams/pipeline` (2)
- `internal:streams/duplex` (1)
- `internal:validators` (1)
- `node:events` (1)

### `read`
`[native code]` | Self: 0.0% (4.4ms) | Total: 0.0% (4.4ms) | Samples: 4

**Called by:**
- `read` (4)

### `(anonymous)`
`internal:fs/streams:150` | Self: 0.0% (3.3ms) | Total: 0.0% (3.3ms) | Samples: 3

**Called by:**
- `(anonymous)` (3)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts:91` | Self: 0.0% (3.0ms) | Total: 4.4% (5.31s) | Samples: 3

**Called by:**
- `(anonymous)` (4842)

**Calls:**
- `next` (4839)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts:77` | Self: 0.0% (2.3ms) | Total: 4.9% (5.82s) | Samples: 2

**Called by:**
- `(anonymous)` (5311)

**Calls:**
- `next` (5308)
- `arrayIteratorNextHelper` (1)

### `then`
`[native code]` | Self: 0.0% (2.3ms) | Total: 0.0% (2.3ms) | Samples: 2

**Called by:**
- `read` (2)

### `processNumber`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts:22` | Self: 0.0% (2.3ms) | Total: 1.7% (2.09s) | Samples: 2

**Called by:**
- `(anonymous)` (1861)

**Calls:**
- `set` (1859)

### `listenerCount`
`node:events` | Self: 0.0% (2.2ms) | Total: 0.0% (2.2ms) | Samples: 1

**Called by:**
- `construct` (1)

### `parseModule`
`[native code]` | Self: 0.0% (2.2ms) | Total: 0.0% (9.1ms) | Samples: 2

**Called by:**
- `async (anonymous)` (8)

**Calls:**
- `get ReadStream` (3)
- `node:fs/promises` (2)
- `node:fs` (1)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts:88` | Self: 0.0% (1.9ms) | Total: 9.1% (10.85s) | Samples: 2

**Called by:**
- `(anonymous)` (6857)

**Calls:**
- `next` (6854)
- `arrayIteratorNextHelper` (1)

### `(anonymous)`
`internal:streams/readable:366` | Self: 0.0% (1.8ms) | Total: 0.0% (1.8ms) | Samples: 2

**Called by:**
- `maybeReadMore_` (2)

### `howMuchToRead`
`internal:streams/readable:302` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `async (anonymous)`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (13.8ms) | Samples: 1

**Called by:**
- `async (anonymous)` (2)
- `requestInstantiate` (2)

**Calls:**
- `parseModule` (8)
- `async (anonymous)` (2)
- `requestFetch` (1)

### `nextTick`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `maybeReadMore` (1)

### `maybeReadMore_`
`internal:streams/readable:406` | Self: 0.0% (1.1ms) | Total: 0.0% (20.7ms) | Samples: 1

**Called by:**
- `processTicksAndRejections` (19)

**Calls:**
- `(anonymous)` (13)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (1)

### `(anonymous)`
`internal:streams/readable:365` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `maybeReadMore_` (1)

### `fetch`
`[native code]` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `requestFetch` (1)

### `shift`
`internal:fixed_queue:22` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `shift` (1)

### `processTicksAndRejections`
`[native code]` | Self: 0.0% (1.0ms) | Total: 99.9% (118.24s) | Samples: 1

**Calls:**
- `(anonymous)` (101155)
- `maybeReadMore_` (19)
- `shift` (1)
- `emitCloseNT` (1)

### `canPushMore`
`internal:streams/readable:257` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `node:fs`
`node:fs:299` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `parseModule` (1)

### `(anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `emit` (1)

### `(anonymous)`
`internal:streams/readable:332` | Self: 0.0% (943us) | Total: 0.0% (2.2ms) | Samples: 1

**Called by:**
- `maybeReadMore_` (2)

**Calls:**
- `howMuchToRead` (1)

### `(anonymous)`
`internal:fs/streams:137` | Self: 0.0% (941us) | Total: 0.0% (7.5ms) | Samples: 1

**Called by:**
- `(anonymous)` (7)

**Calls:**
- `allocUnsafeSlow` (6)

### `addChunk`
`internal:streams/readable:277` | Self: 0.0% (914us) | Total: 0.0% (2.1ms) | Samples: 1

**Called by:**
- `readableAddChunkPushByteMode` (2)

**Calls:**
- `maybeReadMore` (1)

### `requestInstantiate`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.3ms) | Samples: 0

**Called by:**
- `requestSatisfyUtil` (2)

**Calls:**
- `async (anonymous)` (2)

### `async loadModule`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `async loadModule` (1)
- `async loadAndEvaluateModule` (1)

**Calls:**
- `async loadModule` (1)
- `requestSatisfy` (1)

### `(anonymous)`
`internal:fs/streams:148` | Self: 0.0% (0us) | Total: 41.7% (49.42s) | Samples: 0

**Called by:**
- `(anonymous)` (42266)

**Calls:**
- `readableAddChunkPushByteMode` (42264)
- `readableAddChunkPushByteMode` (1)
- `canPushMore` (1)

### `construct`
`internal:streams/destroy:122` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `Readable` (1)

**Calls:**
- `listenerCount` (1)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts:81` | Self: 0.0% (0us) | Total: 0.6% (735.8ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `write` (2)

### `node:fs/promises`
`node:fs/promises:2` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `parseModule` (2)

**Calls:**
- `anonymous` (2)

### `internal:streams/duplex`
`internal:streams/duplex:2` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `internal:stream`
`internal:stream:2` | Self: 0.0% (0us) | Total: 0.0% (3.4ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `anonymous` (3)

### `evaluate`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `moduleEvaluation` (1)

**Calls:**
- `(module)` (1)

### `internal:streams/operators`
`internal:streams/operators:2` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `anonymous` (2)

### `async loadAndEvaluateModule`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (4.7ms) | Samples: 0

**Called by:**
- `async loadAndEvaluateModule` (1)

**Calls:**
- `moduleEvaluation` (1)
- `async loadModule` (1)
- `async loadAndEvaluateModule` (1)

### `processNumber`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts:28` | Self: 0.0% (0us) | Total: 0.0% (10.5ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `fastParseNumber` (1)

### `internal:validators`
`internal:validators:2` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `emit`
`node:events:92` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `emitCloseNT` (1)

**Calls:**
- `(anonymous)` (1)

### `(module)`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts:15` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `evaluate` (1)

**Calls:**
- `createReadStream` (1)

### `requestSatisfy`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `async loadModule` (1)

**Calls:**
- `requestSatisfyUtil` (1)

### `emitCloseNT`
`internal:streams/destroy:78` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (1)

**Calls:**
- `emit` (1)

### `shift`
`internal:fixed_queue:44` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (1)

**Calls:**
- `shift` (1)

### `(anonymous)`
`node:fs:194` | Self: 0.0% (0us) | Total: 41.8% (49.44s) | Samples: 0

**Called by:**
- `(anonymous)` (42271)

**Calls:**
- `(anonymous)` (42266)
- `(anonymous)` (3)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `(anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts:43` | Self: 0.0% (0us) | Total: 3.0% (3.63s) | Samples: 0

**Called by:**
- `emit` (664)

**Calls:**
- `set` (664)

### `requestSatisfyUtil`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)
- `requestSatisfy` (1)

**Calls:**
- `requestInstantiate` (2)

### `internal:streams/compose`
`internal:streams/compose:2` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `anonymous` (2)

### `(anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts:41` | Self: 0.0% (0us) | Total: 0.0% (23.9ms) | Samples: 0

**Called by:**
- `emit` (3)

**Calls:**
- `allocUnsafe` (3)

### `internal:fs/streams`
`internal:fs/streams:2` | Self: 0.0% (0us) | Total: 0.0% (3.4ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `anonymous` (3)

### `maybeReadMore`
`internal:streams/readable:401` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `addChunk` (1)

**Calls:**
- `nextTick` (1)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts:115` | Self: 0.0% (0us) | Total: 0.0% (19.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `async unlink` (1)

### `get ReadStream`
`node:fs:577` | Self: 0.0% (0us) | Total: 0.0% (3.4ms) | Samples: 0

**Called by:**
- `parseModule` (3)

**Calls:**
- `anonymous` (3)

### `moduleEvaluation`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (4.5ms) | Samples: 0

**Called by:**
- `moduleEvaluation` (1)
- `async loadAndEvaluateModule` (1)

**Calls:**
- `moduleEvaluation` (1)
- `evaluate` (1)

### `(anonymous)`
`internal:fs/streams:146` | Self: 0.0% (0us) | Total: 0.0% (8.6ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `copy` (1)

### `(anonymous)`
`internal:streams/readable:346` | Self: 0.0% (0us) | Total: 0.0% (14.3ms) | Samples: 0

**Called by:**
- `maybeReadMore_` (13)

**Calls:**
- `(anonymous)` (7)
- `(anonymous)` (6)

### `readableAddChunkPushByteMode`
`internal:streams/readable:243` | Self: 0.0% (0us) | Total: 41.7% (49.41s) | Samples: 0

**Called by:**
- `(anonymous)` (42264)

**Calls:**
- `addChunk` (42261)
- `addChunk` (2)
- `addChunk` (1)

### `ReadStream`
`internal:fs/streams:86` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `createReadStream` (1)

**Calls:**
- `Readable` (1)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts:98` | Self: 0.0% (0us) | Total: 0.0% (6.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (6)

**Calls:**
- `toLocaleString` (6)

### `emit`
`node:events:95` | Self: 0.0% (0us) | Total: 41.7% (49.37s) | Samples: 0

**Called by:**
- `addChunk` (42258)

**Calls:**
- `(anonymous)` (35948)
- `(anonymous)` (5642)
- `(anonymous)` (664)
- `(anonymous)` (3)
- `(anonymous)` (1)

### `createReadStream`
`node:fs:353` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `ReadStream` (1)

### `Readable`
`internal:streams/readable:162` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `ReadStream` (1)

**Calls:**
- `construct` (1)

### `internal:streams/pipeline`
`internal:streams/pipeline:2` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `anonymous` (2)

### `(anonymous)`
`internal:fs/streams:138` | Self: 0.0% (0us) | Total: 0.0% (6.7ms) | Samples: 0

**Called by:**
- `(anonymous)` (6)

**Calls:**
- `read` (6)

### `node:events`
`node:events:9` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `read`
`node:fs:194` | Self: 0.0% (0us) | Total: 0.0% (6.7ms) | Samples: 0

**Called by:**
- `(anonymous)` (6)

**Calls:**
- `read` (4)
- `then` (2)

### `requestFetch`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `fetch` (1)

### `node:stream`
`node:stream:2` | Self: 0.0% (0us) | Total: 0.0% (3.4ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `anonymous` (3)

## Files

| Self% | Self | File |
|------:|-----:|------|
| 79.1% | 93.62s | `[native code]` |
| 20.7% | 24.52s | `/home/eugen/projekte/jsarena/bench/implementation_array.ts` |
| 0.0% | 46.4ms | `internal:streams/readable` |
| 0.0% | 19.3ms | `node:fs/promises` |
| 0.0% | 13.1ms | `internal:fs/streams` |
| 0.0% | 10.5ms | `/home/eugen/projekte/jsarena/bench/helper.ts` |
| 0.0% | 10.5ms | `node:events` |
| 0.0% | 1.1ms | `internal:fixed_queue` |
| 0.0% | 1.0ms | `node:fs` |
