import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import { combineForms } from 'react-redux-form'

const initialAccountState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  password: '',
  confirmPassword: ''
}

import account from './account'

export default combineReducers({
  forms: combineForms({ initialAccountState }, 'forms'),
  routing: routerReducer,
  account
})
