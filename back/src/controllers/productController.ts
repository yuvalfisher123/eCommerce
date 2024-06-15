import { addProductService, deleteProductService, getProductSevice, getProductsSevice, updateProductService } from "../services/productService"
import { Request, Response } from "express";

export const getProductsController = async (req : Request, res : Response) => {
    try {
        res.status(200).json(await getProductsSevice(req, res));
    } catch (error) {
        res.status(500).send('server error');
    }
}

export const getProductController = async (req : Request, res : Response) => {
    try {
        res.status(200).json(await getProductSevice(req, res));
    } catch (error) {
        res.status(500).send('server error');
    }
}

export const addProductController = async (req : Request, res : Response) => {
    try {
        await addProductService(req, res)
        res.status(201).send('product added');
    } catch (error) {
        res.status(500).send('server error');
    }
}

export const updateProductController = async (req : Request, res : Response) => {
    try {
        await updateProductService(req, res)
        res.status(200).send('product data updated');
    } catch (error) {
        res.status(500).send('server error');
    }
}

export const deleteProductController = async (req : Request, res : Response) => {
    try {
        await deleteProductService(req, res)
        res.status(200).send('product deleted');
    } catch (error) {
        res.status(500).send('server error');
    }
}