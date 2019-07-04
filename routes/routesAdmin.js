const express = require('express')
const router = express.Router()

const Controller = require('../controller/controllerAdmin.js')

router.get('/login', Controller.loginGet)
      .post('/login', Controller.loginPost)

router.get('/register', Controller.registerGet)
      .post('/register', Controller.registerPost)

module.exports = router