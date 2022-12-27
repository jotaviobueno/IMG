import {Router} from 'express';

const routes = Router();

import {sessionRoutes} from './sessionRoutes.js';
import {userRoutes} from './userRoutes.js';
import { adminRoutes } from './adminRoutes.js';

routes.use("/user", userRoutes);
routes.use("/session", sessionRoutes);
routes.use("/admin", adminRoutes);

export default routes;