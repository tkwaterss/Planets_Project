require('dotenv').config();
const {SERVER_PORT} = process.env;

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const {seed} = require('./seed.js')
const {
    // list of controller functions
} = require('./controller.js');


//connecting to the front end




app.listen(SERVER_PORT, () => consoole.log(`up on ${SERVER_PORT}`));