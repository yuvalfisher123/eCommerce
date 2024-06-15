import { loginService } from "../services/loginService";
import { Request, Response } from "express";

export const loginController = async (req : Request, res : Response) => {
    try {
        res.status(200).json(await loginService(req, res));
    } catch (error: any) {
        res.status(404).send(error.message);
    }
}