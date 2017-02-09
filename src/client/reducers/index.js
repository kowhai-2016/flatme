import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import { combineForms } from 'react-redux-form'

import account from './account'

const loginCredentials = {
  email: '',
  password: ''
}

export default combineReducers({
  forms: combineForms({ loginCredentials }, 'forms'),
  account,
  routing: routerReducer
})
