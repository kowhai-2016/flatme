import React, { PropTypes } from 'react'

import CreateFlatModal from './CreateFlatModal'
import DashboardHeader from './DashboardHeader'
import CreateANewFlat from './CreateANewFlatButton'
import JoinAFlat from './JoinAFlatButton'
import JoinFlatModal from './JoinFlatModal'
import FlatCard from './FlatCard'
import './style.css'

const Dashboard = React.createClass({

  componentDidMount () {
    this.props.fetchUserFlats(this.props.user.id)
  },

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
      show: false,
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
  handleSubmit (values) {
    this.props.createNewFlat(values, this.props.user)
  },
  render () {
    const flats = this.props.user.flats ? this.props.user.flats : []
    return (
      <div className='Dashboard container-fluid'>
        <div className='col-md-12 bg-flat'>
          <div className='container containerFlat'>
            <div className='row buttons-container'>
              <div className='col-md-3 create-flat'>
                <CreateANewFlat open={this.openCreate} />
              </div>
              <div className='col-md-3'>
                <JoinAFlat open={this.openJoin} />
              </div>
            </div>
            <DashboardHeader />
            <FlatCard flats={flats} />
            <CreateFlatModal
              close={this.closeCreate}
              onSubmit={this.handleSubmit}
              show={this.state.showCreate}
              />
            <JoinFlatModal
              close={this.closeJoin}
              onSubmit={this.props.joinFlat}
              show={this.state.showJoin}
              />
          </div>
        </div>
      </div>
    )
  }
})

Dashboard.propTypes = {
  createNewFlat: PropTypes.func.isRequired,
  fetchUserFlats: PropTypes.func.isRequired,
  user: PropTypes.shape({
    flats: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
  joinFlat: PropTypes.func.isRequired
}

export default Dashboard
