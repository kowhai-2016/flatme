export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_USER_FLATS_SUCCESS':
      return {
        user: Object.assign(
          {},
          state.user,
          {
            flats: action.flats
          }
        )
      }

    case 'LEAVE_FLAT_SUCCESS':
      let flats = state.user.flats
        .filter(flat => flat.id === action.flatId)
      return {
        ...state,
        user: { ...state.user, flats }
      }

    case 'LOGIN_SUCCESS':
      return {user: action.user}

    case 'LOGOUT_SUCCESS':
      return {}

    case 'UPDATE_USER_SUCCESS':
      return {
        user: Object.assign(
          {},
          state.user,
          action.fields
        )
      }

    default:
      return state
  }
}
