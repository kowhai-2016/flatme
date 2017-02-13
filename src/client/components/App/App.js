import React from 'react'

import Navigation from '../../containers/Navigation'
import Footer from './Footer'

import './style.css'

const App = props => {
  return (
    <div>
      <Navigation />
      {props.children}
      <Footer />
    </div>
  )
}

export default App
