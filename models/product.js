var mongoose = require('mongoose');

const categories = ["Fruits", "Vegetables", "Grains", "Legumes", "Roots"]
const varieties = ["Export", "Local retail", "Processing"]

var ProductSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        origin: {
            type: String,
            required : true
        },
        pricePerKilo: {
            type:Number,
            required: true
        },
        categories:{
            type: String,
            enum: categories,
            required: true
        },
        varieties: {
            type: String,
            enum: varieties,
        },
        rating:{
            type: Number,
            min: 1,
            max:5
        }

});

const Product = mongoose.model('Product',ProductSchema)
module.exports = Product