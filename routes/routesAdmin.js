const express = require('express')
const router = express.Router()

const Controller = require('../controller/controllerAdmin.js')

router.get('/register', Controller.registerGet)
      .post('/register', Controller.registerPost)
router.get('/login', Controller.loginGet)
      .post('/login', Controller.loginPost)
router.use((req,res,next) => {
    console.log('masuk sini??')
    if (!req.session.admin) {
        res.redirect('/admin/login')
    }else{
        next()
    }
})
router.get('/dashboard',Controller.show)
router.get('/dashboard/add', Controller.addProGet)
      .post('/dashboard/add', Controller.addProPost)
router.get('/dashboard/delete/:id', Controller.delete)
module.exports = router