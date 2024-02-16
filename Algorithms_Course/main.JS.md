# JavaScript Concepts

## Variables and Data Types

- Introduction to variables
- Primitive data types
- Working with strings, numbers, and booleans
- Understanding null and undefined

### booleans

- Функция Boolean() преобразует значение в (true или false)
  - Если значение, переданное в Boolean(), является **"истинным" (truthy)**, то есть оно не является одним из следующих "ложных" (falsy) значений: **false, 0, "" (пустая строка), null, undefined, или NaN,** то Boolean() вернет **true**.
  - Если значение является "ложным" (falsy), то Boolean() вернет false.

## Control Flow

- Conditional statements (if, else if, else)
- Switch statements
- Loops (for, while, do-while)
- Break and continue statements

## Functions

### arguments

- Собор аргументов функции

``` javascript
    function([1,4,5], [2,4]){
        const arguments = [...arguments] // [[1,4,5], [2,4]]
    }

    function viewArgs(){
        return arguments;
    }

    console.log(viewArgs([3, 5, 1, 2, 2], 2, 3, 5))
```

## Arrays

- Creating and manipulating arrays
- Accessing array elements
- Array methods (push, pop, shift, unshift, etc.)
- Iterating over arrays (for loop, forEach, map, filter, etc.)

### Methods Arrays

#### arr.every((el)=> boolean)

1. Он проходит по каждому элементу массива, начиная с первого.
2. Для каждого элемента он вызывает функцию обратного вызова, передавая этот элемент в качестве аргумента.
3. Если функция обратного вызова возвращает false для любого элемента, метод every немедленно прекращает выполнение и возвращает false.
4. Если функция обратного вызова возвращает true для всех элементов, метод every возвращает true.

``` javascript
function truthCheck(collection, pre) {
  return collection.every(obj => obj[pre])
}

function truthCheck(collection, pre) {
  return collection.every(function (element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}
```

((el)=> true / false)
удовлетворяют ли все элементы массива условию, определенному в передаваемой функции.

## Objects

- Creating and accessing object properties
- Object methods
- Object destructuring
- Object-oriented programming concepts

## Error Handling

- Try-catch blocks
- Throwing and catching errors
- Error types and handling specific errors

## Asynchronous JavaScript

- Callback functions
- Promises
- Async/await
- Fetch API and AJAX

## ES6+ Features

- Let and const
- Template literals
- Destructuring assignment
- Spread and rest operators
- Modules and import/export

## DOM Manipulation

- Selecting and modifying HTML elements
- Event handling
- Creating and appending elements
- Manipulating CSS classes

## Regular Expressions

- Creating and using regular expressions
  1. найти элемент строки в строке и вернуть новую строку;

    ``` javascript
        str.replace(/([&<>\"'])/g, match => characterEntries[match])
    ```

- Matching patterns in strings
- Replacing and extracting substrings

## Debugging and Tools

- Using the browser console
- Debugging techniques
- JavaScript development tools (linters, formatters, etc.)
- Popular JavaScript libraries and frameworks

## Best Practices

- Writing clean and readable code
- Code organization and structure
- Performance optimization
- Testing and debugging strategies
