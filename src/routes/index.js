const homeRouter = require('./home');
const userRouter = require('./user');
const roomRouter = require('./room');
function route(app) {
    app.use('/room',roomRouter)
    app.use('/user',userRouter);
    app.use('/', homeRouter);
    
}

module.exports = route;