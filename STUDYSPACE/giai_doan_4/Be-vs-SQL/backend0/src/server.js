require('dotenv').config();
const express = require('express'); // common.js
const path = require('path');
const configViewEngine = require('./config/viewEngine.js')
// import express from 'express'


const app = express(); // app express
const port = process.env.PORT || 8888; // port
const hostname = process.env.HOST_NAME;
const webRoutes = require('./routes/web.js');
const connection = require('./config/database.js');

//config req.body
app.use(express.json()); //utilizes the body-parser package
app.use(express.urlencoded({ extended: true }));

// config template engine
configViewEngine(app);

//khai báo route
app.use('/', webRoutes)

//test connection
let user = [];




app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
});