export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_USER_SUCCESS':
      return Object.assign({}, state, {[action.user.id]: action.user})

    default:
      return state
  }
}
