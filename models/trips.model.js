const mongoose = require('mongoose');
const converter = require('../utils/dateConverter.js');


const tripSchema = new mongoose.Schema({
    departure: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    passengers: {
        type: Number,
        required: true
    }
}, {
    toJson: { virtuals: true },
    toObject: { virtuals: true }
})

tripSchema.virtual('duration').get(function () {
    return (this.endDate - this.startDate) / 1000 / 60 / 60;
})


const tripModel = mongoose.model("Trip", tripSchema);

module.exports = tripModel;