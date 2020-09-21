const route = require('express').Router()

const Product = require('../controllers/Product')
const product = new Product()

route.get('/', product.read)

module.exports = route;