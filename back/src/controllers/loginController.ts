import { loginService } from "../services/loginService";
import { NextFunction, Request, Response } from "express";

export const loginController = async (req : Request, res : Response, next: NextFunction) => {
    try {
        res.status(200).json(await loginService(req, res));
    } catch (error) {
        next(error)
    }
}