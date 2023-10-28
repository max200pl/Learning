const { request, get } = require("https");

// get -> method when we only get data from the server
// request -> method when we get and send data to the server

const req = get("https://www.google.com", (res) => {
    res.on("data", (chunk) => {
        console.log(`Data chunk: ${chunk}`);
    });

    res.on("end", () => {
        console.log("No more data");
    });
});

// req.end(); for request method finished request

/** Why use node modules
 *   1. Reuse existing code
 *  2. Organize your code
 * 3. Expose only what will be used
 */


/** Type module system
 *  1. CommonJs modules => require('./')
 *  2. ECMAScript modules or 6th modules or ECM => import * as module from "./"
 */

// if module loaded one this module cashing


