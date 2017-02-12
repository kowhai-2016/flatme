import React, { PropTypes } from 'react'

import CreateFlatModal from './CreateFlatModal'
import DashboardHeader from './DashboardHeader'
import CreateANewFlat from './CreateANewFlatButton'
import JoinAFlat from './JoinAFlatButton'
import JoinFlatModal from './JoinFlatModal'
import FlatCard from './FlatCard'

const Dashboard = React.createClass({

  closeCreate () {
    this.setState({
      showCreate: false
    })
  },

  closeJoin () {
    this.setState({
      showJoin: false
    })
  },

  getInitialState () {
    return {
      showCreate: false,
      showJoin: false
    }
  },

  openCreate () {
    this.setState({
      showCreate: true
    })
  },

  openJoin () {
    this.setState({
      showJoin: true
    })
  },

  render () {
    return (
      <div className='container'>
        <CreateANewFlat open={this.openCreate} />
        <JoinAFlat open={this.openJoin} />
        <DashboardHeader />
        <FlatCard />
        <CreateFlatModal
          close={this.closeCreate}
          onSubmit={this.props.createNewFlat}
          show={this.state.showCreate}
          />
        <JoinFlatModal
          close={this.closeJoin}
          onSubmit={this.props.joinFlat}
          show={this.state.showJoin}
          />
      </div>
    )
  }
})

Dashboard.propTypes = {
  createNewFlat: PropTypes.func.isRequired,
  joinFlat: PropTypes.func.isRequired
}

export default Dashboard
