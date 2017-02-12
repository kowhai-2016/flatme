const express = require('express')
const fs = require('fs')
const path = require('path')

const db = require('../database')
const authenticate = require('./authenticate')
const flats = require('./flats')
const jwtMiddleware = require('./jwt-middleware')

const router = express.Router()

router.post('/login', authenticate)

router.post('/users', (req, res) => {
  db.addUser(req.body)
    .then(user => {
      res.json(user)
    })
    .catch(error => {
      res.status(500).send(error.message)
    })
})
// Routes under this middleware require a valid token to access
router.use(jwtMiddleware)

router.get('/users/:id/flats', (req, res) => {
  const id = req.params.id
  db.getFlatsByUserId(id)
  .then(flats => {
    return res.json({
      flats
    })
  })
  .catch(error => {
    res.status(500).send(error.message)
  })
})

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

router.get('/notes/:id', (req, res) => {
  const id = req.params.id
  db.getNotes(id)
    .then(notes => {
      console.log('server', res.json(notes))
      res.json(notes)
    })
    .catch(error => {
      res.status(500).send(error.message)
    })
})

router.post('/notes/:id', (req, res) => {
  const id = req.params.id
  db.deleteNote(id)
    .then(index => {
      res.json(index)
    })
    .catch(error => {
      res.status(500).send(error.message)
    })
})

router.put('/notes/:id', (req, res) => {
  db.updateNote(req.body)
    .then(content => {
      res.json(content)
    })
    .catch(error => {
      res.status(500).send(error.message)
    })
})

router.post('/login', authenticate)

router.post('/flats/join', (req, res) => {
  const { name } = req.body
  const userId = req.decoded.id
  db.getFlatByName(name)
    .then(flat => {
      if (flat) {
        return db.addTenancy(userId, flat.id)
          .then(() => {
            return res.json({flatId: flat.id})
          })
      } else {
        return res.status(400).send('Flat not found: ' + name)
      }
    })
    .catch(error => {
      console.log(error)
      return res.status(500).send(error.message)
    })
})

router.get('*', (req, res) => res.status(404).send('API endpoint not found.'))

module.exports = router
