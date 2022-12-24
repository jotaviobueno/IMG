import {Router} from 'express';

const routes = Router();

import {sessionRoutes} from './sessionRoutes.js';
import {userRoutes} from './userRoutes.js';

routes.use("/user", userRoutes);
routes.use("/session", sessionRoutes);

export default routes;