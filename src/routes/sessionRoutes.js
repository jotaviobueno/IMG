import {Router} from 'express';

import CreateSessionController from "../Module/User/app/useCases/session/createSession/CreateSessionController.js";
import GetAllSessionController from '../Module/User/app/useCases/session/getAllSession/getAllSessionController.js';
import DisconnectSessionController from '../Module/User/app/useCases/session/disconnectSession/disconnectSessionController.js';
import DisconnectAllSessionController from '../Module/User/app/useCases/session/disconnectAllSession/disconnectAllSessionController.js';

// Middlewares
import ValidateSession from '../Module/User/app/Middleware/ValidateSession.js';
import ValidateUser from '../Module/User/app/Middleware/ValidateUser.js';

import SessionRequest from '../Module/User/app/Request/SessionRequest.js';

const sessionRoutes = Router();

sessionRoutes.post("/", SessionRequest.createSession, CreateSessionController.handle );
sessionRoutes.get("/", SessionRequest.getAllSession, ValidateSession, ValidateUser, GetAllSessionController.handle );
sessionRoutes.post("/disconnect", SessionRequest.disconnectOneSession, ValidateSession, ValidateUser, DisconnectSessionController.handle );
sessionRoutes.post("/disconnect-many", SessionRequest.disconnectManySession, ValidateSession, ValidateUser, DisconnectAllSessionController.handle );

export {sessionRoutes};