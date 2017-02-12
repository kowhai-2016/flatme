import { actions, Control, Errors, Form } from 'react-redux-form'
import { Modal, Button } from 'react-bootstrap'
import React from 'react'



const NewNoteForm = () => {
  function onSubmit (values) {
    const { email, password } = values
    this.props.login(email, password)
      // .then(action => {
      //   if (action.type === 'LOGIN_SUCCESS') {
      //     this.close()
      //   } else {
      //     this.props.dispatch(actions.setErrors('forms.loginCredentials', 'The email address or password that you\'ve entered is incorrect'))
      //   }
      // })
  }
  return (
    <Form model='forms.newNote' onSubmit={onSubmit}>
    <Modal.Header closeButton>
      <Modal.Title>New note:</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className='newNoteForm'>
        <Control.text className='newNoteField' model='.content' />
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
