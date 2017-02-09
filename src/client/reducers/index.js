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

export default combineReducers({
  routing: routerReducer,
  forms: combineForms({ initialAccountState }, 'forms')
})
