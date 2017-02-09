import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import navigation from './navigation'

export default combineReducers({
  account,
  routing: routerReducer
})
