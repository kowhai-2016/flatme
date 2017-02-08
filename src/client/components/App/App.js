import React from 'react'

import Navigation from './Navigation'

const App = props => {
  return (
    <div>
      <Navigation />
      {props.children}
    </div>
  )
}

export default App
