const express = require('express')
const router = express.Router()

const Controller = require('../controller/controllerIndex.js')

router.get('/', Controller.index)
module.exports = router