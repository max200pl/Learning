# Data Structure Hash Tables

[EXAMPLE CREATION Hash](https://www.cs.usfca.edu/~galles/visualization/OpenHash.html)

- objects in JS are hash tables
- java has maps
- python has dictionaries
- ruby has hash tables

## Hash Tables

- key-value pairs
- keys are unique
- keys are hashed to store in memory

![alt text](image.png)

### Hash function

[Link Hash generator](https://www.miraclesalad.com/webtools/md5.php)

- takes a key and returns an index
- ideally, the hash function should return a unique index for each key

### Hash Tables VS Arrays

| Hash Tables | Arrays |
| ----------- | ------ |
| keys are not ordered | keys are ordered |
| keys are unique | keys are not unique |
| O(1) lookup | O(1) lookup |
| O(1) insert | O(n) insert |
| O(1) delete | O(n) delete |

### EXAMPLE

```javascript
let user =
{
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function() {
        console.log('ahhhhhhhhh');
    }
}

user.age // O(1)
user.spell = 'abra kadabra'; // O(1)
```

## Collisions

- two keys can have the same hash
- two keys can have the same index

![alt text](image-1.png)

![alt text](image-2.png)

Big O of Hash Tables is O(1) but in the worst case scenario it can be O(n)

## Hash Table Implementation in JS (ES6)

### SET VS MAP

| Set | Map |
| --- | --- |
| stores keys | stores key-value pairs |
| keys are unique | keys are unique |
| O(1) lookup | O(1) lookup |
| O(1) insert | O(1) insert |
| O(1) delete | O(1) delete |

```javascript
const a = new Map(); // O(1)
const b = new Set(); // O(1)
```
