import { loginController } from "../controllers/loginController";
import { addUserController } from "../controllers/userController";
import express from "express";

const router = express.Router();

router.post('/', loginController);
router.post('/register', addUserController);

export default router;