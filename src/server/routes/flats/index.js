const express = require('express')

const documents = require('./documents')

const router = express.Router()

router.use(documents)

module.exports = router
