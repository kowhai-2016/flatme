import React from 'react'
import { Modal, Button, Grid, Row, Col } from 'react-bootstrap'
import Draggable, {DraggableCore} from 'react-draggable'

import NewNoteForm from './NewNoteForm'

export default React.createClass({
  // gets note data from api
  componentDidMount () {
    this.props.fetchNotes(this.props.flat)
  },
  // functions for opening and closing newNoteForm modal
  getInitialState () {
    return {show: false}
  },
  open () {
    this.setState({show: true})
  },
  close () {
    this.setState({show: false})
  },
  // functions for adding and deleting notes
  delete (id) {
    this.props.deleteNote(id)
  },
  handleSubmit () {
    const note = {
      flat_id: this.props.flat,
      content: this.props.newNote,
      author: this.props.user.firstName
    }
    this.props.addNote(note)
    this.close()
  },
  render () {
    const {notes} = this.props
    return (
      <div>
        <h1>Notes</h1>
        <Button onClick={this.open}>Add new</Button>
        <Modal show={this.state.show} onHide={this.close}>
          <NewNoteForm onSubmit={this.handleSubmit} />
        </Modal>
        <Grid className='notesAll'>
        <Col md={5}>
        {Object.keys(notes).map(noteId => {
          return (
            <Draggable bounds="body">
              <div key={noteId} className='noteFull'>
                <div className='noteContent'>{notes[noteId].content}</div>
                <div className='noteAuthor'>{notes[noteId].author}</div>
                <Button className='noteDelete' onClick={() => this.delete(noteId)}>&#10060;</Button>
              </div>
            </Draggable>
          )
        })}
        </Col>
        </Grid>
      </div>
    )
  }
})
