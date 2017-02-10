import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const flatmates = props => {
  if (!props.flat) {
    return []
  }
  return props.flat.flatmates.map((flatmate, index) => {
    return (
      <li key={index}>
        <Link to={`/user/${flatmate.id}`}>
          {flatmate.firstName}
        </Link>
      </li>
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
