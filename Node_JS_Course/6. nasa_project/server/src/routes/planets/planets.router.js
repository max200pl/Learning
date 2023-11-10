const express = require('express');

const { httpGetAllPlanets } = require('./planets.controller');

const planetsRouter = express.Router();

planetsRouter.get('/', httpGetAllPlanets); // '/' matches pass root when this router has been mounted we set '/planets' in app middleware

module.exports = planetsRouter;