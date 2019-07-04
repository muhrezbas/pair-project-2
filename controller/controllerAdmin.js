const { Admin, Pro, Peripheral, ProPeripheral } = require('../models/index')
const bcrypt = require('bcrypt')
class AdminController {
    static loginGet(req, res) {
        res.render('login', { flash: req.flash() })
    }

    static loginPost(req, res) {
        let pros
        Pro.findAll({

        })
            .then((pro) => {
                pros = pro
                return Admin.findOne({
                    where: {
                        email: req.body.email
                    }
                })
            })
            .then(user => {
                if (!user) {
                    throw new Error('email not found!')
                } else {
                    const comparePass = bcrypt.compareSync(req.body.password, user.password)
                    if (!comparePass) {
                        throw new Error('email and password doesn\'t match')
                    } else {
                        req.session.admin = {
                            id: user.id
                        }

                        res.render('admin', {
                            user: user,
                            data: pros
                        })
                    }
                }
            })
            .catch(err => {
                req.flash('error', err.message)
                res.redirect('/admin/login')
            })
    }

    static registerGet(req, res) {
        let flash = req.flash()
        res.render('register', { flash })
    }

    static registerPost(req, res) {

        Admin.create(req.body)
            .then(usr => {
                req.flash('success', 'register success.')
                res.redirect('/admin/register')
            })
            .catch(err => {
                console.log(err)
                req.flash('error', err)
                res.redirect('/admin/register')
            })
    }

    static show(req, res) {
        Pro.findAll({
            include: [Peripheral]
        })
            .then(data => {
                res.render('admin', { data })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static delete(req, res) {
        Pro.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(num => {
                res.redirect('/admin/dashboard')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static addProGet(req, res) {
        Peripheral.findAll()
            .then((data) => {
                res.render('add-pro', {
                    data: data
                })
            })

    }
    static addPeripheralGet(req, res) {
        res.render('add-per')

    }
    static addPeripheralPost(req, res) {
        Peripheral.create(req.body)
            .then(() => {
                res.redirect('/admin/dashboard')
            })

    }

    static addProPost(req, res) {
        let proId
        let created = {
            "name": req.body.name,
            "born": new Date(req.body.born),
            "team": req.body.team,
            "mousepad": req.body.mousepad,
            "dpi": req.body.dpi,
            "edpi": req.body.edpi,
            "sensitivity": req.body.sensitivity,
            "hz": req.body.hz,
            "zoom_sens": req.body.zoom_sense,
            "mouse_accel": req.body.mouse_accel,
            "raw_input": req.body.raw_input,
            "crosshair": req.body.crosshair,
            "role": req.body.role,
            "view_model": req.body.view_model
        }
        Pro.create(created)
            .then((data) => {
                proId = data.id
                return ProPeripheral.create({ ProId: proId, PeripheralId: req.body.mouse })
            })
            .then(() => {

                return ProPeripheral.create({ ProId: proId, PeripheralId: req.body.mousepad })
            })
            .then(() => {

                return ProPeripheral.create({ ProId: proId, PeripheralId: req.body.keyboard })
            })
            .then(() => {

                return ProPeripheral.create({ ProId: proId, PeripheralId: req.body.gpu })
            })
            .then(() => {

                return ProPeripheral.create({ ProId: proId, PeripheralId: req.body.headset })
            })
            .then(() => {
                res.redirect('/admin/dashboard')
            })

        // 
    }
}

module.exports = AdminController