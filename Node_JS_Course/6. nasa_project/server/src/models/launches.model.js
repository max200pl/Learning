const launchesDB = require("./launches.mongo");
const planets = require("./planets.mongo");
const axios = require("axios");

const DEFAULT_FLIGHT_NUMBER = 100;

const launch = {
    flightNumber: 100, // flight_number
    mission: "Kepler", // name
    rocket: "Explorer IS1", // rocket.name
    launchDate: new Date("December 27, 2030"), // date_local
    target: "Kepler-442 b", // not applicable
    customers: ['ZTM', 'NASA'], // payload.customers for each payload
    upcoming: true, // upcoming
    success: true, // success
};

saveLaunch(launch)

const SPACE_X_API_URL = "https://api.spacexdata.com/v4/launches/query";

async function populateLaunches() {
    console.log("Downloading launch data...");

    const response = await axios.post(SPACE_X_API_URL, {
        query: {},
        options: {
            pagination: false,
            populate: [
                {
                    path: "rocket",
                    select: {
                        name: 1
                    }
                },
                {
                    path: "payloads",
                    select: {
                        "customers": 1
                    }
                }
            ]
        }
    })

    if (response.status !== 200) {
        console.log("Problem downloading launch data");
        throw new Error("Launch data download failed")
    }

    const launchDocs = response.data.docs;

    for (const launchDoc of launchDocs) {
        const payloads = launchDoc["payloads"];
        const customers = payloads.flatMap((payload) => {
            return payload["customers"]
        })

        const launch = {
            flightNumber: launchDoc["flight_number"],
            mission: launchDoc["name"],
            rocket: launchDoc["rocket"]["name"],
            launchDate: launchDoc["date_local"],
            upcoming: launchDoc["upcoming"],
            success: launchDoc["success"],
            customers
        };

        console.log(`${launch.flightNumber} ${launch.mission}`);

        await saveLaunch(launch)
    }
}

async function loadLaunchData() {
    const firstLaunch = await findLaunch({
        flightNumber: 1,
        rocket: "Falcon 1",
        mission: "FalconSat",
    })

    if (firstLaunch) {
        console.log("Launch data already loaded");
    } else {
        await populateLaunches()
    }

}

async function findLaunch(filter) {
    return await launchesDB.findOne(filter);
}

async function existsLaunchWithId(launchId) {
    return await findLaunch({
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
    console.log(launch.target, "launch.target");
    const planet = await planets.findOne({
        keplerName: launch.target,
    });

    if (!planet) {
        throw new Error("No matching planet found");
    }

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
    loadLaunchData,
    existsLaunchWithId,
    getAllLaunches,
    scheduleNewLaunch,
    abortLaunchById
}