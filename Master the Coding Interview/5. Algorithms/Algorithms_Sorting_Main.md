# Algorithms Sorting Main

## Main concepts and definitions

### 1. What is sorting?

Sorting is the process of arranging elements in a list in a certain order. The most common orders are **numerical order** and **lexicographical order**.

### 2. Why is sorting important?

Sorting is a fundamental operation in computer science. It is **used in many algorithms** and applications. For example, sorting is used in searching algorithms, **data compression**, and **data analysis**.

### 3. What are the different sorting algorithms?

There are many different sorting algorithms, each with its own **advantages** and **disadvantages**. Some of the most common sorting algorithms are:

| Algorithm      | Description                                                                                       | Time Complexity | Space Complexity | Notes                                                                 |
|----------------|---------------------------------------------------------------------------------------------------|-----------------|------------------|-----------------------------------------------------------------------|
| Bubble Sort    | Simple, but inefficient. Use it for small datasets or when simplicity is more important than performance. | O(n^2)          | O(1)             | Inefficient for large datasets.                                       |
| Selection Sort | Simple, but inefficient. Use it for small datasets or when simplicity is more important than performance. | O(n^2)          | O(1)             | Inefficient for large datasets.                                       |
| Insertion Sort | Simple, but inefficient. Use it for small datasets or when simplicity is more important than performance. | O(n^2)          | O(1)             | Efficient for small datasets.                                         |
| Merge Sort     | Efficient and stable. Use it when you need a stable sorting algorithm.                            | O(n log n)      | O(n)             | Not good for large datasets due to space complexity.                  |
| Quick Sort     | Efficient and in-place. Use it when you need an in-place sorting algorithm.                       | O(n log n)      | O(log n)         | Not stable; the relative order of equal elements may change.          |
| Heap Sort      | Efficient and in-place. Use it when you need an in-place sorting algorithm.                       | O(n log n)      | O(1)             | Efficient and in-place.                                               |

## The issue with sorting algorithms in JavaScript

1. In a javascript sort() **converts numbers to strings** and sorts them lexicographically. This can lead to **incorrect results** when sorting numbers.
2. Sort algorithms **depend by browser** and engine. For example, Chrome uses a different sort algorithm than Firefox.

    ```javascript
    const letters = ['b', 'a', 'd', 'c'];
    const numbers = [2, 65, 34, 2, 1, 7, 8];

    numbers.sort(); // [1, 2, 2, 34, 65, 7, 8] - Incorrect result because
    console.log("2".charCodeAt(0)); // 50
    console.log("65".charCodeAt(0)); // 54
    console.log("7".charCodeAt(0)); // 55
    console.log("8".charCodeAt(0)); // 56

    numbers.sort((a, b) => a - b); // [1, 2, 2, 7, 8, 34, 65] - Correct result
    ```

3. **string.localCompare()** function can be used to sort numbers correctly.

    ```javascript
    const spanish = ['único', 'árbol', 'cosas', 'fútbol'];
    spanish.sort(); // ['cosas', 'fútbol', 'árbol', 'único'] - Incorrect result
    spanish.sort((a, b) => a.localeCompare(b)); // ['árbol', 'cosas', 'fútbol', 'único'] - Correct result
    ```
