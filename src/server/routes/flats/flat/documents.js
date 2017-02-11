const express = require('express')

const router = express.Router()

router.post('/', (request, response) => {
  response.send('Upload successful')
})

module.exports = router
