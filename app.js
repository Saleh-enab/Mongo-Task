const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const morgan = require('morgan')
const router = require('./routes/trip.route.js');

const app = express();
const port = Number(process.env.PORT) || 3000;
const dbURI = process.env.mongoURI;

app.use(morgan('tiny'))
app.use(express.json());
app.use(router);




if (!dbURI === undefined) {
    console.log("DataBase URL not found");
} else {
    (async () => {
        try {
            await mongoose.connect(dbURI)
            app.listen(port, () => {
                console.log(`Connected successfully, Working on port ${port}`)
            })
        } catch (err) {
            console.log(err);
        }
    })();
}
