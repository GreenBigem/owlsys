const express = require('express')
const controller = require('../controllers/authController')
const router = express.Router()

// localhost:port/api/version/auth/login
router.get('/login', controller.login)

// localhost:port/api/version/auth/registration
router.get('/registration', controller.registration)

module.exports = router