//* ========= XMLHttpRequest =========

// "First request"
/* const xhr = new XMLHttpRequest();
xhr.open('GET', "https://dog.ceo/api/breeds/list/all");
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        const response = xhr.parse(xhr.responseText);
        const breeds = Object.keys(response.messages);
        const firstBreedInTheList = breeds[0];
        // "Second  request"
        const xhr2 = new XMLHttpRequest();
        xhr2.open('GET', `http://....${firstBreedInTheList} + /images/random`);
        xhr2.onreadystatechange = function () {
            if (xhr2.readyState === XMLHttpRequest.DONE) {
                console.log(xhr2.responseText);
            }
        }
        xhr2.send(null);
        // finished "Second  request"
    }
}
xhr.send(null); */

//* __________ // XMLHttpRequest __________

//* ========= Order result and timeout =========

function calculateSquare(number, callback) {
    setTimeout(function () {
        if (typeof number !== 'number') {
            callback(new Error("Argument must be a number"));
            return;
        }
        const result = number * number;
        callback(null, result);
    }, 1000)
}

// prints 3 numbers at once

calculateSquare(1, function (err, result) {
    console.log(result);
})
calculateSquare(2, function (err, result) {
    console.log(result);
})
calculateSquare(3, function (err, result) {
    console.log(result);
})

// prints one number after 1 second 
calculateSquare(1, function (err, result) {
    console.log(result);
    calculateSquare(2, function (err, result) {
        console.log(result);
        calculateSquare(3, function (err, result) {
            console.log(result);
        })
    })
})

//* __________ // Order result and timeout __________

//* TESTING CALLBACKS 

module.exports = calculateSquare;

//* ========= Promise and promisify function  =========

// Promise is a special JavaScript object that represents an eventual result of asynchronous action
// Promise has two enteral properties:
// PromiseStatus and PromiseValue 
// PromiseValue is contained value if successful 
// PromiseStatus has 3 status: pending, fulfilled, rejected

const myPromise = new Promise(function (resolve, reject) { // create instance of this class. Promise has one argument executor function
    resolve("Hello World"); // only one status have to be fulfilled or rejected 
    resolve("value2"); //! not working 
    reject("reason")   //! not working 
})

console.log(myPromise) // 

// then method takes 2 arguments:
// onFulfilled
// onRejected

myPromise.then(function (value) { // onFulfilled function  Asynchronously function
    console.log("onFulfilled" + value)
    console.log('This is inside onFulfilled function')
});

console.log("This is written after myPromise.then")

function calculateSquarePromise(number) {
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (typeof number !== "number") {
                return reject(new Error("Argument must be a number"));
            }
            const result = number * number;
            resolve(result);
        }, 1000)
    });

    return promise;
}

calculateSquarePromise(2)
    .then(value => {
        console.log("Success: " + value);
    }, reason => {
        console.log("Error: " + reason);
    })

calculateSquarePromise("2")
    .then(value => {
        console.log("Success: " + value);
    }, reason => {
        console.log("Error: " + reason);
    })

function capitalize(str) {
    return new Promise((resolve, reject) => {
        if (typeof str !== "string") {
            return reject(new Error("Not a string"));
        }
        const result = str.charAt(0).toUpperCase();
        return resolve(result)
    })
}

function successesAction(action) {
    return new Promise((resolve, reject) => {
        if (action === "success") {
            return resolve(action)
        }
        if (action == "fail") {
            return reject(new Error("Fail" + action))
        }
    })
}

calculateSquarePromise(1)
    .then((value1) => {
        console.log("Success" + value1)
        // return 24
        // throw new Error("error");
        // return calculateSquarePromise(2);
        return calculateSquarePromise("2");
    })
    .then((value2) => {
        console.log("Previous then" + value2)
    }, (reason) => {
        console.log("Error" + reason)
    });

//* __________ // Promise and promisify function  __________
