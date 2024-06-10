import * as jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';

dotenv.config();

export default (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers.authorization;

    if (!token) {
        res.send('not authorized').status(401);
        return;
    }

    token = token.replace("Bearer ", '');

    try {
        const decoded = jwt.verify(token, String(process.env.SECRET));
    } catch (error) {
        res.send("not authorized").status(401);
    }

    next();
}