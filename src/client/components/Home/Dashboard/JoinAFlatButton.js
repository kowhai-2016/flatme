import React from 'react'

const JoinAFlat = (props) => {
  return (
    <div className='row'>
      <button onClick={props.open} className='btn btn-default glyphicon glyphicon-ok flat-button'> join a flat</button>
    </div>
  )
}

export default JoinAFlat
