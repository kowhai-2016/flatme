import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import { combineForms } from 'react-redux-form'

import account from './account'
import flats from './flats'
import users from './users'

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

export default combineReducers({
  account,
  flats,
  forms: combineForms({ loginCredentials, join, newFlat }, 'forms'),
  routing: routerReducer,
  users
})
