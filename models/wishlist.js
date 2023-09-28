let mongoose = require('mongoose')  
let user = require('./user');
let product = require('./product');


let WishlistSchema = new mongoose.Schema({
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

const Wishlist = mongoose.model('Wishlist', WishlistSchema)
module.exports = Wishlist
