import {Router} from 'express';

import CreateUserController from '../Module/User/app/useCases/createUser/CreateUserController.js';
import CreateSessionController from '../Module/User/app/useCases/createSession/CreateSessionController.js';

const userRoutes = Router();

userRoutes.post("/", CreateUserController.handle );

export {userRoutes};