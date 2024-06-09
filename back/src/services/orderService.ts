import { PrismaClient, User } from '@prisma/client'
import { Request, Response } from "express";

const orderRepository = new PrismaClient().order;

export const getOrderSevice = async (req : Request, res : Response) => {
    return await orderRepository.findUnique({
        where: {
            id: +req.params.orderId
        },
    });
} 

export const addOrderService = async (req : Request, res : Response) => {
    await orderRepository.create({
        data : req.body
    });
} 

export const updateOrderService = async (req : Request, res : Response) => {
    await orderRepository.update({
        where: {
            id: +req.params.orderId,
        }, 
        data: req.body
    });
} 

export const deleteOrderService = async (req : Request, res : Response) => {
    await orderRepository.delete({
        where: {
            id: +req.params.orderId,
        }
    });
} 