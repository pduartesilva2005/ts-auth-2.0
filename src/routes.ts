import { Router } from 'express';

import authMiddleware from './middlewares/authMiddleware';

import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';

const routes = Router();

const userController = new UserController();
const authController = new AuthController();

routes.post('/users', userController.create);
routes.post('/auth', authController.authenticate);
routes.get('/users', authMiddleware, userController.index);

export default routes;