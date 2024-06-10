import * as jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import { Request, Response } from "express";

dotenv.config();

const userRepository = new PrismaClient().user;

export const loginService = async (req : Request, res : Response) => {
    const user = await userRepository.findUnique({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })

    if (!user) {
        throw new Error('wrong user details');
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

    return token;
}