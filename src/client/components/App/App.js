import React from 'react'

import Navigation from '../../containers/Navigation'
import Footer from './Footer'

import './style.css'

const App = props => {
  return (
    <div className='App'>
      <Navigation />
      {props.children}
      <Footer />
    </div>
  )
}

export default App
