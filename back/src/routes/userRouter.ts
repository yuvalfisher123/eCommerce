import { getAllUserController,
         addUserController,
         addUserAddressController,
         getUserController,
         updateUserController, 
         deleteUserController,
         addToCartController,
         changeQuantityController,
         deleteProductController,
         clearCartController,
         getCartController
         } from "../controllers/userController";
import express from "express";

const router = express.Router();

router.get('/', getAllUserController);
router.post('/', addUserController);
router.get('/:userId', getUserController);
router.patch('/:userId', updateUserController);
router.post('/address/:userId', addUserAddressController);
router.delete('/:userId', deleteUserController);
router.post('/:userId/cart', addToCartController);
router.get('/:userId/cart', getCartController);
router.patch('/:userId/cart/:productId', changeQuantityController);
router.delete('/:userId/cart/:productId', deleteProductController);
router.delete('/:userId/cart', clearCartController);

export default router;