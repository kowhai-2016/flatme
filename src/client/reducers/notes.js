export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_NOTES_SUCCESS':
      return Object.assign({}, action.notes)

    case 'ADD_NOTE_SUCCESS':
      return action.notes
        .reduce((newState, id) => {
          newState[id] = state[id]
        })

    case 'DELETE_NOTE_SUCCESS':
     return (Object.keys(state)
       .filter(id => id !== action.id)
       .reduce((newState, id) => {
         newState[id] = state[id]
         return newState
       }, {}))

    default:
      return state
  }
}
