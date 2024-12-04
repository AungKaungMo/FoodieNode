import express from "express";
import { AdminRoute } from "./AdminRoute";

const router = express.Router();

router.use("/admin", AdminRoute);

export default router;
