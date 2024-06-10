import { PrismaClient } from '@prisma/client'
import { Request, Response } from "express";

const orderRepository = new PrismaClient().order;
const cartRepository = new PrismaClient().cart;

export const getOrderSevice = async (req : Request, res : Response) => {
    return await orderRepository.findUnique({
        where: {
            id: +req.params.orderId
        },
        select: {
            id: true,
            user_id: true,
            status: true,
            products: {
                select:{
                    product: true
                }
            }
        }
    });
} 

export const addOrderService = async (req : Request, res : Response) => {
    return await orderRepository.create({
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

export const addOrderForUserService = async (req : Request, res : Response) => {
    return await orderRepository.create({
        data : {
            user_id: +req.params.userId,
            status: "received",
            payment_id: +req.body.payment_id,
            products:{
                create: await cartRepository.findMany({
                    where : {
                        user_id: +req.params.userId
                    },
                    select: {
                        product_id: true,
                        quantity: true
                    }
                })
            }
        }
    });
} 