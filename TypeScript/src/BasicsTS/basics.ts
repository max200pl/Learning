// Primitives: boolean, number, string

let age: number;
age = 20;

let nameUser: string;
nameUser = "John";

let isInstructor: boolean;
isInstructor = true;

// More complex types

let hobbies: string[]; // array of string
hobbies = ["Sports", "Music", "Cooking"];

let person: any; // any type that can be converted
let personA: {}; // object type definitions
let personB: {
    // object type definitions
    name: string;
    age: number;
};

let personC: {
    // массивы объектов
    name: string;
    age: number;
}[];

person = {
    name: "John",
    age: 20,
};

//* Union type 
let curse: string | number = "Sports";

// Type aliases

type Person = {
    name: string;
    age: number;
};

let personD: Person; // object type definitions
let peopleD: Person[]; // array of Person

// Functions & types

function add1(a: number, b: number): number {
    return a + b;
}
let result: number = add1(10, 20);

function add2(a: number, b: number): void {
    const sum = a + b;
}

//* Generics functions

function sum(a: number, b: number): number {
    return a + b;
}

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array]; // copy array
    return newArray;
}

const demoArray = [0, 1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 0, 1, 2, 3]

//* Tuples type

interface dog {
    eyes: number;
    tail: number;
    legs: number;
    name: [string, string];
}

const dog: dog = {
    eyes: 2,
    tail: 1,
    legs: 4,
    name: ["Popy", "Clark"], // Tuples type fixed length array only 2 items
};

//* Enum type

enum Role {
    ADMIN = 0,
    READ_ONLY = 1,
    AUTHOR = 2,
}

const cat1 = {
    eyes: 2,
    tail: 1,
    legs: 4,
    role: Role.ADMIN,
};

if (cat1.role === Role.ADMIN) {
    console.log("Ok");
}

//* Any type

let arr: any[] = ["asda", "asdsd"];



//* Alias type =================================================================

type Combinable = number | string; // Union type 
type ConversionDescriptor = "as-text" | "as-number"  // Literal type

function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor
) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
        // need check type
        result = +input1 + +input1;
    } else {
        result = input1.toString() + input2.toLocaleString(); // need check type
    }

    return result;
    // if (resultConversion === "as-number") {
    //     return +result
    // } else {
    //     return result.toString()
    // }
}

const combineAges = combine(20, 30, "as-number");
const combineStringAges = combine("20", "30", "as-number");
const combineNames = combine("Max", "Anna", "as-text");

// Void type =================================

function adds(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log("Result" + num)

    // return
}

// function ok(num: number): undefined {
//     console.log(num)
//     return
// }

printResult(adds(5, 12))

//* Function type =================================

// let combineValues: Function;
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult //!ERROR get only 1 parameter

console.log(combineValues(8, 8))

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result)
}

addAndHandle(10, 10, (result) => {
    console.log(result);
})


//* Unknown Type ===============================================

let useInput: unknown; // it hove any but different;
let userName: string;

useInput = true;
useInput = "adas";
//!error userName = useInput 

if (typeof useInput === "string") {
    userName = useInput;
}

// Never Type ===============================================

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
    // while(true) {}
}

generateError("An error occurred", 400)
