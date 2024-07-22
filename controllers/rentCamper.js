import { Camper } from "../../models/camper.js";

const rentCamper = async (req, res, next) => {
    try {
        const result = await Camper.find();
        res.json(result);
    } catch (error) {
        next(error)
    }
};

export default rentCamper;