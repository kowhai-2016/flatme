const express = require('express')
const path = require('path')

const v1 = require('./v1')

const router = express.Router()

router.use('/v1', v1)

router.get('*', (req, res) => {
  return res.sendFile(path.join(__dirname, 'index.html'))
})

module.exports = router
