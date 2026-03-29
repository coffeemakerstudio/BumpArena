# CPU Profile

| Duration | Samples | Interval | Functions |
|----------|---------|----------|----------|
| 108.73s | 95636 | 1.0ms | 130 |

**Top 10:** `Buffer` 22.5%, `BigInt` 16.9%, `(anonymous)` 12.8%, `(anonymous)` 8.4%, `(anonymous)` 8.0%, `typedArrayViewLength` 5.1%, `indexOf` 4.3%, `set` 4.1%, `arrayIteratorNextHelper` 3.8%, `get buffer` 3.7%

## Hot Functions (Self Time)

| Self% | Self | Total% | Total | Function | Location |
|------:|-----:|-------:|------:|----------|----------|
| 22.5% | 24.54s | 22.5% | 24.54s | `Buffer` | `[native code]` |
| 16.9% | 18.36s | 16.9% | 18.36s | `BigInt` | `[native code]` |
| 12.8% | 14.00s | 100.0% | 151.32s | `(anonymous)` | `[native code]` |
| 8.4% | 9.21s | 16.9% | 18.42s | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:77` |
| 8.0% | 8.75s | 16.4% | 17.91s | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:93` |
| 5.1% | 5.62s | 5.1% | 5.62s | `typedArrayViewLength` | `[native code]` |
| 4.3% | 4.67s | 4.3% | 4.67s | `indexOf` | `[native code]` |
| 4.1% | 4.48s | 4.1% | 4.48s | `set` | `[native code]` |
| 3.8% | 4.15s | 9.0% | 9.78s | `arrayIteratorNextHelper` | `[native code]` |
| 3.7% | 4.10s | 3.7% | 4.10s | `get buffer` | `[native code]` |
| 2.9% | 3.21s | 2.9% | 3.21s | `collectActiveRecords` | `/home/eugen/projekte/jsarena/arena.ts:271` |
| 1.4% | 1.53s | 5.7% | 6.21s | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:52` |
| 1.2% | 1.38s | 1.2% | 1.38s | `typedArrayViewIsDetached` | `[native code]` |
| 0.9% | 1.03s | 11.2% | 12.21s | `next` | `[native code]` |
| 0.8% | 971.5ms | 0.8% | 971.5ms | `allocUnsafe` | `[native code]` |
| 0.6% | 744.8ms | 0.6% | 744.8ms | `write` | `[native code]` |
| 0.5% | 568.8ms | 0.5% | 568.8ms | `_initBlock` | `/home/eugen/projekte/jsarena/arena.ts` |
| 0.2% | 287.2ms | 0.2% | 287.2ms | `_initBlock` | `/home/eugen/projekte/jsarena/arena.ts:118` |
| 0.1% | 202.8ms | 0.1% | 202.8ms | `Float64Array` | `[native code]` |
| 0.1% | 186.4ms | 0.1% | 186.4ms | `_initBlock` | `/home/eugen/projekte/jsarena/arena.ts:115` |
| 0.0% | 103.7ms | 0.2% | 306.6ms | `collectActiveRecords` | `/home/eugen/projekte/jsarena/arena.ts:292` |
| 0.0% | 87.5ms | 0.0% | 87.5ms | `onDestroy` | `internal:streams/destroy:50` |
| 0.0% | 72.8ms | 0.0% | 72.8ms | `processNumber` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts` |
| 0.0% | 58.9ms | 44.7% | 48.60s | `collectActiveRecords` | `/home/eugen/projekte/jsarena/arena.ts:296` |
| 0.0% | 46.2ms | 0.0% | 46.2ms | `collectActiveRecords` | `/home/eugen/projekte/jsarena/arena.ts:275` |
| 0.0% | 38.1ms | 0.0% | 38.1ms | `Uint8Array` | `[native code]` |
| 0.0% | 23.5ms | 0.0% | 23.5ms | `collectActiveRecords` | `/home/eugen/projekte/jsarena/arena.ts:270` |
| 0.0% | 19.6ms | 2.8% | 3.12s | `processNumber` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:25` |
| 0.0% | 18.3ms | 0.0% | 18.3ms | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts:333` |
| 0.0% | 12.5ms | 0.0% | 13.9ms | `collectActiveRecords` | `/home/eugen/projekte/jsarena/arena.ts:264` |
| 0.0% | 11.2ms | 1.7% | 1.93s | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts:332` |
| 0.0% | 11.0ms | 42.1% | 45.84s | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:63` |
| 0.0% | 11.0ms | 0.0% | 11.0ms | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts:310` |
| 0.0% | 10.9ms | 0.0% | 10.9ms | `_initBlock` | `/home/eugen/projekte/jsarena/arena.ts:119` |
| 0.0% | 7.3ms | 0.0% | 7.3ms | `toLocaleString` | `[native code]` |
| 0.0% | 6.6ms | 0.0% | 55.6ms | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts:311` |
| 0.0% | 6.6ms | 0.0% | 6.6ms | `allocUnsafeSlow` | `[native code]` |
| 0.0% | 5.4ms | 0.0% | 26.0ms | `anonymous` | `[native code]` |
| 0.0% | 5.1ms | 0.9% | 1.06s | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts:331` |
| 0.0% | 4.7ms | 0.0% | 11.2ms | `parseModule` | `[native code]` |
| 0.0% | 4.7ms | 0.0% | 4.7ms | `_initBlock` | `/home/eugen/projekte/jsarena/arena.ts:123` |
| 0.0% | 4.3ms | 0.0% | 4.3ms | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts:306` |
| 0.0% | 4.2ms | 0.0% | 4.2ms | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts` |
| 0.0% | 3.3ms | 0.0% | 3.3ms | `read` | `[native code]` |
| 0.0% | 3.3ms | 0.0% | 3.3ms | `copy` | `[native code]` |
| 0.0% | 2.8ms | 0.0% | 2.8ms | `readableAddChunkPushByteMode` | `internal:streams/readable:227` |
| 0.0% | 2.5ms | 0.0% | 2.5ms | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts` |
| 0.0% | 2.4ms | 0.0% | 2.4ms | `_initBlock` | `/home/eugen/projekte/jsarena/arena.ts:117` |
| 0.0% | 2.4ms | 0.0% | 2.4ms | `_initBlock` | `/home/eugen/projekte/jsarena/arena.ts:122` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `howMuchToRead` | `internal:streams/readable:307` |
| 0.0% | 1.3ms | 0.0% | 6.6ms | `asyncGeneratorResumeNext` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `fromList` | `internal:streams/readable:796` |
| 0.0% | 1.2ms | 0.0% | 13.7ms | `async createAsyncIterator` | `internal:streams/readable:647` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `addChunk` | `internal:streams/readable` |
| 0.0% | 1.2ms | 99.9% | 108.68s | `processTicksAndRejections` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `howMuchToRead` | `internal:streams/readable:306` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `readableAddChunkPushByteMode` | `internal:streams/readable:239` |
| 0.0% | 1.1ms | 0.0% | 2.0ms | `emitReadable_` | `internal:streams/readable:396` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `typedArrayViewIsTypedArrayView` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `_initBlock` | `/home/eugen/projekte/jsarena/arena.ts:121` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `internal:fs/streams` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `FixedCircularBuffer` | `internal:fixed_queue:9` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `readableAddChunkPushByteMode` | `internal:streams/readable:222` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `ceil` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async createAsyncIterator` | `internal:streams/readable` |
| 0.0% | 999us | 0.0% | 999us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:46` |
| 0.0% | 985us | 0.0% | 985us | `size` | `/home/eugen/projekte/jsarena/arena.ts` |
| 0.0% | 985us | 0.0% | 985us | `emit` | `node:events:79` |
| 0.0% | 973us | 0.0% | 973us | `shift` | `internal:fixed_queue` |
| 0.0% | 965us | 0.0% | 965us | `(anonymous)` | `internal:primordials` |
| 0.0% | 925us | 0.0% | 925us | `Promise` | `[native code]` |
| 0.0% | 924us | 0.0% | 924us | `(anonymous)` | `internal:streams/readable` |
| 0.0% | 909us | 0.0% | 909us | `maybeReadMore` | `internal:streams/readable` |
| 0.0% | 905us | 0.0% | 1.8ms | `async createAsyncIterator` | `internal:streams/readable:655` |

## Call Tree (Total Time)

| Total% | Total | Self% | Self | Function | Location |
|-------:|------:|------:|-----:|----------|----------|
| 100.0% | 151.32s | 12.8% | 14.00s | `(anonymous)` | `[native code]` |
| 99.9% | 108.68s | 0.0% | 1.2ms | `processTicksAndRejections` | `[native code]` |
| 44.7% | 48.60s | 0.0% | 58.9ms | `collectActiveRecords` | `/home/eugen/projekte/jsarena/arena.ts:296` |
| 42.1% | 45.84s | 0.0% | 11.0ms | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:63` |
| 22.6% | 24.64s | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:75` |
| 22.5% | 24.54s | 22.5% | 24.54s | `Buffer` | `[native code]` |
| 22.2% | 24.17s | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:91` |
| 16.9% | 18.42s | 8.4% | 9.21s | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:77` |
| 16.9% | 18.36s | 16.9% | 18.36s | `BigInt` | `[native code]` |
| 16.4% | 17.91s | 8.0% | 8.75s | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:93` |
| 11.2% | 12.21s | 0.9% | 1.03s | `next` | `[native code]` |
| 9.0% | 9.78s | 3.8% | 4.15s | `arrayIteratorNextHelper` | `[native code]` |
| 5.7% | 6.21s | 1.4% | 1.53s | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:52` |
| 5.6% | 6.11s | 0.0% | 0us | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:92` |
| 5.6% | 6.09s | 0.0% | 0us | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:76` |
| 5.1% | 5.62s | 5.1% | 5.62s | `typedArrayViewLength` | `[native code]` |
| 4.3% | 4.67s | 4.3% | 4.67s | `indexOf` | `[native code]` |
| 4.1% | 4.48s | 4.1% | 4.48s | `set` | `[native code]` |
| 3.7% | 4.10s | 3.7% | 4.10s | `get buffer` | `[native code]` |
| 3.0% | 3.33s | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:87` |
| 2.9% | 3.21s | 2.9% | 3.21s | `collectActiveRecords` | `/home/eugen/projekte/jsarena/arena.ts:271` |
| 2.8% | 3.12s | 0.0% | 19.6ms | `processNumber` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:25` |
| 2.3% | 2.55s | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:45` |
| 1.7% | 1.93s | 0.0% | 11.2ms | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts:332` |
| 1.2% | 1.38s | 1.2% | 1.38s | `typedArrayViewIsDetached` | `[native code]` |
| 0.9% | 1.06s | 0.0% | 5.1ms | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts:331` |
| 0.8% | 971.5ms | 0.8% | 971.5ms | `allocUnsafe` | `[native code]` |
| 0.8% | 970.5ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:43` |
| 0.6% | 744.8ms | 0.6% | 744.8ms | `write` | `[native code]` |
| 0.6% | 744.8ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:81` |
| 0.5% | 568.8ms | 0.5% | 568.8ms | `_initBlock` | `/home/eugen/projekte/jsarena/arena.ts` |
| 0.2% | 306.6ms | 0.0% | 103.7ms | `collectActiveRecords` | `/home/eugen/projekte/jsarena/arena.ts:292` |
| 0.2% | 287.2ms | 0.2% | 287.2ms | `_initBlock` | `/home/eugen/projekte/jsarena/arena.ts:118` |
| 0.1% | 202.8ms | 0.1% | 202.8ms | `Float64Array` | `[native code]` |
| 0.1% | 186.4ms | 0.1% | 186.4ms | `_initBlock` | `/home/eugen/projekte/jsarena/arena.ts:115` |
| 0.0% | 87.5ms | 0.0% | 87.5ms | `onDestroy` | `internal:streams/destroy:50` |
| 0.0% | 87.5ms | 0.0% | 0us | `(anonymous)` | `internal:fs/streams:191` |
| 0.0% | 72.8ms | 0.0% | 72.8ms | `processNumber` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts` |
| 0.0% | 60.0ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:89` |
| 0.0% | 55.6ms | 0.0% | 6.6ms | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts:311` |
| 0.0% | 46.2ms | 0.0% | 46.2ms | `collectActiveRecords` | `/home/eugen/projekte/jsarena/arena.ts:275` |
| 0.0% | 38.1ms | 0.0% | 38.1ms | `Uint8Array` | `[native code]` |
| 0.0% | 26.0ms | 0.0% | 5.4ms | `anonymous` | `[native code]` |
| 0.0% | 23.5ms | 0.0% | 23.5ms | `collectActiveRecords` | `/home/eugen/projekte/jsarena/arena.ts:270` |
| 0.0% | 18.3ms | 0.0% | 18.3ms | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts:333` |
| 0.0% | 13.9ms | 0.0% | 12.5ms | `collectActiveRecords` | `/home/eugen/projekte/jsarena/arena.ts:264` |
| 0.0% | 13.7ms | 0.0% | 1.2ms | `async createAsyncIterator` | `internal:streams/readable:647` |
| 0.0% | 12.5ms | 0.0% | 0us | `(anonymous)` | `node:fs:194` |
| 0.0% | 11.2ms | 0.0% | 0us | `async (anonymous)` | `[native code]` |
| 0.0% | 11.2ms | 0.0% | 4.7ms | `parseModule` | `[native code]` |
| 0.0% | 11.0ms | 0.0% | 11.0ms | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts:310` |
| 0.0% | 10.9ms | 0.0% | 10.9ms | `_initBlock` | `/home/eugen/projekte/jsarena/arena.ts:119` |
| 0.0% | 10.0ms | 0.0% | 0us | `(anonymous)` | `internal:streams/readable:346` |
| 0.0% | 8.0ms | 0.0% | 0us | `(anonymous)` | `internal:fs/streams:148` |
| 0.0% | 7.3ms | 0.0% | 7.3ms | `toLocaleString` | `[native code]` |
| 0.0% | 7.3ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:100` |
| 0.0% | 6.6ms | 0.0% | 0us | `(anonymous)` | `internal:fs/streams:137` |
| 0.0% | 6.6ms | 0.0% | 6.6ms | `allocUnsafeSlow` | `[native code]` |
| 0.0% | 6.6ms | 0.0% | 1.3ms | `asyncGeneratorResumeNext` | `[native code]` |
| 0.0% | 6.6ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:39` |
| 0.0% | 5.5ms | 0.0% | 0us | `moduleEvaluation` | `[native code]` |
| 0.0% | 4.7ms | 0.0% | 4.7ms | `_initBlock` | `/home/eugen/projekte/jsarena/arena.ts:123` |
| 0.0% | 4.5ms | 0.0% | 0us | `get ReadStream` | `node:fs:577` |
| 0.0% | 4.3ms | 0.0% | 4.3ms | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts:306` |
| 0.0% | 4.2ms | 0.0% | 4.2ms | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts` |
| 0.0% | 3.3ms | 0.0% | 3.3ms | `read` | `[native code]` |
| 0.0% | 3.3ms | 0.0% | 0us | `(anonymous)` | `internal:fs/streams:138` |
| 0.0% | 3.3ms | 0.0% | 0us | `read` | `node:fs:194` |
| 0.0% | 3.3ms | 0.0% | 0us | `node:stream` | `node:stream:2` |
| 0.0% | 3.3ms | 0.0% | 0us | `internal:stream` | `internal:stream:2` |
| 0.0% | 3.3ms | 0.0% | 0us | `internal:fs/streams` | `internal:fs/streams:2` |
| 0.0% | 3.3ms | 0.0% | 0us | `(anonymous)` | `internal:fs/streams:146` |
| 0.0% | 3.3ms | 0.0% | 3.3ms | `copy` | `[native code]` |
| 0.0% | 2.8ms | 0.0% | 2.8ms | `readableAddChunkPushByteMode` | `internal:streams/readable:227` |
| 0.0% | 2.7ms | 0.0% | 0us | `(anonymous)` | `internal:streams/readable:332` |
| 0.0% | 2.5ms | 0.0% | 2.5ms | `(anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts` |
| 0.0% | 2.4ms | 0.0% | 2.4ms | `_initBlock` | `/home/eugen/projekte/jsarena/arena.ts:117` |
| 0.0% | 2.4ms | 0.0% | 2.4ms | `_initBlock` | `/home/eugen/projekte/jsarena/arena.ts:122` |
| 0.0% | 2.2ms | 0.0% | 0us | `internal:streams/compose` | `internal:streams/compose:2` |
| 0.0% | 2.2ms | 0.0% | 0us | `internal:streams/operators` | `internal:streams/operators:2` |
| 0.0% | 2.2ms | 0.0% | 0us | `evaluate` | `[native code]` |
| 0.0% | 2.2ms | 0.0% | 0us | `async loadAndEvaluateModule` | `[native code]` |
| 0.0% | 2.1ms | 0.0% | 0us | `readableAddChunkPushByteMode` | `internal:streams/readable:243` |
| 0.0% | 2.0ms | 0.0% | 1.1ms | `emitReadable_` | `internal:streams/readable:396` |
| 0.0% | 1.9ms | 0.0% | 0us | `node:fs/promises` | `node:fs/promises:2` |
| 0.0% | 1.8ms | 0.0% | 905us | `async createAsyncIterator` | `internal:streams/readable:655` |
| 0.0% | 1.5ms | 0.0% | 0us | `maybeReadMore_` | `internal:streams/readable:406` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `howMuchToRead` | `internal:streams/readable:307` |
| 0.0% | 1.2ms | 0.0% | 0us | `(anonymous)` | `internal:streams/readable:355` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `fromList` | `internal:streams/readable:796` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `addChunk` | `internal:streams/readable` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `howMuchToRead` | `internal:streams/readable:306` |
| 0.0% | 1.1ms | 0.0% | 0us | `(module)` | `/home/eugen/projekte/jsarena/bench/helper.ts:17` |
| 0.0% | 1.1ms | 0.0% | 1.1ms | `readableAddChunkPushByteMode` | `internal:streams/readable:239` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `typedArrayViewIsTypedArrayView` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `_initBlock` | `/home/eugen/projekte/jsarena/arena.ts:121` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `internal:fs/streams` |
| 0.0% | 1.0ms | 0.0% | 0us | `createReadStream` | `node:fs:353` |
| 0.0% | 1.0ms | 0.0% | 0us | `Readable` | `internal:streams/readable:162` |
| 0.0% | 1.0ms | 0.0% | 0us | `FixedQueue` | `internal:fixed_queue:33` |
| 0.0% | 1.0ms | 0.0% | 0us | `ReadStream` | `internal:fs/streams:86` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `FixedCircularBuffer` | `internal:fixed_queue:9` |
| 0.0% | 1.0ms | 0.0% | 0us | `setup` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `(module)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:17` |
| 0.0% | 1.0ms | 0.0% | 0us | `nextTick` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 0us | `construct` | `internal:streams/destroy:124` |
| 0.0% | 1.0ms | 0.0% | 0us | `internal:streams/pipeline` | `internal:streams/pipeline:2` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `readableAddChunkPushByteMode` | `internal:streams/readable:222` |
| 0.0% | 1.0ms | 0.0% | 0us | `internal:streams/duplex` | `internal:streams/duplex:2` |
| 0.0% | 1.0ms | 0.0% | 0us | `allocNoPtr` | `/home/eugen/projekte/jsarena/arena.ts:309` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `ceil` | `[native code]` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `async createAsyncIterator` | `internal:streams/readable` |
| 0.0% | 1.0ms | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:57` |
| 0.0% | 999us | 0.0% | 999us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:46` |
| 0.0% | 985us | 0.0% | 0us | `async (anonymous)` | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:113` |
| 0.0% | 985us | 0.0% | 985us | `size` | `/home/eugen/projekte/jsarena/arena.ts` |
| 0.0% | 985us | 0.0% | 985us | `emit` | `node:events:79` |
| 0.0% | 973us | 0.0% | 973us | `shift` | `internal:fixed_queue` |
| 0.0% | 965us | 0.0% | 0us | `bound call` | `[native code]` |
| 0.0% | 965us | 0.0% | 0us | `internal:validators` | `internal:validators:2` |
| 0.0% | 965us | 0.0% | 0us | `internal:shared` | `internal:shared:2` |
| 0.0% | 965us | 0.0% | 0us | `forEach` | `[native code]` |
| 0.0% | 965us | 0.0% | 965us | `(anonymous)` | `internal:primordials` |
| 0.0% | 965us | 0.0% | 0us | `internal:primordials` | `internal:primordials:71` |
| 0.0% | 965us | 0.0% | 0us | `node:events` | `node:events:9` |
| 0.0% | 965us | 0.0% | 0us | `makeSafe` | `internal:primordials:30` |
| 0.0% | 925us | 0.0% | 925us | `Promise` | `[native code]` |
| 0.0% | 924us | 0.0% | 924us | `(anonymous)` | `internal:streams/readable` |
| 0.0% | 909us | 0.0% | 909us | `maybeReadMore` | `internal:streams/readable` |
| 0.0% | 909us | 0.0% | 0us | `addChunk` | `internal:streams/readable:277` |

## Function Details

### `Buffer`
`[native code]` | Self: 22.5% (24.54s) | Total: 22.5% (24.54s) | Samples: 22524

**Called by:**
- `(anonymous)` (22524)

### `BigInt`
`[native code]` | Self: 16.9% (18.36s) | Total: 16.9% (18.36s) | Samples: 16619

**Called by:**
- `(anonymous)` (8338)
- `(anonymous)` (8281)

### `(anonymous)`
`[native code]` | Self: 12.8% (14.00s) | Total: 100.0% (151.32s) | Samples: 12874

**Called by:**
- `processTicksAndRejections` (95619)
- `async (anonymous)` (39149)

**Calls:**
- `async (anonymous)` (42067)
- `Buffer` (22524)
- `async (anonymous)` (22425)
- `async (anonymous)` (21895)
- `async (anonymous)` (5708)
- `get buffer` (3756)
- `async (anonymous)` (2335)
- `async (anonymous)` (865)
- `async (anonymous)` (223)
- `async (anonymous)` (56)
- `(anonymous)` (12)
- `async createAsyncIterator` (10)
- `async (anonymous)` (6)
- `async (anonymous)` (6)
- `async (anonymous)` (2)
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `async (anonymous)` (1)
- `(anonymous)` (1)

### `(anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:77` | Self: 8.4% (9.21s) | Total: 16.9% (18.42s) | Samples: 8392

**Called by:**
- `collectActiveRecords` (16730)

**Calls:**
- `BigInt` (8338)

### `(anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:93` | Self: 8.0% (8.75s) | Total: 16.4% (17.91s) | Samples: 7947

**Called by:**
- `collectActiveRecords` (16228)

**Calls:**
- `BigInt` (8281)

### `typedArrayViewLength`
`[native code]` | Self: 5.1% (5.62s) | Total: 5.1% (5.62s) | Samples: 5138

**Called by:**
- `arrayIteratorNextHelper` (5138)

### `indexOf`
`[native code]` | Self: 4.3% (4.67s) | Total: 4.3% (4.67s) | Samples: 4293

**Called by:**
- `async (anonymous)` (4293)

### `set`
`[native code]` | Self: 4.1% (4.48s) | Total: 4.1% (4.48s) | Samples: 4101

**Called by:**
- `async (anonymous)` (2335)
- `allocNoPtr` (1766)

### `arrayIteratorNextHelper`
`[native code]` | Self: 3.8% (4.15s) | Total: 9.0% (9.78s) | Samples: 3792

**Called by:**
- `next` (8929)
- `(anonymous)` (1)

**Calls:**
- `typedArrayViewLength` (5138)

### `get buffer`
`[native code]` | Self: 3.7% (4.10s) | Total: 3.7% (4.10s) | Samples: 3767

**Called by:**
- `(anonymous)` (3756)
- `allocNoPtr` (11)

### `collectActiveRecords`
`/home/eugen/projekte/jsarena/arena.ts:271` | Self: 2.9% (3.21s) | Total: 2.9% (3.21s) | Samples: 117

**Called by:**
- `async (anonymous)` (99)
- `async (anonymous)` (12)
- `async (anonymous)` (4)
- `async (anonymous)` (2)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:52` | Self: 1.4% (1.53s) | Total: 5.7% (6.21s) | Samples: 1415

**Called by:**
- `(anonymous)` (5708)

**Calls:**
- `indexOf` (4293)

### `typedArrayViewIsDetached`
`[native code]` | Self: 1.2% (1.38s) | Total: 1.2% (1.38s) | Samples: 1262

**Called by:**
- `next` (1262)

### `next`
`[native code]` | Self: 0.9% (1.03s) | Total: 11.2% (12.21s) | Samples: 929

**Called by:**
- `(anonymous)` (5580)
- `(anonymous)` (5541)
- `async (anonymous)` (6)

**Calls:**
- `arrayIteratorNextHelper` (8929)
- `typedArrayViewIsDetached` (1262)
- `asyncGeneratorResumeNext` (6)
- `typedArrayViewIsTypedArrayView` (1)

### `allocUnsafe`
`[native code]` | Self: 0.8% (971.5ms) | Total: 0.8% (971.5ms) | Samples: 866

**Called by:**
- `async (anonymous)` (865)
- `async (anonymous)` (1)

### `write`
`[native code]` | Self: 0.6% (744.8ms) | Total: 0.6% (744.8ms) | Samples: 2

**Called by:**
- `async (anonymous)` (2)

### `_initBlock`
`/home/eugen/projekte/jsarena/arena.ts` | Self: 0.5% (568.8ms) | Total: 0.5% (568.8ms) | Samples: 509

**Called by:**
- `allocNoPtr` (509)

### `_initBlock`
`/home/eugen/projekte/jsarena/arena.ts:118` | Self: 0.2% (287.2ms) | Total: 0.2% (287.2ms) | Samples: 265

**Called by:**
- `allocNoPtr` (265)

### `Float64Array`
`[native code]` | Self: 0.1% (202.8ms) | Total: 0.1% (202.8ms) | Samples: 183

**Called by:**
- `collectActiveRecords` (183)

### `_initBlock`
`/home/eugen/projekte/jsarena/arena.ts:115` | Self: 0.1% (186.4ms) | Total: 0.1% (186.4ms) | Samples: 170

**Called by:**
- `allocNoPtr` (170)

### `collectActiveRecords`
`/home/eugen/projekte/jsarena/arena.ts:292` | Self: 0.0% (103.7ms) | Total: 0.2% (306.6ms) | Samples: 93

**Called by:**
- `async (anonymous)` (116)
- `async (anonymous)` (66)
- `async (anonymous)` (62)
- `async (anonymous)` (32)

**Calls:**
- `Float64Array` (183)

### `onDestroy`
`internal:streams/destroy:50` | Self: 0.0% (87.5ms) | Total: 0.0% (87.5ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `processNumber`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts` | Self: 0.0% (72.8ms) | Total: 0.0% (72.8ms) | Samples: 60

**Called by:**
- `async (anonymous)` (60)

### `collectActiveRecords`
`/home/eugen/projekte/jsarena/arena.ts:296` | Self: 0.0% (58.9ms) | Total: 44.7% (48.60s) | Samples: 51

**Called by:**
- `async (anonymous)` (22335)
- `async (anonymous)` (21786)
- `async (anonymous)` (7)
- `async (anonymous)` (4)

**Calls:**
- `(anonymous)` (16730)
- `(anonymous)` (16228)
- `(anonymous)` (5581)
- `(anonymous)` (5540)
- `(anonymous)` (2)

### `collectActiveRecords`
`/home/eugen/projekte/jsarena/arena.ts:275` | Self: 0.0% (46.2ms) | Total: 0.0% (46.2ms) | Samples: 41

**Called by:**
- `async (anonymous)` (28)
- `async (anonymous)` (11)
- `async (anonymous)` (1)
- `async (anonymous)` (1)

### `Uint8Array`
`[native code]` | Self: 0.0% (38.1ms) | Total: 0.0% (38.1ms) | Samples: 35

**Called by:**
- `allocNoPtr` (34)
- `(module)` (1)

### `collectActiveRecords`
`/home/eugen/projekte/jsarena/arena.ts:270` | Self: 0.0% (23.5ms) | Total: 0.0% (23.5ms) | Samples: 21

**Called by:**
- `async (anonymous)` (12)
- `async (anonymous)` (5)
- `async (anonymous)` (4)

### `processNumber`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:25` | Self: 0.0% (19.6ms) | Total: 2.8% (3.12s) | Samples: 18

**Called by:**
- `async (anonymous)` (2848)

**Calls:**
- `allocNoPtr` (1776)
- `allocNoPtr` (968)
- `allocNoPtr` (51)
- `allocNoPtr` (16)
- `allocNoPtr` (10)
- `allocNoPtr` (4)
- `allocNoPtr` (4)
- `allocNoPtr` (1)

### `allocNoPtr`
`/home/eugen/projekte/jsarena/arena.ts:333` | Self: 0.0% (18.3ms) | Total: 0.0% (18.3ms) | Samples: 16

**Called by:**
- `processNumber` (16)

### `collectActiveRecords`
`/home/eugen/projekte/jsarena/arena.ts:264` | Self: 0.0% (12.5ms) | Total: 0.0% (13.9ms) | Samples: 11

**Called by:**
- `async (anonymous)` (6)
- `async (anonymous)` (3)
- `async (anonymous)` (3)

**Calls:**
- `(anonymous)` (1)

### `allocNoPtr`
`/home/eugen/projekte/jsarena/arena.ts:332` | Self: 0.0% (11.2ms) | Total: 1.7% (1.93s) | Samples: 10

**Called by:**
- `processNumber` (1776)

**Calls:**
- `set` (1766)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:63` | Self: 0.0% (11.0ms) | Total: 42.1% (45.84s) | Samples: 10

**Called by:**
- `(anonymous)` (42067)

**Calls:**
- `(anonymous)` (39149)
- `processNumber` (2848)
- `processNumber` (60)

### `allocNoPtr`
`/home/eugen/projekte/jsarena/arena.ts:310` | Self: 0.0% (11.0ms) | Total: 0.0% (11.0ms) | Samples: 10

**Called by:**
- `processNumber` (10)

### `_initBlock`
`/home/eugen/projekte/jsarena/arena.ts:119` | Self: 0.0% (10.9ms) | Total: 0.0% (10.9ms) | Samples: 10

**Called by:**
- `allocNoPtr` (10)

### `toLocaleString`
`[native code]` | Self: 0.0% (7.3ms) | Total: 0.0% (7.3ms) | Samples: 6

**Called by:**
- `async (anonymous)` (6)

### `allocNoPtr`
`/home/eugen/projekte/jsarena/arena.ts:311` | Self: 0.0% (6.6ms) | Total: 0.0% (55.6ms) | Samples: 6

**Called by:**
- `processNumber` (51)

**Calls:**
- `Uint8Array` (34)
- `get buffer` (11)

### `allocUnsafeSlow`
`[native code]` | Self: 0.0% (6.6ms) | Total: 0.0% (6.6ms) | Samples: 6

**Called by:**
- `(anonymous)` (6)

### `anonymous`
`[native code]` | Self: 0.0% (5.4ms) | Total: 0.0% (26.0ms) | Samples: 5

**Called by:**
- `get ReadStream` (4)
- `node:stream` (3)
- `internal:stream` (3)
- `internal:fs/streams` (3)
- `node:fs/promises` (2)
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

### `allocNoPtr`
`/home/eugen/projekte/jsarena/arena.ts:331` | Self: 0.0% (5.1ms) | Total: 0.9% (1.06s) | Samples: 5

**Called by:**
- `processNumber` (968)

**Calls:**
- `_initBlock` (509)
- `_initBlock` (265)
- `_initBlock` (170)
- `_initBlock` (10)
- `_initBlock` (4)
- `_initBlock` (2)
- `_initBlock` (2)
- `_initBlock` (1)

### `parseModule`
`[native code]` | Self: 0.0% (4.7ms) | Total: 0.0% (11.2ms) | Samples: 4

**Called by:**
- `async (anonymous)` (10)

**Calls:**
- `get ReadStream` (4)
- `node:fs/promises` (2)

### `_initBlock`
`/home/eugen/projekte/jsarena/arena.ts:123` | Self: 0.0% (4.7ms) | Total: 0.0% (4.7ms) | Samples: 4

**Called by:**
- `allocNoPtr` (4)

### `allocNoPtr`
`/home/eugen/projekte/jsarena/arena.ts:306` | Self: 0.0% (4.3ms) | Total: 0.0% (4.3ms) | Samples: 4

**Called by:**
- `processNumber` (4)

### `allocNoPtr`
`/home/eugen/projekte/jsarena/arena.ts` | Self: 0.0% (4.2ms) | Total: 0.0% (4.2ms) | Samples: 4

**Called by:**
- `processNumber` (4)

### `read`
`[native code]` | Self: 0.0% (3.3ms) | Total: 0.0% (3.3ms) | Samples: 3

**Called by:**
- `read` (3)

### `copy`
`[native code]` | Self: 0.0% (3.3ms) | Total: 0.0% (3.3ms) | Samples: 3

**Called by:**
- `(anonymous)` (3)

### `readableAddChunkPushByteMode`
`internal:streams/readable:227` | Self: 0.0% (2.8ms) | Total: 0.0% (2.8ms) | Samples: 3

**Called by:**
- `(anonymous)` (3)

### `(anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts` | Self: 0.0% (2.5ms) | Total: 0.0% (2.5ms) | Samples: 2

**Called by:**
- `collectActiveRecords` (2)

### `_initBlock`
`/home/eugen/projekte/jsarena/arena.ts:117` | Self: 0.0% (2.4ms) | Total: 0.0% (2.4ms) | Samples: 2

**Called by:**
- `allocNoPtr` (2)

### `_initBlock`
`/home/eugen/projekte/jsarena/arena.ts:122` | Self: 0.0% (2.4ms) | Total: 0.0% (2.4ms) | Samples: 2

**Called by:**
- `allocNoPtr` (2)

### `howMuchToRead`
`internal:streams/readable:307` | Self: 0.0% (1.5ms) | Total: 0.0% (1.5ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `asyncGeneratorResumeNext`
`[native code]` | Self: 0.0% (1.3ms) | Total: 0.0% (6.6ms) | Samples: 1

**Called by:**
- `next` (6)

**Calls:**
- `async createAsyncIterator` (2)
- `async createAsyncIterator` (2)
- `async createAsyncIterator` (1)

### `fromList`
`internal:streams/readable:796` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `async createAsyncIterator`
`internal:streams/readable:647` | Self: 0.0% (1.2ms) | Total: 0.0% (13.7ms) | Samples: 1

**Called by:**
- `(anonymous)` (10)
- `asyncGeneratorResumeNext` (2)

**Calls:**
- `(anonymous)` (8)
- `(anonymous)` (2)
- `(anonymous)` (1)

### `addChunk`
`internal:streams/readable` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `readableAddChunkPushByteMode` (1)

### `processTicksAndRejections`
`[native code]` | Self: 0.0% (1.2ms) | Total: 99.9% (108.68s) | Samples: 1

**Calls:**
- `(anonymous)` (95619)
- `emitReadable_` (2)
- `maybeReadMore_` (1)
- `shift` (1)

### `howMuchToRead`
`internal:streams/readable:306` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `readableAddChunkPushByteMode`
`internal:streams/readable:239` | Self: 0.0% (1.1ms) | Total: 0.0% (1.1ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `emitReadable_`
`internal:streams/readable:396` | Self: 0.0% (1.1ms) | Total: 0.0% (2.0ms) | Samples: 1

**Called by:**
- `processTicksAndRejections` (2)

**Calls:**
- `emit` (1)

### `typedArrayViewIsTypedArrayView`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `next` (1)

### `_initBlock`
`/home/eugen/projekte/jsarena/arena.ts:121` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `allocNoPtr` (1)

### `(anonymous)`
`internal:fs/streams` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `FixedCircularBuffer`
`internal:fixed_queue:9` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `FixedQueue` (1)

### `readableAddChunkPushByteMode`
`internal:streams/readable:222` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `ceil`
`[native code]` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `allocNoPtr` (1)

### `async createAsyncIterator`
`internal:streams/readable` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `asyncGeneratorResumeNext` (1)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:46` | Self: 0.0% (999us) | Total: 0.0% (999us) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `size`
`/home/eugen/projekte/jsarena/arena.ts` | Self: 0.0% (985us) | Total: 0.0% (985us) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `emit`
`node:events:79` | Self: 0.0% (985us) | Total: 0.0% (985us) | Samples: 1

**Called by:**
- `emitReadable_` (1)

### `shift`
`internal:fixed_queue` | Self: 0.0% (973us) | Total: 0.0% (973us) | Samples: 1

**Called by:**
- `processTicksAndRejections` (1)

### `(anonymous)`
`internal:primordials` | Self: 0.0% (965us) | Total: 0.0% (965us) | Samples: 1

**Called by:**
- `forEach` (1)

### `Promise`
`[native code]` | Self: 0.0% (925us) | Total: 0.0% (925us) | Samples: 1

**Called by:**
- `async createAsyncIterator` (1)

### `(anonymous)`
`internal:streams/readable` | Self: 0.0% (924us) | Total: 0.0% (924us) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `maybeReadMore`
`internal:streams/readable` | Self: 0.0% (909us) | Total: 0.0% (909us) | Samples: 1

**Called by:**
- `addChunk` (1)

### `async createAsyncIterator`
`internal:streams/readable:655` | Self: 0.0% (905us) | Total: 0.0% (1.8ms) | Samples: 1

**Called by:**
- `asyncGeneratorResumeNext` (2)

**Calls:**
- `Promise` (1)

### `node:events`
`node:events:9` | Self: 0.0% (0us) | Total: 0.0% (965us) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `async loadAndEvaluateModule`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Calls:**
- `moduleEvaluation` (2)

### `node:fs/promises`
`node:fs/promises:2` | Self: 0.0% (0us) | Total: 0.0% (1.9ms) | Samples: 0

**Called by:**
- `parseModule` (2)

**Calls:**
- `anonymous` (2)

### `Readable`
`internal:streams/readable:162` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `ReadStream` (1)

**Calls:**
- `construct` (1)

### `node:stream`
`node:stream:2` | Self: 0.0% (0us) | Total: 0.0% (3.3ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `anonymous` (3)

### `(anonymous)`
`internal:fs/streams:191` | Self: 0.0% (0us) | Total: 0.0% (87.5ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `onDestroy` (1)

### `internal:validators`
`internal:validators:2` | Self: 0.0% (0us) | Total: 0.0% (965us) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `internal:streams/pipeline`
`internal:streams/pipeline:2` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `addChunk`
`internal:streams/readable:277` | Self: 0.0% (0us) | Total: 0.0% (909us) | Samples: 0

**Called by:**
- `readableAddChunkPushByteMode` (1)

**Calls:**
- `maybeReadMore` (1)

### `(anonymous)`
`internal:streams/readable:346` | Self: 0.0% (0us) | Total: 0.0% (10.0ms) | Samples: 0

**Called by:**
- `async createAsyncIterator` (8)
- `maybeReadMore_` (1)

**Calls:**
- `(anonymous)` (6)
- `(anonymous)` (3)

### `(module)`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:17` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `evaluate` (1)

**Calls:**
- `createReadStream` (1)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:75` | Self: 0.0% (0us) | Total: 22.6% (24.64s) | Samples: 0

**Called by:**
- `(anonymous)` (22425)

**Calls:**
- `collectActiveRecords` (22335)
- `collectActiveRecords` (62)
- `collectActiveRecords` (12)
- `collectActiveRecords` (11)
- `collectActiveRecords` (3)
- `collectActiveRecords` (2)

### `(module)`
`/home/eugen/projekte/jsarena/bench/helper.ts:17` | Self: 0.0% (0us) | Total: 0.0% (1.1ms) | Samples: 0

**Called by:**
- `evaluate` (1)

**Calls:**
- `Uint8Array` (1)

### `internal:streams/operators`
`internal:streams/operators:2` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `anonymous` (2)

### `(anonymous)`
`internal:streams/readable:355` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `async createAsyncIterator` (1)

**Calls:**
- `fromList` (1)

### `nextTick`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `construct` (1)

**Calls:**
- `setup` (1)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:100` | Self: 0.0% (0us) | Total: 0.0% (7.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (6)

**Calls:**
- `toLocaleString` (6)

### `(anonymous)`
`internal:fs/streams:138` | Self: 0.0% (0us) | Total: 0.0% (3.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (3)

**Calls:**
- `read` (3)

### `(anonymous)`
`internal:streams/readable:332` | Self: 0.0% (0us) | Total: 0.0% (2.7ms) | Samples: 0

**Called by:**
- `async createAsyncIterator` (2)

**Calls:**
- `howMuchToRead` (1)
- `howMuchToRead` (1)

### `createReadStream`
`node:fs:353` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `ReadStream` (1)

### `read`
`node:fs:194` | Self: 0.0% (0us) | Total: 0.0% (3.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (3)

**Calls:**
- `read` (3)

### `ReadStream`
`internal:fs/streams:86` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `createReadStream` (1)

**Calls:**
- `Readable` (1)

### `setup`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `nextTick` (1)

**Calls:**
- `FixedQueue` (1)

### `moduleEvaluation`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (5.5ms) | Samples: 0

**Called by:**
- `moduleEvaluation` (3)
- `async loadAndEvaluateModule` (2)

**Calls:**
- `moduleEvaluation` (3)
- `evaluate` (2)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:43` | Self: 0.0% (0us) | Total: 0.8% (970.5ms) | Samples: 0

**Called by:**
- `(anonymous)` (865)

**Calls:**
- `allocUnsafe` (865)

### `maybeReadMore_`
`internal:streams/readable:406` | Self: 0.0% (0us) | Total: 0.0% (1.5ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (1)

**Calls:**
- `(anonymous)` (1)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:113` | Self: 0.0% (0us) | Total: 0.0% (985us) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `size` (1)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:39` | Self: 0.0% (0us) | Total: 0.0% (6.6ms) | Samples: 0

**Called by:**
- `(anonymous)` (6)

**Calls:**
- `next` (6)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:81` | Self: 0.0% (0us) | Total: 0.6% (744.8ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `write` (2)

### `internal:shared`
`internal:shared:2` | Self: 0.0% (0us) | Total: 0.0% (965us) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `construct`
`internal:streams/destroy:124` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `Readable` (1)

**Calls:**
- `nextTick` (1)

### `makeSafe`
`internal:primordials:30` | Self: 0.0% (0us) | Total: 0.0% (965us) | Samples: 0

**Called by:**
- `internal:primordials` (1)

**Calls:**
- `bound call` (1)

### `internal:fs/streams`
`internal:fs/streams:2` | Self: 0.0% (0us) | Total: 0.0% (3.3ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `anonymous` (3)

### `get ReadStream`
`node:fs:577` | Self: 0.0% (0us) | Total: 0.0% (4.5ms) | Samples: 0

**Called by:**
- `parseModule` (4)

**Calls:**
- `anonymous` (4)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:57` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `allocUnsafe` (1)

### `readableAddChunkPushByteMode`
`internal:streams/readable:243` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `addChunk` (1)
- `addChunk` (1)

### `forEach`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (965us) | Samples: 0

**Called by:**
- `bound call` (1)

**Calls:**
- `(anonymous)` (1)

### `internal:streams/compose`
`internal:streams/compose:2` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `anonymous` (2)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:87` | Self: 0.0% (0us) | Total: 3.0% (3.33s) | Samples: 0

**Called by:**
- `(anonymous)` (223)

**Calls:**
- `collectActiveRecords` (116)
- `collectActiveRecords` (99)
- `collectActiveRecords` (7)
- `collectActiveRecords` (1)

### `(anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:76` | Self: 0.0% (0us) | Total: 5.6% (6.09s) | Samples: 0

**Called by:**
- `collectActiveRecords` (5581)

**Calls:**
- `next` (5580)
- `arrayIteratorNextHelper` (1)

### `(anonymous)`
`node:fs:194` | Self: 0.0% (0us) | Total: 0.0% (12.5ms) | Samples: 0

**Called by:**
- `(anonymous)` (12)

**Calls:**
- `(anonymous)` (8)
- `(anonymous)` (3)
- `(anonymous)` (1)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:45` | Self: 0.0% (0us) | Total: 2.3% (2.55s) | Samples: 0

**Called by:**
- `(anonymous)` (2335)

**Calls:**
- `set` (2335)

### `FixedQueue`
`internal:fixed_queue:33` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `setup` (1)

**Calls:**
- `FixedCircularBuffer` (1)

### `(anonymous)`
`internal:fs/streams:137` | Self: 0.0% (0us) | Total: 0.0% (6.6ms) | Samples: 0

**Called by:**
- `(anonymous)` (6)

**Calls:**
- `allocUnsafeSlow` (6)

### `allocNoPtr`
`/home/eugen/projekte/jsarena/arena.ts:309` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `processNumber` (1)

**Calls:**
- `ceil` (1)

### `(anonymous)`
`internal:fs/streams:146` | Self: 0.0% (0us) | Total: 0.0% (3.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (3)

**Calls:**
- `copy` (3)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:89` | Self: 0.0% (0us) | Total: 0.0% (60.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (56)

**Calls:**
- `collectActiveRecords` (32)
- `collectActiveRecords` (12)
- `collectActiveRecords` (4)
- `collectActiveRecords` (4)
- `collectActiveRecords` (3)
- `collectActiveRecords` (1)

### `(anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:92` | Self: 0.0% (0us) | Total: 5.6% (6.11s) | Samples: 0

**Called by:**
- `collectActiveRecords` (5540)
- `collectActiveRecords` (1)

**Calls:**
- `next` (5541)

### `(anonymous)`
`internal:fs/streams:148` | Self: 0.0% (0us) | Total: 0.0% (8.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (8)

**Calls:**
- `readableAddChunkPushByteMode` (3)
- `readableAddChunkPushByteMode` (2)
- `(anonymous)` (1)
- `readableAddChunkPushByteMode` (1)
- `readableAddChunkPushByteMode` (1)

### `bound call`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (965us) | Samples: 0

**Called by:**
- `makeSafe` (1)

**Calls:**
- `forEach` (1)

### `async (anonymous)`
`/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts:91` | Self: 0.0% (0us) | Total: 22.2% (24.17s) | Samples: 0

**Called by:**
- `(anonymous)` (21895)

**Calls:**
- `collectActiveRecords` (21786)
- `collectActiveRecords` (66)
- `collectActiveRecords` (28)
- `collectActiveRecords` (6)
- `collectActiveRecords` (5)
- `collectActiveRecords` (4)

### `async (anonymous)`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (11.2ms) | Samples: 0

**Calls:**
- `parseModule` (10)

### `evaluate`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `moduleEvaluation` (2)

**Calls:**
- `(module)` (1)
- `(module)` (1)

### `internal:stream`
`internal:stream:2` | Self: 0.0% (0us) | Total: 0.0% (3.3ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `anonymous` (3)

### `internal:primordials`
`internal:primordials:71` | Self: 0.0% (0us) | Total: 0.0% (965us) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `makeSafe` (1)

### `internal:streams/duplex`
`internal:streams/duplex:2` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

## Files

| Self% | Self | File |
|------:|-----:|------|
| 77.6% | 84.38s | `[native code]` |
| 18.0% | 19.61s | `/home/eugen/projekte/jsarena/bench/implementation_arena-turbo.ts` |
| 4.2% | 4.58s | `/home/eugen/projekte/jsarena/arena.ts` |
| 0.0% | 87.5ms | `internal:streams/destroy` |
| 0.0% | 16.3ms | `internal:streams/readable` |
| 0.0% | 2.0ms | `internal:fixed_queue` |
| 0.0% | 1.0ms | `internal:fs/streams` |
| 0.0% | 985us | `node:events` |
| 0.0% | 965us | `internal:primordials` |
