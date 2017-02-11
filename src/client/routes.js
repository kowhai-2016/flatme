import React from 'react'
import { IndexRoute, Route } from 'react-router'

import App from './components/App'
import Contacts from './components/Contacts'
import Documents from './components/Documents'
import Flat from './containers/Flat'
import Home from './containers/Home'
import Join from './containers/Join'
import Notes from './containers/Notes'
import PageNotFound from './components/PageNotFound'
import User from './containers/User'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='join' component={Join} />
    <Route path='user/:id' component={User} />
    <Route path='flat/:id' component={Flat} >
      <IndexRoute component={Contacts} />
      <Route path='documents' component={Documents} />
      <Route path='notes' component={Notes} />
    </Route>
    <Route path='*' component={PageNotFound} />
  </Route>
)
