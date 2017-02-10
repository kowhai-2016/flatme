const jwt = require('jsonwebtoken')

module.exports = (request, response, next) => {
  const SECRET = process.env.JSON_WEB_TOKEN_SECRET

  // check header or url parameters or post parameters for token
  const token = request.body.token || request.query.token || request.headers.token

  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, SECRET, (err, decoded) => {
      if (err) {
        return response.status(403).json({
          success: false,
          message: 'Failed to authenticate token.'
        })
      } else {
        // if everything is good, save to request for use in other routes
        request.decoded = decoded
        next()
      }
    })
  } else {
    // if there is no token return an error
    return response.status(403).send({
      success: false,
      message: 'No token provided.'
    })
  }
}
