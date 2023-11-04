const path = require("path");

function getMessages(req, res) {
    //* using name function because we don't except error from arrow functions

    //* path.join() approach for different operation systems
    //* __dirname -> root path
    // SEND FILE --> res.sendFile(path.join(__dirname, "..", "public", "images", "skimountain.jpg"));

    res.render("messages", {
        title: "Messages to my Friends",
        friend: "Leon Musk",
    });

    // res.send("<ul><li>Hello, world</li></ul>");
}

function postMessage(req, res) {
    console.log("Updating message...");
}

module.exports = {
    getMessages,
    postMessage,
};
