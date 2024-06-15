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
            id: +res.locals.userId
        }
    }
)
}

export const addCardService = async (req : Request, res : Response) => {  
    await creditCardRepository.create({
        data : {
            user_id: +res.locals.userId,
            card_number: req.body.card_number,
            cvc: +req.body.cvc,
            name_of_holder: req.body.name_of_holder,
            experation: req.body.experation
        }
    });
} 

export const deleteCardService = async (req : Request, res : Response) => {
  return await creditCardRepository.delete({
        where: {
            id: +req.params.cardId,
        }
    });
} 