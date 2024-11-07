# Data Structures Arrays

Dynamic Array - Automatically resizes itself when it reaches capacity
Static Array - Fixed size

- Lookup: O(1)
- Push: O(1)
- Insert: O(n)
- Delete: O(n)

```javascript
    const string =
    //  0    1    2    3
    ['a', 'b', 'c', 'd'];
    // 4*4 = 16 bytes of storage (4 bytes per character) is system bit size (32-bit or 64-bit)

    // push - O(1) - Add item to the end - (Append at the end)
    string.push('e'); // ['a', 'b', 'c', 'd', 'e']
    // pop - O(1) - Remove last item - (Delete from the end)
    string.pop(); // ['a', 'b', 'c', 'd']
    // unshift - O(n) - Add item to the beginning - (Insert at the beginning)
    string.unshift('x'); // ['x', 'a', 'b', 'c', 'd']
    // splice - O(n) - Add item to the middle - (Insert at the middle)
    string.splice(2, 0, 'alien'); // ['x', 'a', 'alien', 'b', 'c', 'd']


    // C++
    // int a[20]; // Static Array
```

## Classes in javascript

### Reference Types

- Objects
- Arrays
