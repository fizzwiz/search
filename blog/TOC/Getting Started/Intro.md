# 🏠 Introduction to `@fizzwiz/search`

`@fizzwiz/search` provides **declarative, lazy search abstractions** that help you explore complex or infinite computational spaces with clarity and efficiency.

---

## 📌 Why Search Matters

Many problems involve exploring huge or unbounded spaces: combinatorics, planning, graph traversal, optimization, constraint solving, incremental discovery.

Naive exploration often leads to explosive growth.

`@fizzwiz/search` offers a minimal, expressive toolkit to:

* Generate candidate solutions lazily
* Control ordering via custom queues
* Limit branching or depth
* Parallelize exploration using async constructs

This keeps your search efficient, predictable, and readable.

---

## 🎯 The Search Paradigm

At the heart of the library are two classes:

* **`Search`** – synchronous, lazy exploration
* **`AsyncSearch`** – asynchronous, concurrent exploration

Both follow a simple pattern:

1. **Start somewhere** → `from(...)`
2. **Expand candidates** → `through(fn)`
3. **Control ordering** → `via(queue)`
4. **Iterate lazily** → `for...of` / `for await...of`

This approach lets you construct powerful search pipelines without needing to manage iteration, queues, or concurrency manually.

---

## 🧠 Elegance Through Laziness

The design philosophy behind `@fizzwiz/search` is simple:

> **"Explore only what you must. Discover only what you need."**

Rather than materializing gigantic structures, the library evaluates one candidate at a time—only when requested.

This enables:

* Efficient combinatorial search
* On-demand branching
* Infinite or very large trees
* Memory-friendly workflows

And with `AsyncSearch`, you can safely scale exploration across multiple tasks, workers, or distributed systems.

---

## 📝 Learn More

* 📘 Auto-generated API docs: [GitHub Pages](https://fizzwiz.github.io/search)
* 🚀 QuickStart guide: see the **QuickStart** page on this blog
* 📚 Deep dives & patterns: more articles coming soon

---

> *"Search with clarity. Explore with purpose."*
> — `@fizzwiz ✨`
