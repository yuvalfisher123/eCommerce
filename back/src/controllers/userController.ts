import { getAllUserSevice,
         addUserService,
         addUserAddressService,
         getUserSevice,
         updateUserService,
         deleteUserService } from "../services/userService";
import { Request, Response } from "express";

export const getAllUserController = async (req : Request, res : Response) => {
    try {
        res.json(await getAllUserSevice(req, res)).status(200);
    } catch (error) {
        res.send('server error').status(500);
    }
} 

export const getUserController = async (req : Request, res : Response) => {
    try {
        res.json(await getUserSevice(req, res)).status(200);
    } catch (error) {
        res.send('server error').status(500);
    }
}

export const addUserController = async (req : Request, res : Response) => {
    try {
        await addUserService(req, res)
        res.send('user added').status(201);
    } catch (error) {
        res.send('server error').status(500);
    }
}

export const addUserAddressController = async (req : Request, res : Response) => {
    try {
        await addUserAddressService(req, res)
        res.send('address added').status(201);
    } catch (error) {
        res.send('server error').status(500);
    }
}

export const updateUserController = async (req : Request, res : Response) => {
    try {
        await updateUserService(req, res)
        res.send('user data updated').status(200);
    } catch (error) {
        res.send('server error').status(500);
    }
}

export const deleteUserController = async (req : Request, res : Response) => {
    try {
        await deleteUserService(req, res)
        res.send('user deleted').status(200);
    } catch (error) {
        res.send('server error').status(500);
    }
}