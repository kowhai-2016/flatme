import React from 'react'
import { Button, Modal } from 'react-bootstrap'

export default React.createClass({
  getInitialState () {
    return {show: false}
  },
  open () {
    this.setState({show: true})
  },
  close () {
    this.setState({show: false})
  },
  render () {
    return (
      <div className='LeaveFlat'>
        <div className='LeaveButton'>
          <Button onClick={this.open}>Leave this flat</Button>
        </div>
        <Modal className='CreateFlatModal' show={this.state.show} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure you want to leave this flat?</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button className='Yes' onClick={this.props.leaveFlat}>Yes, I am sure</Button>
            <Button className='No' onClick={this.close}>Opps! No, don't remove me!</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
})
