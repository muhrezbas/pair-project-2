const express = require('express')
const router = express.Router()

const Controller = require('../controller/controllerAdmin.js')

router.get('/login', Controller.loginGet)
      .post('/login', Controller.loginPost)

router.get('/register', Controller.registerGet)
      .post('/register', Controller.registerPost)
router.get('/dashboard',Controller.show)
router.get('/dashboard/delete/:id', Controller.delete)
router.get('/dashboard/add', Controller.addProGet)
      .post('/dashboard/add', Controller.addProPost)
module.exports = router