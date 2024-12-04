import v1Route from "./v1";

import express from "express";

const router = express.Router();

router.use("/v1", v1Route);

export default router;
