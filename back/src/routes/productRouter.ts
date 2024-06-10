import express from "express";
import { addProductController, deleteProductController, getProductController, getProductsController, updateProductController } from "../controllers/productController";

const router = express.Router();

router.post('/', addProductController);
router.get('/:productId', getProductController);
router.get('/', getProductsController);
router.patch('/:productId', updateProductController);
router.delete('/:productId', deleteProductController);

export default router;