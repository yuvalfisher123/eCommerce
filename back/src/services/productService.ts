import { PrismaClient } from '@prisma/client'
import { Request, Response } from "express";

const productRepository = new PrismaClient().product;

export const getProductsSevice = async (req : Request, res : Response) => {
    const search = (req.query.search || '').toString().replace('+', ' ');
    const fromIdx = +(req.query.from_idx || 0);

    return await productRepository.findMany({
        skip: fromIdx,
        take: 50,
        where: {
            OR: [
                {
                    name: {
                        contains: search,
                        mode: 'insensitive'
                    }
                },
                {
                    description: {
                        contains: search,
                        mode: 'insensitive'
                    }
                },
            ]
        },
        select: {
            id:true,
            name: true,
            price: true,
            description: true,
            image: true
        }
    });
} 

export const getProductSevice = async (req : Request, res : Response) => {
    return await productRepository.findUnique({
        where: {
            id: +req.params.productId
        },
        select: {
            id:true,
            name: true,
            price: true,
            description: true
        }
    });
} 

export const addProductService = async (req : Request, res : Response) => {
    req.body.price = +req.body.price
    
    await productRepository.create({
        data : req.body
    });
}  

export const updateProductService = async (req : Request, res : Response) => {
    await productRepository.update({
        where: {
            id: +req.params.productId,
        }, 
        data: req.body
    });
} 

export const deleteProductService = async (req : Request, res : Response) => {
    await productRepository.delete({
        where: {
            id: +req.params.productId
        },
    });    
} 