const User = require('../models/User');
const { mongoosetoObject } = require('../../util/mongoose');
const bcrypt = require('bcrypt');

class UserController    {
    create(req, res, next) {
        res.render('register');
        
    }
    store(req, res, next) {
        const room = [];
        const formData = req.body;
        formData.image = 'https://i.pinimg.com/474x/3d/ca/9f/3dca9f9e179145fe1e11e4abb2373cb3.jpg'
        formData.room = room;        
        const user = new User(formData);
   
        user.save()
            .then(() => res.redirect('/'))
            .catch();
         
    }
    show(req, res, next) {
        User.findOne({ slug: req.params.slug })
            .then((user) => {
                res.render('profile', {
                    user: mongoosetoObject(user)
                })
            })
            .catch(next);
    }
    login(req, res, next){
        User.findOne({username: req.body.username})
            .then((user)=>{
                if(user.password === req.body.password){
                    req.session.User = user;

                    res.redirect('/user/profile/'+user.slug)
                }
                else{
                    res.redirect('/');
                }
            })
            .catch(next)
    }
    getSession(req, res, next){
        return res.json({status:'susscess', session:req.session.User})
    }

}

module.exports = new UserController;