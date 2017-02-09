const jwt = require('jsonwebtoken')

const db = require('../database')

module.exports = (req, res) => {
  const SECRET = process.env.JSON_WEB_TOKEN_SECRET
  const { email = '', password = '' } = req.body
  db.getUserByEmail(email)
    .then(user => {
      if (user) {
        db.comparePassword(password, user.password)
        .then(matches => {
          if (matches) {
            const token = jwt.sign({
              id: user.id
            }, SECRET, {
              expiresIn: '1d'
            })
            return res.json({
              user: Object.assign({}, user, {token})
            })
          }
        })
      }
    })
}
