import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

if (window.localStorage.getItem('login')) {
  const user = JSON.parse(document.localStorage.getItem('login'))
  store.dispatch({
    type: 'LOGIN_SUCCESS',
    user
  })
}

export default store
