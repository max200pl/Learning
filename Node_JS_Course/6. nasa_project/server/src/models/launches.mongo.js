const mongoose = require('mongoose');

const launchesSchema = new mongoose.Schema({
    flightNumber: {
        type: Number,
        required: true,
        default: 100,
        min: 100,
        max: 999,
    },
    launchDate: {
        type: Date,
        required: true,
    },
    mission: {
        type: String,
        required: true,
    },
    rocket: {
        type: String,
        required: true,
    },
    target: {
        type: String
    },
    customers: [String],
    upcoming: {
        type: String,
        required: true,
    },
    success: {
        type: String,
        required: true,
        default: true // if we don't set any properties set true
    }
});

// Connects launches schema with the "launches" collection
module.exports = mongoose.model('Launch', launchesSchema); // first name is a singular name
