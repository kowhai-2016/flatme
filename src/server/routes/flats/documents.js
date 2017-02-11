const fs = require('fs')
const express = require('express')
const multiparty = require('multiparty')
const path = require('path')

const router = express.Router()

router.get('/:id/documents', (request, response) => {
  fs.readdir(path.join(__dirname, 'images', request.params.id), (error, files) => {
    if (error) {
      response.send('Error reading documents: ' + error.message)
    } else {
      response.json({files})
    }
  })
})

router.post('/:id/documents', (request, response) => {
  const { id } = request.params
  const form = new multiparty.Form()
  form.parse(request, (error, fields, files) => {
    if (error) {
      response.send('Error parsing form: ' + error.message)
    }
    const file = files.image[0]
    if (!file) {
      return response.send('No file found to upload.')
    }
    fs.mkdir(path.join(__dirname, 'images', id), () => {
      fs.readFile(file.path, (error, data) => {
        if (error) {
          response.send('File upload failed: ' + error.message)
        }
        fs.writeFile(path.join(__dirname, 'images', id, file.originalFilename), data, error => {
          if (error) {
            response.send('File upload failed: ' + error.message)
          }
          response.redirect(`/flat/${id}/documents`)
        })
      })
    })
  })
})

router.get('/:id/documents/:name', (request, response) => {
  const { id, name } = request.params
  response.sendFile(path.join(__dirname, 'images', id, name))
})

module.exports = router
