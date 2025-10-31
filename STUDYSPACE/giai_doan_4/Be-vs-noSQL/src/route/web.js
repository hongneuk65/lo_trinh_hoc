import express from 'express'
import homeController from '../controller/homeController.js'
import { home } from 'nodemon/lib/utils';

let router = express.Router();

const initWebRoute = (app) => {
    
    router.get('/', homeController.getHomePage);
    router.get('/detail/user/:userId', homeController.getDetailPage); 
    router.post('/create-new-user', homeController.createNewUser);
    router.get('/', (req, res) => {
        res.render('index.ejs');
    })

    return app.use('/', router);

}
export default initWebRoute;