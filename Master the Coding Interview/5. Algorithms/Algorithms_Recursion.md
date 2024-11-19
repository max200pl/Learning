# Recursion Algorithm

## What is Recursion?

Recursion is a method where the solution to a problem depends on solutions to smaller instances of the same problem.

- Recursion it's define as a function that calls itself.

## Recursion for File System

- Recursion is a great way to traverse a file system.

```powershell
ls

ls -R
```

## Where Recursion is used?

- Recursion is used in many algorithms, such as:
  - Binary Search
  - Merge Sort
  - Quick Sort
  - Tree Traversal
  - Graph Traversal
  - Dynamic Programming
  - Backtracking

## Stack Overflow

- Recursion can lead to stack overflow if the depth of the recursion is too high.
- To avoid stack overflow, we can use tail recursion.

## Recursion Base example

```javascript
let counter = 0;

function inception() {
  console.log(counter);
  if (counter > 3) {
    return 'done!';
  }
  counter++;
  return inception(); //! Always need to return the function
}

```

## BASE RULES OF RECURSION

1. Identify the base case

    ```javascript
        if (counter > 3) {
        return 'done!';
        }
    ```

2. Identify the recursive case

    ```javascript
        counter++;
        return inception();
    ```

3. Get closer and closer and return when needed. Usually you have 2 returns.

    ```javascript
        return inception();
    ```
