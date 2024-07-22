import { Camper } from "../models/camper.js";

const rentCamper = async (req, res, next) => {
    try {
        const { page = 1, limit = 4 } = req.query;
        const skip = (page - 1) * limit;
        const result = await Camper.find().skip(skip).limit(parseInt(limit));
        res.json(result);
    } catch (error) {
        next(error);
    }
};

export default rentCamper;
