const express = require('express')

const router = express.Router()

router.get('/', (request, response) => {
  return response.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>FlatMe</title>
      </head>
      <body>
        <div id="app"></div>
        <script src="/assets/bundle.js"></script>
      </body>
    </html>
  `)
})

module.exports = router
