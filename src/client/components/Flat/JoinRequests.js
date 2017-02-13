import React, { PropTypes } from 'react'

import JoinRequest from './JoinRequest'

const JoinRequests = props => {
  return (
    <div>
      <h2>Join Requests</h2>
      <ul>
        {props.requests.map((request, index) => {
          return (
            <JoinRequest
              acceptJoinRequest={props.acceptJoinRequest}
              key={index}
              request={request}
              />
          )
        })}
      </ul>
    </div>
  )
}

JoinRequests.propTypes = {
  acceptJoinRequest: PropTypes.func.isRequired,
  requests: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default JoinRequests
