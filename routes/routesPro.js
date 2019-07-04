const express = require('express')
const router = express.Router()

const Controller = require('../controller/controllerPro.js')
router.get('/:id', Controller.playerDetail)
module.exports = router