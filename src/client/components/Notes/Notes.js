import React from 'react'

export default React.createClass({
  componentDidMount () {
    this.props.fetchNotes(flat)
  }
  render () {
    return (
      <div>
        <h1>Notes</h1>
      </div>
    )
  }
})
