import { getAllUserController,
         addUserController,
         addUserAddressController,
         getUserController,
         updateUserController, 
         deleteUserController} from "../controllers/userController";
import express from "express";

const router = express.Router();

router.get('/', getAllUserController);
router.post('/', addUserController);
router.get('/:userId', getUserController);
router.patch('/:userId', updateUserController);
router.post('/address/:userId', addUserAddressController);
router.delete('/:userId', deleteUserController);

export default router;