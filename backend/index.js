import express from "express";
import { configDotenv } from "dotenv";
import { dbConnect } from "./config/dbConnect.js";
import "./config/passport.js"; // 👈 This is important to register the Google strategy
import cors from 'cors';
import { userRouter } from "./routers/routes.js";
import passport from "passport";
import session from "express-session"; // 👈 Import express-session separately

configDotenv();
dbConnect();

const port = process.env.PORT;
const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(
    session({
        secret: 'abhiyour',
        resave: false,
        saveUninitialized: true,
    })
);
app.use(passport.initialize());
app.use(passport.session()); // 👈 Correct usage

// Google OAuth route (fixed syntax)
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email',] }));

// Router
app.use('', userRouter);

app.listen(port, () => {
    console.log(`Your server is running at http://localhost:${port}`);
});