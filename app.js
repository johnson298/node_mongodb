const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
require('dotenv').config();
require('./configs/connection');

const { handleError } = require('./helpers/error')

// create app
const app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));


// require routes
const userRouter = require('./routers/users');


// use routes
app.use('/user', userRouter);


// Eroor handle
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
})
app.use((err, req, res, next) => {
    const error = app.get('env') === "development" ? err : {};
    const status = error.status || 500;
    return res.status(status).json({
        error: {
            message: error.message
        }
    })
})


const port = process.env.PORT_NAME || 3000;
app.listen(port, () => console.log(`Server is running...\nhttp://localhost:${port}`))