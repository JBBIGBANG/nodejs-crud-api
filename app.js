const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const placesRoute = require('./routes/places-route')

app.use('/api/places',placesRoute);

app.listen(5000);