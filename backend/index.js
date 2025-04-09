import express from "express";
import { configDotenv } from "dotenv";
import { userRouter } from "./routers/routes.js";
import { dbConnect } from "./config/dbConnect.js";
import session from "express-session";
import passport from "passport";
import "./config/passport.js"; // 👈 This is important to register the Google strategy
configDotenv();
dbConnect();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use(session({
    secret: 'Some AS',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/", userRouter);

// Login page with link to Google OAuth
app.get('/google', (req, res) => {
    res.send(`<a href="/auth/google">Login with Google</a>`);
});

// Google OAuth login
app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Google OAuth callback
app.get('/auth/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    function (req, res) {
        // Successful login
        res.redirect('/dashboard');
    }
);

// Protected dashboard route
app.get('/dashboard', (req, res) => {
    if (req.isAuthenticated()) {
        res.json(req.user);
    } else {
        res.redirect('/');
    }
});

app.listen(port, () => {
    console.log(`Your server is running at http://localhost:${port}`);
});
