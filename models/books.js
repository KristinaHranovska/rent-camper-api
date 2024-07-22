import { model, Schema } from 'mongoose';
import Joi from 'joi';

/**
 * @swagger
 * components:
 *   schemas:
 *     Booking:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - date
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the person booking the camper.
 *         email:
 *           type: string
 *           format: email
 *           description: The email of the person booking the camper.
 *         date:
 *           type: string
 *           format: date
 *           description: The date of the booking.
 *         comment:
 *           type: string
 *           description: Additional comments for the booking.
 *       example:
 *         name: John Doe
 *         email: john.doe@example.com
 *         date: 2023-08-15
 *         comment: Looking forward to the trip!
 */
const bookingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    date: {
        type: Date,
        required: true
    },
    comment: {
        type: String,
        required: false
    }
});

export const bookingValidationSchema = Joi.object({
    name: Joi.string().min(1).required(),
    email: Joi.string().email().required(),
    date: Joi.date().iso().required(),
    comment: Joi.string().optional()
});

const Booking = model('books', bookingSchema);

export default Booking;
