const Product = require('../models/product');

const getProducts = async  (req, res, next)=>{
    const products = await Product.find();
    res.status(200)
    res.send(products)
}

module.exports = { getProducts}