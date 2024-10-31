import { Router } from "express";
import { authenticate } from "../Controllers/Conttrollers.User.js";

const authRoute = Router();

authRoute.post('/api/auth/user' , authenticate)

export default authRoute;