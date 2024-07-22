import express from "express";
import postBooking from "../controllers/postBooking.js";
import validateBody from "../helper/validateBody.js";
import { bookingValidationSchema } from "../models/books.js";

const booksRouter = express.Router();

booksRouter.post('/', validateBody(bookingValidationSchema), postBooking);

export default booksRouter;