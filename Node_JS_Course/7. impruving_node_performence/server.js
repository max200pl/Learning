const express = require('express');
const cluster = require('cluster');

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

    res.send(`Performance example: ${process.pid}`); // get current process id in operating system
})

app.get('/timer', (req, res) => {
    delay(9000); // server can't do anything while delay is running
    res.send(`Ding ding ding ! ${process.pid}`);
});

app.get('/timer1', (req, res) => {
    delay(9000); // server can't do anything while delay is running
    res.send(`Ding ding ding ! ${process.pid}`);
});

/*
run tree time:
 1. Before master started
 2. Before first worker started
 3. Before second worker started
*/
console.log("Running server.js...");

if (cluster.isMaster) {
    console.log(cluster.isMaster);
    console.log('Master has been started...');
    cluster.fork();
    cluster.fork();
} else {
    console.log('Worker process started.');
    app.listen(3000);
}
