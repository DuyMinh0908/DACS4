const Room = require('../models/Room');
const { multipeMongoosetoObject } = require('../../util/mongoose');
class HomeController {

    index(req, res, next){
        Room.find({})
            .then(room => {
                    res.render('home', {
                        room: multipeMongoosetoObject(room)
                    })
        })
            .catch(error => next(error));
        
    };
    show(req, res) {
        res.send('hello world');
    }
     
}

module.exports = new HomeController;

 