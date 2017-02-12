import { Control, Form } from 'react-bootstrap'

const NewNoteForm = () => {
  return (
    <Form model='forms.newNote' onSubmit={this.onSubmit}>
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
