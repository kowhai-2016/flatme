const express = require('express')

const flat = require('./flat')

const router = express.Router()

router.use('/:id', flat)

module.exports = router
