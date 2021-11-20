const express = require('express');
const router = express.Router();
const auth = require('../app/middleware/is-auth');
const userController = require('../app/controllers/UserController');

router.get('/getSession',auth,userController.getSession);
router.post('/login', userController.login);
router.get('/profile/:slug',auth, userController.show);
router.get('/create', userController.create);
router.post('/store', userController.store);

module.exports = router;