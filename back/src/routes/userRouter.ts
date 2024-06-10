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
import { getCardController,
         getCardsController,
         addCardController,
         deleteCardController } from "../controllers/creditCardController";
import auth from "../middleWare/auth";
import express from "express";

const router = express.Router();

router.use(auth);

router.get('/', getAllUserController);
router.get('/:userId', getUserController);
router.patch('/:userId', updateUserController);
router.post('/address/:userId', addUserAddressController);
router.delete('/:userId', deleteUserController);
router.post('/:userId/cart', addToCartController);
router.get('/:userId/cart', getCartController);
router.patch('/:userId/cart/:productId', changeQuantityController);
router.delete('/:userId/cart/:productId', deleteProductController);
router.delete('/:userId/cart', clearCartController);
router.get('/cards/:cardId', getCardController);
router.get('/:userId/cards', getCardsController);
router.post('/cards', addCardController);
router.delete('/cards/:cardId', deleteCardController);

export default router;