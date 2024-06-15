import { HttpError } from "../httpError";
import { addOrderService, deleteOrderService, getOrderSevice, updateOrderService, addOrderForUserService } from "../services/orderService";
import { NextFunction, Request, Response } from "express";

export const getOrderController = async (req : Request, res : Response, next: NextFunction) => {
    try {
        const order = await getOrderSevice(req, res);

        if (!order) {
            throw new HttpError(404, "order not found");
        }

        res.status(200).json(order);
    } catch (error) {
        next(error);
    }
}

export const addOrderController = async (req : Request, res : Response, next: NextFunction) => {
    try {
        res.status(201).json({'message': 'order added',
            'order': await addOrderService(req, res)
        });
    } catch (error) {
        next(error);
    }
}

export const updateOrderController = async (req : Request, res : Response, next: NextFunction) => {
    try {
        await updateOrderService(req, res)
        res.status(200).send('order data updated');
    } catch (error) {
        next(error);
    }
}

export const deleteOrderController = async (req : Request, res : Response, next: NextFunction) => {
    try {
        await deleteOrderService(req, res)
        res.status(200).send('order deleted');
    } catch (error) {
        next(error);
    }
}

export const addOrderForUserController = async (req : Request, res : Response, next: NextFunction) => {
    try {
        res.status(201).json({'message': 'order added',
            'order': await addOrderForUserService(req, res)
        });
    } catch (error) {
        next(error);
    }
}