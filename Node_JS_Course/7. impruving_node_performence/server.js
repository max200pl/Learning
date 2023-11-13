const express = require('express');

const app = express();


function delay(duration) {
    const startTime = Date.now(); // current time represents in milliseconds

    while (Date.now() - startTime < duration) {
        // event loop is blocked...
    }
}

app.get('/', (req, res) => {
    // If take 10 milliseconds server can't respond anything
    // JSON.stringify({});
    // JSON.parse("{}");
    // [5,3,2,5].sort();
    // crypto library in node.js

    res.send("Performance example");
})

app.get('/timer', (req, res) => {
    delay(9000); // server can't do anything while delay is running
    res.send("Ding ding ding!");
});

app.listen(3000);