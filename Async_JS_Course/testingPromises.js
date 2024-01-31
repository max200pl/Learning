function calculateSquarePromise(number) {
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (typeof number !== "number") {
                return reject(new Error("Argument must be a number"));
            }
            const result = number * number;
            resolve(result);
        }, 3000)
    });

    return promise;
}

module.exports = calculateSquarePromise