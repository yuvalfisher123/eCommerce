import * as jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import { JwtPayload } from 'jsonwebtoken';

dotenv.config();

interface IJwtPayload extends JwtPayload {
    id: Number;
  }

export default (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers.authorization;

    if (!token) {
        res.send('not authorized').status(401);
        return;
    }

    token = token.replace("Bearer ", '');

    try {
        const decoded = jwt.verify(token, String(process.env.SECRET)) as IJwtPayload;        

        res.locals.userId = decoded.id.toString();
        
    } catch (error) {
        res.send("not authorized").status(401);
    }

    next();
}