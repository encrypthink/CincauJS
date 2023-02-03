import { Router } from "express";
import { BaseController } from "../controllers/base-controller";

export const route = Router();
export const baseController = new BaseController();

route.get("/", baseController.index);