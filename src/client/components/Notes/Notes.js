import React from 'react'
import { Modal, Button, Col } from 'react-bootstrap'

import './style.css'

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
      <div className='Notes'>
        <h1 className='NoteTitle'>Notes</h1>
        <Button className='NoteAdd' onClick={this.open}>Add new</Button>
        <Modal show={this.state.show} onHide={this.close}>
          <NewNoteForm onSubmit={this.handleSubmit} />
        </Modal>

        <Col className='NotesContainer box'>
          {Object.keys(notes).map(noteId => {
            return (
              <div className='NoteFull' key={noteId}>
                <button className='NoteDelete' onClick={() => this.delete(noteId)}>
                  <img src='/images/delete-cross.svg' width='15px' />
                </button>
                <div className='NoteContent'>{notes[noteId].content}</div>
                <div className='NoteAuthor'> - {notes[noteId].author}</div>
              </div>
            )
          })}
        </Col>
      </div>
    )
  }
})
