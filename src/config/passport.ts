import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/User';

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            callbackURL: process.env.GOOGLE_CALLBACK_URL!,
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                console.log('Google OAuth callback triggered');
                console.log('Profile:', profile);

                // Check if user exists with this email
                let user = await User.findOne({ email: profile.emails?.[0].value });

                if (!user) {
                    // Create new user
                    console.log('Creating new user from Google profile');
                    user = await User.create({
                        name: profile.displayName,
                        email: profile.emails?.[0].value,
                        googleId: profile.id,
                        profilePicture: profile.photos?.[0].value,
                        role: 'customer',
                        status: 'approved',
                    });
                } else if (!user.googleId) {
                    // Link Google account to existing email/password user
                    console.log('Linking Google account to existing user');
                    user.googleId = profile.id;
                    user.profilePicture = profile.photos?.[0].value;
                    await user.save();
                }

                console.log('User authenticated:', user.email);
                return done(null, user);
            } catch (error) {
                console.error('Error in Google OAuth:', error);
                return done(error as Error, undefined);
            }
        }
    )
);

passport.serializeUser((user: any, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (id: string, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});

export default passport;
