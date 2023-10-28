/**
 * 1. index.js a special case as a node
 * 2. It allows you to treat a folder like a module
 * 3. allows you to export fun. from many different modules
 * 4. It needless complicated the module loading system
*/

//* FIRST METHOD IMPORT

// module.exports = {
//     request: require("./request"),
//     response: require("./response"),
// }

//* SECOND METHOD IMPORT

// const request = require('./request');
// const response = require('./response');

// module.exports = {
//     send: request.send,
//     REQUEST_TIMEOUT: request.REQUEST_TIMEOUT,
//     read: response.read,
// }

//* THIRD METHOD IMPORT

module.exports = {
    ...require("./request"),
    ...require("./response")
}