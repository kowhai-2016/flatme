import React from 'react'
import { IndexRoute, Route } from 'react-router'

import App from './components/App'
import Flat from './components/Flat'
import Home from './containers/Home'
import Join from './components/Join'
import PageNotFound from './components/PageNotFound'
import User from './components/User'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='join' component={Join} />
    <Route path='user' component={User} />
    <Route path='flat' component={Flat} />
    <Route path='*' component={PageNotFound} />
  </Route>
)
