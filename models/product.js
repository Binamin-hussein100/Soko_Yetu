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
        },
        isFavorite: {
            type: Boolean,
            default: false
        },
        isCarted: {
            type: Boolean,
            default: false
        }

});

const Product = mongoose.model('Products',ProductSchema,"products")
console.log(Product)
module.exports = Product