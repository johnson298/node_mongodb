const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./configs/connection');

// create app
const app = express();

// add middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// require routes
const userRouter = require('./routers/users');


// use routes
app.use('/user', userRouter);










app.listen(process.env.PORT_NAME || 3000, () => console.log(`Server is running on port ${process.env.PORT_NAME || 3000}`))