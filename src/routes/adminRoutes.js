import {Router} from 'express';

const adminRoutes = Router();

// Controller
import turnAdminController from '../Module/User/app/useCases/admin/turnAdmin/turnAdminController.js';

// Middlewares
import isAdmin from '../Module/User/app/Middleware/IsAdmin.js'
import ValidateSession from '../Module/User/app/Middleware/ValidateSession.js';
import ValidateUser from '../Module/User/app/Middleware/ValidateUser.js';

import AdminRequest from '../Module/User/app/Request/AdminRequest.js'


adminRoutes.post("/", AdminRequest.turnAdmin, ValidateSession, ValidateUser, isAdmin, turnAdminController.handle );

export {adminRoutes};