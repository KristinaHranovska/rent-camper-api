import { Camper } from "../models/camper.js";

const rentCamper = async (req, res, next) => {
    try {
        const { page = 1, limit = 4, location, form, ...details } = req.query;
        const skip = (page - 1) * limit;

        let filters = {};

        if (location) {
            filters.location = { $regex: location, $options: "i" };
        }

        if (form) {
            filters.form = form;
        }

        if (Object.keys(details).length > 0) {
            filters.details = {};
            Object.keys(details).forEach(key => {
                filters.details[key] = details[key];
            });
        }
        const total = await Camper.countDocuments(filters);
        const totalPages = Math.ceil(total / limit);

        const result = await Camper.find(filters).skip(skip).limit(parseInt(limit));
        res.json({ data: result, totalPages });
    } catch (error) {
        next(error);
    }
};

export default rentCamper;
