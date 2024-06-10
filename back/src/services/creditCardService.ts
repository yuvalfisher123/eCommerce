import { PrismaClient } from '@prisma/client'
import { Request, Response } from "express";

const creditCardRepository = new PrismaClient().creditCard;

export const getCardSevice = async (req : Request, res : Response) => {
    return await creditCardRepository.findUnique({
        where: {
            id: +req.params.cardId
        }
    }
)
}

export const getCardsSevice = async (req : Request, res : Response) => {
    return await creditCardRepository.findMany({
        where: {
            id: +req.params.userId
        }
    }
)
}

export const addCardService = async (req : Request, res : Response) => {
    return await creditCardRepository.create({
        data : req.body
    });
} 

export const deleteCardService = async (req : Request, res : Response) => {
    await creditCardRepository.delete({
        where: {
            id: +req.params.cardId,
        }
    });
} 