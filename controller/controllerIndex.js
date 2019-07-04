const Models = require('../models')
// const Pro = Models.Pro

class Controller {
    static index(req, res) {
        res.send("haloha")
    }
}
module.exports = Controller