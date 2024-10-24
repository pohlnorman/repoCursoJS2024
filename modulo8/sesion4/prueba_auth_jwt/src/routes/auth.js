import express from 'express';
import { registerUser, loginUser, logoutUser, sessionUser} from '../controllers/auth.controllers.js';
import verifyToken  from '../lib/verifyToken/authToken.js'
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

router.get('/check-session',  verifyToken,sessionUser);

export default router;