import { Camper } from "../models/camper.js";

const rentCamper = async (req, res, next) => {
    try {
        const { page = 1, limit = 4, location, form, details } = req.query;
        const skip = (page - 1) * limit;


        const filter = {};
        if (location) {
            filter.location = new RegExp(location, 'i');
        }
        if (form) {
            filter.form = form;
        }
        if (details) {
            filter.details = {};
            Object.keys(details).forEach(key => {
                if (details[key]) {
                    filter.details[key] = true;
                }
            });
        }

        const total = await Camper.countDocuments(filter);
        const totalPages = Math.ceil(total / limit);

        const result = await Camper.find(filter).skip(skip).limit(parseInt(limit));
        res.json({ data: result, totalPages });
    } catch (error) {
        next(error);
    }
};

export default rentCamper;
