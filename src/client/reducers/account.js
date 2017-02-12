export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_USER_FLATS_SUCCESS':
      return Object.assign(
        {},
        state,
        {
          flats: action.flats
        }
      )

    case 'LOGIN_SUCCESS':
      return {user: action.user}

    case 'LOGOUT_SUCCESS':
      return {}

    default:
      return state
  }
}
