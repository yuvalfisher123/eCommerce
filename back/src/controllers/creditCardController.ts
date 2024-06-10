import { getCardSevice,
    getCardsSevice,
    addCardService,
    deleteCardService } from "../services/creditCardService";
import { Request, Response } from "express";

export const getCardController = async (req : Request, res : Response) => {
    try {
        res.json(await getCardSevice(req, res)).status(200);
    } catch (error) {
        res.send('server error').status(500);
    }
}

export const getCardsController = async (req : Request, res : Response) => {
    try {
        res.json(await getCardsSevice(req, res)).status(200);
    } catch (error) {
        res.send('server error').status(500);
    }
}

export const addCardController = async (req : Request, res : Response) => {
    try {
        res.json({'message': 'card added',
            'order': await addCardService(req, res)
        }).status(201);
    } catch (error) {
        res.send('server error').status(500);
    }
}

export const deleteCardController = async (req : Request, res : Response) => {
    try {
        await deleteCardService(req, res)
        res.send('card deleted').status(200);
    } catch (error) {
        res.send('server error').status(500);
    }
}
