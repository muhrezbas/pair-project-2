const Models = require('../models')
const Pro = Models.Pro
const Peripheral = Models.Peripheral

class Controller {
    
    static index(req, res) {
       Pro.findAll({include:Peripheral})
       .then((data) => {
        res.render('home', {
            header: ['no','Player','Team','Mouse DPI','Hz','sens','zoom','Mouse accel','Raw input','Mouse','Mousepad','Keyboard','Headset','Crosshair','View Model'],
            title: 'CSGO PRO',
            data: data
        })

    })
    }
}
module.exports = Controller