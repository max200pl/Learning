
function getMessages(req, res) { // using name function because we don't except error from arrow functions
    res.send("<ul><li>Hello, world</li></ul>");
}

function postMessage(req, res) {
    console.log("Updating message...");
}

module.exports = {
    getMessages,
    postMessage
}