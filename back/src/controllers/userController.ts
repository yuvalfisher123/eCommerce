import { getAllUserSevice,
         addUserService,
         addUserAddressService,
         getUserSevice,
         updateUserService,
         deleteUserService,
         addToCartService,
         changeQuantityService,
         deleteProductService,
         getCartService,
         clearCartService } from "../services/userService";
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

export const addToCartController = async (req : Request, res : Response) => {
    try {
        await addToCartService(req, res)
        res.send('product added to cart').status(200);
    } catch (error) {
        res.send('server error').status(500);
    }
}

export const changeQuantityController = async (req : Request, res : Response) => {
    try {
        await changeQuantityService(req, res)
        res.send('product quantity updated').status(200);
    } catch (error) {
        res.send('server error').status(500);
    }
}

export const deleteProductController = async (req : Request, res : Response) => {
    try {
        await deleteProductService(req, res)
        res.send('product deleted from cart').status(200);
    } catch (error) {
        res.send('server error').status(500);
    }
}

export const clearCartController = async (req : Request, res : Response) => {
    try {
        await clearCartService(req, res)
        res.send('cart cleared').status(200);
    } catch (error) {
        res.send('server error').status(500);
    }
}

export const getCartController = async (req : Request, res : Response) => {
    try {
        res.json(await getCartService(req, res)).status(200);
    } catch (error) {
        res.send('server error').status(500);
    }
}

