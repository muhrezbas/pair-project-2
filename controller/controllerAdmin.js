const {Admin, Pro, Peripheral} = require('../models/index')
const bcrypt = require('bcrypt')
class AdminController {
    static loginGet(req, res) {
       res.render('login',{flash: req.flash()})
    }

    static loginPost(req, res) {
        Admin.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            if (!user) {
                throw new Error('email not found!')
            }else {
                const comparePass = bcrypt.compareSync(req.body.password, user.password)
                if (!comparePass) {
                    throw new Error('email and password doesn\'t match')
                }else {
                    req.session.admin = {
                        id: user.id
                    }
                    res.render('admin', {user})
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
        res.render('register', {flash})
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
            include:[Peripheral]
        })
        .then(data => {
            res.render('admin',{data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static delete(req, res) {
        Pro.destroy({
            where:{
                id:req.params.id
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
        res.render('add-pro')
    }

    static addProPost(req, res) {
        console.log(req.body)
    }
}

module.exports = AdminController