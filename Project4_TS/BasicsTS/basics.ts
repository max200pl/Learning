// Primitives: boolean, number, string

let age: number;
age = 20;

let nameUser: string;
nameUser = "John";

let isInstructor: boolean;
isInstructor = true;

// More complex types

let hobbies: string[]; // array of string
hobbies = [
    "Sports",
    "Music",
    "Cooking"
];

let person: any; // any type that can be converted
let personA: {}; // object type definitions
let personB: { // object type definitions
    name: string;
    age: number;
}; 

let personC : {  // массивы объектов 
    name: string,
    age: number,
}[]

person = {
    name: "John",
    age: 20,
}
 
// Type interface definitions UINION
let curse : string | number = "Sports";

// Type aliases

type Person = {
    name: string;
    age: number;
}

let personD: Person; // object type definitions
let peopleD: Person[] // array of Person


// Type combaines 

// Functions & types

function add(a: number, b: number): number {
    return a + b
}
let result: number = add(10, 20);

function add2(a: number, b: number): void {
    const sum =  a+b
}

// Generics functions

function sum(a: number, b: number): number {
    return a + b
}

function  insertAtBeginning <T>(array: T[], value: T) {
    const newArray = [value, ...array] // copy array
    return newArray;
}

const demoArray = [0, 1, 2, 3]

const updatedArray = insertAtBeginning(demoArray, -1) // [-1, 0, 1, 2, 3]