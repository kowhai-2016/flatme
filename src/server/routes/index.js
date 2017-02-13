const express = require('express')

const v1 = require('./v1')

const router = express.Router()

router.use('/v1', v1)

router.get('*', (req, res) => {
  return res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>goFlat</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
        <link href="https://fonts.googleapis.com/css?family=Cabin|Cabin+Sketch|Montserrat|Mukta+Vaani" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css?family=Cabin+Sketch" rel="stylesheet">
        <link rel="stylesheet" href="/main.css"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1">
      </head>
      <body>
        <div id="app"></div>
        <script src="/assets/bundle.js"></script>
      </body>
    </html>
  `)
})

module.exports = router
