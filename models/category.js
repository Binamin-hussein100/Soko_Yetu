let mongoose = require('mongoose');


let CategorySchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    }
});

const Category = mongoose.model('Category',CategorySchema)
module.exports = Category