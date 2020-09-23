const express = require('express')
const app = express()

const route = require('../app/routes/routes')
app.use('/', route)

module.exports = app