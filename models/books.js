import { model, Schema } from 'mongoose';
import Joi from 'joi';

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
        default: "",
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
