# Data Structures Arrays

## Static vs Dynamic Arrays

Dynamic Array - Automatically resizes itself when it reaches capacity
Static Array - Fixed size

| Operation | Static Array | Dynamic Array |
| --------- | ------------ | ------------- |
| Lookup    | O(1)         | O(1)          |
| Push      | O(n)         | O(1)          |
| Insert    | O(n)         | O(n)          |
| Delete    | O(n)         | O(n)          |
| Append    | N/A          | O(1)          |

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

### Own Array Implementation

```javascript
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    delete(index){
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index){
        for(let i = index; i < this.length - 1; i++){ // O(n)
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
newArray.delete(1);
newArray.pop();
console.log(newArray); // MyArray { length: 2, data: { '0': 'hi', '1': 'you' } }
```

### Strings As Arrays

```javascript
    const string = 'Hi my name is Shubham';
    const reverseString = string.split('').reverse().join('');
    console.log(reverseString); // mahbuhS si eman ym iH
```
