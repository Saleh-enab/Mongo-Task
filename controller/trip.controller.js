const tripModel = require('../models/trips.model.js');
const { validationResult } = require('express-validator');
const createFilter = require('../utils/filterCreator.js');
const sortTrips = require('../utils/sortTrips.js')

const addTrip = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                status: 500,
                errors: errors.array()
            })
        }

        const { departure, destination, startDate, endDate, passengers } = req.body

        const trip = new tripModel({
            departure,
            destination,
            startDate,
            endDate,
            passengers
        })
        await trip.save();
        res.status(201).json({
            status: 201,
            message: "Successful Operation"
        })
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message
        })
    }
}

const getTrips = async (req, res) => {
    try {
        const queries = req.query
        //Limit Trips
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;

        //Filter Trips based on Date

        const filter = createFilter(req.query)

        //Get Date from the Database
        const tripsQuery = tripModel
            .find(filter)
            .skip((page - 1) * limit)
            .limit(limit);

        const trips = await sortTrips(tripsQuery, req.query.sort);

        const result = {
            length: trips.length,
            trips
        }
        res.send(result)
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message
        })
    }
}


module.exports = { addTrip, getTrips }