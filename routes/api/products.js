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

// Get a single product
app.get("/products/:id", (req, res)=>{
    Product.findById(req.params.id, (error, product)=>{
        if(error){
            return res.status(400).send(error)
        }
        return res.send(product)
    })
})

// Update product
app.put('/products/:id', (req, res)=>{
    Product.findById(req.params.id,req.body,{new:true}, (error, product)=>{
        if(error){
            return res.status(400).send(error)
        }
        return res.send(product)
    })
})

// Delete product
app.delete('/products/:id', (req, res)=>{
    Product.findById(req.params.id, (error, product)=>{
        if(error){
            return res.status(400).send(error)
        }
        return res.send(product)
    })
})

// Search by name
app.get('/products/search/:name', (req, res)=>{
    Product.find({name: {$regex: req.params.name, $options:'i'}},(error, products)=>{
        if(error){
            return res.status(400).send(error)
        }
        return res.send(products)
    })
})

// search by category
app.get ('/products/search/:categories', (req, res)=>{

    const category = req.params.categories

    Product.find({category},(error, products)=>{
        if(error){
            return res.status(400).send(error)
        }
        return res.send(products)
    })
})
