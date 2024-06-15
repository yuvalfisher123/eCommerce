import { HttpError } from "../httpError";
import { addProductService, deleteProductService, getProductSevice, getProductsSevice, updateProductService } from "../services/productService"
import { NextFunction, Request, Response } from "express";

export const getProductsController = async (req : Request, res : Response, next: NextFunction) => {
    try {
        const products = await getProductsSevice(req, res);

        if (!products) {
            throw new HttpError(404, "products not found");
        }

        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
}

export const getProductController = async (req : Request, res : Response, next: NextFunction) => {
    try {
        const product = await getProductSevice(req, res);

        if (!product) {
            throw new HttpError(404, "product not found");
        }

        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
}

export const addProductController = async (req : Request, res : Response, next: NextFunction) => {
    try {
        await addProductService(req, res)
        res.status(201).send('product added');
    } catch (error) {
        next(error);
    }
}

export const updateProductController = async (req : Request, res : Response, next: NextFunction) => {
    try {
        await updateProductService(req, res)
        res.status(200).send('product data updated');
    } catch (error) {
        next(error);
    }
}

export const deleteProductController = async (req : Request, res : Response, next: NextFunction) => {
    try {
        await deleteProductService(req, res)
        res.status(200).send('product deleted');
    } catch (error) {
        next(error);
    }
}