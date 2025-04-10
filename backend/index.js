import express from "express";
import { configDotenv } from "dotenv";
import { dbConnect } from "./config/dbConnect.js";
import "./config/passport.js"; // 👈 This is important to register the Google strategy
import cors from 'cors';
import { userRouter } from "./routers/routes.js";
import passport from "passport";
import session from "express-session"; // 👈 Import express-session separately
import './components/auth/gOAuth.js'

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

// Router
app.use('/', userRouter);



// Google OAuth route (fixed syntax)
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email',] }));
app.get(
    '/auth/callback',
    passport.authenticate('google', { failureRedirect: 'http://localhost:3000/login' }),
    (req, res) => {
        const data = req.user
        console.log("data",data)
      // Successful authentication, redirect to React app
      res.redirect('http://localhost:3000/profile');
    }
  );


app.listen(port, () => {
    console.log(`Your server is running at http://localhost:${port}`);
});