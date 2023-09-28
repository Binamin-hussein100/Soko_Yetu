let mongoose = require('mongoose')
let user = require('./user')

let ProfileSchema  = new mongoose.Schema({
    fullName: {
        type: 'string',
        required: true,        
    },
    address:{
        type: 'string',
    },
    phoneNumber:{
        type: 'string',
    },
    avatar:{
        type: 'string',
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: user,
        unique: true
    }
})

const Profile = mongoose.model('Profiles', ProfileSchema,'profiles')

module.exports = Profile