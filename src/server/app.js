const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')

const routes = require('./routes')

const app = express()

app.use(bodyParser.json())
app.use(express.static('dist'))
app.use(express.static(path.join(__dirname, 'static')))

app.use('/', routes)

module.exports = app
