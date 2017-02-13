import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const JoinRequest = props => {
  const request = props.request
  const user = request.user
  const { id: userId, firstName, lastName } = user
  const accept = () => props.acceptJoinRequest(request.id)
  const ignore = () => props.ignoreJoinRequest(request.id)
  return (
    <li>
      <Link to={`/user/${userId}`}>
        {firstName} {lastName}
      </Link>
      <div>
        <button
          className='btn btn-success glyphicon glyphicon-ok'
          onClick={accept}
          >
          Accept
        </button>
        <button
          className='btn btn-danger glyphicon glyphicon-remove'
          onClick={ignore}
          >
          Ignore
        </button>
      </div>
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
