// const { send } = require("./internals/request.js") // require.extensions define js json node
// const read = require("./internals/response.js") // require.extensions define js json node

const { send, read } = require("./internals")

function makeRequest(url, data) {
    send(url, data);
    return read();
}

const responseData = makeRequest("https://google.com", 'hello');
console.log(responseData);