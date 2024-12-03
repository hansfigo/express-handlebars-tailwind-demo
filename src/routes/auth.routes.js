import { Router } from 'express';
import { authController } from '../controllers/authController.js';
import { validateRequest } from '../middlewares/validateRequest.js';
import { registerSchema, loginSchema } from '../validations/authValidation.js';


const authRouter = Router();

authRouter.post('/register', validateRequest(registerSchema), authController.register);
authRouter.post('/login', validateRequest(loginSchema), authController.login);
authRouter.post('/logout', authController.logout);

export default authRouter;
