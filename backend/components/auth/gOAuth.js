import passport from "passport";





passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURl: '/auth/callback'
        },
        (accToken, refToken, profile, done) => {
            // Here you can save the user to your database

            return done(null, profile)
        }
    )
)

// Serialize & Deserialize user
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));