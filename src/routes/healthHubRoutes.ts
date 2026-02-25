import express from 'express';
import { createHealthTip, getAllHealthTips, deleteHealthTip, getHealthTipById } from '../controllers/healthHubController';

const router = express.Router();

router.post('/', createHealthTip);
router.get('/', getAllHealthTips);
router.get('/:id', getHealthTipById);
router.delete('/:id', deleteHealthTip);

export default router;
