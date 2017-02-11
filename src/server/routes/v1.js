const express = require('express')

const db = require('../database')

const router = express.Router()

const authenticate = require('./authenticate')
const flats = require('./flats')

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
      res.json(flat)
    })
    .catch(error => {
      res.status(500).send(error.message)
    })
})

router.post('/login', authenticate)

router.get('*', (req, res) => res.status(404).send('API endpoint not found.'))

module.exports = router
