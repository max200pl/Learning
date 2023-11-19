const http = require('http');
const app = require('./app');
const { loadPlanetsData } = require("./models/planets.model");
const PORT = process.env.PORT || 8000;
const { mongooseConnect } = require('./services/mongo');
const sever = http.createServer(app);


async function startServer() {
    await mongooseConnect(MONGO_URL)
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

