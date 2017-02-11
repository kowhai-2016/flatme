const fs = require('fs')
const express = require('express')
const multiparty = require('multiparty')
const path = require('path')

const router = express.Router()

router.post('/:id/documents', (request, response) => {
  const form = new multiparty.Form()
  form.parse(request, (error, fields, files) => {
    if (error) {
      response.send('Error parsing form: ' + error.message)
    }
    const file = files.image[0]
    if (!file) {
      return response.send('No file found to upload.')
    }
    const newPath = path.join(__dirname, 'images', file.originalFilename)
    const publicPath = `/v1/flats/${request.params.id}/documents/${file.originalFilename}`
    fs.readFile(file.path, (error, data) => {
      if (error) {
        response.send('File upload failed: ' + error.message)
      }
      fs.writeFile(newPath, data, error => {
        if (error) {
          response.send('File upload failed: ' + error.message)
        }
        response.send('File successfully uploaded to: ' + publicPath)
      })
    })
  })
})

router.use('/:id/documents', express.static(path.join(__dirname, 'images')))

module.exports = router
