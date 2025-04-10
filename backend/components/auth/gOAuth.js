import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../../models/UserModel.js";


const date = new Date();
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/callback',
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                // Try to find user by googleId or email
                let user = await User.findOne({
                    $or: [
                        { googleId: profile.id },
                        { email: profile.emails?.[0]?.value }
                    ]
                });

                if (!user) {
                    // Create new user if not found
                    user = new User({
                        googleId: profile.id,
                        name: profile.displayName,
                        email: profile.emails?.[0]?.value,
                        avatar: profile.photos?.[0]?.value,
                        lastLogin: new Date()
                    });
                    await user.save();
                    console.log('New user created:', user.email);
                } else {
                    // Update existing user's data
                    user.googleId = profile.id;
                    user.name = profile.displayName;
                    user.avatar = profile.photos?.[0]?.value;

                    // Update lastLogin and add to loginHistory
                    user.lastLogin = new Date();

                    
                    await user.save();
                    console.log('Existing user updated:', user.email);
                }

                return done(null, user);
            } catch (err) {
                console.error('Google auth error:', err);
                return done(err, null);
            }
        }
    )
);

// Serialize/Deserialize remains the same
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});