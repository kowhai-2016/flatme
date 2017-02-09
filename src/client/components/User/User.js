import React, { PropTypes } from 'react'

const User = React.createClass({
  componentDidMount () {
    this.props.fetchUser()
  },
  render () {
    const user = this.props.user
    const title = user ? `${user.firstName} ${user.lastName}` : null
    return (
      <div>
        <h1>{title}</h1>
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
