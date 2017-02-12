export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_NOTES_SUCCESS':
      return Object.assign({}, state, action.notes)

    case 'DELETE_NOTE_SUCCESS':
      // const notes = state.notes
      // notes.filter(note => note !== action.note)
      return state

    default:
      return state
  }
}
