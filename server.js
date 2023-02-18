const express = require('express');
// const productRoutes = require('./routes/api/products')

const dbConnection = require('./config/dbConfig');


// express server


const app = express();
const port = 3000
dbConnection()
app.use(express.json())

app.listen(3000, ()=>{
    console.log('listening on port');
})
app.use('/products', require("./routes/products"))

