const {
    getAllLaunches,
    addNewLaunch,
} = require('../../models/launches.model');

function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
    const launch = req.body;
    console.log(launch, "launch");
    launch.launchDate = new Date(launch.launchDate);

    addNewLaunch(launch)
    return res.status(201).json(launch); // if successful return launch
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch
};