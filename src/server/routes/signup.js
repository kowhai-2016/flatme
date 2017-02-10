const db = require('../database')

module.exports = (request, response) => {
  db.addUser(request.body)
    .catch(error => {
      response.status(500).send(error.message)
    })
}
