import { addOrderController, deleteOrderController, getOrderController, updateOrderController, addOrderForUserController } from "../controllers/orderController"
import express from "express";
import auth from "../middleWare/auth";

const router = express.Router();

router.post('/not-loged', addOrderController);
router.post('/', auth, addOrderForUserController);
router.get('/:orderId', getOrderController);
router.patch('/:orderId', updateOrderController);
router.delete('/:orderId', deleteOrderController);

export default router;