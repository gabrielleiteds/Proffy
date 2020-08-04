import { Response, Request, Router } from 'express';

//database
import db from './database/connection';

//import functions Utils
import convertTime from './utils/convertHourToMinutes';

//controllers
import ClassesController from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionsController';

const routes = Router();
const ClassController = new ClassesController();
const connectionsController = new ConnectionController();

routes.get('/classes', ClassController.index);
routes.post('/classes', ClassController.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);


export default routes; 