import { PrismaClient, User } from '@prisma/client'
import { Request, Response } from "express";

const userRepository = new PrismaClient().user;
const addressRepository = new PrismaClient().address;

export const getAllUserSevice = async (req : Request, res : Response) => {
    return await userRepository.findMany({
        where: req.body,
        select: {
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