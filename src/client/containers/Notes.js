import { connect } from 'react-redux'

import { fetchNotes, deleteNote } from '../actions'
import Notes from '../components/Notes'

const mapStateToProps = (state, ownProps) => {
  return {
    flat: Number(ownProps.params.id),
    notes: state.notes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNotes: (flat) => { return dispatch(fetchNotes(flat)) },
    deleteNote: (note) => { return dispatch(deleteNote(note)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes)
