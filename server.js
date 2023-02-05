const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product');
// express server
const app = express();
const port = 3000

app.use(express.json())

// database connection
mongoose.connect('mongodb://localhost/SokoSafi')
    .then(()=>{
        console.log("successfully connected")
        app.listen(3000)})
    .then((err)=>console.log(err))
    
app.get("/", (req, res)=>{
    res.send("trial")
})


// app.listen(port, ()=>console.log(`listening on port ${port}`))