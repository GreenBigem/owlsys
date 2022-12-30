const express = require('express')
const controller = require('../controllers/contractorsController')
const passport = require('passport')
const router = express.Router()

// localhost:port/api/version/contractors/
router.get('/', passport.authenticate('jwt', {session: false}), controller.getAllContractors)

// localhost:port/api/version/contractors/
router.post('/', passport.authenticate('jwt', {session: false}), controller.createContractor)

// localhost:port/api/version/contractors/:id
router.get('/:id', passport.authenticate('jwt', {session: false}), controller.getContractorById)

// localhost:port/api/version/contractors/:id
router.patch('/:id', passport.authenticate('jwt', {session: false}), controller.patchContractorById)

// localhost:port/api/version/contractors/:id
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.deleteContractorById)

module.exports = router