import React from 'react'
import { IndexRoute, Route } from 'react-router'

import App from './components/App'
import Flat from './components/Flat'
import Home from './containers/Home'
import Join from './containers/Join'
import PageNotFound from './components/PageNotFound'
import User from './containers/User'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='join' component={Join} />
    <Route path='user/:id' component={User} />
    <Route path='flat' component={Flat} />
    <Route path='*' component={PageNotFound} />
  </Route>
)
