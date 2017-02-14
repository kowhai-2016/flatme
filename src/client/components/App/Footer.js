import React from 'react'
import { Link } from 'react-router'

const Footer = props => {
  return (
    <div>
      <nav className='Footer navbar navbar-inverse navbar-bottom'>
        <div className='container-fluid signature' >
          <div><h6><Link className='link' to='/about'>Kowhai</Link>&emsp;&emsp;&emsp;&emsp;&emsp;2017</h6></div>
          <a href='https://github.com/kowhai-2016/flatme'>
            <img className='git-logo center-block' src='/images/GitHub-Mark-Light-32px.png' />
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Footer
