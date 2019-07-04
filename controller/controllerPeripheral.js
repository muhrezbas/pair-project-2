const Models = require('../models')
const Pro = Models.Pro
const Peripheral = Models.Peripheral

class Controller {
    
    static index(req, res) {
       Peripheral.findAll({include:Pro})
       .then((data) => {
        res.render('peripheral', {
            header: ['no','title','brand','type'],
            title: 'all peripherals',
            data: data
        })

    })
    }
}
module.exports = Controller