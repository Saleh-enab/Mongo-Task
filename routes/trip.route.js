const express = require('express');
const controller = require('../controller/trip.controller.js');
const validator = require('../utils/tripValidator.js')

const router = express.Router();


router.get('/', (req, res) => {
    res.send("Hello World!")
})

router.post('/add-trip', validator, controller.addTrip)

router.get('/get-trips', controller.getTrips)


module.exports = router;