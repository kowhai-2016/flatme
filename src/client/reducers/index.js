import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import { combineForms } from 'react-redux-form'

const join = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  password: '',
  confirmPassword: ''
}

import account from './account'

export default combineReducers({
  account,
  forms: combineForms({
    join
  }, 'forms'),
  routing: routerReducer
})
