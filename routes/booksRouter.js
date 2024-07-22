import express from "express";
import postBooking from "../controllers/postBooking.js";
import validateBody from "../helper/validateBody.js";
import { bookingValidationSchema } from "../models/books.js";

const booksRouter = express.Router();

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Create a new booking
 *     description: Create a new booking for a camper.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Booking'
 *     responses:
 *       201:
 *         description: Booking created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Booking'
 */
booksRouter.post('/', validateBody(bookingValidationSchema), postBooking);

export default booksRouter;
