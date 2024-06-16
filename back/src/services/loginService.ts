import * as jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import { Request, Response } from "express";
import { HttpError } from '../httpError';

dotenv.config();

const userRepository = new PrismaClient().user;

export const loginService = async (req : Request, res : Response) => {
    const user = await userRepository.findUnique({
        where: {
            username: req.body.username,
            password: req.body.password
        },
        select: {
            id: true,
            email: true,
            username: true,
            first_name: true,
            last_name: true,
            addresses: true,
            cart: true
        }
    })

    if (!user) {
        throw new HttpError(401, 'wrong user details');
    }

    const token = jwt.sign(
        {
            id: user.id,
        },
        String(process.env.SECRET),
        {
            expiresIn:'7d'
        }
    )    

    return {"token": token, "user":user};
}