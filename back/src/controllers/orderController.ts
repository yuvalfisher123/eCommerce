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
        res.json({'message': 'order added',
            'order': await addOrderService(req, res)
        }).status(201);
    } catch (error) {
        res.send('server error').status(500);
    }
}

export const updateOrderController = async (req : Request, res : Response) => {
    try {
        await updateOrderService(req, res)
        res.send('order data updated').status(200);
    } catch (error) {
        res.send('server error').status(500);
    }
}

export const deleteOrderController = async (req : Request, res : Response) => {
    try {
        await deleteOrderService(req, res)
        res.send('order deleted').status(200);
    } catch (error) {
        res.send('server error').status(500);
    }
}

export const addOrderForUserController = async (req : Request, res : Response) => {
    try {
        res.json({'message': 'order added',
            'order': await addOrderForUserService(req, res)
        }).status(201);
    } catch (error) {
        res.send('server error').status(500);
    }
}