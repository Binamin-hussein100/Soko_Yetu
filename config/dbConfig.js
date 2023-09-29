// database connection
const mongoose = require('mongoose');

// database connection

const dbConnection = async ()=>{
    try{
        await mongoose.connect('mongodb://localhost/sokosafi')
        console.log("Connected to MongoDB")

    }catch(e){
        console.log(e);
    }
}


module.exports = dbConnection;