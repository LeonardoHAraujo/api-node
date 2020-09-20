const route = require('express').Router()

route.get('/', function(req, res) {
    res.json({ message: 'hello'})
})

module.exports = route;