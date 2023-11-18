const { getAllPlanets } = require('../../models/planets.model');


async function httpGetAllPlanets(req, res) {
    return res.status(200).json(await getAllPlanets()); // use return key where your function stops executed
}

module.exports = {
    httpGetAllPlanets,
}