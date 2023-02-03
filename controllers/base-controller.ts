import { Request, Response } from "express";

export class BaseController {
    public async index(req: Request, res: Response) {
        return res.status(200).json("Hello. CincauJS!")
    }
}