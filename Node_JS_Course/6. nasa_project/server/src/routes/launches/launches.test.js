const request = require("supertest")
const app = require("../../app")
const { mongoConnect, mongoDisconnect } = require("../../services/mongo");

describe("Launches API", () => {
    // SETUP TEST >>>
    beforeAll(async () => { // setup before nested tests runs
        //1. setup mongo connect
        await mongoConnect();
    });

    afterAll(async () => {
        await mongoDisconnect();
    });

    describe('Test GET /launch', () => {
        test('It should respond with 200 success', async () => {
            await request(app) // setup app server
                .get('/launches')
                .expect('Content-Type', /json/)
                .expect(200)
        })
    })

    describe('Test POST /launch', () => {
        const completeLaunchData = {
            mission: "USS ENTER",
            rocket: "NCC 1701-D",
            target: "Kepler-62 f",
            launchDate: "January 4, 2028"
        }

        const launchDataWithoutDate = {
            mission: "USS ENTER",
            rocket: "NCC 1701-D",
            target: "Kepler-62 f",
        }

        const launchDataWitInvalidDate = {
            mission: "USS ENTER",
            rocket: "NCC 1701-D",
            target: "Kepler-62 f",
            launchDate: "zoot"
        }

        test('It should respond with 201 created', async () => {
            const response = await request(app) // setup app server
                .post('/launches')
                .send(completeLaunchData)
                .expect('Content-Type', /json/)
                .expect(201);

            const requestDate = new Date(completeLaunchData.launchDate).valueOf();
            const responseDate = new Date(response.body.launchDate).valueOf();
            expect(responseDate).toBe(requestDate);

            expect(response.body).toMatchObject(launchDataWithoutDate);
        })

        test('It should catch missing required properties', async () => {
            const response = await request(app) // setup app server
                .post('/launches')
                .send(launchDataWithoutDate)
                .expect('Content-Type', /json/)
                .expect(400);

            expect(response.body).toStrictEqual({
                error: "Missing required launch property",
            });
        });
        test('It should catch invalid dates', async () => {
            const response = await request(app) // setup app server
                .post('/launches')
                .send(launchDataWitInvalidDate)
                .expect('Content-Type', /json/)
                .expect(400);

            expect(response.body).toStrictEqual({
                error: "Invalid launch date",
            });
        });
    })
})
