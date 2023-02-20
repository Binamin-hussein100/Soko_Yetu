var mongoose = require('mongoose');
const User  = require('./user')

var cartSchema = new mongoose.Schema({
    user : {
        type: Schema.Types.ObjectId, ref: 'User', required: true
    }
});

const Cart = mongoose.model('Cart',cartSchema)

module.exports = Cart