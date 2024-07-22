import express from "express";
import rentCamper from "../controllers/rentCamper.js";

const rentRouter = express.Router();

/**
 * @swagger
 * /rent:
 *   get:
 *     summary: Retrieve a list of campers with pagination
 *     description: Retrieve a list of campers with pagination support.
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 4
 *         description: Number of items per page
 *     responses:
 *       200:
 *         description: A list of campers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Camper'
 */
rentRouter.get('/', rentCamper);

export default rentRouter;
