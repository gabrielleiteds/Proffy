import { Response, Request, Router } from 'express';

//database
import db from './database/connection';

//import functions Utils
import convertTime from './utils/convertHourToMinutes';

//controllers
import ClassesController from './controllers/ClassesController';

const routes = Router();
const ClassController = new ClassesController();


routes.get('/classes', ClassController.index)
routes.post('/classes', ClassController.create)

export default routes; 