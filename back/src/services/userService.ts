import { PrismaClient, User } from '@prisma/client'
import { Request, Response } from "express";

const userRepository = new PrismaClient().user;
const addressRepository = new PrismaClient().address;
const cartRepository = new PrismaClient().cart;

export const getAllUserSevice = async (req : Request, res : Response) => {
    return await userRepository.findMany({
        where: req.body,
        select: {
            id: true,
            email: true,
            username: true,
            first_name: true,
            last_name: true,
            addresses: true
        }
    });
} 

export const getUserSevice = async (req : Request, res : Response) => {
    return await userRepository.findUnique({
        where: {
            id: +req.params.userId
        },
        select: {
            email: true,
            username: true,
            first_name: true,
            last_name: true,
            addresses: true
        }
    });
} 

export const addUserService = async (req : Request, res : Response) => {
    await userRepository.create({
        data : req.body
    });
} 

export const addUserAddressService = async (req : Request, res : Response) => {
    await addressRepository.create({
        data : {
            user_id: +req.params.userId,
            country : req.body.country,
            city: req.body.city,
            street: req.body.street,
            house_number: +req.body.house_number,
            postcode: +req.body.postcode
        }
    });      
} 

export const updateUserService = async (req : Request, res : Response) => {
    await userRepository.update({
        where: {
            id: +req.params.userId,
        }, 
        data: req.body
    });
} 

export const deleteUserService = async (req : Request, res : Response) => {
    await userRepository.delete({
        where: {
            id: +req.params.userId,
        }
    });
} 

export const addToCartService = async (req : Request, res : Response) => {
    await cartRepository.create({
        data: {
            product_id: +req.body.product_id,
            quantity: +req.body.quantity,
            user_id: +req.params.userId
        }
    });
} 

export const changeQuantityService = async (req : Request, res : Response) => {
    await cartRepository.update({
        where : {
            user_id_product_id: {
                product_id: +req.params.productId,
                user_id: +req.params.userId
            }
        },
        data: {
            quantity: +req.body.quantity
        }
    });
}

export const deleteProductService = async (req : Request, res : Response) => {
    await cartRepository.delete({
        where : {
            user_id_product_id: {
                product_id: +req.params.productId,
                user_id: +req.params.userId
            }
        }
    });
}

export const clearCartService = async (req : Request, res : Response) => {
    await cartRepository.deleteMany({
        where : {
            user_id: +req.params.userId
        }
    });
}

export const getCartService = async (req : Request, res : Response) => {
    return await cartRepository.findMany({
        where : {
            user_id: +req.params.userId
        },
        select : {
            user_id: true,
            product: true,
            quantity: true
        }
    });
}