# CPU Profile

| Duration | Samples | Interval | Functions |
|----------|---------|----------|----------|
| 5.93s | 5203 | 1.0ms | 105 |

**Top 10:** `BigInt` 18.4%, `async (anonymous)` 14.0%, `[_normalWrite]` 13.3%, `(anonymous)` 9.7%, `(anonymous)` 6.0%, `reduce` 5.4%, `[_normalWrite]` 5.1%, `[_normalWrite]` 4.6%, `createIterResult` 3.7%, `async (anonymous)` 3.1%

## Hot Functions (Self Time)

| Self% | Self | Total% | Total | Function | Location |
|------:|-----:|-------:|------:|----------|----------|
| 18.4% | 1.09s | 18.4% | 1.09s | `BigInt` | `[native code]` |
| 14.0% | 831.4ms | 14.0% | 831.4ms | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:23` |
| 13.3% | 789.4ms | 15.1% | 896.0ms | `[_normalWrite]` | `node:readline:670` |
| 9.7% | 575.8ms | 9.7% | 575.8ms | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:42` |
| 6.0% | 359.4ms | 98.9% | 5.86s | `(anonymous)` | `[native code]` |
| 5.4% | 321.7ms | 15.1% | 897.5ms | `reduce` | `[native code]` |
| 5.1% | 302.5ms | 5.1% | 305.9ms | `[_normalWrite]` | `node:readline:671` |
| 4.6% | 273.9ms | 6.9% | 412.2ms | `[_normalWrite]` | `node:readline:675` |
| 3.7% | 224.0ms | 3.7% | 224.0ms | `createIterResult` | `node:events:324` |
| 3.1% | 184.8ms | 3.1% | 184.8ms | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:24` |
| 3.0% | 178.0ms | 3.0% | 178.0ms | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:33` |
| 2.3% | 140.3ms | 6.1% | 364.3ms | `next` | `node:events:341` |
| 1.9% | 114.6ms | 1.9% | 114.6ms | `[_normalWrite]` | `node:readline:667` |
| 1.7% | 106.6ms | 1.7% | 106.6ms | `/\r?\n\|\r(?!\n)/g` | `[native code]` |
| 1.4% | 86.3ms | 1.4% | 86.3ms | `write` | `[native code]` |
| 0.9% | 56.2ms | 0.9% | 56.2ms | `FixedCircularBuffer` | `internal:fixed_queue:9` |
| 0.6% | 40.8ms | 32.7% | 1.94s | `emit` | `node:events:95` |
| 0.6% | 38.8ms | 0.6% | 38.8ms | `allocUnsafeSlow` | `[native code]` |
| 0.5% | 34.8ms | 6.9% | 410.6ms | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:20` |
| 0.5% | 32.4ms | 0.5% | 32.4ms | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:8` |
| 0.3% | 23.0ms | 0.7% | 46.0ms | `writeFileSync` | `[native code]` |
| 0.2% | 14.0ms | 18.7% | 1.10s | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:22` |
| 0.1% | 10.4ms | 0.1% | 10.4ms | `eventHandler` | `node:events:398` |
| 0.1% | 10.1ms | 0.3% | 20.2ms | `readFileSync` | `[native code]` |
| 0.1% | 9.7ms | 0.1% | 9.7ms | `pause` | `node:readline:640` |
| 0.1% | 8.6ms | 0.1% | 8.6ms | `(anonymous)` | `node:readline:581` |
| 0.1% | 7.9ms | 0.1% | 7.9ms | `next` | `node:events` |
| 0.1% | 6.6ms | 0.1% | 6.6ms | `toLocaleString` | `[native code]` |
| 0.1% | 6.3ms | 0.4% | 27.2ms | `anonymous` | `[native code]` |
| 0.0% | 5.3ms | 0.0% | 5.3ms | `read` | `[native code]` |
| 0.0% | 4.4ms | 0.1% | 11.7ms | `parseModule` | `[native code]` |
| 0.0% | 4.1ms | 1.0% | 60.3ms | `push` | `internal:fixed_queue:40` |
| 0.0% | 3.3ms | 0.0% | 3.3ms | `push` | `[native code]` |
| 0.0% | 2.8ms | 0.0% | 2.8ms | `emit` | `node:events:79` |
| 0.0% | 2.3ms | 0.0% | 2.3ms | `push` | `internal:fixed_queue:18` |
| 0.0% | 1.9ms | 0.0% | 5.7ms | `[_onLine]` | `node:readline:585` |
| 0.0% | 1.9ms | 0.0% | 1.9ms | `nextTick` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `[_normalWrite]` | `node:readline:673` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `ReadStream` | `internal:fs/streams` |
| 0.0% | 1.2ms | 0.0% | 2.4ms | `unlinkSync` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 2.1ms | `resume` | `node:readline:645` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `shift` | `internal:fixed_queue:46` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `internal:streams/readable:325` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `closeHandler` | `node:events` |
| 0.0% | 1.1ms | 1.4% | 87.5ms | `[_normalWrite]` | `node:readline:658` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `internal:streams/readable:343` |
| 0.0% | 1.1ms | 99.7% | 5.91s | `processTicksAndRejections` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `internal:primordials` |
| 0.0% | 974us | 0.0% | 974us | `[_normalWrite]` | `node:readline:669` |
| 0.0% | 929us | 0.0% | 929us | `[_normalWrite]` | `node:readline:664` |
| 0.0% | 911us | 0.0% | 911us | `(anonymous)` | `internal:streams/readable:563` |
| 0.0% | 906us | 1.0% | 63.6ms | `eventHandler` | `node:events:396` |

## Call Tree (Total Time)

| Total% | Total | Self% | Self | Function | Location |
|-------:|------:|------:|-----:|----------|----------|
| 99.7% | 5.91s | 0.0% | 1.1ms | `processTicksAndRejections` | `[native code]` |
| 98.9% | 5.86s | 6.0% | 359.4ms | `(anonymous)` | `[native code]` |
| 32.7% | 1.94s | 0.6% | 40.8ms | `emit` | `node:events:95` |
| 30.7% | 1.82s | 0.0% | 0us | `(anonymous)` | `internal:fs/streams:148` |
| 30.7% | 1.82s | 0.0% | 0us | `(anonymous)` | `node:fs:194` |
| 30.7% | 1.82s | 0.0% | 0us | `readableAddChunkPushByteMode` | `internal:streams/readable:243` |
| 30.6% | 1.81s | 0.0% | 0us | `addChunk` | `internal:streams/readable:265` |
| 30.6% | 1.81s | 0.0% | 0us | `bound onData` | `[native code]` |
| 30.6% | 1.81s | 0.0% | 0us | `onData` | `node:readline:463` |
| 18.7% | 1.10s | 0.2% | 14.0ms | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:22` |
| 18.4% | 1.09s | 18.4% | 1.09s | `BigInt` | `[native code]` |
| 15.1% | 897.5ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:42` |
| 15.1% | 897.5ms | 5.4% | 321.7ms | `reduce` | `[native code]` |
| 15.1% | 896.0ms | 13.3% | 789.4ms | `[_normalWrite]` | `node:readline:670` |
| 14.0% | 831.4ms | 14.0% | 831.4ms | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:23` |
| 9.7% | 575.8ms | 9.7% | 575.8ms | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:42` |
| 6.9% | 412.2ms | 4.6% | 273.9ms | `[_normalWrite]` | `node:readline:675` |
| 6.9% | 410.6ms | 0.5% | 34.8ms | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:20` |
| 6.1% | 364.3ms | 2.3% | 140.3ms | `next` | `node:events:341` |
| 5.1% | 305.9ms | 5.1% | 302.5ms | `[_normalWrite]` | `node:readline:671` |
| 3.7% | 224.0ms | 3.7% | 224.0ms | `createIterResult` | `node:events:324` |
| 3.1% | 184.8ms | 3.1% | 184.8ms | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:24` |
| 3.0% | 178.0ms | 3.0% | 178.0ms | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:33` |
| 2.0% | 123.8ms | 0.0% | 0us | `(anonymous)` | `node:readline:585` |
| 1.9% | 114.6ms | 1.9% | 114.6ms | `[_normalWrite]` | `node:readline:667` |
| 1.7% | 106.6ms | 1.7% | 106.6ms | `/\r?\n\|\r(?!\n)/g` | `[native code]` |
| 1.4% | 87.5ms | 0.0% | 1.1ms | `[_normalWrite]` | `node:readline:658` |
| 1.4% | 86.3ms | 1.4% | 86.3ms | `write` | `[native code]` |
| 1.0% | 63.6ms | 0.0% | 906us | `eventHandler` | `node:events:396` |
| 1.0% | 60.3ms | 0.0% | 4.1ms | `push` | `internal:fixed_queue:40` |
| 0.9% | 56.2ms | 0.9% | 56.2ms | `FixedCircularBuffer` | `internal:fixed_queue:9` |
| 0.7% | 46.0ms | 0.3% | 23.0ms | `writeFileSync` | `[native code]` |
| 0.7% | 45.4ms | 0.0% | 0us | `maybeReadMore_` | `internal:streams/readable:406` |
| 0.7% | 44.2ms | 0.0% | 0us | `(anonymous)` | `internal:streams/readable:346` |
| 0.6% | 38.8ms | 0.6% | 38.8ms | `allocUnsafeSlow` | `[native code]` |
| 0.6% | 38.8ms | 0.0% | 0us | `(anonymous)` | `internal:fs/streams:137` |
| 0.5% | 32.4ms | 0.5% | 32.4ms | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:8` |
| 0.4% | 27.2ms | 0.1% | 6.3ms | `anonymous` | `[native code]` |
| 0.3% | 23.0ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:37` |
| 0.3% | 20.2ms | 0.1% | 10.1ms | `readFileSync` | `[native code]` |
| 0.1% | 11.7ms | 0.0% | 4.4ms | `parseModule` | `[native code]` |
| 0.1% | 11.7ms | 0.0% | 0us | `async (anonymous)` | `[native code]` |
| 0.1% | 10.4ms | 0.1% | 10.4ms | `eventHandler` | `node:events:398` |
| 0.1% | 10.1ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:39` |
| 0.1% | 9.7ms | 0.0% | 0us | `eventHandler` | `node:events:395` |
| 0.1% | 9.7ms | 0.1% | 9.7ms | `pause` | `node:readline:640` |
| 0.1% | 8.6ms | 0.1% | 8.6ms | `(anonymous)` | `node:readline:581` |
| 0.1% | 7.9ms | 0.1% | 7.9ms | `next` | `node:events` |
| 0.1% | 6.6ms | 0.1% | 6.6ms | `toLocaleString` | `[native code]` |
| 0.1% | 6.6ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:50` |
| 0.0% | 5.7ms | 0.0% | 1.9ms | `[_onLine]` | `node:readline:585` |
| 0.0% | 5.3ms | 0.0% | 0us | `(anonymous)` | `internal:fs/streams:138` |
| 0.0% | 5.3ms | 0.0% | 5.3ms | `read` | `[native code]` |
| 0.0% | 5.3ms | 0.0% | 0us | `read` | `node:fs:194` |
| 0.0% | 4.3ms | 0.0% | 0us | `get ReadStream` | `node:fs:577` |
| 0.0% | 3.3ms | 0.0% | 3.3ms | `push` | `[native code]` |
| 0.0% | 3.2ms | 0.0% | 0us | `node:stream` | `node:stream:2` |
| 0.0% | 3.2ms | 0.0% | 0us | `internal:fs/streams` | `internal:fs/streams:2` |
| 0.0% | 3.2ms | 0.0% | 0us | `internal:stream` | `internal:stream:2` |
| 0.0% | 2.9ms | 0.0% | 0us | `node:fs` | `node:fs:2` |
| 0.0% | 2.8ms | 0.0% | 2.8ms | `emit` | `node:events:79` |
| 0.0% | 2.5ms | 0.0% | 0us | `(module)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:62` |
| 0.0% | 2.5ms | 0.0% | 0us | `async asyncModuleEvaluation` | `[native code]` |
| 0.0% | 2.5ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:7` |
| 0.0% | 2.5ms | 0.0% | 0us | `evaluate` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 1.2ms | `unlinkSync` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 0us | `emit` | `node:events:92` |
| 0.0% | 2.3ms | 0.0% | 0us | `push` | `internal:fixed_queue:41` |
| 0.0% | 2.3ms | 0.0% | 2.3ms | `push` | `internal:fixed_queue:18` |
| 0.0% | 2.3ms | 0.0% | 0us | `internal:streams/compose` | `internal:streams/compose:2` |
| 0.0% | 2.3ms | 0.0% | 0us | `internal:streams/operators` | `internal:streams/operators:2` |
| 0.0% | 2.1ms | 0.0% | 1.2ms | `resume` | `node:readline:645` |
| 0.0% | 2.1ms | 0.0% | 0us | `next` | `node:events:340` |
| 0.0% | 1.9ms | 0.0% | 1.9ms | `nextTick` | `[native code]` |
| 0.0% | 1.9ms | 0.0% | 0us | `addChunk` | `internal:streams/readable:277` |
| 0.0% | 1.9ms | 0.0% | 0us | `maybeReadMore` | `internal:streams/readable:401` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `[_normalWrite]` | `node:readline:673` |
| 0.0% | 1.2ms | 0.0% | 0us | `createReadStream` | `node:fs:353` |
| 0.0% | 1.2ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:16` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `ReadStream` | `internal:fs/streams` |
| 0.0% | 1.2ms | 0.0% | 0us | `internal:streams/duplex` | `internal:streams/duplex:2` |
| 0.0% | 1.2ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_array.ts:62` |
| 0.0% | 1.2ms | 0.0% | 0us | `internal:streams/pipeline` | `internal:streams/pipeline:2` |
| 0.0% | 1.2ms | 0.0% | 0us | `next` | `node:events:338` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `shift` | `internal:fixed_queue:46` |
| 0.0% | 1.2ms | 0.0% | 0us | `flow` | `internal:streams/readable:591` |
| 0.0% | 1.2ms | 0.0% | 0us | `resume_` | `internal:streams/readable:580` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `internal:streams/readable:325` |
| 0.0% | 1.2ms | 0.0% | 0us | `bound onEnd` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `closeHandler` | `node:events` |
| 0.0% | 1.2ms | 0.0% | 0us | `close` | `node:readline:635` |
| 0.0% | 1.2ms | 0.0% | 0us | `onEnd` | `node:readline:468` |
| 0.0% | 1.2ms | 0.0% | 0us | `endReadableNT` | `internal:streams/readable:862` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `(anonymous)` | `internal:streams/readable:343` |
| 0.0% | 1.0ms | 0.0% | 0us | `forEach` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `node:events` | `node:events:9` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `internal:primordials` |
| 0.0% | 1.0ms | 0.0% | 0us | `bound call` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `makeSafe` | `internal:primordials:30` |
| 0.0% | 1.0ms | 0.0% | 0us | `internal:shared` | `internal:shared:2` |
| 0.0% | 1.0ms | 0.0% | 0us | `internal:validators` | `internal:validators:2` |
| 0.0% | 1.0ms | 0.0% | 0us | `internal:primordials` | `internal:primordials:71` |
| 0.0% | 974us | 0.0% | 974us | `[_normalWrite]` | `node:readline:669` |
| 0.0% | 929us | 0.0% | 929us | `[_normalWrite]` | `node:readline:664` |
| 0.0% | 911us | 0.0% | 911us | `(anonymous)` | `internal:streams/readable:563` |

## Function Details

### `BigInt`
`[native code]` | Self: 18.4% (1.09s) | Total: 18.4% (1.09s) | Samples: 958

**Called by:**
- `async (anonymous)` (958)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts:23` | Self: 14.0% (831.4ms) | Total: 14.0% (831.4ms) | Samples: 720

**Called by:**
- `(anonymous)` (720)

### `[_normalWrite]`
`node:readline:670` | Self: 13.3% (789.4ms) | Total: 15.1% (896.0ms) | Samples: 699

**Called by:**
- `onData` (793)

**Calls:**
- `/\r?\n\|\r(?!\n)/g` (94)

### `(anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts:42` | Self: 9.7% (575.8ms) | Total: 9.7% (575.8ms) | Samples: 529

**Called by:**
- `reduce` (529)

### `(anonymous)`
`[native code]` | Self: 6.0% (359.4ms) | Total: 98.9% (5.86s) | Samples: 300

**Called by:**
- `processTicksAndRejections` (5145)

**Calls:**
- `(anonymous)` (1615)
- `async (anonymous)` (969)
- `async (anonymous)` (795)
- `async (anonymous)` (720)
- `async (anonymous)` (371)
- `async (anonymous)` (171)
- `async (anonymous)` (166)
- `async (anonymous)` (28)
- `async (anonymous)` (6)
- `async (anonymous)` (2)
- `async (anonymous)` (1)
- `async (anonymous)` (1)

### `reduce`
`[native code]` | Self: 5.4% (321.7ms) | Total: 15.1% (897.5ms) | Samples: 266

**Called by:**
- `async (anonymous)` (795)

**Calls:**
- `(anonymous)` (529)

### `[_normalWrite]`
`node:readline:671` | Self: 5.1% (302.5ms) | Total: 5.1% (305.9ms) | Samples: 276

**Called by:**
- `onData` (278)

**Calls:**
- `push` (2)

### `[_normalWrite]`
`node:readline:675` | Self: 4.6% (273.9ms) | Total: 6.9% (412.2ms) | Samples: 241

**Called by:**
- `onData` (356)

**Calls:**
- `(anonymous)` (105)
- `(anonymous)` (6)
- `[_onLine]` (4)

### `createIterResult`
`node:events:324` | Self: 3.7% (224.0ms) | Total: 3.7% (224.0ms) | Samples: 200

**Called by:**
- `next` (200)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts:24` | Self: 3.1% (184.8ms) | Total: 3.1% (184.8ms) | Samples: 171

**Called by:**
- `(anonymous)` (171)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts:33` | Self: 3.0% (178.0ms) | Total: 3.0% (178.0ms) | Samples: 166

**Called by:**
- `(anonymous)` (166)

### `next`
`node:events:341` | Self: 2.3% (140.3ms) | Total: 6.1% (364.3ms) | Samples: 129

**Called by:**
- `async (anonymous)` (329)

**Calls:**
- `createIterResult` (200)

### `[_normalWrite]`
`node:readline:667` | Self: 1.9% (114.6ms) | Total: 1.9% (114.6ms) | Samples: 105

**Called by:**
- `onData` (105)

### `/\r?\n\|\r(?!\n)/g`
`[native code]` | Self: 1.7% (106.6ms) | Total: 1.7% (106.6ms) | Samples: 94

**Called by:**
- `[_normalWrite]` (94)

### `write`
`[native code]` | Self: 1.4% (86.3ms) | Total: 1.4% (86.3ms) | Samples: 77

**Called by:**
- `[_normalWrite]` (77)

### `FixedCircularBuffer`
`internal:fixed_queue:9` | Self: 0.9% (56.2ms) | Total: 0.9% (56.2ms) | Samples: 48

**Called by:**
- `push` (48)

### `emit`
`node:events:95` | Self: 0.6% (40.8ms) | Total: 32.7% (1.94s) | Samples: 35

**Called by:**
- `addChunk` (1613)
- `(anonymous)` (105)
- `[_onLine]` (1)

**Calls:**
- `bound onData` (1613)
- `eventHandler` (54)
- `eventHandler` (9)
- `eventHandler` (8)

### `allocUnsafeSlow`
`[native code]` | Self: 0.6% (38.8ms) | Total: 0.6% (38.8ms) | Samples: 36

**Called by:**
- `(anonymous)` (36)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts:20` | Self: 0.5% (34.8ms) | Total: 6.9% (410.6ms) | Samples: 33

**Called by:**
- `(anonymous)` (371)
- `async (anonymous)` (1)

**Calls:**
- `next` (329)
- `next` (7)
- `next` (2)
- `next` (1)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts:8` | Self: 0.5% (32.4ms) | Total: 0.5% (32.4ms) | Samples: 28

**Called by:**
- `(anonymous)` (28)

### `writeFileSync`
`[native code]` | Self: 0.3% (23.0ms) | Total: 0.7% (46.0ms) | Samples: 2

**Called by:**
- `writeFileSync` (2)
- `async (anonymous)` (2)

**Calls:**
- `writeFileSync` (2)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts:22` | Self: 0.2% (14.0ms) | Total: 18.7% (1.10s) | Samples: 11

**Called by:**
- `(anonymous)` (969)

**Calls:**
- `BigInt` (958)

### `eventHandler`
`node:events:398` | Self: 0.1% (10.4ms) | Total: 0.1% (10.4ms) | Samples: 8

**Called by:**
- `emit` (8)

### `readFileSync`
`[native code]` | Self: 0.1% (10.1ms) | Total: 0.3% (20.2ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)
- `readFileSync` (1)

**Calls:**
- `readFileSync` (1)

### `pause`
`node:readline:640` | Self: 0.1% (9.7ms) | Total: 0.1% (9.7ms) | Samples: 9

**Called by:**
- `eventHandler` (9)

### `(anonymous)`
`node:readline:581` | Self: 0.1% (8.6ms) | Total: 0.1% (8.6ms) | Samples: 6

**Called by:**
- `[_normalWrite]` (6)

### `next`
`node:events` | Self: 0.1% (7.9ms) | Total: 0.1% (7.9ms) | Samples: 7

**Called by:**
- `async (anonymous)` (7)

### `toLocaleString`
`[native code]` | Self: 0.1% (6.6ms) | Total: 0.1% (6.6ms) | Samples: 6

**Called by:**
- `async (anonymous)` (6)

### `anonymous`
`[native code]` | Self: 0.1% (6.3ms) | Total: 0.4% (27.2ms) | Samples: 6

**Called by:**
- `get ReadStream` (4)
- `node:stream` (3)
- `node:fs` (3)
- `internal:stream` (3)
- `internal:fs/streams` (3)
- `internal:streams/operators` (2)
- `internal:streams/compose` (2)
- `internal:shared` (1)
- `internal:streams/duplex` (1)
- `internal:validators` (1)
- `internal:streams/pipeline` (1)
- `node:events` (1)

**Calls:**
- `node:stream` (3)
- `internal:stream` (3)
- `internal:fs/streams` (3)
- `internal:streams/operators` (2)
- `internal:streams/compose` (2)
- `internal:streams/duplex` (1)
- `internal:primordials` (1)
- `internal:shared` (1)
- `internal:validators` (1)
- `internal:streams/pipeline` (1)
- `node:events` (1)

### `read`
`[native code]` | Self: 0.0% (5.3ms) | Total: 0.0% (5.3ms) | Samples: 5

**Called by:**
- `read` (5)

### `parseModule`
`[native code]` | Self: 0.0% (4.4ms) | Total: 0.1% (11.7ms) | Samples: 4

**Called by:**
- `async (anonymous)` (11)

**Calls:**
- `get ReadStream` (4)
- `node:fs` (3)

### `push`
`internal:fixed_queue:40` | Self: 0.0% (4.1ms) | Total: 1.0% (60.3ms) | Samples: 3

**Called by:**
- `eventHandler` (51)

**Calls:**
- `FixedCircularBuffer` (48)

### `push`
`[native code]` | Self: 0.0% (3.3ms) | Total: 0.0% (3.3ms) | Samples: 2

**Called by:**
- `[_normalWrite]` (2)

### `emit`
`node:events:79` | Self: 0.0% (2.8ms) | Total: 0.0% (2.8ms) | Samples: 2

**Called by:**
- `[_onLine]` (2)

### `push`
`internal:fixed_queue:18` | Self: 0.0% (2.3ms) | Total: 0.0% (2.3ms) | Samples: 2

**Called by:**
- `push` (2)

### `[_onLine]`
`node:readline:585` | Self: 0.0% (1.9ms) | Total: 0.0% (5.7ms) | Samples: 1

**Called by:**
- `[_normalWrite]` (4)

**Calls:**
- `emit` (2)
- `emit` (1)

### `nextTick`
`[native code]` | Self: 0.0% (1.9ms) | Total: 0.0% (1.9ms) | Samples: 2

**Called by:**
- `maybeReadMore` (2)

### `[_normalWrite]`
`node:readline:673` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `onData` (1)

### `ReadStream`
`internal:fs/streams` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `createReadStream` (1)

### `unlinkSync`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (2.4ms) | Samples: 1

**Called by:**
- `unlinkSync` (1)
- `async (anonymous)` (1)

**Calls:**
- `unlinkSync` (1)

### `resume`
`node:readline:645` | Self: 0.0% (1.2ms) | Total: 0.0% (2.1ms) | Samples: 1

**Called by:**
- `next` (2)

**Calls:**
- `(anonymous)` (1)

### `shift`
`internal:fixed_queue:46` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `next` (1)

### `(anonymous)`
`internal:streams/readable:325` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `flow` (1)

### `closeHandler`
`node:events` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `emit` (1)

### `[_normalWrite]`
`node:readline:658` | Self: 0.0% (1.1ms) | Total: 1.4% (87.5ms) | Samples: 1

**Called by:**
- `onData` (78)

**Calls:**
- `write` (77)

### `(anonymous)`
`internal:streams/readable:343` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `maybeReadMore_` (1)

### `processTicksAndRejections`
`[native code]` | Self: 0.0% (1.1ms) | Total: 99.7% (5.91s) | Samples: 1

**Calls:**
- `(anonymous)` (5145)
- `maybeReadMore_` (42)
- `resume_` (1)
- `endReadableNT` (1)

### `(anonymous)`
`internal:primordials` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `forEach` (1)

### `[_normalWrite]`
`node:readline:669` | Self: 0.0% (974us) | Total: 0.0% (974us) | Samples: 1

**Called by:**
- `onData` (1)

### `[_normalWrite]`
`node:readline:664` | Self: 0.0% (929us) | Total: 0.0% (929us) | Samples: 1

**Called by:**
- `onData` (1)

### `(anonymous)`
`internal:streams/readable:563` | Self: 0.0% (911us) | Total: 0.0% (911us) | Samples: 1

**Called by:**
- `resume` (1)

### `eventHandler`
`node:events:396` | Self: 0.0% (906us) | Total: 1.0% (63.6ms) | Samples: 1

**Called by:**
- `emit` (54)

**Calls:**
- `push` (51)
- `push` (2)

### `resume_`
`internal:streams/readable:580` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (1)

**Calls:**
- `flow` (1)

### `internal:streams/compose`
`internal:streams/compose:2` | Self: 0.0% (0us) | Total: 0.0% (2.3ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `anonymous` (2)

### `emit`
`node:events:92` | Self: 0.0% (0us) | Total: 0.0% (2.4ms) | Samples: 0

**Called by:**
- `close` (1)
- `endReadableNT` (1)

**Calls:**
- `closeHandler` (1)
- `bound onEnd` (1)

### `(anonymous)`
`internal:fs/streams:148` | Self: 0.0% (0us) | Total: 30.7% (1.82s) | Samples: 0

**Called by:**
- `(anonymous)` (1615)

**Calls:**
- `readableAddChunkPushByteMode` (1615)

### `internal:validators`
`internal:validators:2` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `internal:streams/operators`
`internal:streams/operators:2` | Self: 0.0% (0us) | Total: 0.0% (2.3ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `anonymous` (2)

### `onData`
`node:readline:463` | Self: 0.0% (0us) | Total: 30.6% (1.81s) | Samples: 0

**Called by:**
- `bound onData` (1613)

**Calls:**
- `[_normalWrite]` (793)
- `[_normalWrite]` (356)
- `[_normalWrite]` (278)
- `[_normalWrite]` (105)
- `[_normalWrite]` (78)
- `[_normalWrite]` (1)
- `[_normalWrite]` (1)
- `[_normalWrite]` (1)

### `(module)`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts:62` | Self: 0.0% (0us) | Total: 0.0% (2.5ms) | Samples: 0

**Called by:**
- `evaluate` (2)

**Calls:**
- `async (anonymous)` (2)

### `maybeReadMore`
`internal:streams/readable:401` | Self: 0.0% (0us) | Total: 0.0% (1.9ms) | Samples: 0

**Called by:**
- `addChunk` (2)

**Calls:**
- `nextTick` (2)

### `bound onEnd`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `emit` (1)

**Calls:**
- `onEnd` (1)

### `onEnd`
`node:readline:468` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `bound onEnd` (1)

**Calls:**
- `close` (1)

### `(anonymous)`
`internal:streams/readable:346` | Self: 0.0% (0us) | Total: 0.7% (44.2ms) | Samples: 0

**Called by:**
- `maybeReadMore_` (41)

**Calls:**
- `(anonymous)` (36)
- `(anonymous)` (5)

### `node:stream`
`node:stream:2` | Self: 0.0% (0us) | Total: 0.0% (3.2ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `anonymous` (3)

### `node:fs`
`node:fs:2` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `parseModule` (3)

**Calls:**
- `anonymous` (3)

### `node:events`
`node:events:9` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `addChunk`
`internal:streams/readable:265` | Self: 0.0% (0us) | Total: 30.6% (1.81s) | Samples: 0

**Called by:**
- `readableAddChunkPushByteMode` (1613)

**Calls:**
- `emit` (1613)

### `addChunk`
`internal:streams/readable:277` | Self: 0.0% (0us) | Total: 0.0% (1.9ms) | Samples: 0

**Called by:**
- `readableAddChunkPushByteMode` (2)

**Calls:**
- `maybeReadMore` (2)

### `internal:streams/pipeline`
`internal:streams/pipeline:2` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `next`
`node:events:338` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `shift` (1)

### `read`
`node:fs:194` | Self: 0.0% (0us) | Total: 0.0% (5.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (5)

**Calls:**
- `read` (5)

### `push`
`internal:fixed_queue:41` | Self: 0.0% (0us) | Total: 0.0% (2.3ms) | Samples: 0

**Called by:**
- `eventHandler` (2)

**Calls:**
- `push` (2)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts:7` | Self: 0.0% (0us) | Total: 0.0% (2.5ms) | Samples: 0

**Called by:**
- `(module)` (2)

**Calls:**
- `async (anonymous)` (1)
- `async (anonymous)` (1)

### `maybeReadMore_`
`internal:streams/readable:406` | Self: 0.0% (0us) | Total: 0.7% (45.4ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (42)

**Calls:**
- `(anonymous)` (41)
- `(anonymous)` (1)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts:50` | Self: 0.0% (0us) | Total: 0.1% (6.6ms) | Samples: 0

**Called by:**
- `(anonymous)` (6)

**Calls:**
- `toLocaleString` (6)

### `internal:shared`
`internal:shared:2` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `flow`
`internal:streams/readable:591` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `resume_` (1)

**Calls:**
- `(anonymous)` (1)

### `eventHandler`
`node:events:395` | Self: 0.0% (0us) | Total: 0.1% (9.7ms) | Samples: 0

**Called by:**
- `emit` (9)

**Calls:**
- `pause` (9)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts:16` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `createReadStream` (1)

### `makeSafe`
`internal:primordials:30` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `internal:primordials` (1)

**Calls:**
- `bound call` (1)

### `internal:fs/streams`
`internal:fs/streams:2` | Self: 0.0% (0us) | Total: 0.0% (3.2ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `anonymous` (3)

### `close`
`node:readline:635` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `onEnd` (1)

**Calls:**
- `emit` (1)

### `get ReadStream`
`node:fs:577` | Self: 0.0% (0us) | Total: 0.0% (4.3ms) | Samples: 0

**Called by:**
- `parseModule` (4)

**Calls:**
- `anonymous` (4)

### `readableAddChunkPushByteMode`
`internal:streams/readable:243` | Self: 0.0% (0us) | Total: 30.7% (1.82s) | Samples: 0

**Called by:**
- `(anonymous)` (1615)

**Calls:**
- `addChunk` (1613)
- `addChunk` (2)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts:62` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `unlinkSync` (1)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts:42` | Self: 0.0% (0us) | Total: 15.1% (897.5ms) | Samples: 0

**Called by:**
- `(anonymous)` (795)

**Calls:**
- `reduce` (795)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts:37` | Self: 0.0% (0us) | Total: 0.3% (23.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `writeFileSync` (2)

### `evaluate`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.5ms) | Samples: 0

**Called by:**
- `async asyncModuleEvaluation` (2)

**Calls:**
- `(module)` (2)

### `(anonymous)`
`node:fs:194` | Self: 0.0% (0us) | Total: 30.7% (1.82s) | Samples: 0

**Called by:**
- `(anonymous)` (1615)

**Calls:**
- `(anonymous)` (1615)

### `endReadableNT`
`internal:streams/readable:862` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (1)

**Calls:**
- `emit` (1)

### `(anonymous)`
`internal:fs/streams:137` | Self: 0.0% (0us) | Total: 0.6% (38.8ms) | Samples: 0

**Called by:**
- `(anonymous)` (36)

**Calls:**
- `allocUnsafeSlow` (36)

### `forEach`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `bound call` (1)

**Calls:**
- `(anonymous)` (1)

### `async asyncModuleEvaluation`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.5ms) | Samples: 0

**Calls:**
- `evaluate` (2)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_array.ts:39` | Self: 0.0% (0us) | Total: 0.1% (10.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `readFileSync` (1)

### `bound call`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `makeSafe` (1)

**Calls:**
- `forEach` (1)

### `async (anonymous)`
`[native code]` | Self: 0.0% (0us) | Total: 0.1% (11.7ms) | Samples: 0

**Calls:**
- `parseModule` (11)

### `bound onData`
`[native code]` | Self: 0.0% (0us) | Total: 30.6% (1.81s) | Samples: 0

**Called by:**
- `emit` (1613)

**Calls:**
- `onData` (1613)

### `internal:stream`
`internal:stream:2` | Self: 0.0% (0us) | Total: 0.0% (3.2ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `anonymous` (3)

### `internal:primordials`
`internal:primordials:71` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `makeSafe` (1)

### `internal:streams/duplex`
`internal:streams/duplex:2` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `(anonymous)`
`node:readline:585` | Self: 0.0% (0us) | Total: 2.0% (123.8ms) | Samples: 0

**Called by:**
- `[_normalWrite]` (105)

**Calls:**
- `emit` (105)

### `next`
`node:events:340` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `async (anonymous)` (2)

**Calls:**
- `resume` (2)

### `(anonymous)`
`internal:fs/streams:138` | Self: 0.0% (0us) | Total: 0.0% (5.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (5)

**Calls:**
- `read` (5)

### `createReadStream`
`node:fs:353` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `ReadStream` (1)

## Files

| Self% | Self | File |
|------:|-----:|------|
| 34.9% | 2.07s | `[native code]` |
| 31.2% | 1.85s | `/home/eugen/projekte/jsarena/bench/implementation_array.ts` |
| 25.4% | 1.50s | `node:readline` |
| 7.2% | 428.6ms | `node:events` |
| 1.0% | 63.9ms | `internal:fixed_queue` |
| 0.0% | 3.3ms | `internal:streams/readable` |
| 0.0% | 1.2ms | `internal:fs/streams` |
| 0.0% | 1.0ms | `internal:primordials` |
