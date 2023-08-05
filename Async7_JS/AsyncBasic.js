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


