import { addProductService, deleteProductService, getProductSevice, getProductsSevice, updateProductService } from "../services/productService"
import { Request, Response } from "express";

export const getProductsController = async (req : Request, res : Response) => {
    try {
        res.json(await getProductsSevice(req, res)).status(200);
    } catch (error) {
        res.send('server error').status(500);
    }
}

export const getProductController = async (req : Request, res : Response) => {
    try {
        res.json(await getProductSevice(req, res)).status(200);
    } catch (error) {
        res.send('server error').status(500);
    }
}

export const addProductController = async (req : Request, res : Response) => {
    try {
        await addProductService(req, res)
        res.send('product added').status(201);
    } catch (error) {
        res.send('server error').status(500);
    }
}

export const updateProductController = async (req : Request, res : Response) => {
    try {
        await updateProductService(req, res)
        res.send('product data updated').status(200);
    } catch (error) {
        res.send('server error').status(500);
    }
}

export const deleteProductController = async (req : Request, res : Response) => {
    try {
        await deleteProductService(req, res)
        res.send('product deleted').status(200);
    } catch (error) {
        res.send('server error').status(500);
    }
}