# Benchmark 1

## bun arena.ts;
183098.55 ms
```js
{
  rss: 11240919040,
  heapTotal: 8595075072,
  heapUsed: 4817152633,
  external: 2157456969,
  arrayBuffers: 2156686216,
}
```
arenasize: 2097152 KB



## bun array.ts
765961.27 ms
Count: 50000000
```js
{
  rss: 28036014080,
  heapTotal: 9476152320,
  heapUsed: 11222438346,
  external: 7170077276,
  arrayBuffers: 2921230601,
}
```
--- 

## Direct Comparison

| Metric | Arena Implementation (Optimized) | Standard Array Implementation | Difference / Factor |
| :--- | :--- | :--- | :--- |
| **Total Time** | **183,098 ms** (3.05 min) | **765,961 ms** (12.76 min) | **~4.2x Faster** |
| **Time per 50M Lines** | **~18.3 sec** | **~76.6 sec** | **- 58.3 sec / Round** |
| **RAM Usage (RSS)** | **11.24 GB** | **28.04 GB** | **16.8 GB Saved** |
| **Heap Used (JS Objects)** | **4.82 GB** | **11.22 GB** | **2.3x More Efficient** |
| **External (Buffer)** | **2.16 GB** | **7.17 GB** | **Compact Memory Footprint** |

