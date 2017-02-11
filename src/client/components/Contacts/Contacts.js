import React, { PropTypes } from 'react'

const flatmates = props => {
  if (!props.flat) {
    return []
  }
  console.log(props.flat)
  return props.flat.flatmates.map((flatmate, index) => {
    return (
      <li key={index}>
        {flatmate.firstName}
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
