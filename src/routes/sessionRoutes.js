import {Router} from 'express';

import CreateSessionController from '../Module/User/app/useCases/createSession/CreateSessionController.js';
import GetAllSessionController from '../Module/User/app/useCases/getAllSession/getAllSessionController.js';
import DisconnectSessionController from '../Module/User/app/useCases/disconnectSession/disconnectSessionController.js';
import DisconnectAllSessionController from '../Module/User/app/useCases/disconnectAllSession/disconnectAllSessionController.js';

// Middlewares
import ValidateSession from '../Module/User/app/Middleware/ValidateSession.js';
import ValidateUser from '../Module/User/app/Middleware/ValidateUser.js';

const sessionRoutes = Router();

sessionRoutes.post("/", CreateSessionController.handle );
sessionRoutes.get("/", ValidateSession, ValidateUser, GetAllSessionController.handle );
sessionRoutes.post("/disconnect", ValidateSession, ValidateUser, DisconnectSessionController.handle );
sessionRoutes.post("/many-disconnect", ValidateSession, ValidateUser, DisconnectAllSessionController.handle );

export {sessionRoutes};