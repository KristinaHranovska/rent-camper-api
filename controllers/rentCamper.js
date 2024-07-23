import { Camper } from "../models/camper.js";

const rentCamper = async (req, res, next) => {
    try {
        const { page = 1, limit = 4 } = req.query;
        const skip = (page - 1) * limit;

        const total = await Camper.countDocuments();
        const totalPages = Math.ceil(total / limit);

        const result = await Camper.find().skip(skip).limit(parseInt(limit));
        res.json({ data: result, totalPages });
    } catch (error) {
        next(error);
    }
};

export default rentCamper;
