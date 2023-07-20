var mongoose = require('mongoose');

const categories = ["Fruits", "Vegetables", "Grains", "Legumes", "Roots"]
const varieties = ["Export", "Local retail", "Processing"]

var ProductSchema = new mongoose.Schema({
        

});

const Product = mongoose.model('Products',ProductSchema,"products")
console.log(Product)
module.exports = Product