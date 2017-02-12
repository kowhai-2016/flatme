import React, { PropTypes } from 'react'

import JoinRequest from './JoinRequest'

const JoinRequests = props => {
  return (
    <div>
      <h2>Join Requests</h2>
      <ul>
        {props.requests.map((request, index) => {
          return <JoinRequest key={index} request={request} />
        })}
      </ul>
    </div>
  )
}

JoinRequests.propTypes = {
  requests: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default JoinRequests
