import { addOrderService, deleteOrderService, getOrderSevice, updateOrderService, addOrderForUserService } from "../services/orderService";
import { Request, Response } from "express";

export const getOrderController = async (req : Request, res : Response) => {
    try {
        res.json(await getOrderSevice(req, res)).status(200);
    } catch (error) {
        res.send('server error').status(500);
    }
}

export const addOrderController = async (req : Request, res : Response) => {
    try {
        res.status(201).json({'message': 'order added',
            'order': await addOrderService(req, res)
        });
    } catch (error) {
        res.status(500).send('server error');
    }
}

export const updateOrderController = async (req : Request, res : Response) => {
    try {
        await updateOrderService(req, res)
        res.status(200).send('order data updated');
    } catch (error) {
        res.status(500).send('server error');
    }
}

export const deleteOrderController = async (req : Request, res : Response) => {
    try {
        await deleteOrderService(req, res)
        res.status(200).send('order deleted');
    } catch (error) {
        res.status(500).send('server error');
    }
}

export const addOrderForUserController = async (req : Request, res : Response) => {
    try {
        res.status(201).json({'message': 'order added',
            'order': await addOrderForUserService(req, res)
        });
    } catch (error) {
        res.status(500).send('server error');
    }
}