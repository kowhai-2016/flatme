import React from 'react'
import { Link } from 'react-router'

const Footer = props => {
  return (
    <div>
      <nav className='navbar navbar-inverse navbar-fixed-bottom'>
        <div className='container-fluid'>
          <a href='https://github.com/kowhai-2016/flatme'>
            <img className='git-logo' src='/images/GitHub-Mark-light-32px.png' />
          </a>
        </div>
        <Link to='/about'>
          <p>About Us</p>
        </Link>
      </nav>
    </div>
  )
}

export default Footer
