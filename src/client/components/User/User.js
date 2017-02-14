import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import './style.css'

const User = React.createClass({
  componentDidMount () {
    this.props.fetchUser()
  },
  render () {
    const user = this.props.user
    const title = user ? `${user.firstName} ${user.lastName}` : null
    const email = user ? `${user.email}` : null
    const phoneNumber = user ? `${user.phoneNumber}` : null
    return (
      <div className='User container'>
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad' >
            <div className='panel panel-info'>
              <div className='panel-heading'>
                <h3 className='panel-title'>{title}</h3>
              </div>
              <div className='panel-body'>
                <div className='row'>
                  <div className='col-md-3 col-lg-3 '>
                    <img alt='User Pic' src='/images/profile.jpg' className='img-circle img-responsive' />
                  </div>
                  <div className=' col-md-9 col-lg-9 '>
                    <table className='table table-user-information'>
                      <tbody>
                        <tr>
                          <td>Email</td>
                          <td><a href={'mailto:' + `email`}>{email}</a></td>
                        </tr>
                        <tr>
                          <td>Phone Number:</td>
                          <td>{phoneNumber}</td>
                        </tr>
                        <tr>
                          <td>Home Address</td>
                          <td>Dev Academy</td>
                        </tr>
                      </tbody>
                    </table>
                    <Link to='/' className='btn btn-primary'>To Dashboard</Link>
                    <Link to={'/edit'} className='btn btn-primary' style={{float: 'right'}}>Edit</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

User.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  })
}

export default User
