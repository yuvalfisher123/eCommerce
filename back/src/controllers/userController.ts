import { HttpError } from "../httpError";
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
import { NextFunction, Request, Response } from "express";

export const getAllUserController = async (req : Request, res : Response, next: NextFunction) => {
    try {
        const users = await getAllUserSevice(req, res);

        if (!users) {
            throw new HttpError(404, "users not found");
        }

        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
} 

export const getUserController = async (req : Request, res : Response, next: NextFunction) => {
    try {  
        const user = await getUserSevice(req, res);

        if (!user) {
            throw new HttpError(404, "user not found");
        }

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

export const addUserController = async (req : Request, res : Response, next: NextFunction) => {
    try {
        await addUserService(req, res)
        res.status(201).send('user added');
    } catch (error) {
        next(error);
    }
}

export const addUserAddressController = async (req : Request, res : Response, next: NextFunction) => {
    try {
        await addUserAddressService(req, res)
        res.status(201).send('address added');
    } catch (error) {
        next(error);
    }
}

export const updateUserController = async (req : Request, res : Response, next: NextFunction) => {
    try {
        await updateUserService(req, res)
        res.status(200).send('user data updated');
    } catch (error) {
        next(error);
    }
}

export const deleteUserController = async (req : Request, res : Response, next: NextFunction) => {
    try {
        await deleteUserService(req, res)
        res.status(200).send('user deleted');
    } catch (error) {
        next(error);
    }
}

export const addToCartController = async (req : Request, res : Response, next: NextFunction) => {
    try {
        await addToCartService(req, res)
        res.status(200).send('product added to cart');
    } catch (error) {
        console.log(error);
        
        next(error);
    }
}

export const changeQuantityController = async (req : Request, res : Response, next: NextFunction) => {
    try {
        await changeQuantityService(req, res)
        res.status(200).send('product quantity updated');
    } catch (error) {
        next(error);
    }
}

export const deleteProductController = async (req : Request, res : Response, next: NextFunction) => {
    try {
        await deleteProductService(req, res)
        res.status(200).send('product deleted from cart');
    } catch (error) {
        console.log(error);
        
        next(error);
    }
}

export const clearCartController = async (req : Request, res : Response, next: NextFunction) => {
    try {
        await clearCartService(req, res)
        res.status(200).send('cart cleared');
    } catch (error) {
        next(error);
    }
}

export const getCartController = async (req : Request, res : Response, next: NextFunction) => {
    try {
        const cart = await getCartService(req, res)

        if (!cart) {
            throw new HttpError(404, "cart not found");
        }
        
        res.status(200).json();
    } catch (error) {
        next(error);
    }
}

