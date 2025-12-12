# ⚡ QuickStart with `@fizzwiz/search`

> **“Get searching in minutes.”**

This QuickStart guide helps you start using the `@fizzwiz/search` library immediately — whether you’re exploring simple lazy computations or building parallel, asynchronous search processes.

---

## 1. Installation

Install via npm:

```bash
npm install @fizzwiz/search
```

---

## 2. Basic Usage

Import and use the core `Search` class:

```javascript
import { Search } from '@fizzwiz/search';
import { ArrayQueue } from '@fizzwiz/sorted';

const search = new Search()
  .from(1, 2, 3)
  .through(n => [n + 1, n + 2])
  .via(new ArrayQueue(), 10);

for (const candidate of search) {
  console.log(candidate);
}
```

This lazily expands each value using the function you provide.

---

## 3. Asynchronous Search

Use `AsyncSearch` to explore spaces asynchronously or in parallel:

```javascript
import { AsyncSearch } from '@fizzwiz/search';
import { ArrayQueue } from '@fizzwiz/sorted';

const asyncSearch = new AsyncSearch()
  .from(1, 2, 3)
  .through(async n => [n + 1, n + 2])
  .via(new ArrayQueue(), 10)
  .inParallel(4);

for await (const candidate of asyncSearch) {
  console.log(candidate);
}
```

`AsyncSearch` helps you build scalable async pipelines with concurrency control.

---

## 4. Next Steps

* Explore `Search` for graph traversal, combinatorics, and generators.
* Explore `AsyncSearch` for distributed or parallel exploration workloads.
