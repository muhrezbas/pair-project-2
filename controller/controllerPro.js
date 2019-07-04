const Models = require('../models')
const Pro = Models.Pro
const Peripheral = Models.Peripheral
const convertDate = require('../helpers/convertDate.js')

class Controller {
    
    static playerDetail(req, res) {
       Pro.findByPk(req.params.id,{include:Peripheral})
       .then((data) => {
        //    res.send(data)
        let hertz = data.tambah(data.dataValues.hz,'hz')
        res.render('index', {
            header: ['no','Player','Team','Mouse DPI','Hz','sens','zoom','Mouse accel','Raw input','Mouse','Mousepad','Keyboard','Headset','Crosshair','View Model'],
            title: 'CSGO PRO',
            hertz:hertz,
            data: data.dataValues,
            convertDate:convertDate
        })

    })
    }
}
module.exports = Controller