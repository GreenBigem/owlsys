const express = require('express')

// ROUTES
const authRouter = require('./routes/authRouter')

// Api Version
const apiVersion = process.env.API_VERSION || 'v1'

const app = express()

app.use(`/api/${apiVersion}/auth`, authRouter)

// app.get('/', (req, res) => {
//     res.status(200).json({
//         message: "Working"
//     })
// })

module.exports = app