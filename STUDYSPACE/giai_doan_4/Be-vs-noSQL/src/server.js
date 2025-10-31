import express from 'express';
import configViewEngine from './config/viewEngine.js';
import initWebRoute from './route/web.js';
// import connection from './config/connectDB.js';

require('dotenv').config();

const app = express()
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup view engine
configViewEngine(app);
//init web route
initWebRoute(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})