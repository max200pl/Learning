const express = require("express");
const path = require("path");

const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

const app = express()

const PORT = 3000;

app.set('view engine', 'hbs'); // set template engine hbs
app.set('views', path.join(__dirname, 'views')); // set path folder

app.use((req, res, next) => { // first middleware
    const start = Date.now();

    next();

    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
})

// express static file middleware
app.use("/site", express.static( // send index.html with images and styles
    path.join(__dirname, 'public')
));

app.use(express.json()); // JSON parsing middleware

app.get("/", (req, res) => {
    res.render('index', { // render index.hbs file
        title: "My friends very clever",
        caption: "Lets\s go skiing!",
    })
});

app.use("/friends", friendsRouter);   // mounting the friends router
app.use("/messages", messagesRouter); // mounting this router

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})
