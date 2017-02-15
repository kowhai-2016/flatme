import React, { PropTypes } from 'react'

import JoinRequest from './JoinRequest'

const JoinRequests = props => {
  return (
    <div className='JoinRequests'>
      <h2>Join Requests</h2>
      <ul className='ReqList'>
        {props.requests.map((request, index) => {
          return (
            <JoinRequest
              acceptJoinRequest={props.acceptJoinRequest}
              key={index}
              ignoreJoinRequest={props.ignoreJoinRequest}
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
  ignoreJoinRequest: PropTypes.func.isRequired,
  requests: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default JoinRequests
