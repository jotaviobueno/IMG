import {Router} from 'express';

// Controller's
import CreateUserController from '../Module/User/app/useCases/createUser/CreateUserController.js';
import ShowProfileController from '../Module/User/app/useCases/showProfile/ShowProfileController.js';

// Middlewares
import ValidateSession from '../Module/User/app/Middleware/ValidateSession.js';
import ValidateUser from '../Module/User/app/Middleware/ValidateUser.js';

const userRoutes = Router();

userRoutes.post("/", CreateUserController.handle );
userRoutes.get("/", ValidateSession, ValidateUser, ShowProfileController.handle );

export {userRoutes};