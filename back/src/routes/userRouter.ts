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

router.get('/all', getAllUserController);
router.get('/', getUserController);
router.patch('/', updateUserController);
router.post('/address', addUserAddressController);
router.delete('/', deleteUserController);
router.post('/cart', addToCartController);
router.get('/cart', getCartController);
router.patch('/cart/:productId', changeQuantityController);
router.delete('/cart/:productId', deleteProductController);
router.delete('/cart', clearCartController);
router.get('/cards/:cardId', getCardController);
router.get('/cards', getCardsController);
router.post('/cards', addCardController);
router.delete('/cards/:cardId', deleteCardController);

export default router;