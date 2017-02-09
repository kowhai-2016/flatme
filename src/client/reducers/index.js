import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import { combineForms } from 'react-redux-form'

import account from './account'

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

export default combineReducers({
  forms: combineForms({ loginCredentials, join }, 'forms'),
  account,
  routing: routerReducer
})
