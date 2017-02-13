import React from 'react'
import { Link } from 'react-router'

import { Navbar } from 'react-bootstrap'

const Categories = props => {
  const id = props.id
  return (
    <Navbar className='categories-bar' style={{margin: '10%'}}>
      <div>
        <Link
          activeClassName={'active'}
          onlyActiveOnIndex
          to={`/flat/${id}`}
          >
          <img src='/images/phone.svg' width='25px' />
          <span>Contacts</span>
        </Link>
      </div>
      <div>

        <Link activeClassName={'active'}
          to={`/flat/${id}/documents`}>
          <img src='/images/interface.svg' width='25px' />
          <span>Documents</span>
        </Link>
      </div>
      <div>
        <Link activeClassName={'active'}
          to={`/flat/${id}/notes`}>
          <img src='/images/interface-1.svg' width='25px' />
          <span>Notes</span>
        </Link>
      </div>
      <div>
        <Link activeClassName={'active'}
          to={`/flat/${id}/calendar`}>
          <img src='/images/alarm.svg' width='25px' />
          <span>Calendar</span>
        </Link>
      </div>
    </Navbar>
  )
}

export default Categories
