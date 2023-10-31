const { parse } = require("csv-parse");
//allows open file reading and writing
// reading file pice by peace
const fs = require("fs");

const habitablePlanets = [];

function isHabitablePlanet(planet) {
    return planet['koi_pdisposition'] === "CONFIRMED"
        && planet['koi_insol'] > 0.36
        && planet['koi_isol'] < 1.11
        && planet['koi_prad'] < 1.6;
}

fs.createReadStream("kepler_data.csv") // 1. represent collection of bites   <Buffer 23 20 54 68 69 73 20  61 6e 65 74 20 41 72 63 ... 65486 more bytes>,
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
    })

    .on("end", () => {
        console.log(habitablePlanets.map((planet) => {
            return planet['kepler_name']
        }));
        console.log(`${habitablePlanets.length} habitable planets`);
        console.log("done");
    });
// parse(); // returns event emitter
