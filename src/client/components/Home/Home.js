import React from 'react'

import Landing from './Landing'
import Dashboard from './Dashboard'

const Home = () => {
  const login = false
  return (
    <div>
      {login ? Dashboard : Landing}
    </div>
  )
}

export default Home
