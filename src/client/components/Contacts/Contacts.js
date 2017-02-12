import React, { PropTypes } from 'react'

const flatmates = props => {
  if (!props.flat) {
    return []
  }

  return props.flat.flatmates.map((flatmate, index) => {
    return (
      <div className='row'>
        <div className='col-sm-8'>
          <div className='card'>
            <div className='card-block'>
              <h3 className='card-title'>{flatmate.firstName} {flatmate.lastName}</h3>
              <li className='list-group-item'><img src='/images/envelope.svg' width='25px' /> {flatmate.email}</li>
              <li className='list-group-item'><img src='/images/call-volume.svg' width='25px' /> {flatmate.phoneNumber}</li>
              <a href='#' className='btn btn-primary'>Send messages</a>
            </div>
          </div>
        </div>
      </div>
    )
  })
}

const Contacts = props => {
  return (
    <div>
      <h1>My Flatmates</h1>
      <ul>
        {flatmates(props)}
      </ul>
    </div>
  )
}

Contacts.propTypes = {
  flat: PropTypes.object
}

export default Contacts
