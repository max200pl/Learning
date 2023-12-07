const http = require('http');
require('dotenv').config();
const app = require('./app');
const { loadPlanetsData } = require("./models/planets.model");
const { mongoConnect } = require('./services/mongo');
const { loadLaunchData } = require("./models/launches.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
    await mongoConnect()
    // preform some actions before starting the server:
    // 1. download some files
    // 2. load some data base
    // ...

    //* wait load planets before starting server
    await loadPlanetsData();
    await loadLaunchData();

    server.listen(PORT, () => {
        console.log(`Listening on ${PORT}...`);
    })
}

startServer();
// ...

