import { Router } from "express";
import userRouter from "./user.route";
import adminRouter from "./admin.route";
import { authenticateToken as authenticator } from '../middleware/authenticate'


const routes = Router();


routes.use('/users', userRouter)

routes.use('/admin', authenticator, adminRouter)
export default routes