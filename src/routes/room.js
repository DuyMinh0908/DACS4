 const express = require('express');
const router = express.Router();
const auth = require('../app/middleware/is-auth');
const roomController = require('../app/controllers/RoomController');

router.put('/subscribeRoom',auth, roomController.subscribeRoom );
router.get('/create',auth, roomController.create);
router.post('/store',auth, roomController.store);

module.exports = router;