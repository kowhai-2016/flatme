export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_NOTES_SUCCESS':
      return Object.assign({}, action.notes)

    case 'DELETE_NOTE_SUCCESS':
           // I assume the 'DELETE_NOTE_SUCCESS' action carries an id with it as payload
   return  Object.keys(state.notes)
     .filter(id => id !== action.id)
     .reduce((newState, id) => {
       newState[id] = state[id]
       return newState
     }, {})

    default:
      return state
  }
}
