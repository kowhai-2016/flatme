import React, { PropTypes } from 'react'

const Flat = React.createClass({
  componentDidMount () {
    this.props.fetchFlat()
  },
  render () {
    const flat = this.props.flat
    const title = flat ? flat.flatName : null
    return (
      <div>
        <h1>{title}</h1>
      </div>
    )
  }
})

Flat.propTypes = {
  fetchFlat: PropTypes.func.isRequired,
  flat: PropTypes.shape({
    flatName: PropTypes.string.isRequired
  })
}

export default Flat
