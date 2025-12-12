import { Search } from './core/Search.js';
import { AsyncSearch } from './core/AsyncSearch.js';

export { Search, AsyncSearch };

// ─── Core Module ─────────────────────────────────────────────
/**
 * @module core
 * @description
 * Core abstractions for the `@fizzwiz/search` library.
 *
 * This module exposes the central classes:
 * - {@link Search} — synchronous lazy search algorithm
 * - {@link AsyncSearch} — asynchronous lazy search algorithm
 *
 * These classes form the backbone of the library, allowing
 * fluent and lazy exploration of candidate search spaces.
 */

