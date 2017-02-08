const express = require('express')

const routes = require('./routes')

const app = express()

app.use(express.static('dist'))
app.use('/', routes)

module.exports = app
