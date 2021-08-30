const express = require('express')
const router = express.Router()

const checkForAlertsController = require('../controllers/checkForAlertsController')

router.get('/', checkForAlertsController)

module.exports = router