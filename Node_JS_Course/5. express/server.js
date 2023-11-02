const express = require("express");

const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

const app = express()

const PORT = 3000;

app.use((req, res, next) => { // first middleware
    const start = Date.now();

    next();

    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
})

app.use(express.json()); // JSON parsing middleware

app.use("/friends", friendsRouter);   // mounting the friends router
app.use("/messages", messagesRouter); // mounting this router

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})
