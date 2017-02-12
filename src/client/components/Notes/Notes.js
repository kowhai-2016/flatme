import React from 'react'

let notes

export default React.createClass({
  componentDidMount () {
    this.props.fetchNotes(this.props.flat)
  },
  delete (note) {
    this.props.deleteNote(note)
  },
  add () {

  },
  render () {
    notes = this.props.notes

    // if(notes[0]){console.log('notes found')}
    return (
      <div>
        <h1>Notes</h1>
        {/* <button onClick{this.add}>Add new note</button> */}
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
