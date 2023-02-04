const express = require('express');
const mongoose = require('mongoose');
// express server
const app = express();
const port = 3000

app.use(express.json())

// database connection
mongoose.connect('mongodb://localhost/SokoSafi')
    .then(()=>app.listen(3000))
    .then((err)=>console.log(err))
app.get("/", (req, res)=>{
    res.send("Trial")
})


// app.listen(port, ()=>console.log(`listening on port ${port}`))