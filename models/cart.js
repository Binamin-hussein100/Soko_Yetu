let mongoose = require('mongoose');
let user = require('./user');
let product = require('./product');

const Schema = mongoose.Schema;


let CartSchema = new Schema({
    user_id:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        unique:true
    },
    product_id:{
        type:Schema.Types.ObjectId,
        ref: 'Product'
    }
})

const Cart = mongoose.model('Cart',CartSchema)
module.exports = Cart