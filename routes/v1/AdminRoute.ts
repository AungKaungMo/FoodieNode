import express, { Request, Response, NextFunction } from "express";
import { AdminController } from "../../controllers/v1";

const router = express.Router();

router.get("/", AdminController.GetAllSeller);
router.post("/", AdminController.CreateSeller);

export { router as AdminRoute };
