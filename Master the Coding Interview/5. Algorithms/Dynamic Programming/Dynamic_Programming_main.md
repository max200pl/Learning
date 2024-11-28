# Dynamic Programming Main

## What is Dynamic Programming?

- It's a method for solving a complex problem by breaking it down into simpler subproblems.
- Using cashing to store the results of the subproblems so that you don't have to recompute them.

## When to use Dynamic Programming?

- When a problem can be broken down into simpler subproblems.
- When you are given a recursive solution that has repeated calls for the same inputs.
- When you can store the results of the subproblems to avoid recomputation.

## When to use in real life?

- Fibonacci numbers
- Shortest path in a graph
- React components rendering
- Longest common subsequence

## Types of Dynamic Programming

1. **Memoization (Top-down):** It's a technique of storing the results of expensive function calls and returning the cached result when the same inputs occur again.

## Memoization

- It's a technique of storing the results of expensive function calls and returning the cached result when the same inputs occur again.
- It's a top-down approach.
- It's a recursive approach.

### Memoization Example 1

```javascript
function addTo80(n) {
  console.log("Long time...");
  return n + 80;
}

function memoizedAddTo80(n) {
  let cache = {}; // Memoization cache object to store the results of the subproblems to avoid recomputation.
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("Long time...");
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

const memoized = memoizedAddTo80();
console.log(memoized(5)); // Long time... 85
console.log(memoized(5)); // 85
```

### Memoization Example 2 (Fibonacci)

![Memoization Fibonacci 1](Memoization_Fibonacci_1.png)

![Memoization Fibonacci 2](Memoization_Fibonacci_2.png)

```javascript
function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

```javascript
function fibonacci(n, memo = []) {
  if (memo[n] !== undefined) {
    return memo[n];
  }
  if (n < 2) {
    return n;
  }
  let result = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  memo[n] = result;
  return result;
}
```
