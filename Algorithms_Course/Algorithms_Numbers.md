# Algorithms

## Table of contents

- [Algorithms](#algorithms)
  - [Table of contents](#table-of-contents)
  - [Numbers](#numbers)
    - [1. Sum All Odd Fibonacci Numbers -\> Сложность 4/5](#1-sum-all-odd-fibonacci-numbers---сложность-45)
    - [2. Sum all Primes -\> Сложность 5/5](#2-sum-all-primes---сложность-55)
    - [3. Roman Numeral Converter -\> Сложность 5/5](#3-roman-numeral-converter---сложность-55)
  - [Function](#function)
    - [1. Arguments Optional  -\> Сложность 3/5](#1-arguments-optional----сложность-35)
    - [2. Make a Person  -\> Сложность 3/5](#2-make-a-person----сложность-35)
  - [Regular Expressions](#regular-expressions)
    - [1. Telephone Number Validator -\> Сложность 3/5](#1-telephone-number-validator---сложность-35)

<!--
### 1. Smallest Common Multiple  -> Сложность 1/5
**Условие:**

**Info:**

**Алгоритм:**

```javascript
```
-->

## Numbers

### 1. Sum All Odd Fibonacci Numbers -> Сложность 4/5

**Условие:**
нужно посчитать сумму фибоначчи чисел 0,1,1,2,3,5,8,13,21,34,55

**Алгоритм:**

1. получить предыдущее значение;
2. получить текущее значение;
3. (0) + (1) = (1) => 1 + 1 = (2) => 1 + 2 = (3)
4. сложить предыдущее с текущее -> (2)+(3)=5

    ```javascript
    function fibonacciShort(num) {
      let a = 1,
        b = 1;

      for (let i = 3; i <= num; i++) {
        [a, b] = [b, a + b];
      }
      return b;
    }

    function sumFibs(num) {
      let prev = 0;
      let current = 1;
      let fibonacci = 0;

      while (current <= num) {
        if (current % 2 !== 0) {
          fibonacci += current;
        }

        current += prev;
        prev = current - prev;
      }

      return fibonacci;
    }

    function fibonacci(num) {
      const result = [0, 1];
      for (let i = 2; i < num; i++) {
        const prevNum1 = result[i - 1];
        const prevNum2 = result[i - 2];
        result.push(prevNum1 + prevNum2);
      }

      return result[num];
    }
    ```

### 2. Sum all Primes -> Сложность 5/5

**Условие:**
Нужно возвращать сумму всех простых чисел который меньше либо равны входному числу

**Info:**

1. простое число это натуральное число, единственным делителями которого являются только оно само и единица
   1. 2 это простое число которое делиться на 1 и 2
   2. 4 это не простое число которое делиться на 1,2,4
   3. натуральное число 1 не являются ни простым ни составным
2. разложением на простые множители - это если в натуральном числе все множители простые числа

**Теорема:**
*Каждое натуральное число, отличное от 1, может быть разложено на простые множители, и притом единственным образом (если отожествлять разложения p*q и q*p, где p и q простые числа)*

*Решето Эратосфена применимо к решению этой задачи.*

**Алгоритм:**

1. разложить число начиная с 2 ...
2. исключение составных чисел (которые имею делители отличные от 1 и самого числа)
3. суммируем все оставшиеся просты числа

```javascript
function sumPrimes(num) {
  let primes = [];

  for (let i = 2; i <= num; i++) {
    if (primes.every((prime) => i % prime !== 0)) {
      primes.push(i);
    }
  }

  return primes.reduce((sum, prime) => sum + prime, 0);
}

sumPrimes(assad)
```

### 3. Roman Numeral Converter -> Сложность 5/5

**Условие:**
Преобразовать число в римскую систему

**Info:**

**Алгоритм:**

1. создать объект с ключами и значениями
2. преобразовать число строку и разбить на массив строк
3. перебрать массив
4. преобразовать каждый элемент в число
5.

```javascript
function convertToRoman(num) {
  const romanToNum = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  let digits = [];

  const getComponents = (num) => {
    while (num > 0) {
      let digit = num % 10; // получаем последнюю цифру
      digits.unshift(digit); // добавляем ее в начало массива
      num = Math.floor(num / 10); // удаляем последнюю цифру из числа
    }
    let components = digits.map(
      (digit, index) => digit * Math.pow(10, digits.length - index - 1)
    );
    components = components.filter((component) => component !== 0);
    console.log(components);
    return components;
  };

  const romanNum = getComponents(num).reduce((acc, el, index) => {
    let sign = "";

    if (el < 4) {
      for (let i = 1; i <= el; i++) {
        sign += romanToNum[1];
      }

      return (acc += sign);
    }

    if ((el >= 4) & (el < 9)) {
      if (el === 4) {
        sign += romanToNum[4];
      } else {
        sign += romanToNum[5];

        for (let i = 0; i < el - 5; i++) {
          sign += romanToNum[1];
        }
      }

      return (acc += sign);
    }

    if (el === 9) {
      return (acc += romanToNum[9]);
    }

    if (el >= 10 && el < 40) {
      if (el === 10) {
        sign += romanToNum[10];
      } else {
        sign += romanToNum[10];

        for (let i = 1; i < el / 10; i++) {
          sign += romanToNum[10];
        }
      }

      return (acc += sign);
    }

    if (el >= 40 && el < 50) {
      if (el === 40) {
        sign += romanToNum[40];
      } else {
        sign += romanToNum[40];

        for (let i = 1; i < el / 10; i++) {
          sign += romanToNum[40];
        }
      }

      return (acc += sign);
    }

    if (el >= 50 && el < 90) {
      if (el === 50) {
        sign += romanToNum[50];
      } else {
        sign += romanToNum[50];

        const result = el - 50;
        console.log(result);

        for (let i = 1; i <= result / 10; i++) {
          sign += romanToNum[10];
        }
      }

      return (acc += sign);
    }

    if (el >= 90 && el < 100) {
      if (el === 90) {
        sign += romanToNum[90];
      } else {
        sign += romanToNum[90];

        for (let i = 1; i < el / 90; i++) {
          sign += romanToNum[90];
        }
      }

      return (acc += sign);
    }

    if (el >= 100 && el < 400) {
      if (el === 100) {
        sign += romanToNum[100];
      } else {
        const result = el - 100;
        console.log(result);

        sign += romanToNum[100];

        for (let i = 1; i < result / 10; i++) {
          sign += romanToNum[10];
        }
      }

      return (acc += sign);
    }

    if (el >= 400 && el < 500) {
      if (el === 400) {
        sign += romanToNum[400];
      } else {
        sign += romanToNum[400];

        for (let i = 1; i < el / 400; i++) {
          sign += romanToNum[400];
        }
      }

      return (acc += sign);
    }

    if (el >= 500 && el < 900) {
      if (el === 500) {
        sign += romanToNum[500];
      } else {
        const result = el - 500;

        sign += romanToNum[500];

        for (let i = 0; i < result / 100; i++) {
          sign += romanToNum[100];
        }
      }

      return (acc += sign);
    }

    if (el >= 900 && el < 1000) {
      if (el === 900) {
        sign += romanToNum[900];
      } else {
        const result = el - 900;

        sign += romanToNum[900];

        for (let i = 0; i < result / 100; i++) {
          sign += romanToNum[100];
        }
      }

      return (acc += sign);
    }

    if (el >= 1000) {
      if (el === 1000) {
        sign += romanToNum[1000];
      } else {
        for (let i = 0; i < el / 1000; i++) {
          sign += romanToNum[1000];
        }
      }
      return (acc += sign);
    }

    return acc;
  }, "");

  console.log(romanNum);

  return romanNum;
}

convertToRoman(2000);
```

## Function

### 1. Arguments Optional  -> Сложность 3/5

**Условие:**

1. вызвать функцию с которая будет суммировать текущий аргумент и предыдущее если это число.
2. Если один аргумент число то возвращать function
3. Если не число возвращать undefined

**пример:** *addTogether(2, 3) should return 5, and addTogether(2) should return a function.*

**Info:**

**Алгоритм:**

1. получить аргументы функции
2. сохранить в переменную
3. проверить на число (если не число вернуть undefined)
4. получить второй аргумент
5. проверить на число (если число продолжить)
6. сложить два аргумента через рекурсию

```javascript
function addTogether(){
    const [first, second] = arguments;

    const isFirstNumber = typeof first === "number";
    const isSecondNumber = typeof second === "number";

    if (isFirstNumber) {
        if (arguments.length === 1) {
            return (second) => addTogether(first, second);
        }

        if (isSecondNumber) {
            return first + second;
        }
    }
}

function addTogether(){
    const [first, second] = arguments;

    function addSecond(second){
        if (typeof second === "number") {
            return first + second;
        }
    }

    if (typeof first === "number") {
        if (arguments.length === 1) return addSecond;
        if (arguments.length === 2) return addSecond(second);
    }
}

```

### 2. Make a Person  -> Сложность 3/5

**Условие:**

1. Создать объект Person который будет принимать два аргумента first, last
2. Создать метод getFullName который будет возвращать полное имя
3. Создать метод setFirstName который будет устанавливать имя

**пример:**

**Info:**

Замыкания (Closures) - *это функция внутри функции которая имеет доступ к переменным внешней функции*

**Алгоритм:**

1. создать две переменные с во внутренней области видимости функции
2. установить методы для получения и установки имени
3. создать метод для установки полного имени
4. вернуть полное имя

```javascript
const Person = function(first, last) {
    let firstName = first;
    let lastName = last;

    this.getFullName = function() {
        return this.getFirstName() + " " + this.getLastName();
    };

    this.getFirstName = function() {
        return firstName = first;
    };

    this.getLastName = function() {
        return lastName = last;
    };

    this.setFirstName = function(first) {
        firstName = first;
    };

    this.setLastName = function(last) {
        lastName = last;
    };

    this.setFullName = function(first,last){
        this.setFirstName(first);
        this.setLastName(last);
        return this.getFullName();
    }
};
```

## Regular Expressions

1. Регулярные выражения - это шаблон для поиска и замены текста

### 1. Telephone Number Validator -> Сложность 3/5

**Условие:**

1. Проверить валидность номера телефона
2. Валидный номер телефона должен быть в формате 555-555-5555
3. Валидный номер телефона должен быть в формате (555)555-5555

**пример:**

**Info:**

**Алгоритм:**

1. создать регулярное выражение
2. проверить на валидность

```javascript

function telephoneCheck(str) {
  const regExp = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regExp.test(str);
}

telephoneCheck("555-555-5555");
```
