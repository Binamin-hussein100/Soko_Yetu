let mongoose = require('mongoose');
let cart = require('./cart');

let role = ["admin", "user"]

let UserSchema = new mongoose.Schema({
    username: {
        type: 'string',
        required: true
    },
    role: {
        type: 'string',
        enum: role,
        required: true
    },
    email: {
        type: 'string',
        required: true,
        unique: true,
        match: /^\S+@\S+\.\S+$/,
    },
    password: {
        type: 'string',
        required: true
    },

    cart: {
        type: Schema.Type.ObjectId,
        ref: cart,
        unique: true
    }


}); 

UserSchema.pre('save', async function(next){
    try{
        if(!this.cart){
            const Cart = mongoose.model('Cart')
            const cart = new Cart({user: this._id})
            await cart.save()

            this.cart = cart._id
        }
        next()
    }catch(e){
        next(e)
    }
})

UserSchema.pre('save',async function(next){
    try{
        if(!this.profile){
            const Profile = mongoose.model('Profile')
            const profile = new Profile({user: this._id})
            await profile.save()

            this.cart = cart._id
        }
    }catch(e){
        next(e)
    }
})

const User = mongoose.model('User', UserSchema)
module.exports = User;