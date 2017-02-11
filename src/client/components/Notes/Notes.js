import React from 'react'

export default React.createClass({
  componentDidMount () {
    this.props.fetchNotes(this.props.flat)
  },
  delete (id) {
    this.props.deleteNote(id)
  },
  render () {
    return (
      <div>
        <h1>Notes</h1>
        {this.props.notes.map(note => {
          return (
            <div>
              <div>note.content</div>
              <div>note.author</div>
              <button onClick={() => this.delete(note.id)}>&#10060;</button>
            </div>
          )
        })}
      </div>
    )
  }
})
