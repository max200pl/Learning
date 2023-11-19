const mongoose = require('mongoose');

const MONGO_URL = "mongodb+srv://max2000pl:123@cluster0.1evvjy7.mongodb.net/?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
    console.log("MongoDB connection ready!");
})

mongoose.connection.on("error", (err) => {
    console.error(err);
})


async function mongoConnect() {
    mongoose.connect(MONGO_URL)
}

async function mongoDisconnect() {
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect
}