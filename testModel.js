#! /usr/bin/env node

console.log('This script populates some tests for User and product to my database')

const userArgs = process.argv.slice(2)
const User = require('./models/user')
const Product = require('./models/product')
const Cart = require('./models/cart')
const Profile = require('./models/profile')
const Category = require('./models/category')
const Quote = require('./models/quote')
const wishlist = require('./models/wishlist')

const user = [] 
const product = []

const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

const mongoDB = userArgs[0]

main().catch(err => console.log(err))

async function main() {
    
}