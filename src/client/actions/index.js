import axios from 'axios'

import history from '../history'

export const fetchFlat = id => {
  return dispatch => {
    dispatch({
      id,
      type: 'FETCH_FLAT_PENDING'
    })
    return axios.get(`/v1/flats?id=${id}`)
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

export const fetchUser = id => {
  return dispatch => {
    dispatch({
      id,
      type: 'FETCH_USER_PENDING'
    })
    return axios.get(`/v1/users/${id}`)
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

export const fetchNotes = id => {
  console.log(id)
  return dispatch => {
    dispatch({
      id,
      type: 'FETCH_NOTES_PENDING'
    })
    return axios.get(`/v1/notes/${id}`)
      .then(res => {
        const notes = res.data
        return dispatch({
          type: 'FETCH_NOTES_SUCCESS',
          notes
        })
      })
      .catch(error => {
        return dispatch({
          id,
          message: error.message,
          type: 'FETCH_NOTES_FAILURE'
        })
      })
  }
}

export const deleteNote = note => {
  return dispatch => {
    dispatch({
      note,
      type: 'DELETE_NOTE_PENDING'
    })
    const id = note.id
    return axios.post(`/v1/notes/${id}`)
      .then(res => {
        return dispatch({
          type: 'DELETE_NOTE_SUCCESS',
          note
        })
      })
      .catch(error => {
        return dispatch({
          note,
          message: error.message,
          type: 'DELETE_NOTE_FAILURE'
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
