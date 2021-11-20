const Room = require('../models/Room');
const { mongoosetoObject } = require('../../util/mongoose');
const User = require('../models/User'); 

class RoomController {
	create(req, res, next){
		res.render('createroom')
	}
	async store(req, res, next) {
		const idUser = req.session.User._id;
        const member = [];
        const formData = req.body;
        
        formData.image = 'https://cellphones.com.vn/sforum/wp-content/uploads/2021/10/0.jpeg'
        formData.member = member;
        formData.createBy = idUser;        
        const room = new Room(formData);

        await room.save()
            .then(() => res.redirect('/'))
            .catch();
       	const idRoom = room._id.toString();   
        await User.updateOne(
        {_id: idUser},
        { $push: { room: [idRoom] } }
        )
         
    }
    subscribeRoom(req, res, next){
        const idUsers = req.session.User._id.toString();
        const idRooms = req.body.idRoom;
        
        Room.updateOne(
            {_id: idRooms},
            { $push: { member: [idUsers] } },(error, success)=> {
                if (error) {
                    console.log(error);
                } else {
                    console.log(success);
                }
            });
            
         
    }

}

module.exports = new RoomController;