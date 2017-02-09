import React from 'react'
import { Navbar, Nav, NavItem, Modal, Button } from 'react-bootstrap'

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

  render () {
    const user = this.props.account.user
    const loggedInButtons = (
      <Nav pullRight bsStyle='pills'>
        <NavItem eventKey={1} href='/user/{user.id}'>{user.firstName}</NavItem>
        <NavItem eventKey={2} onClick={() => this.props.logout}>Log out</NavItem>
      </Nav>
    )
    const loggedOutButtons = (
      <Nav pullRight bsStyle='pills'>
        <NavItem eventKey={1} href='/join'>Sign up</NavItem>
        <NavItem eventKey={2} onClick={this.open}>Log in</NavItem>
      </Nav>
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

        <Modal show={this.state.show} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Log in</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Enter your log in credentials</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Log in</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
})
