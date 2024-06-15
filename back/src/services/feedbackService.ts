import { PrismaClient } from '@prisma/client'
import { Request, Response } from "express";

const feedbackRepository = new PrismaClient().feedBack;

export const addFeedbackService = async (req : Request, res : Response) => {  
    await feedbackRepository.create({
        data : {
            message: req.body.message
        }
    });
} 
