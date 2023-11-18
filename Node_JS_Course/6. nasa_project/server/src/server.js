const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');

const { loadPlanetsData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

const MONGO_URL = "mongodb+srv://max2000pl:123@cluster0.1evvjy7.mongodb.net/?retryWrites=true&w=majority"

const sever = http.createServer(app);

mongoose.connection.once("open", () => {
    console.log("MongoDB connection ready!");
})

mongoose.connection.on("error", (err) => {
    console.error(err);
})

async function startServer() {
    await mongoose.connect(MONGO_URL)
    // preform some actions before starting the server:
    // 1. download some files
    // 2. load some data base
    // ...

    //* wait load planets before starting server
    await loadPlanetsData();

    sever.listen(PORT, () => {
        console.log(`Listening on ${PORT}...`);
    })
}

startServer();
// ...

