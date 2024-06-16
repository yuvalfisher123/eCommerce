import { HttpError } from "../httpError";
import { getCardSevice,
    getCardsSevice,
    addCardService,
    deleteCardService } from "../services/creditCardService";
import { NextFunction, Request, Response } from "express";

export const getCardController = async (req : Request, res : Response, next: NextFunction) => {
    try {
        const card = await getCardSevice(req, res);

        if (!card) {
            throw new HttpError(404, "card not found");
        }    

        res.status(200).json(card);
    } catch (error) {
        next(error);
    }
}

export const getCardsController = async (req : Request, res : Response, next: NextFunction) => {
    try {
        const cards = await getCardsSevice(req, res);

        if (!cards) {
            throw new HttpError(404, "user's cards not found");
        } 

        res.status(200).json(cards);
    } catch (error) {
        next(error);
    }

}

export const addCardController = async (req : Request, res : Response, next: NextFunction) => {
    try {
        await addCardService(req, res);        
        res.status(201).send('card added');
    } catch (error) {
        next(error);
    }
}

export const deleteCardController = async (req : Request, res : Response, next: NextFunction) => {
    try {
        await deleteCardService(req, res)
        res.status(200).send('card deleted');
    } catch (error) {
        next(error);
    }
}
