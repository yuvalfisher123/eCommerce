import { addOrderController, deleteOrderController, getOrderController, updateOrderController, addOrderForUserController } from "../controllers/orderController"
import express from "express";

const router = express.Router();

router.post('/', addOrderController);
router.post('/:userId', addOrderForUserController);
router.get('/:orderId', getOrderController);
router.patch('/:orderId', updateOrderController);
router.delete('/:orderId', deleteOrderController);

export default router;