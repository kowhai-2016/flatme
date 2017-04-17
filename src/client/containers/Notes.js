import { connect } from 'react-redux'

import { fetchNotes, deleteNote, addNote } from '../actions'
import Notes from '../components/Notes'

const mapStateToProps = (state, ownProps) => {
  return {
    flat: Number(ownProps.params.id),
    notes: state.notes,
    user: state.account.user,
    newNote: state.forms.newNote.content
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNotes: (flat) => { return dispatch(fetchNotes(flat)) },
    deleteNote: (id) => { return dispatch(deleteNote(id)) },
    addNote: (note) => { return dispatch(addNote(note)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes)
