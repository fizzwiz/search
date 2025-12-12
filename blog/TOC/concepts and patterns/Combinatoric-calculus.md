# 🧮 Exploring Combinatoric Calculus with `Search`

The `Search` abstraction in **`@fizzwiz/search`** provides a clean, declarative way to generate and explore **combinatorial structures**. Instead of manually implementing recursive algorithms, you simply *describe* how candidates expand — and let the lazy search engine handle the traversal.

---

## 🧠 Concept: Combinatorics as Exploration

Most combinatorial problems can be understood as a **space of possible choices**:

* **Permutations** → ordered sequences
* **Combinations** → unordered subsets
* **Power sets** → all subsets
* **Dispositions** → sequences of fixed length, repetition allowed

Traditionally, each one requires its own custom algorithm — often recursive, imperative, and hard to generalize.

With `Search`, you model them all with a single idea:

> **Start from an initial candidate, and expand it into new candidates using a declarative rule.**

---

## ⚙️ Defining a Search Process

Each search consists of three parts:

1. **Start** – The initial candidate (e.g., an empty array or path).
2. **Space** – A function describing how a candidate expands.
3. **Queue strategy** – Determines how exploration proceeds (FIFO = BFS, LIFO = DFS, priority, etc.).

### Example: Exploring All Paths

```js
import { Search } from '@fizzwiz/search';
import { ArrayQueue } from '@fizzwiz/queue';
import { Path } from '@fizzwiz/fluent';

const items = ['A', 'B', 'C'];

const search = new Search()
  .from(new Path())                     // empty path
  .through(path => path.across(items))  // expand by appending each item
  .via(new ArrayQueue())
  .when(p => p.length > 3, false);      // stop the infinite iteration when path.length > 3
```

This defines a **lazy generator of all possible sequences** using `items`. You can filter results as they are generated:

```js
for (const path of search) {  
  console.log(path.toArray()); // convert path (an immutable linked list) to array for easier inspection
}
```

---

## 📐 Combinatorics Through Declarative Constraints

The magic comes from combining:

* a **space expansion rule**, and
* a **filter predicate** (`which`) to decide which candidates to emit.

Below are some classical combinatorial constructions expressed declaratively.

---

## 🎲 Dispositions (Length `n`, repetitions allowed)

```js
const n = 2;

const search = new Search()
  .from(new Path())
  .through(path => path.across(items))               
  .via(new ArrayQueue())
  .when(path => path.length > n, false)
  .which(path => path.length === n);   

for (const seq of search) {
  console.log(seq.toArray());
}
```

---

## 🎛 Combinations (sorted, without repetition)

```js
const n = 2;

const search = new Search()
  .from(new Path())
  .through(path => path.across(items.filter(x => !path.length || path.last < x))) 
  .via(new ArrayQueue())
  .which(path => path.length === n);  

for (const combo of search) {  
  console.log(combo.toArray());
}
```

---

## 🧩 Power Set (all unique subsets)

```js
const search = new Search()
  .from(new Path())
  .through(path => path.across(items.filter(x => !path.length || path.last < x))) 
  .via(new ArrayQueue());

for (const subset of search) {  
  console.log(subset.toArray());
}
```

This generates:

```
[]
['A']
['B']
['C']
['A','B']
['A','C']
['B','C']
['A','B','C']
```

Fully lazy. No recursion. No intermediate arrays.

---

## 🌌 The Wonder of Search

Using `@fizzwiz/search`, all these combinatorial generators share **one unified pattern**:

1. Define one or more initial candidates.
2. Define how candidates expand.
3. Apply filters to shape results.

**Benefits:**

* Declarative and intuitive syntax
* Fully lazy — candidates are generated only when needed
* Uniform — permutations, combinations, power sets, and custom generators follow the same structure
* Flexible — swap BFS for DFS or priority queues without rewriting algorithms
* Extendable — add scoring, pruning, or stopping conditions fluently

---

## Next: Priorities, Heuristics & Weighted Searches

All examples above use a simple FIFO queue. But queues can also encode *strategy*, e.g.:

* prioritize shorter paths
* prioritize lexicographic order
* score candidates with heuristics
* prune inferior branches

We'll explore this in a dedicated upcoming article.

---

— `@fizzwiz ✨`
