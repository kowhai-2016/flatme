import React from 'react'
import { Button } from 'react-bootstrap'

const LeaveFlat = props => {
  return (
    <div>
      <Button onClick={props.onClick}>Leave this flat</Button>
    </div>
  )
}

export default LeaveFlat
