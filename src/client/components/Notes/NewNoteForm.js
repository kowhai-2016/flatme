import { Control, Errors, Form } from 'react-redux-form'
import { Modal, Button } from 'react-bootstrap'
import React from 'react'

const NewNoteForm = props => {
  return (
    <Form model='forms.newNote' onSubmit={props.onSubmit}>
      <Modal.Header closeButton>
        <Modal.Title>New note:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='newNoteForm'>
          <Control.textarea className='newNoteField' model='.content' />
        </div>
        <Errors model='forms.newNote' />
      </Modal.Body>
      <Modal.Footer>
        <Button type='submit'>Create</Button>
      </Modal.Footer>
    </Form>
  )
}

export default NewNoteForm
