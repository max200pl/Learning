const { planets } = require('../../models/planets.model');


function getAllPlanets(req, res) {
    return res.status(200).json(planets); // use return key where your function stops executed
}

module.exports = {
    getAllPlanets,
}