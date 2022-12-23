import {Router} from 'express';

import CreateSessionController from '../Module/User/app/useCases/createSession/CreateSessionController.js';

const sessionRoutes = Router();

sessionRoutes.post("/", CreateSessionController.handle );

export {sessionRoutes};