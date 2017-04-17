import React, { PropTypes } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Control, Errors, Form } from 'react-redux-form'

const CreateFlatModal = props => {
  return (
    <Modal className='CreateFlatModal' show={props.show} onHide={props.close}>
      <Form model='forms.newFlat' onSubmit={props.onSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Create a new Flat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className='NameInput'>
              <label>Flat Name:</label>
              <Control model='.flatName' className='modal-input' />
            </div>
          </div>
          <Errors model='forms.newFlat' />
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit'>Virtually create your flat</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

CreateFlatModal.propTypes = {
  close: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
}

export default CreateFlatModal
