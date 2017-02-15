import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Button, Row } from 'react-bootstrap'

const JoinRequest = props => {
  const request = props.request
  const user = request.user
  const { id: userId, firstName, lastName } = user
  const accept = () => props.acceptJoinRequest(request.id)
  const ignore = () => props.ignoreJoinRequest(request.id)
  return (
    <li className='Request'>
      <Row>
        <Link to={`/user/${userId}`} className='userLink'>
          {`${firstName} ${lastName}`}
        </Link>
      </Row>
      <Row className='buttons'>
        <Button
          className='btn btn-success glyphicon glyphicon-ok'
          onClick={accept}
          >
          Accept
        </Button>
        <Button
          className='btn btn-danger glyphicon glyphicon-remove'
          onClick={ignore}
          >
          Ignore
        </Button>
      </Row>
    </li>
  )
}

JoinRequest.propTypes = {
  acceptJoinRequest: PropTypes.func.isRequired,
  ignoreJoinRequest: PropTypes.func.isRequired,
  request: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: {
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired
    }.isRequired
  }).isRequired
}

export default JoinRequest
