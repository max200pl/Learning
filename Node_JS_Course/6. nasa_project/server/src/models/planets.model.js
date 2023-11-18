// fs-> allows open file reading and writing
// fs -> reading file pice by peace
const fs = require("fs");

// path -> relative path __dirname
const path = require("path");

const { parse } = require("csv-parse");

const planets = require('./planets.mongo');

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === "CONFIRMED"
        && planet['koi_insol'] > 0.36
        && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6;
}

/**
 const promise = new Promise((res, reject)=>{
    resolve(42)
 });

 promise.then((result)=>{

 });
    ========= OR =========
 const result = await promise;
 */

function loadPlanetsData() {
    return new Promise((resolve, reject) => {

        fs.createReadStream(path.join(__dirname, "..", "..", "data", "kepler_data.csv")) // 1. represent collection of bites   <Buffer 23 20 54 68 69 73 20  61 6e 65 74 20 41 72 63 ... 65486 more bytes>,
            .pipe(
                parse( // pipe connection two string together
                    {
                        comment: "#",
                        columns: true,
                    }
                )
            )
            .on("data", async (data) => {
                if (isHabitablePlanet(data)) {
                    savePlanet(data);
                }
            })

            .on("error", (err) => {
                console.log(err);
                //! REJECT FUNCTION */
                reject(err);
            })

            .on("end", async () => {
                const countPlanetsFound = (await getAllPlanets()).length
                console.log(`${countPlanetsFound} habitable planets`);
                console.log("done");
                //*** RESOLVE FUNCTION */
                resolve() // whe now when are planets data has been successfully loaded
            });
    })
}

// parse(); // returns event emitter

async function getAllPlanets() {
    // return planet.find({
    //     keplerName: "Kepler-62 f", // only documents matching those properties would be returned
    // }, { // list of fields
    //      "keplerName": 1 // 1-> show kepler name 0 -> exclude field
    // });

    // return planet.find({
    //     keplerName: "Kepler-62 f", // only documents matching those properties would be returned
    // }, "-keplerName anotherField"); // if you want to include another field and exclude  keplerName set --> -

    return await planets.find({},
        { // which fields are included in the response
            "_id": 0, "__v": 0, // exclude fields
        }
    ); //! Find all planets
}

async function savePlanet(planet) {
    try {
        // insert + update = upsert
        await planets.updateOne({ // find all documents
            keplerName: planet.kepler_name,
        }, {
            keplerName: planet.kepler_name, // if it does in already exist update
        }, {
            upsert: true // if it does in already exist
        });
    } catch (error) {
        console.error(`Could not save planet ${error}`)
    }
}

module.exports = {
    loadPlanetsData,
    getAllPlanets
}