# Algorithm Sorting Radix Sort and Counting Sort

## Main concepts and definitions Radix Sort and Counting Sort

### 1. What is Radix Sort?

Radix Sort is a **non-comparison-based** sorting algorithm that **sorts integers** by **grouping them by individual digits**. It **exploits the fact** that integers have a **finite number of digits** and **uses counting sort** as a subroutine to sort the digits. Radix Sort is **efficient** and has a **linear time complexity** when the number of digits is **constant**.

### 2. Why is Radix Sort important?

Radix Sort is an important sorting algorithm because it has a **linear time complexity** when the number of digits is **constant**. This makes it **efficient** for sorting integers with a **fixed number of digits**. Radix Sort is also **stable**, meaning that it **preserves the relative order** of equal elements.

### 3. What is Counting Sort?

Counting Sort is a **non-comparison-based** sorting algorithm that **sorts integers** by **counting the number of occurrences** of each element and **determining their positions** in the output array. It is **efficient** and has a **linear time complexity** when the range of input elements is **small**.

### 4. Why is Counting Sort important?

Counting Sort is an important sorting algorithm because it has a **linear time complexity** when the range of input elements is **small**. This makes it **efficient** for sorting integers with a **limited range**. Counting Sort is also **stable**, meaning that it **preserves the relative order** of equal elements.

## Time and Space Complexity Radix Sort and Counting Sort

### Time Complexity

| Algorithm      | Best Case | Average Case | Worst Case |
|----------------|-----------|--------------|------------|
| Radix Sort     | O(nk)     | O(nk)        | O(nk)      |
| Counting Sort  | O(n + k)  | O(n + k)     | O(n + k)   |

Radix Sort has a **time complexity of O(nk)**, where n is the number of elements in the list and k is the number of digits in the largest element. This is because the algorithm **iterates through each digit** of the input elements and **uses counting sort** as a subroutine to sort the digits.

Counting Sort has a **time complexity of O(n + k)**, where n is the number of elements in the list and k is the range of input elements. This is because the algorithm **counts the occurrences** of each element and **determines their positions** in the output array.

### Space Complexity

| Algorithm      | Worst Case |
|----------------|------------|
| Radix Sort     | O(n + k)   |
| Counting Sort  | O(n + k)   |

Radix Sort has a **space complexity of O(n + k)** in the worst case because it **requires additional space** for the counting sort subroutine. This additional space is proportional to the **number of elements** and the **range of input elements**.

Counting Sort has a **space complexity of O(n + k)** in the worst case because it **requires additional space** for the counting array and the output array. This additional space is proportional to the **number of elements** and the **range of input elements**.
