import { addFeedbackService } from "../services/feedbackService"
import { NextFunction, Request, Response } from "express";

export const addFeedbackController = async (req : Request, res : Response, next: NextFunction) => {
    try {
        await addFeedbackService(req, res)
        res.send('feedback added').status(201);
    } catch (error) {
        next(error)
    }    
}
