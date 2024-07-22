import { Schema, model } from 'mongoose';

const reviewSchema = new Schema({
    reviewer_name: {
        type: String,
        required: true
    },
    reviewer_rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        required: true
    }
});

const detailsSchema = new Schema({
    transmission: String,
    airConditioner: {
        type: Number,
        min: 0
    },
    ac: {
        type: Number,
        min: 0
    },
    bathroom: {
        type: Number,
        min: 0
    },
    kitchen: {
        type: Number,
        min: 0
    },
    beds: {
        type: Number,
        min: 0
    },
    tv: {
        type: Number,
        min: 0
    },
    CD: {
        type: Number,
        min: 0
    },
    radio: {
        type: Number,
        min: 0
    },
    shower: {
        type: Number,
        min: 0
    },
    toilet: {
        type: Number,
        min: 0
    },
    freezer: {
        type: Number,
        min: 0
    },
    hob: {
        type: Number,
        min: 0
    },
    microwave: {
        type: Number,
        min: 0
    },
    gas: String,
    water: String
});

const camperShema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    location: {
        type: String,
        required: true
    },
    adults: {
        type: Number,
        required: true
    },
    children: {
        type: Number,
        required: true
    },
    engine: {
        type: String,
        required: true
    },
    form: {
        type: String,
        required: true
    },
    length: {
        type: String,
        required: true
    },
    width: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    tank: {
        type: String,
        required: true
    },
    consumption: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    details: detailsSchema,
    gallery: [String],
    reviews: [reviewSchema]
})

export const Camper = model('camper', camperShema);