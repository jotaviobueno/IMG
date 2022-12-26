import {Router} from 'express';

// Controller's
import CreateUserController from '../Module/User/app/useCases/createUser/CreateUserController.js';
import ShowProfileController from '../Module/User/app/useCases/showProfile/ShowProfileController.js';
import UpdateUsernameController from '../Module/User/app/useCases/updateUsername/UpdateUsernameController.js';
import ShowOutherProfileController from '../Module/User/app/useCases/showOutherProfile/showOutherProfileController.js';

// Middlewares
import ValidateSession from '../Module/User/app/Middleware/ValidateSession.js';
import ValidateUser from '../Module/User/app/Middleware/ValidateUser.js';

// Request Validator
import UserRequest from '../Module/User/app/Request/UserRequest.js';
import UpdateRequest from '../Module/User/app/Request/UpdateRequest.js'

const userRoutes = Router();

userRoutes.post("/", UserRequest.storage, CreateUserController.handle);
userRoutes.get("/", UserRequest.profile, ValidateSession, ValidateUser, ShowProfileController.handle);
userRoutes.get("/:username", UserRequest.outherProfile, ValidateSession, ShowOutherProfileController.handle);
userRoutes.put("/update/username", UpdateRequest.updateUsername, ValidateSession, ValidateUser, UpdateUsernameController.handle);

export {userRoutes};