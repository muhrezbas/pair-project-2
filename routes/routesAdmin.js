const express = require('express')
const router = express.Router()

const Controller = require('../controller/controllerAdmin.js')

router.get('/register', Controller.registerGet)
router.post('/register', Controller.registerPost)
router.get('/login', Controller.loginGet)
router.post('/login', Controller.loginPost)
router.use((req,res,next) => {
    if (!req.session.admin) {
        res.redirect('/admin/login')
    }else{
        next()
    }
})
router.get('/dashboard',Controller.show)
router.get('/dashboard/add', Controller.addProGet)
router.post('/dashboard/add', Controller.addProPost)
router.get('/dashboard/delete/:id', Controller.delete)
router.get('/dashboard/add-peripheral', Controller.addPeripheralGet)
router.post('/dashboard/add-peripheral', Controller.addPeripheralPost)
module.exports = router