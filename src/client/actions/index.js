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

export const updateUser = fields => {
  return (dispatch, getState) => {
    const userId = getState().account.user.id
    dispatch({
      userId,
      type: 'UPDATE_USER_PENDING'
    })
    return getAxios().put(`/v1/users/${userId}`, fields)
     .then(res => {
       return dispatch({
         type: 'UPDATE_USER_SUCCESS',
         fields
       })
     })
     .catch(error => {
       return dispatch({
         message: error.message,
         type: 'UPDATE_USER_FAILURE'
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

export const fetchNotes = flatId => {
  return dispatch => {
    dispatch({
      flatId,
      type: 'FETCH_NOTES_PENDING'
    })
    return getAxios().get(`/v1/flats/${flatId}/notes`)
      .then(res => {
        const notes = res.data
          .reduce((acc, note) => {
            acc[note.id] = note
            return acc
          }, {})
        return dispatch({
          type: 'FETCH_NOTES_SUCCESS',
          notes
        })
      })
      .catch(error => {
        return dispatch({
          message: error.message,
          type: 'FETCH_NOTES_FAILURE'
        })
      })
  }
}

export const addNote = note => {
  return dispatch => {
    dispatch({
      note,
      type: 'ADD_NOTE_PENDING'
    })
    return getAxios().post(`/v1/flats/${note.flat_id}/notes`, note)
      .then(res => {
        return dispatch({
          type: 'ADD_NOTE_SUCCESS',
          note: res.data
        })
      })
      .catch(error => {
        return dispatch({
          message: error.message,
          type: 'ADD_NOTE_FAILURE'
        })
      })
  }
}

export const deleteNote = id => {
  return dispatch => {
    dispatch({
      id,
      type: 'DELETE_NOTE_PENDING'
    })
    return getAxios().delete(`/v1/notes/${id}`)
      .then(res => {
        return dispatch({
          type: 'DELETE_NOTE_SUCCESS',
          id
        })
      })
      .catch(error => {
        return dispatch({
          id,
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
    return getAxios().post(`/v1/login`, {email, password})
      .then(response => {
        const user = response.data
        window.localStorage.clear()
        window.localStorage.setItem('login', JSON.stringify(user))
        history.push('/')
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
    return getAxios().post(`/v1/users`, user)
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

export const createNewFlat = (flat, user) => {
  return dispatch => {
    dispatch({
      type: 'CREATE_FLAT_PENDING'
    })
    const req = {
      flat,
      user
    }
    return getAxios().post(`/v1/flats`, req)
      .then(response => {
        const flat = response.data
        history.push(`/flat/${flat.id}`)
        dispatch({
          type: 'CREATE_FLAT_SUCCESS',
          flat
        })
      })
      .then()
      .catch(error => {
        window.alert(`Sorry, flat ${flat.flatName} already exists. Please select another name.`)
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
        dispatch({
          flatId: flatId,
          type: 'JOIN_FLAT_SUCCESS'
        })
      })
      .catch(error => {
        window.alert(
          `${flatName} does not exist. Please find another house.`
        )
        dispatch({
          message: error.message,
          type: 'JOIN_FLAT_FAILURE'
        })
      })
  }
}

export const acceptJoinRequest = requestId => {
  return dispatch => {
    dispatch({
      type: 'ACCEPT_JOIN_REQUEST_PENDING'
    })
    return getAxios().put(`/v1/flats/join`, {
      requestId,
      status: 'accepted'
    })
      .then(response => {
        dispatch({
          requestId,
          type: 'ACCEPT_JOIN_REQUEST_SUCCESS'
        })
      })
      .catch(error => {
        dispatch({
          message: error.message,
          requestId,
          type: 'ACCEPT_JOIN_REQUEST_FAILURE'
        })
      })
  }
}

export const ignoreJoinRequest = requestId => {
  return dispatch => {
    dispatch({
      type: 'IGNORE_JOIN_REQUEST_PENDING'
    })
    return getAxios().put(`/v1/flats/join`, {
      requestId,
      status: 'ignored'
    })
      .then(response => {
        dispatch({
          requestId,
          type: 'IGNORE_JOIN_REQUEST_SUCCESS'
        })
      })
      .catch(error => {
        dispatch({
          message: error.message,
          requestId,
          type: 'IGNORE_JOIN_REQUEST_FAILURE'
        })
      })
  }
}

export const leaveFlat = (userId, flatId) => {
  return dispatch => {
    dispatch({
      type: 'LEAVE_FLAT_PENDING'
    })
    return getAxios().delete(`/v1/flats/${flatId}/${userId}`)
     .then(response => {
       dispatch({
         userId,
         flatId,
         type: 'LEAVE_FLAT_SUCCESS'
       })
     })
     .catch(error => {
       dispatch({
         message: error.message,
         type: 'LEAVE_FLAT_FAILED'
       })
     })
  }
}
