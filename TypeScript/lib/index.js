"use strict";
let message = "Hellssadado";
console.log(message);
let regexp = new RegExp("ab+c");
let array = [1, 2, 3];
let set = new Set([1, 2, 3]);
// Tuples 
let tuple = [0, 0];
let center = {
    x: 0, y: 0
};
const point = { x: 0, y: 0 };
let add;
add = function (...values) {
    return values.length;
};
//======== Classes typing
class Animal {
    constructor(name) {
        this._name = name;
        this._surName = name;
    }
    move(distanceInMeters) {
        console.log(`${this._name}: ${distanceInMeters}`);
    }
}
let cat = new Animal("Cat");
cat.move(10);
// cat.name = "Dog"; ERROR private field
// Classes Generic
class Queue1 {
    constructor() {
        this.data = [];
    }
    push(item) { this.data.push(item); }
    pop() { return this.data.shift(); }
    ;
}
let queue = new Queue1();
let hello;
let timed = hello.trim();
hello = 0; // now see !ErrorTS
