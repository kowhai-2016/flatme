import React, { PropTypes } from 'react'

import Landing from './Landing'
import Dashboard from './Dashboard'

const Home = props => {
  return (
    <div>
      {props.account.user ? <Dashboard /> : <Landing />}
    </div>
  )
}

Home.propTypes = {
  account: PropTypes.shape({
    user: PropTypes.object
  }).isRequired
}

export default Home
