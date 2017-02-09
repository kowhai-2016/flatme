const bodyParser = require('body-parser')
const express = require('express')

const routes = require('./routes')

const app = express()

app.use(bodyParser.json())
app.use(express.static('dist'))

app.use('/', routes)

module.exports = app
