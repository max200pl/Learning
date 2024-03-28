# Examples from freeCodeCampe of Regular Expressions in JavaScript (RegExp)

## Example 1 Check For All Or None

```javascript
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);
```

## Example 2 Check For Mixed Grouping of Characters

```javascript
let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin\sD)/g; // Change this line
let result = myRegex.test(myString); // Change this line

```

## Example 3

```javascript
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line

let result = extractStr.match(codingRegex); // Change this line

console.log(result)
```

## Example 4

```javascript
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

console.log(result)
```

## Example 5

```javascript
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);

console.log(result)
```

## Example 6

```javascript
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

console.log(result)
```

## Example 7

```javascript
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

console.log(result)
```

## Example 8

```javascript

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;

console.log(result)
```

## Example 9

```javascript
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

console.log(result)
```

## Example 10

```javascript

let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);

console.log(result)
```

## Example 11

```javascript
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

console.log(result)
```

## Example 12

```javascript
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

console.log(result)
```

## Example 13

```javascript
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

console.log(result)
```

## Example 14

```javascript
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);

console.log(result)
```

## Example 15

```javascript

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line

console.log(result)
```

## Example 16

```javascript
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

console.log(result)
```

## Example 17

```javascript
let quoteSample = "3 blind mice.";
let myRegex = /[^3aeiou]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

console.log(result)
```

## Example 18

```javascript

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);

console.log(result)
```

## Example 19

```javascript

let sampleWord = "astronaut";
let pwRegex = /^\D(?=\w{5})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);

console.log(result)
```

## Example 20

```javascript
let hello = "   Hello, World!  ";
let wsRegex = /\S(\w+\W)\s(\w+)\S/gi; // Change this line
let result = hello.match(wsRegex); // Change this line
console.log(result)
```

## Example 21

```javascript
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/gi; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
console.log(result)
```

## Example 22

```javascript

let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i; // Change this line
let result = userCheck.test(username);


console.log(result)
```

## Example 23

```javascript

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);

console.log(result)
```

## Example 24

```javascript

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);

console.log(result)
```

## Example 25

```javascript

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);

console.log(result)
```

## Example 26

```javascript
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/g; // Change this line
let result = ohRegex.test(ohStr);

console.log(result)
```

## Example 27

```javascript
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);

console.log(result)
```

## Example 28

```javascript

const squareList = arr => {
  // Only change code below this line
  return arr
          .filter(num => num > 0 && num % parseInt(num) === 0)
          .map(num => Math.pow(num, 2))
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
```

## Example 29

```javascript
