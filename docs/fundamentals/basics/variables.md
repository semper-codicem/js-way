# Variables in JavaScript — Comprehensive Guide

This guide explains how variables work in JavaScript, with real‑world examples, advanced topics, and best practices. It covers declaration styles, scope, hoisting, immutability vs. mutability, closures, and patterns you will use in production code.

---

## Overview: What is a variable?
A variable is a named reference to a value. In JS values can be primitives (number, string, boolean, null, undefined, symbol, bigint) or objects (arrays, functions, objects). Variables store a reference to a value, not always the value itself (objects are referenced).

---

## Declarations: var, let, const

- var
    - Function‑scoped (or global if declared outside a function).
    - Hoisted: declaration is moved to top of scope; initialization stays in place.
    - Avoid in modern code.

- let
    - Block‑scoped.
    - Temporal Dead Zone (TDZ) until initialized.
    - Use when the binding will be reassigned.

- const
    - Block‑scoped.
    - Binding cannot be reassigned.
    - The value can still be mutable (objects/arrays).
    - Prefer this for most variables.

Examples:
```js
// var (legacy) — avoids predictable scope
function exampleVar() {
    if (true) {
        var x = 1;
    }
    console.log(x); // 1
}

// let/const — block scope
if (true) {
    let a = 2;
    const b = 3;
}
// console.log(a, b); // ReferenceError

// const object mutability
const cfg = { apiUrl: 'https://api.example.com' };
cfg.apiUrl = 'https://api.example.com/v2'; // allowed
// cfg = {}; // TypeError: assignment to constant variable
```

---

## Hoisting and Temporal Dead Zone (TDZ)

- Hoisting moves declarations (not initializations) to the top of their scope.
- var variables are hoisted and initialized with undefined.
- let/const are hoisted but not initialized — accessing them before the declaration throws a ReferenceError (TDZ).

```js
console.log(x); // undefined
var x = 1;

console.log(y); // ReferenceError
let y = 2;
```

---

## Scope: global, function, block, module

- Global scope: variables created without declaration or declared at top level (avoid this).
- Function scope: var is scoped to the function.
- Block scope: let/const are scoped to { } blocks.
- Module scope: top‑level in ES modules are module‑scoped (not global).

Example — avoiding global leaks:
```js
// Bad: implicit global
function setGlobal() {
    leak = 'oops'; // creates global variable `leak`
}

// Good:
function setLocal() {
    const local = 'safe';
}
```

---

## Primitives vs Objects: assignment and copying

- Primitives are copied by value.
- Objects/arrays are copied by reference.

```js
let a = 10;
let b = a; // copy of value
b = 20; // a remains 10

const arr1 = [1,2];
const arr2 = arr1; // reference
arr2.push(3);
console.log(arr1); // [1,2,3]
```

To copy objects:
- Shallow copy: Object.assign({}, obj) or spread {...obj} / [...arr]
- Deep copy: structuredClone(obj) (modern), JSON methods (caveats), or libraries (lodash).

---

## Immutability, Freezing, and Patterns

- Prefer immutable data where possible to reduce bugs.
- Use Object.freeze for shallow immutability.
- Consider libraries (Immer, Immutable.js) for complex immutable patterns.

```js
const user = Object.freeze({ name: 'Alice' });
// user.name = 'Bob'; // fails silently in non‑strict or throws in strict mode
```

---

## Naming Conventions & Best Practices

- Use descriptive, meaningful names: userCount, apiBaseUrl.
- Prefer camelCase for variables and functions.
- Use UPPER_SNAKE_CASE for compile‑time constants or environment constants (when appropriate).
- Avoid single‑letter names except for counters or very short scopes.
- Avoid dangling or ambiguous abbreviations.

Best practice checklist:
- Prefer const by default; use let only for reassignments.
- Never use var in modern code.
- Avoid global variables; prefer module exports/imports.
- Use eslint + airbnb/standard/your‑team rules.
- Document complex shapes with JSDoc or TypeScript types.

---

## Real-world examples

1) Configuration/constants
```js
// config.js (module)
export const API_BASE = process.env.API_BASE || 'https://api.example.com';
export const MAX_RETRIES = 3;

// usage
import { API_BASE } from './config.js';
```

2) Counters and state
```js
let requestCount = 0;
function sendRequest() {
    requestCount++;
    // ...
}
```

3) Caching with Map / WeakMap
```js
const cache = new Map();
function getData(key, fetcher) {
    if (cache.has(key)) return cache.get(key);
    const p = fetcher();
    cache.set(key, p);
    return p;
}

// WeakMap for private instance data
const privateData = new WeakMap();
class User {
    constructor(name) {
        privateData.set(this, { name });
    }
    getName() {
        return privateData.get(this).name;
    }
}
```

4) DOM refs
```js
const button = document.querySelector('#submit');
button.addEventListener('click', () => { /* use button */ });
```

---

## Advanced topics

- Closures and captured variables
    - Closures capture references to variables, not values. Use let in loops to avoid capture pitfalls.
    ```js
    for (let i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 0); // 0,1,2
    }
    ```

- Modules and top-level scope
    - ES modules have their own scope; variables exported/imported rather than polluting global.

- Memory management and leaks
    - Avoid unintentionally retaining references (e.g., global caches, timers, detached DOM nodes).
    - Use WeakMap/WeakSet for caches keyed by objects that should be GC'd.

- Dynamic property names and Symbols
    - Use object properties or symbols instead of creating dynamic global variable names.
    ```js
    const key = Symbol('id');
    obj[key] = 123;
    ```

- Eval and global injection — avoid
    - eval(), new Function(), and modifying global scope are unsafe and slow.

- Reactive frameworks and immutability
    - When using frameworks (React, Vue), prefer immutable updates so change detection is reliable.

---

## Common pitfalls

- Reassigning const accidentally: const prevents reassignment but not mutation.
- Unexpected global variables from missing declarations.
- Closure capture in loops when using var.
- Mutating shared objects leads to hard‑to‑debug bugs.

---

## Testing, linting, and tooling

- Use ESLint rules: no-var, prefer-const, no-unused-vars.
- Use Prettier for consistent formatting.
- Consider TypeScript or JSDoc for stronger type guarantees.
- Add unit tests that assert mutation behavior.

---

## Summary — Practical rules to follow

1. Prefer const by default; use let when you need reassignment; avoid var.
2. Keep variable scope as narrow as possible (block or module).
3. Use descriptive names and consistent naming conventions.
4. Avoid globals; use modules and dependency injection for configuration.
5. Be cautious with object mutation; prefer immutable patterns when appropriate.
6. Use Maps/WeakMaps for caching and private per‑object storage.
7. Use linting, type annotations, and tests to prevent common mistakes.

---

This overview covers the key ideas and patterns for working safely and effectively with variables in JavaScript. Use these rules and examples as a foundation for writing predictable, maintainable code.