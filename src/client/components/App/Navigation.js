import React from 'react'
import { Navbar, Nav, NavItem, Modal, Button } from 'react-bootstrap'
import { Form, Control } from 'react-redux-form'

export default React.createClass({
  getInitialState () {
    return {show: false}
  },

  open () {
    this.setState({show: true})
  },

  close () {
    this.setState({show: false})
    this.props.login()
  },

  handleLogout () {
    this.props.logout()
  },

  render () {
    const user = this.props.account.user
    const loggedInButtons = (
      <Nav pullRight bsStyle='pills'>
        <NavItem eventKey={1} href='/user/{user.id}'>{user ? user.firstName : null}</NavItem>
        <NavItem eventKey={2} onClick={this.handleLogout}>Log out</NavItem>
      </Nav>
    )
    const loggedOutButtons = (
      <Nav pullRight bsStyle='pills'>
        <NavItem eventKey={1} href='/join'>Sign up</NavItem>
        <NavItem eventKey={2} onClick={this.open}>Log in</NavItem>
      </Nav>
    )
    const loginModal = (
      <Modal show={this.state.show} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form model='forms.loginCredentials'>
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>Send</Button>
        </Modal.Footer>
      </Modal>
    )
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='/'>GoFlat</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            {user ? loggedInButtons : loggedOutButtons}
          </Navbar.Collapse>
        </Navbar>
        {loginModal}
      </div>
    )
  }
})
