import e from "express";
import { Register } from "../components/auth/user.js";


const userRouter = e.Router();

// User APIs setup
userRouter.post("/register", Register)
userRouter.post("/login", Register);






//
export { userRouter }