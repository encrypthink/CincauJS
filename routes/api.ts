import { Router } from "express";
import { BaseController } from "../controllers/baseController";

export const route = Router();
export const baseController = new BaseController();

route.get("/", baseController.index);

route.get("/about", baseController.about);