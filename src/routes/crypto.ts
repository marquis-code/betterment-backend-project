import { Router } from 'express';
import { addCrypto, getCryptos } from '../controllers/cryptoController';
import authMiddleware from '../middleware/authMiddleware';
import roleMiddleware from '../middleware/roleMiddleware';

const router: Router = Router();

// Protect routes using both authMiddleware and roleMiddleware
router.post('/add', authMiddleware, roleMiddleware('admin'), addCrypto);
router.get('/', authMiddleware, getCryptos);

export default router;
