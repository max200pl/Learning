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

// catch method it takes one argument if only need catch error 

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

// function capitalize(str) {
//     return new Promise((resolve, reject) => {
//         if (typeof str !== "string") {
//             return reject(new Error("Not a string"));
//         }
//         const result = str.charAt(0).toUpperCase();
//         return resolve(result)
//     })
// }

// function successesAction(action) {
//     return new Promise((resolve, reject) => {
//         if (action === "success") {
//             return resolve(action)
//         }
//         if (action == "fail") {
//             return reject(new Error("Fail" + action))
//         }
//     })
// }

// calculateSquarePromise(1)
//     .then((value) => {
//         console.log("Success" + value)
//         // return 24
//         // throw new Error("error");
//         // return calculateSquarePromise("2");
//         // return calculateSquarePromise(2);
//         return new Promise((resolve, reject) => {
//             return reject(new Error("Something went wrong"));
//         });
//     })
//     .then((value) => {
//         console.log("Previous then" + value)
//         return calculateSquarePromise(3);
//     }, (reason) => {
//         console.log("Error" + reason)
//     })
//     .then((value) => {
//         console.log("Next then" + value)
//         return calculateSquarePromise(3);
//     })
//     .then((value) => { // use only fulfilled promise 
//         console.log("Next then" + value)
//         return calculateSquarePromise(4);
//     })
//     // .then(undefined, (reason) => {  // use only rejection promise 
//     //     console.log("Error" + reason)
//     // })
//     .catch((reason) => { // use only rejection promise 
//         console.log("Error" + reason)
//     })

//* __________ // Promise and promisify function  __________

//* ========= FetchPromise ========= 
// fetch(`https://www.omdbapi.com/?s=batman&apikey=1a42baf`)
//     .then(response => response.json())
//     .then(data => console.log(data))
//* __________ // FetchPromise  __________


// * ================= Convert object to promise =================

console.log("============================================================")

// const resolvePromise = Promise.resolve(anyValue); // return Promise object if value a Promise just returns a Promise
// const resolvePromise = Promise.reject(value);  

function logToConsole(somPromise) {
    somPromise.then((value) => console.log(value));
}

const somPromise = new Promise((resolve, reject) => {
    return resolve("==============hello world==============");
})


logToConsole(somPromise);

const value = "========string=========";
const promisify = Promise.resolve(value);

logToConsole(promisify);

// const rejectedPromisify = Promise.reject(new Error("Error: "));


// * ================= Usee promise in parallel =================

function askFirstDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(8000), 10000)
    })
}
function askSecondDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Not suitable car"), 5000)
    })
}
function askThirdDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(10000), 3000)
    })
}

Promise.all(
    [
        askFirstDealer().catch((err) => err),
        askSecondDealer().catch((err) => err),
        askThirdDealer().catch((err) => err),
        // Promise.resolve("reject for some reason") // return immediately rejected
    ]
)
    // Promise.all takes arr or any other iterable element and return single promise as a result
    .then(prise => {
        console.log(prise); // [ 8000, 'Not suitable car', 10000 ]
    })
    .catch(error => {
        console.log(error);
    });

Promise.all([1, "21", true]) // returns promise array
Promise.all([]) // returns promise empty array


//* own PromiseAll
const promiseAll = (arrayOfPromises) => {
    if (arrayOfPromises.length === 0) {
        return Promise.resolve(([]))
    }

    const promiseValues = []
    let settledPromisesCount = 0;

    return new Promise(function (resolve, reject) {
        arrayOfPromises.forEach((promise, index) => {
            if (promise instanceof Promise === false) {
                promise = Promise.resolve(promise);
            }

            promise
                .then(result => {
                    settledPromisesCount += 1;
                    promiseValues[index] = result; // set result 

                    if (settledPromisesCount === arrayOfPromises.length) { // last promise 
                        resolve(promiseValues);
                    }
                })
                .catch(reason => {
                    reject(reason);
                })
        });
    })
}

const getOne = () => {
    // return new Promise((resolve, reject) => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => reject(1), 1000) //! reject after 1000 milliseconds dose not wait other Promise
    //     })
    // })

    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000)
    })
}
const getTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(2), 2000)
    })
}
const getTree = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(3), 3000)
    })
}

promiseAll([getTwo(), getTree(), getOne()])
    .then(values => {
        console.log(values)
    })


promiseAll([]).then(values => console.log(values)); // if pass empty array promise return immediately


promiseAll([1, "", true])
    .then(values => console.log(values)); //  if (promise instanceof Promise === false) =>>  Promise.resolve(promise);


// * ==================== Promise.allSettled =================================

//1) Takes an array and returns a singly promise
//2) Returns array of objects {status: "fulfilled" | "rejected", value: any}[]
//3) Need use if executed multiple promises, but nothing critical if one promise returned rejected

Promise.allSettled([
    askFirstDealer(),
    askSecondDealer(),
    askThirdDealer()
])

Promise.allSettled([
    12, "12313", true
])

Promise.allSettled([])


//* own PromiseAllSettled
const promiseAllSettled = (arrayOfPromises) => {
    if (arrayOfPromises.length === 0) {
        return Promise.resolve(([]))
    }

    const promiseValues = []
    let settledPromisesCount = 0;

    return new Promise(function (resolve, reject) {
        arrayOfPromises.forEach((promise, index) => {
            if (promise instanceof Promise === false) {
                promise = Promise.resolve(promise);
            }

            promise
                .then(result => {
                    settledPromisesCount += 1;
                    promiseValues[index] = { // set result 
                        status: "fulfilled",
                        value: result
                    };

                    if (settledPromisesCount === arrayOfPromises.length) { // last promise 
                        resolve(promiseValues);
                    }
                })
                .catch(reason => {
                    settledPromisesCount += 1;
                    promiseValues[index] = { // set result 
                        status: "rejected",
                        reason: reason
                    };

                    if (settledPromisesCount === arrayOfPromises.length) { // last promise 
                        resolve(promiseValues);
                    }
                })
        });
    })
}

promiseAllSettled([])

promiseAllSettled([12, "hello world", true])


// promiseAllSettled([
//     askFirstDealer(),
//     askSecondDealer(),
//     askThirdDealer(),
// ])

// * ==================== Promise.race =================================

// if need to now what promise fastest of all promises 
// if rejected promise fast of all promises returned rejected promise

const askJon = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Yep, I have a pen"), 2000)
    })
}
const askEugene = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("I don't have a extra pen"), 1000)
    })
}
const askSsy = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Yep, I have a pen for you!"), 2000)
    })
}

const askAtTheShop = () => {
    return new Promise((resolve, reject) => {  // the fastest promise because it doesn't have a timeout
        resolve("Yep, I have a pen for you!")
    })
}

Promise.race([askJon(), askEugene(), askSsy(), askAtTheShop()])
    .then(value => {
        console.log(value) // "Yep, I have a pen" ==>> the fastest promise of the array if 1000 haver resolve 
    })
    .catch(reason => {
        console.log("Rejection" + reason) // "I don't have a extra pen" ==>> the fastest promise of the array if 1000 
    });

Promise.race([]) // returns a promise state pending 
Promise.race([1, "21", true]) // returns first element from the array and fulfilled promise stat
// Promise.race([Promise.reject("Oops"), "21", true]) // returns rejected promise 

const ownPromiseRace = (arrayOfPromises) => {
    if (arrayOfPromises.length === 0) {
        return new Promise((resolve, reject) => { });
    }

    return new Promise((resolve, reject) => {
        arrayOfPromises.forEach(promise => {
            if (promise instanceof Promise === false) {
                promise = Promise.resolve(promise);
            }

            promise.then(value => resolve(value));
            promise.catch(err => reject(err));
        })
    });
}


ownPromiseRace([
    askFirstDealer(),
    askSecondDealer(),
    askThirdDealer(),
])
    .then((result) => {
        console.log(result);
    })


// * ==================== Promise.any =================================

//1) get first successful promise 
//2) return only fastest fulfilled promise  
//3) return rejected promise if all promises are rejected ===>>> 
// PromiseState: "rejected"
// AggregateError: All promises are rejected 

const askKay = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Yep, I have a pen<<<<<<<<<<<<"), 2000)
    })
}
const askJonny = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("I don't have a extra pen"), 1000)
    })
}
const askRock = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Yep, I have a pen for you 111111111!"), 2000)
    })
}

Promise.any([askKay(), askJonny(), askRock()])
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })

//Promise.any([]) //3) return rejected promise if all promises are rejected ===>>> 
// PromiseState: "rejected"
// AggregateError: All promises are rejected 

const ownPromiseAny = (arrayOfPromises) => {
    if (arrayOfPromises.length === 0) {
        return Promise.reject(
            new AggregateError([], "All promises were rejected")
        )
    }

    const errors = [];

    let rejectedPromisesCount = 0;

    return new Promise((resolve, reject) => {
        arrayOfPromises.forEach((promise, index) => {
            if (promise instanceof Promise === false) {
                promise = Promise.resolve(promise)
            }

            promise.then(value => {
                resolve(value);
            })

            promise.catch(reason => {
                rejectedPromisesCount += 1;
                errors[index] = reason;

                if (rejectedPromisesCount === arrayOfPromises.length) {
                    reject(
                        new AggregateError(errors, "All promises were rejected")
                    )
                }
            })
        })
    })
}

// Promise.any([]).then(value => console.log(value))
// ownPromiseAny([]).then(value => console.log(value))

