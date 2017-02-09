import React from 'react'

import Navigation from './NavContainer'

const App = props => {
  return (
    <div>
      <Navigation />
      {props.children}
    </div>
  )
}

export default App
