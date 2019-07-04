const Models = require('../models')
const Pro = Models.Pro
const Peripheral = Models.Peripheral

class Controller {
    
    static playerDetail(req, res) {
       Pro.findByPk(req.params.id,{include:Peripheral})
       .then((data) => {
        //    res.send(data)
        res.render('index', {
            header: ['no','Player','Team','Mouse DPI','Hz','sens','zoom','Mouse accel','Raw input','Mouse','Mousepad','Keyboard','Headset','Crosshair','View Model'],
            title: 'CSGO PRO',
            data: data.dataValues
        })

    })
    }
}
module.exports = Controller