export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_FLAT_SUCCESS':
      return Object.assign({}, state, {[action.flat.id]: action.flat})

    case 'CREATE_FLAT_SUCCESS':
      return {flat: action.flat}

    default:
      return state
  }
}
