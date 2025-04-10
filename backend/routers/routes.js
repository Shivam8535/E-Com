import e from "express";
import { Register } from "../components/auth/user.js";



// User APIs setup
// Normal user Router
const userRouter = e.Router();
userRouter.post("/register", Register)
userRouter.post("/login", Register);

//
const googleRouter = e.Router();




//
export { userRouter, googleRouter }