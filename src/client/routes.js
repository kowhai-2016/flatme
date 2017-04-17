import axios from 'axios'
import React from 'react'
import { IndexRoute, Route } from 'react-router'

import App from './components/App'
import Calendar from './components/Calendar'
import Contacts from './components/Contacts'
import Documents from './containers/Documents'
import Flat from './containers/Flat'
import Home from './containers/Home'
import Join from './containers/Join'
import Notes from './containers/Notes'
import PageNotFound from './components/PageNotFound'
import About from './components/About'
import Edit from './containers/Edit'
import User from './containers/User'
import store from './store'

const requireUserAuth = (nextState, replace, callback) => {
  const userId = nextState.params.id
  const account = store.getState().account
  const token = account.user ? account.user.token : null
  return axios.create({
    headers: {
      token
    }
  }).get(`/v1/users/${userId}`)
    .then(() => {
      // has access to user page
      return callback()
    })
    .catch(() => {
      // doesn't have access to user page
      replace('/')
      return callback()
    })
}

const requireFlatAuth = (nextState, replace, callback) => {
  const flatId = nextState.params.id
  const account = store.getState().account
  const token = account.user ? account.user.token : null
  return axios.create({
    headers: {
      token
    }
  }).get(`/v1/flats?id=${flatId}`)
    .then(() => {
      // has access to flat page
      return callback()
    })
    .catch(() => {
      // doesn't have access to flat page
      replace('/')
      return callback()
    })
}

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='join' component={Join} />
    <Route path='about' component={About} />
    <Route path='edit' component={Edit} />
    <Route
      path='user/:id'
      component={User}
      onEnter={requireUserAuth}
      />
    <Route
      path='flat/:id'
      component={Flat}
      onEnter={requireFlatAuth}
      >
      <IndexRoute component={Contacts} />
      <Route path='documents' component={Documents} />
      <Route path='notes' component={Notes} />
      <Route path='calendar' component={Calendar} />
    </Route>
    <Route path='*' component={PageNotFound} />
  </Route>
)
