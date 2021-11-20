const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

const app = express();

//import Routes
const cardsRouter = require('./routes/cardRoute.js')

//connect to DB
mongoose.connect(process.env.URI, () => {
    console.log('Connected to database!')
})

//middlewares

app.use(cors())
app.use(bodyParser.json())

app.use('/cards', cardsRouter)

app.listen(process.env.PORT)