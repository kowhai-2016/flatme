export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_NOTES_SUCCESS':
      return Object.assign({}, state, action.notes)

    default:
      return state
  }
}
