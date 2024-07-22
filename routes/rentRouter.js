import express from "express";
import rentCamper from "../controllers/orders/rentCamper.js";

const rentRouter = express.Router();

orderRouter.get('/', rentCamper);

export default rentRouter;