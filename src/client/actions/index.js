import axios from 'axios'

export const fetchFlat = id => {
  return dispatch => {
    dispatch({
      id,
      type: 'FETCH_FLAT_PENDING'
    })
    return axios.get(`/v1/flats?id=${id}`)
      .then(response => {
        const flat = response.data
        return dispatch({
          type: 'FETCH_FLAT_SUCCESS',
          flat
        })
      })
      .catch(error => {
        return dispatch({
          id,
          message: error.message,
          type: 'FETCH_FLAT_FAILURE'
        })
      })
  }
}

export const fetchUser = id => {
  return dispatch => {
    dispatch({
      id,
      type: 'FETCH_USER_PENDING'
    })
    return axios.get(`/v1/users/${id}`)
      .then(response => {
        const user = response.data
        return dispatch({
          type: 'FETCH_USER_SUCCESS',
          user
        })
      })
      .catch(error => {
        return dispatch({
          id,
          message: error.message,
          type: 'FETCH_USER_FAILURE'
        })
      })
  }
}

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
