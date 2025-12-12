# 🧘‍♂️ @fizzwiz/search

A lightweight JavaScript library for defining **declarative, lazy search algorithms**, both **synchronous** and **asynchronous**, with fluent, queue-driven iteration.

This library is ideal for exploring large or infinite search spaces efficiently and transparently, with full control over candidate generation, expansion, and concurrency.

---

## Features

* **Synchronous search** with `Search`
* **Asynchronous search** with `AsyncSearch` (parallel or distributed)
* Fluent, chainable API:

  * Define initial candidates via `from()`
  * Describe expansion logic via `through()`
  * Control iteration order with `via()`
  * Limit branching with `max()`
  * Control concurrency (async only) with `inParallel()`
* Fully lazy, iterable (or async iterable), suitable for memory-efficient algorithms
* Compatible with any queue strategy (BFS, DFS, priority queues, custom)
  
---

## 🧠 Guides & Concepts

Deep-dive into practical patterns, real-world use cases, and advanced techniques:

👉 https://search.blog.fizzwiz.cloud

---

## Installation

```bash
npm install @fizzwiz/search
```

---

## Usage

### Synchronous Search

```js
import { Search } from "@fizzwiz/search";
import { ArrayQueue } from "@fizzwiz/sorted";

const search = new Search()
  .from(1, 2, 3)
  .through(x => [x + 1, x + 2])
  .via(new ArrayQueue());

for (const candidate of search) {
  console.log(candidate);
}
```

### Asynchronous Search

```js
import { AsyncSearch } from "@fizzwiz/search";
import { ArrayQueue } from "@fizzwiz/sorted";

const asyncSearch = new AsyncSearch()
  .from(1, 2, 3)
  .through(async x => [x + 1, x + 2])
  .via(new ArrayQueue())
  .inParallel(4);

for await (const candidate of asyncSearch) {
  console.log(candidate);
}
```

---

## API

### `Search` (synchronous)

* `from(...starts)` — set initial candidates
* `through(fn)` — define search space expansion function
* `via(queue, max)` — set queue strategy and optional maximum queue size
* Iterable: use `for...of` to iterate candidates lazily

### `AsyncSearch` (asynchronous)

* `from(...starts)` — set initial candidates (can be async iterable or promise)
* `through(fn)` — define asynchronous expansion function
* `via(queue, max)` — set queue strategy
* `inParallel(cores)` — define concurrent expansion batch
* Async iterable: use `for await...of` to iterate candidates

---

## 🔗 Links

* 📚 [In-depth guides on the blog](https://search.blog.fizzwiz.cloud)
* 🌐 [Bundle version for browser execution (jsDelivr)](https://cdn.jsdelivr.net/gh/fizzwiz/search/dist/search.bundle.js)
* 💬 [GitHub Pages](https://fizzwiz.github.io/search/)
* 🐱 [GitHub Sources](https://github.com/fizzwiz/search)
