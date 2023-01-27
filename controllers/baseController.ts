import { Request, Response } from "express";

export class BaseController {
    

    public async index(req: Request, res: Response) {
        res.json("get")
    }

    public async about(req: Request, res: Response) {
        res.json("add");
    }
}