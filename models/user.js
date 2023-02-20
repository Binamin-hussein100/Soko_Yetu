var mongoose  = require('mongoose')

var UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    location:{
        type: {type: String, enum:['Point'], required: true},
        coodinates:{type: [Number], required: true},
    },
    userType:{
        type: String,
        enum:['Admin','Customer'],
        required: true,
    }

})

UserSchema.index({location: '2dsphere'})

const User = mongoose.model('User', UserSchema)

module.exports = User