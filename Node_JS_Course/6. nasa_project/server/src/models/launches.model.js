const launchesDB = require("./launches.mongo");
const planets = require("./planets.mongo");

const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: "Kepler",
    rocket: "Explorer IS1",
    launchDate: new Date("December 27, 2030"),
    target: "Kepler-442 b",
    customers: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
};

saveLaunch(launch)

function existsLaunchWithId(launchId) {
    return launches.has(launchId); // return current launch
}

async function getAllLaunches() {
    return await launchesDB
        .find({}, {
            '_id': 0, "__v": 0
        })
}

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(latestFlightNumber, Object.assign(launch, {
        flightNumber: latestFlightNumber,
        success: true,
        upcoming: true,
        customers: ["Zero to Mastery", "NASA"],
    }));
}

async function saveLaunch(launch) {
    const planet = await planets.findOne({
        keplerName: launch.target,
    });

    if (!planet) {
        throw new Error("No matching planet found");
    }

    await launchesDB.updateOne({
        flightNumber: launch.flightNumber,
    }, launch, {
        upsert: true,
    });
}

function abortLaunchById(launchId) {
    const aborted = launches.get(launchId);

    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}

module.exports = {
    existsLaunchWithId,
    getAllLaunches,
    addNewLaunch,
    abortLaunchById
}