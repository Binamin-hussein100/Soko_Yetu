let mongoose = require('mongoose');
let category = require('./category');

const varieties = ["Export", "Local retail", "Processing"]

let ProductSchema = new mongoose.Schema({
        name:{
            type: "string",
            required: true,
        },
        category:{
            type: Schema.Types.ObjectId,
            ref: category,
            unique: true
        },
        from:{
            type: "string",            
        },
        rating:{
            type: "integer",
            required: true
        },
        availability:{
            type: Boolean,
            default: false
        },
        

});

const Product = mongoose.model('Products',ProductSchema,"products")

module.exports = Product