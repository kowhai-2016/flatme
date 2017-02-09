import React from 'react'

import Navigation from '../../containers/Navigation'

const App = props => {
  return (
    <div>
      <Navigation />
      {props.children}
    </div>
  )
}

export default App
