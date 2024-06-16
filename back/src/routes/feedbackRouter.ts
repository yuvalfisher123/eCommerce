import { addFeedbackController } from "../controllers/feedbackController";
import express from "express";

const router = express.Router();

router.post('/', addFeedbackController);

export default router;