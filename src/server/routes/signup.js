const db = require('../database')

module.exports = (req, res) => {
  db.addUser(req.body)
    .catch(error => {
      res.status(500).send(error.message)
    })
}
