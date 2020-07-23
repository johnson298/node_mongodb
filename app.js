const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();


app.get('/', (req, res) => res.send('Started !'))









app.listen(process.env.PORT_NAME || 3000, () => console.log(`Server is running on port ${process.env.PORT_NAME || 3000}`))