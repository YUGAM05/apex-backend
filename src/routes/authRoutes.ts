import express from 'express';
import { registerUser, loginUser } from '../controllers/authController';
import passport from '../config/passport';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

// Setup
import { setupAdmin } from '../controllers/authController';
router.get('/setup-admin', setupAdmin);

// Google OAuth routes
// @desc    Initiate Google OAuth login
// @route   GET /api/auth/google
// @access  Public
router.get('/google',
    passport.authenticate('google', {
        scope: ['profile', 'email'],
        session: false
    })
);

// @desc    Google OAuth callback
// @route   GET /api/auth/google/callback
// @access  Public
router.get('/google/callback',
    passport.authenticate('google', {
        session: false,
        failureRedirect: `${process.env.FRONTEND_URL}/login?error=auth_failed`
    }),
    (req, res) => {
        try {
            const user = req.user as any;

            if (!user) {
                return res.redirect(`${process.env.FRONTEND_URL}/login?error=no_user`);
            }

            console.log('Generating JWT for user:', user.email);

            // Generate JWT token
            const token = jwt.sign(
                { id: user._id, role: user.role },
                process.env.JWT_SECRET!,
                { expiresIn: '30d' }
            );

            // Prepare user data (without sensitive info)
            const userData = {
                id: user._id,
                name: user.name,
                email: user.email,
                profilePicture: user.profilePicture,
                role: user.role,
                status: user.status,
                phone: user.phone,
                address: user.address,
                location: user.location,
            };

            // Redirect to frontend with token and user data
            const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
            const redirectUrl = `${frontendUrl}/auth/callback?token=${token}&user=${encodeURIComponent(JSON.stringify(userData))}`;

            console.log('=== OAUTH REDIRECT DEBUG ===');
            console.log('FRONTEND_URL env:', process.env.FRONTEND_URL);
            console.log('Using frontend URL:', frontendUrl);
            console.log('Full redirect URL:', redirectUrl);
            console.log('===========================');

            res.redirect(redirectUrl);
        } catch (error) {
            console.error('Error in callback:', error);
            res.redirect(`${process.env.FRONTEND_URL}/login?error=server_error`);
        }
    }
);

// Google OAuth routes for Seller Panel
// @desc    Initiate Google OAuth login for seller
// @route   GET /api/auth/google/seller
// @access  Public
router.get('/google/seller',
    passport.authenticate('google', {
        scope: ['profile', 'email'],
        session: false,
        state: 'seller'
    })
);

// @desc    Google OAuth callback for seller
// @route   GET /api/auth/google/seller/callback
// @access  Public
router.get('/google/seller/callback',
    passport.authenticate('google', {
        session: false,
        failureRedirect: `http://localhost:3003/login?error=auth_failed`
    }),
    (async (req, res) => {
        try {
            const user = req.user as any;

            if (!user) {
                return res.redirect(`http://localhost:3003/login?error=no_user`);
            }

            // Ensure user has seller or admin role
            if (user.role !== 'seller' && user.role !== 'admin') {
                // Update user role to seller if first-time Google login
                user.role = 'seller';
                await user.save();
            }

            console.log('Generating JWT for seller:', user.email);

            // Generate JWT token
            const token = jwt.sign(
                { id: user._id, role: user.role },
                process.env.JWT_SECRET!,
                { expiresIn: '30d' }
            );

            // Prepare user data
            const userData = {
                id: user._id,
                name: user.name,
                email: user.email,
                profilePicture: user.profilePicture,
                role: user.role,
                status: user.status,
                phone: user.phone,
                address: user.address,
                location: user.location,
            };

            // Redirect to seller panel with token and user data
            const sellerUrl = process.env.SELLER_PANEL_URL || 'http://localhost:3003';
            const redirectUrl = `${sellerUrl}/auth/callback?token=${token}&user=${encodeURIComponent(JSON.stringify(userData))}`;

            res.redirect(redirectUrl);
        } catch (error) {
            console.error('Error in seller callback:', error);
            res.redirect(`http://localhost:3003/login?error=server_error`);
        }
    })
);

// Google OAuth routes for Delivery Panel
// @desc    Initiate Google OAuth login for delivery
// @route   GET /api/auth/google/delivery
// @access  Public
router.get('/google/delivery',
    passport.authenticate('google', {
        scope: ['profile', 'email'],
        session: false,
        state: 'delivery'
    })
);

// @desc    Google OAuth callback for delivery
// @route   GET /api/auth/google/delivery/callback
// @access  Public
router.get('/google/delivery/callback',
    passport.authenticate('google', {
        session: false,
        failureRedirect: `http://localhost:3002/login?error=auth_failed`
    }),
    (async (req, res) => {
        try {
            const user = req.user as any;

            if (!user) {
                return res.redirect(`http://localhost:3002/login?error=no_user`);
            }

            // Ensure user has delivery or admin role
            if (user.role !== 'delivery' && user.role !== 'admin') {
                // Update user role to delivery if first-time Google login
                user.role = 'delivery';
                await user.save();
            }

            console.log('Generating JWT for delivery partner:', user.email);

            // Generate JWT token
            const token = jwt.sign(
                { id: user._id, role: user.role },
                process.env.JWT_SECRET!,
                { expiresIn: '30d' }
            );

            // Prepare user data
            const userData = {
                id: user._id,
                name: user.name,
                email: user.email,
                profilePicture: user.profilePicture,
                role: user.role,
                status: user.status,
                phone: user.phone,
                address: user.address,
                location: user.location,
            };

            // Redirect to delivery panel with token and user data
            const deliveryUrl = process.env.DELIVERY_PANEL_URL || 'http://localhost:3002';
            const redirectUrl = `${deliveryUrl}/auth/callback?token=${token}&user=${encodeURIComponent(JSON.stringify(userData))}`;

            res.redirect(redirectUrl);
        } catch (error) {
            console.error('Error in delivery callback:', error);
            res.redirect(`http://localhost:3002/login?error=server_error`);
        }
    })
);

export default router;
