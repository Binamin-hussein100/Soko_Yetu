// database connection
const mongoose = require('mongoose');

// database connection

const dbConnection = async ()=>{
    try{
        const db = await mongoose.connect('mongodb://localhost/SokoSafi')
        console.log("Connected to MongoDB")

    }catch(e){
        console.log(e);
    }
}


module.exports = dbConnection;