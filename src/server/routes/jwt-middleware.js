const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const SECRET = process.env.JSON_WEB_TOKEN_SECRET

  // check header or url parameters or post parameters for token
  const token = req.body.token || req.query.token || req.headers.token

  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({
          success: false,
          message: 'Failed to authenticate token.'
        })
      } else {
        // if everything is good, save to req for use in other routes
        req.decoded = decoded
        next()
      }
    })
  } else {
    // if there is no token return an error
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    })
  }
}
