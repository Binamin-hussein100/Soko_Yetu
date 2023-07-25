let mongoose = require('mongoose');
let user = require('./user');
let product = require('./product');


let CartSchema = new mongoose.Schema({
    user_id:{
        type:Schema.Type.ObjectId,
        ref:user,
        unique:true
    },
    product_id:{
        type:Schema.Type.ObjectId,
        ref:product
    }
})

const Cart = mongoose.model('Cart',CartSchema)
module.exports = Cart