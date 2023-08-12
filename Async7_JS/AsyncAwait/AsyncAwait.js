// that only syntactics sugar

async function c() {
    return new Promise.reject(404);
}

function getSpecificNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(32), 1000);
    })
}

async function f() {
    const specialNumber = await getSpecificNumber();
    console.log(specialNumber);
}
// the same as f() above
function fc() {
    getSpecificNumber().then((specificNumber) => console.log(specificNumber));
}

// function getRandomDogImage() {
//     fetchImage("https://dog.ceo/api/breeds/image/random")
//         .then((response) => response.json())
//         .then((value) => console.log(value))
// }

async function getRandomDogImage() {
    let response = await fetch("https://dog.ceo/api/breeds/image/random");
    let value = await response.json();

    console.log(value.message);
}

getRandomDogImage()


function notWorkingInTopLevel() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(32), 1000);
    })
}

//! Didn't work  SyntaxError: await is only valid in async functions and the top level bodies of modules
//* if we change the file to AsyncAwait.mjs
//* or crete near  AsyncAwait.js file  a package.json file and added  "type": "module" //create package jason =>>> npm init -y
const specificNumber = await notWorkingInTopLevel();
console.log(specificNumber)

// (async function () {
//     const specialNumber = await notWorkingInTopLevel();
//     console.log(specialNumber)
// })();


// ========== Try catch handling error or .catch ===============


async function errorHandling() {
    try {
        let response = await fetch("https://some-host.com/wrong-url");
        let value = await response.json();
    } catch (e) {
        console.log(`Some error ${e}`)
    }
}

errorHandling()

async function errorHandling2() {
    const response = await fetch("https://some-host.com/wrong-url");
}

errorHandling2().catch(e => console.log("Custom error: " + e));

// ========== Use 2 promises in a parallel ===============


function printNumber1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("printNumber is done");
            resolve(1)
        }, 2000);
    })
}

function printNumber2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("print two is done");
            resolve(2)
        }, 2000);
    })
}

async function oneByOne() {
    const number1 = await printNumber1();
    const number2 = await printNumber2();

    console.log("Number1: " + number1, "Number2: " + number2);
}

oneByOne()

//*******   wait until both are complete  */ 

async function inParallel() {
    const promise1 = printNumber1(); // use in a parallel
    const promise2 = printNumber2(); // use in a parallel
    // const number1 = await promise1;
    // const number2 = await promise2;
    const [number1, number2] = [await promise1, await promise2] // destructuring 

    console.log("Number1: " + number1, "Number2: " + number2)
    //  ======= OR ========= // 
    console.log(await promise1, await promise2)
}

inParallel()

