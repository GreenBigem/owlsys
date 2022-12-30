const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const keys = require('./config/keys')

// ROUTES
const authRouter = require('./routes/authRouter')
const contractorsRouter = require('./routes/contractorsRouter')

// Api Version
const apiVersion = process.env.API_VERSION || 'v1'

const app = express()

// Connect to database
mongoose.connect(keys.mongoURI)
    .then(() => {console.log('MongoDB connected.')})
    .catch(error => console.log(error)) 

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(require('morgan')('dev'))
app.use(require('cors')())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(`/api/${apiVersion}/auth`, authRouter)
app.use(`/api/${apiVersion}/contractors`, contractorsRouter)

module.exports = app