import React from 'react'
import { Link } from 'react-router'

import { Navbar } from 'react-bootstrap'

const Categories = props => {
  const id = props.id
  return (
    <Navbar inverse className='categories-bar'>
      <div><img src='/images/phone.svg' width='25px' /><Link to={`/flat/${id}`}> Contacts</Link></div>
      <div><img src='/images/paper.svg' width='25px' /><Link to={`/flat/${id}/documents`}> Documents</Link></div>
      <div><img src='/images/interface-1.svg' width='25px' /><Link to={`/flat/${id}/notes`}> Notes</Link></div>
    </Navbar>
  )
}

export default Categories
