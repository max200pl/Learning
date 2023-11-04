const path = require('path');

function getMessages(req, res) { // using name function because we don't except error from arrow functions
    res.sendFile(
        // path.join() approach for different operation systems
        // __dirname -> root path
        path.join(__dirname, "..", "public", "images", "skimountain.jpg")
    );

    // res.send("<ul><li>Hello, world</li></ul>");
}

function postMessage(req, res) {
    console.log("Updating message...");
}

module.exports = {
    getMessages,
    postMessage
}