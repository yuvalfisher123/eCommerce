import { getCardSevice,
    getCardsSevice,
    addCardService,
    deleteCardService } from "../services/creditCardService";
import { Request, Response } from "express";

export const getCardController = async (req : Request, res : Response) => {
    try {
        res.status(200).json(await getCardSevice(req, res));
    } catch (error) {
        res.status(500).send('server error');
    }
}

export const getCardsController = async (req : Request, res : Response) => {
    try {
        res.status(200).json(await getCardsSevice(req, res));
    } catch (error) {
        res.status(500).send('server error');
    }
}

export const addCardController = async (req : Request, res : Response) => {
    try {
        await addCardService(req, res);        
        res.status(201).send('card added');
    } catch (error) {
        res.status(500).send('server error');
    }
}

export const deleteCardController = async (req : Request, res : Response) => {
    try {
        await deleteCardService(req, res)
        res.status(200).send('card deleted');
    } catch (error) {
        res.status(500).send('server error');
    }
}
