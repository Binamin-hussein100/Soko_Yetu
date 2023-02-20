var mongoose = require('mongoose');


// id
// cart_id
// product_id
var CartProductSchema = new mongoose.Schema({
    cart: {type: mongoose.Types.ObjectId, ref: 'Cart'},
    product: {type: mongoose.Types.ObjectId, ref: 'Product'}
})