import Booking from "../models/books.js";

const postBooking = async (req, res, next) => {
    try {
        const result = await Booking.create(req.body);
        res.status(201).json(result);
    } catch (error) {
        next(error)
    }
}

export default postBooking;