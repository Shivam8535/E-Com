import e from "express";
import { Register } from "../components/auth/user.js";


const userRouter = e.Router();

// User APIs setup
userRouter.get("/api/auth", Register)






//
export { userRouter }