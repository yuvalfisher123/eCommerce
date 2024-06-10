import { loginService } from "../services/loginService";
import { Request, Response } from "express";

export const loginController = async (req : Request, res : Response) => {
    try {
        res.json(await loginService(req, res)).status(200);
    } catch (error: any) {
        res.send(error.message).status(500);
    }
}