import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import { combineForms } from 'react-redux-form'

import account from './account'
import flats from './flats'
import users from './users'
import notes from './notes'

const join = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const loginCredentials = {
  email: '',
  password: ''
}

const newFlat = {
  flatName: ''
}

const joinFlat = {
  flatName: ''
}

export default combineReducers({
  account,
  flats,
  notes,
  forms: combineForms({ loginCredentials, join, newFlat, joinFlat }, 'forms'),
  routing: routerReducer,
  users
})
