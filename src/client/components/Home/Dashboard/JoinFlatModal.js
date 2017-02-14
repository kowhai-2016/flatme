import React, { PropTypes } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Control, Errors, Form } from 'react-redux-form'

const JoinFlatModal = props => {
  const onSubmit = values => {
    props.onSubmit(values)
    props.close()
  }
  return (
    <Modal className='JoinFlatModal' show={props.show} onHide={props.close}>
      <Form model='forms.joinFlat' onSubmit={onSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Join a Flat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className='NameInput'>
              <label>Search by Flat Name: </label>
              <Control model='.joinFlatName' className='modal-input' />
            </div>
          </div>
          <Errors model='forms.joinFlat' />
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit'>Join my new flat</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

JoinFlatModal.propTypes = {
  close: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
}

export default JoinFlatModal
