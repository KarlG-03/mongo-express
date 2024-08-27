import { Router } from 'express';
import { getUserProfile } from '../controllers/userController';
import { protect } from '../middlewares/auth';

const router = Router();

router.get('/profile', protect, getUserProfile);

export default router;
