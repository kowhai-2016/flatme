const express = require('express')
const fs = require('fs')
const path = require('path')

const db = require('../database')
const authenticate = require('./authenticate')
const flats = require('./flats')

const router = express.Router()

router.use('/flats', flats)

router.get('/users/:id', (req, res) => {
  const id = req.params.id
  db.getUserById(id)
    .then(user => {
      res.json(user)
    })
    .catch(error => {
      res.status(500).send(error.message)
    })
})

router.post('/users', (req, res) => {
  db.addUser(req.body)
    .then(user => {
      res.json(user)
    })
    .catch(error => {
      res.status(500).send(error.message)
    })
})

router.post('/flats', (req, res) => {
  db.addFlat(req.body)
    .then(flat => {
      res.json(flat)
    })
    .catch(error => {
      res.status(500).send(error.message)
    })
})

router.get('/flats', (req, res) => {
  const id = req.query.id
  db.getFlatById(id)
    .then(flat => {
      return new Promise((resolve, reject) => {
        fs.readdir(path.join(__dirname, 'flats', 'images', id), (error, files) => {
          if (error) {
            resolve(Object.assign({}, flat, {documents: []}))
          } else {
            const documents = files.map(file => {
              return path.join('/v1', 'flats', id, 'documents', file)
            })
            resolve(Object.assign({}, flat, {documents}))
          }
        })
      })
    })
    .then(flat => {
      res.json(flat)
    })
    .catch(error => {
      res.status(500).send(error.message)
    })
})

router.post('/login', authenticate)

router.get('*', (req, res) => res.status(404).send('API endpoint not found.'))

module.exports = router
