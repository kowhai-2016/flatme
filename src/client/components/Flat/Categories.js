import React from 'react'
import { Link } from 'react-router'

const Categories = props => {
  const id = props.id
  return (
    <div>
      <Link to={`/flat/${id}/contacts`}>Contacts</Link>
      <Link to={`/flat/${id}/documents`}>Documents</Link>
      <Link to={`/flat/${id}/notes`}>Notes</Link>
    </div>
  )
}

export default Categories
