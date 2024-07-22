import { Camper } from "../models/camper.js";

const rentCamper = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 4;

        const skip = (page - 1) * limit;

        const result = await Camper.find().skip(skip).limit(limit);

        res.json(result);
    } catch (error) {
        next(error);
    }
};

export default rentCamper;
