const express = require('express')
const router = express.Router()

const Controller = require('../controller/controllerPeripheral.js')

router.get('/', Controller.index)
router.get('/statistic', Controller.statistic)
module.exports = router