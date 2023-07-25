let mongoose = require('mongoose');
let user = require('./user');
let product = require('./product');

let QuoteSchema = new mongoose.Schema({
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

const Quote = mongoose.model('Quote', QuoteSchema);
module.exports = Quote;