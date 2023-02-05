const express = require('express');
const Product = require('../../models/product');
const app = express();

app.use(express.json())

// Create a product
app.post('/products',(req,res)=>{
    const newProduct = new Product(req.body);
    newProduct.save((error, product)=>{
        if(error){
            console.log("not yet")
            return res.status(400).send(error)
        }
        res.send(product)
    })
})

// Get all products
app.get('/products',(req, res)=>{
    Product.find({}, (error, product)=>{
        if(error){
            return res.status(400).send(error)
        }
        return res.send(product)
    })
})