const jwt = require('jsonwebtoken')

const db = require('../database')

module.exports = (req, res) => {
  const SECRET = process.env.JSON_WEB_TOKEN_SECRET
  const { email = '', password = '' } = req.body
  db.getUserByEmail(email)
    .then(user => {
      if (user) {
        db.comparePassword(password, user.hash)
        .then(matches => {
          if (matches) {
            const token = jwt.sign({
              id: user.id
            }, SECRET, {
              expiresIn: '1d'
            })
            return res.json({
              id: user.id,
              firstName: user.first_name,
              lastName: user.last_name,
              email: user.email,
              phoneNumber: user.phone_number,
              token: token
            })
          } else {
            return res.status(403).send('Password is incorrect')
          }
        })
      }
    })
    .catch(err => {
      return res.status(500).send(err.message)
    })
}
