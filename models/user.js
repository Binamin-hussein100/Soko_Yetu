let mongoose = require('mongoose');

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
        type: 'password',
        required: true
    }

}); 

const User = mongoose.model('User', UserSchema)
module.exports = User;