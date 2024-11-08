# Data Structures Arrays and Objects

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

### Primitive Types

- Number
- String
- Boolean
- Null
- Undefined

### Reference Types

- Object
- Array

```javascript
    const object1 = { value: 10 }; // object1 is a reference to an object in memory
    const object2 = object1; // object2 is a reference to object1
    const object3 = { value: 10 }; // object3 is a new object in memory
```

```javascript
    const array1 = [1, 2, 3, 4, 5];
    const array2 = array1; // array2 is a reference to array1
    const array3 = [].concat(array1); // array3 is a new array
```

### Context vs Scope

- `this` - Refers to the object that is executing the current function
- `this` is not static, it depends on how the function is called

```javascript
   function a() {
       let b = 10; // b is in the scope of function a
   }

   const objectName = {
       a: function() {
           console.log(this); // this is the objectName object
       }
    }

    console.log(this); // Window object
```

### Instantiation

- Making a copy of an object and reuse the code

```javascript
    class Player {
        constructor(name, type) { // 1. create the constructor
            console.log(this);
            this.name = name; // 1.1 this refers to the object that is created
            this.type = type;
        }

        introduce() { // 2. create a method
            console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
        }
    }

    class Wizard extends Player {
        constructor(name, type) { // 3. create the constructor
            super(name, type); // 3.1 super is used to call the constructor of the parent class
        }
        play() {
            console.log(`WEEEEEEEE I'm a ${this.type}`);
        }
    }

    const wizard1 = new Wizard('Shelly', 'Healer'); // 4. create an object
    const wizard2 = new Wizard('Shawn', 'Dark Magic'); // 4.1 create another object
    // wizard1.introduce(); // Hi I am Shelly, I'm a Healer
```

## Data Structures Arrays

- Lookup: O(1)
- Push: O(1)
- Insert: O(n)
- Delete: O(n)

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
