import { addFeedbackService } from "../services/feedbackService"
import { Request, Response } from "express";

export const addFeedbackController = async (req : Request, res : Response) => {
    try {
        await addFeedbackService(req, res)
        res.send('feedback added').status(201);
    } catch (error) {
        res.status(500).send('server error');
    }
}
