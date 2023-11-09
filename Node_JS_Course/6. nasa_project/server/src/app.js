const express = require('express');
const cors = require('cors');
const planetsRouter = require('./routes/planets/planets.router');

const app = express(); // express just listener function for a build in HTTP server

app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(express.json()); // parse all incoming json from the body incoming request
app.use(planetsRouter);

module.exports = app;