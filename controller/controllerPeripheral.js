const Models = require('../models')
const Pro = Models.Pro
const Peripheral = Models.Peripheral
const ProPeripheral = Models.ProPeripheral

class Controller {

    static index(req, res) {
        Peripheral.findAll({ include: Pro })
            .then((data) => {
                res.render('peripheral', {
                    header: ['no', 'title', 'brand', 'type'],
                    title: 'all peripherals',
                    data: data,
                    datas : null,
                    labels :null
                })

            })
    }
    static statistic(req, res) {
        Peripheral.findAll({
            where: {
                type: req.query.type
            }, include: Pro
        })
            .then((data) => {
                // res.send(data)
                let obj = {}
                for (let j = 0; j < data.length; j++) {
                    let element = data[j]
                    if (!obj[element.name]) {
                        obj[element.name] = 0
                    }
                    // console.log(element)
                    let el = element.dataValues
                    // console.log(el)
                    // res.send(el.Pros)
                    for (let i = 0; i < el.Pros.length; i++) {
                        // res.send(el.Pros)
                        if (el.Pros[i].id !== undefined) {
                            // console.log('tes')
                            obj[element.name]++
                        }
                    }
                }
                console.log(Object.values(obj))
                res.render('peripheral', {
                    header: ['no', 'title', 'brand', 'type'],
                    title: 'all peripherals',
                    data: data,
                    datas : Object.values(obj),
                    labels :Object.keys(obj)
                })
            })

    }
}
module.exports = Controller