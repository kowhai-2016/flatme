import React from 'react'

import DashboardHeader from './DashboardHeader'
import CreateANewFlat from './CreateANewFlatButton'
import JoinAFlat from './JoinAFlatButton'
import FlatCard from './FlatCard'

const Dashboard = () => {
  return (
    <div className='container'>
      <CreateANewFlat />
      <JoinAFlat />
      <DashboardHeader />
      <FlatCard />
    </div>
  )
}

export default Dashboard
