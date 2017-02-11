import React from 'react'

import { Modal, Button } from 'react-bootstrap'
import { actions, Control, Errors, Form } from 'react-redux-form'
import { LinkContainer } from 'react-router-bootstrap'


import DashboardHeader from './DashboardHeader'
import CreateANewFlat from './CreateANewFlatButton'
import JoinAFlat from './JoinAFlatButton'
import FlatCard from './FlatCard'

const Dashboard = React.createClass ({

  getInitialState () {
    return {show: false}
  },

  open () {
    this.setState({show: true})
  },

  close () {
    this.setState({show: false})
  },

  const createFlatModal = (
    <Modal show={this.state.show} onHide={this.close}>
      <Form model='newFlat' onSubmit={this.onSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='loginForm'>
            <div>
              <label>Email:</label>
              <Control.text className='loginEmailField' model='.email' />
            </div>
            <div>
              <label>Password:</label>
              <Control model='.password' type='password' />
            </div>
          </div>
          <Errors model='forms.loginCredentials' />
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit'>Send</Button>
        </Modal.Footer>
      </Form>
    </Modal>
)

  return (
    <div className='container'>
      <CreateANewFlat />
      <JoinAFlat />
      <DashboardHeader />
      <FlatCard />
      {createFlatModal}
    </div>
  )
}
)

export default Dashboard


const Navigation = React.createClass({

  handleLogout () {
    this.props.logout()
    browserHistory.push('/')
  },

  onSubmit (values) {
    const { email, password } = values
    this.props.login(email, password)
      .then(action => {
        if (action.type === 'LOGIN_SUCCESS') {
          this.close()
        } else {
          this.props.dispatch(actions.setErrors('forms.loginCredentials', 'The email address or password that you\'ve entered is incorrect'))
        }
      })
  },

  toUserPage (user) {
    if (user) {
      browserHistory.push(`/user/${user.id}`)
    }
  },

  render () {
    const user = this.props.account.user
    const loggedInButtons = (
      <Nav pullRight bsStyle='pills'>
        <NavItem eventKey={1} onClick={() => this.toUserPage(user)}>{user ? user.firstName : null}</NavItem>
        <NavItem eventKey={2} onClick={this.handleLogout}>Log out</NavItem>
      </Nav>
    )
    const loggedOutButtons = (
      <Nav pullRight bsStyle='pills'>
        <LinkContainer to='/join'><NavItem eventKey={1}>Sign Up</NavItem></LinkContainer>
        <NavItem eventKey={2} onClick={this.open}>Log in</NavItem>
      </Nav>
    )

    )
