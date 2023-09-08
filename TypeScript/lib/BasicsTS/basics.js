"use strict";
// Primitives: boolean, number, string
let age;
age = 20;
let nameUser;
nameUser = "John";
let isInstructor;
isInstructor = true;
// More complex types
let hobbies; // array of string
hobbies = ["Sports", "Music", "Cooking"];
let person; // any type that can be converted
let personA; // object type definitions
let personB;
let personC;
person = {
    name: "John",
    age: 20,
};
//* Union type 
let curse = "Sports";
let personD; // object type definitions
let peopleD; // array of Person
// Functions & types
function add1(a, b) {
    return a + b;
}
let result = add1(10, 20);
function add2(a, b) {
    const sum = a + b;
}
//* Generics functions
function sum(a, b) {
    return a + b;
}
function insertAtBeginning(array, value) {
    const newArray = [value, ...array]; // copy array
    return newArray;
}
const demoArray = [0, 1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 0, 1, 2, 3]
const dog = {
    eyes: 2,
    tail: 1,
    legs: 4,
    name: ["Popy", "Clark"], // Tuples type fixed length array only 2 items
};
//* Enum type
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
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
let arr = ["asda", "asdsd"];
function combine(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
        // need check type
        result = +input1 + +input1;
    }
    else {
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
function adds(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result" + num);
    // return
}
// function ok(num: number): undefined {
//     console.log(num)
//     return
// }
printResult(adds(5, 12));
//* Function type =================================
// let combineValues: Function;
let combineValues;
combineValues = add;
// combineValues = printResult //!ERROR get only 1 parameter
console.log(combineValues(8, 8));
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 10, (result) => {
    console.log(result);
});
//* Unknown Type ===============================================
let useInput; // it hove any but different;
let userName;
useInput = true;
useInput = "adas";
//!error userName = useInput 
if (typeof useInput === "string") {
    userName = useInput;
}
// Never Type ===============================================
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // while(true) {}
}
generateError("An error occurred", 400);
