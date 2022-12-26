import {Router} from 'express';

import CreateSessionController from '../Module/User/app/useCases/createSession/CreateSessionController.js';
import GetAllSessionController from '../Module/User/app/useCases/getAllSession/getAllSessionController.js';

// Middlewares
import ValidateSession from '../Module/User/app/Middleware/ValidateSession.js';
import ValidateUser from '../Module/User/app/Middleware/ValidateUser.js';

const sessionRoutes = Router();

sessionRoutes.post("/", CreateSessionController.handle );
sessionRoutes.get("/", ValidateSession, ValidateUser, GetAllSessionController.handle );

export {sessionRoutes};