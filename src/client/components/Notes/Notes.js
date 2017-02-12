import React from 'react'
import { Modal } from 'react-bootstrap'

import NewNoteForm from './NewNoteForm'

let notes

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
  delete (note) {
    this.props.deleteNote(note)
  },
  add () {

  },
  render () {
    notes = this.props.notes
    return (
      <div>
        <h1>Notes</h1>
        <button onClick={this.open}>Add new</button>
        <Modal show={this.state.show} onHide={this.close}>
          <NewNoteForm />
        </Modal>
        {notes[0] ? Object.keys(notes).map(note => {
          return (
            <div>
              <div>{notes[note].content}</div>
              <div>{notes[note].author}</div>
              <button onClick={() => this.delete(notes[note])}>&#10060;</button>
            </div>
          )
        }) : <div>Nothing Found</div>
      }
      </div>
    )
  }
})
