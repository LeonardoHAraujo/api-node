const knex = require('../database/index')
const { request, response } = require('express')

class Product {
    
    read(request, response) {
        knex('products').then(res => {
            return response.json(res)
        })
    }

    create() {

    }

    update() {

    }

    delete() {

    }

}

module.exports = Product