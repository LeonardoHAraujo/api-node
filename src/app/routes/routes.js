const route = require('express').Router()
const bodyParser = require('body-parser')

route.use(bodyParser.json())

const Product = require('../controllers/Product')
const product = new Product()

route.get('/', product.read)
route.get('/:id', product.show)
route.post('/', product.create)
route.put('/:id', product.update)
route.delete('/:id', product.delete)

module.exports = route;