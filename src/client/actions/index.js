import axios from 'axios'

import history from '../history'
import store from '../store'

function getAxios () {
  const account = store.getState().account
  const token = account.user ? account.user.token : null
  return axios.create({
    headers: {
      token
    }
  })
}

export const fetchFlat = id => {
  return (dispatch, getState) => {
    dispatch({
      id,
      type: 'FETCH_FLAT_PENDING'
    })
    return getAxios().get(`/v1/flats?id=${id}`)
      .then(res => {
        const flat = res.data
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

export const fetchUserFlats = id => {
  return dispatch => {
    dispatch({
      id,
      type: 'FETCH_USER_FLATS_PENDING'
    })
    return getAxios().get(`/v1/users/${id}/flats`)
      .then(res => {
        const { flats } = res.data
        return dispatch({
          type: 'FETCH_USER_FLATS_SUCCESS',
          flats
        })
      })
      .catch(error => {
        return dispatch({
          id,
          message: error.message,
          type: 'FETCH_USER_FLATS_FAILURE'
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
    return getAxios().get(`/v1/users/${id}`)
      .then(res => {
        const user = res.data
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

export const login = (email, password) => {
  return dispatch => {
    dispatch({
      type: 'LOGIN_PENDING'
    })
    return axios.post(`/v1/login`, {email, password})
      .then(response => {
        const user = response.data
        window.localStorage.clear()
        window.localStorage.setItem('login', JSON.stringify(user))
        return dispatch({
          type: 'LOGIN_SUCCESS',
          user
        })
      })
      .catch(error => {
        return dispatch({
          message: error.message,
          type: 'LOGIN_FAILURE'
        })
      })
  }
}

export const logout = () => {
  return dispatch => {
    dispatch({
      type: 'LOGOUT_PENDING'
    })
    window.localStorage.clear()
    history.push('/')
    dispatch({
      type: 'LOGOUT_SUCCESS'
    })
  }
}

export const signUp = user => {
  return dispatch => {
    dispatch({
      type: 'SIGNUP_PENDING'
    })
    return axios.post(`/v1/users`, user)
      .then(res => {
        const user = res.data
        return dispatch({
          type: 'SIGNUP_SUCCESS',
          user
        })
      })
      .catch(error => {
        return dispatch({
          message: error.message,
          type: 'SIGNUP_FAILURE'
        })
      })
  }
}

export const createNewFlat = flat => {
  return dispatch => {
    dispatch({
      type: 'CREATE_FLAT_PENDING'
    })
    return getAxios().post(`/v1/flats`, flat)
      .then(response => {
        const flat = response.data
        history.push(`/flat/${flat.id}`)
        dispatch({
          type: 'CREATE_FLAT_SUCCESS',
          flat
        })
      })
      .catch(error => {
        dispatch({
          message: error.message,
          type: 'CREATE_FLAT_FAILURE'
        })
      })
  }
}

export const joinFlat = flatName => {
  return dispatch => {
    dispatch({
      type: 'JOIN_FLAT_PENDING'
    })
    return getAxios().post(`/v1/flats/join`, {name: flatName})
      .then(response => {
        const flatId = response.data.flatId
        history.push(`/flat/${flatId}`)
        dispatch({
          type: 'JOIN_FLAT_SUCCESS'
        })
      })
      .catch(error => {
        dispatch({
          message: error.message,
          type: 'JOIN_FLAT_FAILURE'
        })
      })
  }
}
