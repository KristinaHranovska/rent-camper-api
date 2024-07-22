import express from "express";
import rentCamper from "../controllers/rentCamper.js";

const rentRouter = express.Router();

rentRouter.get('/', rentCamper);

export default rentRouter;