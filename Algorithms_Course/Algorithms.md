# Algorithms

## ======= Strings ========

### Compare strings

1. find the missing letter from a string and return it

```javascript
// fiend uniq literals form alphabet
function fearNotLetter(str) {
  let currCharCode = str.charCodeAt(0);
  let missing = undefined;

  str.split("").forEach((letter) => {
    if (letter.charCodeAt(0) === currCharCode) {
      currCharCode++;
    } else {
      missing = String.fromCharCode(currCharCode);
    }
  });

  return missing;
}
```
