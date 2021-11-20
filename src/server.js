const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const route = require('./routes/index');
const session = require('express-session');
const bcrypt = require('bcrypt');
const db = require('./config/db/index');
const bodyParser = require('body-parser');
const OpenVidu = require('openvidu-node-client').OpenVidu;
const OpenViduRole = require('openvidu-node-client').OpenViduRole;
const oneDate = 60*60*24;
const cookieSession = require('cookie-session');
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));

app.engine('hbs', handlebars({
	extname: '.hbs'
}));
app.use(bodyParser.urlencoded({extended:false}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));
//connect mongodb

app.use(session({
    saveUninitialized: true,
    resave: false,
    secret: 'MY_SECRET'
}));
 app.use(function (req, res, next) {
        res.locals.session = req.session;
        next();
    });
db.connect();
//init routes
route(app);
app.listen(port,()=> console.log(`server listen port ${port}`));