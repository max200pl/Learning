# Data Structures Objects

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
