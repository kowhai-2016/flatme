export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_FLAT_SUCCESS':
      return Object.assign({}, state, {[action.flat.id]: action.flat})

    default:
      return state
  }
}
