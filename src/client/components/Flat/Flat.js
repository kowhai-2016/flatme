import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const flatmates = props => {
  if (!props.flat) {
    return []
  }
  return props.flat.flatmates.map((flatmate, index) => {
    return (
      <li key={index}>
        <Link to={`/user/${flatmate.id}`}>
          {flatmate.firstName}
        </Link>
      </li>
    )
  })
}

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
        <h2>Flatmates</h2>
        <ul>
          {flatmates(this.props)}
        </ul>
      </div>
    )
  }
})

Flat.propTypes = {
  fetchFlat: PropTypes.func.isRequired,
  flat: PropTypes.shape({
    flatmates: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired
      }),
    ).isRequired,
    flatName: PropTypes.string.isRequired
  })
}

export default Flat
