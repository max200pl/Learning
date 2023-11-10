const { getAllPlanets } = require('../../models/planets.model');


function httpGetAllPlanets(req, res) {
    return res.status(200).json(getAllPlanets()); // use return key where your function stops executed
}

module.exports = {
    httpGetAllPlanets,
}