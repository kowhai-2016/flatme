import React, { PropTypes } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { actions, Control, Errors, Form } from 'react-redux-form'
// import { LinkContainer } from 'react-router-bootstrap'

import DashboardHeader from './DashboardHeader'
import CreateANewFlat from './CreateANewFlatButton'
import JoinAFlat from './JoinAFlatButton'
import FlatCard from './FlatCard'

const Dashboard = React.createClass({

  getInitialState () {
    return {show: false}
  },

  open () {
    this.setState({show: true})
  },

  close () {
    this.setState({show: false})
  },

  onSubmit (flat) {
    this.props.createNewFlat(flat)
  },

  render () {
    const createFlatModal = (
      <Modal show={this.state.show} onHide={this.close}>
        <Form model='forms.newFlat' onSubmit={this.onSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Create a new Flat</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>Flat Name: </label>
                <Control model='.flatName' />
              </div>
            </div>
            <Errors model='forms.newFlat' />
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">Virtually create your flat</Button>
          </Modal.Footer>
        </Form>
      </Modal>
  )

    return (
      <div className='container'>
        <CreateANewFlat open={this.open} />
        <JoinAFlat />
        <DashboardHeader />
        <FlatCard />
        {createFlatModal}
      </div>
    )
  }
})

Dashboard.propTypes = {
  createNewFlat: PropTypes.func.isRequired
}

export default Dashboard
