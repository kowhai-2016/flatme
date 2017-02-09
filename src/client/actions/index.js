export const login = () => {
  return dispatch => {
    dispatch({
      type: 'LOGIN_PENDING'
    })
    dispatch({
      type: 'LOGIN_SUCCESS',
      user: {}
    })
  }
}

export const logout = () => {
  return dispatch => {
    dispatch({
      type: 'LOGOUT_PENDING'
    })
    dispatch({
      type: 'LOGOUT_SUCCESS'
    })
  }
}
