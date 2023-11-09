// fs-> allows open file reading and writing
// fs -> reading file pice by peace
const fs = require("fs");

// path -> relative path __dirname
const path = require("path");

const { parse } = require("csv-parse");

const habitablePlanets = [];

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
            .on("data", (data) => {
                if (isHabitablePlanet(data)) {
                    habitablePlanets.push(data);
                }
            })

            .on("error", (err) => {
                console.log(err);
                //! REJECT FUNCTION */
                reject(err);
            })

            .on("end", () => {
                console.log(`${habitablePlanets.length} habitable planets`);
                console.log("done");
                //*** RESOLVE FUNCTION */
                resolve() // whe now when are planets data has been successfully loaded
            });
    })
}

// parse(); // returns event emitter

module.exports = {
    loadPlanetsData,
    planets: habitablePlanets,
}