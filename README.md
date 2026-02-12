## High-Speed: Linear Bulk Import

Use `reserve()` for high-volume, linear data ingestion. To guarantee maximum throughput and deterministic behavior, `reserve()` **always appends** memory at the end of the arena buffer. No compaction, no relocation, no surprises.

This makes it ideal for tight loops, streaming parsers, and bulk loaders where predictable memory behavior is critical.

---

### Allocation Strategies

#### Performance & GC Efficiency

This Arena is explicitly designed to bypass the typical performance pitfalls of the V8 runtime:

**GC Invisibility**  
The entire arena is backed by a single `ArrayBuffer`. Since the Garbage Collector does not traverse raw buffer contents, this completely avoids costly mark-and-sweep scans over arena memory.

**Zero Object Churn**  
Data insertion does not allocate JavaScript objects. All writes are performed directly against the buffer. The engine reuses the same execution paths without producing heap garbage.

**Deferred Management Overhead**  
Logical pointers (`ArenaLocation`, implemented as `BigInt`) are created *only* when `label()` is invoked. This keeps pointer bookkeeping out of performance-critical hot paths.

---

### Technical Architecture

#### Memory Layout (16-Byte Header)

Each allocation block is prefixed with a fixed-size metadata header:

- Size  
- Generation ID  
- Flags / reserved space  

`reserve()` eagerly initializes these headers to ensure full compatibility with `read()` and `label()` without requiring additional bookkeeping passes.

This guarantees **O(1)** access and validation at read time.

---

#### Pointer Security & Validation

An `ArenaLocation` is encoded as a **64-bit BigInt**:

- **High 32 bits** → Physical byte offset inside the arena  
- **Low 32 bits** → Generation ID  

When `read()` is called, the arena validates the pointer by comparing its generation ID with the one stored in the block header:

- ✅ Match → valid, data is returned  
- ❌ Mismatch → block was freed or recycled → `null` is returned  

This provides **use-after-free protection** without reference tracking, weak maps, or GC involvement.

---

### 📖 Documentation & Tests

The integrated test suite doubles as a **reference implementation**.  
See the `// --- SHOWCASE & TESTS ---` section at the end of the source file for:

- Stress tests for dynamic resizing  
- Validation of pointer expiration semantics  
- Advanced bucket reuse and fragmentation behavior  
- Edge cases around generation rollover  

To run the showcase directly, execute the file with Node.js. No external dependencies required.

---

### ⚖️ License

MIT License — use freely in commercial and non-commercial projects.
