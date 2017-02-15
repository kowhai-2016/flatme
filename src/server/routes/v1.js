const express = require('express')
const aws = require('aws-sdk')

const db = require('../database')
const authenticate = require('./authenticate')
const flats = require('./flats')
const jwtMiddleware = require('./jwt-middleware')

const router = express.Router()

const S3_BUCKET = process.env.S3_BUCKET

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

router.get('/flats/:id/documents/sign-s3', (req, res) => {
  const flatId = req.params.id
  const s3 = new aws.S3()
  const fileName = req.query['file-name']
  const fileType = req.query['file-type']
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  }
  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if (err) {
      res.status(500).send(err.message)
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    }
    db.addDocument(flatId, returnData.url, fileName)
      .then(() => {
        res.write(JSON.stringify(returnData))
        res.end()
      })
      .catch(err => {
        res.status(500).send(err.message)
      })
  })
})

router.post('/flats/:id/documents', (req, res) => {
  res.redirect(`/flat/${req.params.id}/documents`)
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

router.put('/users/:id', (req, res) => {
  const id = req.params.id
  db.updateUser(id, req.body)
    .then(user => {
      res.json(user)
    })
    .catch(error => {
      console.log(error)
      res.status(500).send(error.message)
    })
})

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
  const userId = req.body.user.id
  db.addFlat(req.body.flat)
    .then(flat => {
      db.addTenancy(userId, flat.id) // adds current user to the flat
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

router.post('/flats/join', (req, res) => {
  const { name } = req.body
  const userId = req.decoded.id
  db.getFlatByName(name)
    .then(flat => {
      if (flat) {
        return db.addJoinRequest(userId, flat.id)
          .then(() => {
            return res.json({flatId: flat.id})
          })
      } else {
        return res.status(400).send('Flat not found: ' + name)
      }
    })
    .catch(error => {
      return res.status(500).send(error.message)
    })
})

router.put('/flats/join', (req, res) => {
  const { requestId, status } = req.body
  db.updateJoinRequestStatus(requestId, status)
    .then(() => {
      return res.send('Join request status changed to: ' + status)
    })
    .catch(error => {
      return res.status(500).send(error.message)
    })
})

router.get('/flats/:id/notes', (req, res) => {
  const id = req.params.id
  db.getNotesByFlatId(id)
    .then(notes => {
      return res.json(notes)
    })
    .catch(error => {
      return res.status(500).send(error.message)
    })
})

router.post('/flats/:id/notes', (req, res) => {
  db.addNote(req.body)
    .then(note => {
      return res.json(note[0])
    })
    .catch(error => {
      return res.status(500).send(error.message)
    })
})

router.delete('/notes/:id', (req, res) => {
  const id = req.params.id
  db.deleteNote(id)
    .then(id => {
      return res.json({success: true})
    })
    .catch(error => {
      return res.status(500).send(error.message)
    })
})

router.put('/notes/:id', (req, res) => {
  db.updateNote(req.body)
    .then(content => {
      return res.json(content)
    })
    .catch(error => {
      return res.status(500).send(error.message)
    })
})

router.delete('/flats/:flatId/:userId', (req, res) => {
  const flatId = req.params.flatId
  const userId = req.params.userId
  console.log(req.body)
  db.leaveFlat(userId, flatId)
    .then(id => {
      res.send(200)
    })
    .catch(error => {
      return res.status(500).send(error.message)
    })
})

router.get('*', (req, res) => res.status(404).send('API endpoint not found.'))

module.exports = router
