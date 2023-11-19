const launchesDB = require("./launches.mongo");
const planets = require("./planets.mongo");


const DEFAULT_FLIGHT_NUMBER = 100;

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

async function existsLaunchWithId(launchId) {
    return await launchesDB.findOne({
        flightNumber: launchId
    })
}

async function getLatestFlightNumber() {
    let latestLaunch = await launchesDB
        .findOne()
        .sort('-flightNumber') //sort from lowest to highest use -> -

    if (!latestLaunch) {
        return DEFAULT_FLIGHT_NUMBER
    }

    return latestLaunch.flightNumber;
}

async function getAllLaunches() {
    return await launchesDB
        .find({}, {
            '_id': 0, "__v": 0
        })
}

async function scheduleNewLaunch(launch) {
    const newFlightNumber = await getLatestFlightNumber() + 1;

    const newLaunch = Object.assign(launch, {
        success: true,
        upcoming: true,
        customers: ["Zero to Mastery", "NASA"],
        flightNumber: newFlightNumber,
    })

    await saveLaunch(newLaunch);
}

async function saveLaunch(launch) {
    console.log(launch.target, "launch.target");
    const planet = await planets.findOne({
        keplerName: launch.target,
    });

    if (!planet) {
        throw new Error("No matching planet found");
    }

    await launchesDB.findOneAndUpdate({
        flightNumber: launch.flightNumber,
    }, launch, { // launch -> document when we want to update
        upsert: true,
    });
}

async function abortLaunchById(launchId) {
    console.log(launchId, "launch id");
    const aborted = await launchesDB.updateOne({
        flightNumber: launchId,
    }, {
        upcoming: false,
        success: false,
    })
    console.log(aborted);
    return aborted.modifiedCount === 1
}

module.exports = {
    existsLaunchWithId,
    getAllLaunches,
    scheduleNewLaunch,
    abortLaunchById
}