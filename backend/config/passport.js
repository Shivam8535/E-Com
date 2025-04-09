// config/passport.js
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { config } from 'dotenv';
import User from "../models/UserModel.js";
config(); // 👈 Loads .env variables

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/callback"
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const existUser = await User.findOne({ googleID: profile.id }).select("-_id -__v");
        if (existUser) {
            return done(null, existUser);
        }

        const newUser = new User({
            googleID: profile.id,
            avtar: profile.photos[0].value,
            name: profile.displayName,
            email: profile.emails[0].value
        });
        await newUser.save();
        return done(null, newUser);
    } catch (err) {
        return done(err, null);
    }
}));


passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
