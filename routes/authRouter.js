const express = require('express')
const controller = require('../controllers/authController')
const router = express.Router()

// localhost:port/api/version/auth/login
router.post('/login', controller.login)

// localhost:port/api/version/auth/registration
router.post('/registration', controller.registration)

module.exports = router