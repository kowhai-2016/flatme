export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {user: action.user}

    case 'LOGOUT_SUCCESS':
      return {}

    default:
      return state
  }
}
