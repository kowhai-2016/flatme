import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const FlatCard = React.createClass({
  render () {
    const flats = this.props.flats.map((flat, index) => {
      return (
        <li key={index}>
          <Link to={`/flat/${flat.id}`}>
            {flat.flatName}
          </Link>
        </li>
      )
    })
    return (
        <div className='panel-group'>
          <div className='panel panel-default'>
            <div className='panel-heading'>MyFlat 1</div>
            <div className='panel-body'>
              <ul>
                {flats}
              </ul>
            </div>
          </div>
        </div>
      )
  }
})

FlatCard.propTypes = {
  flats: PropTypes.arrayOf(
    PropTypes.shape({
      flatName: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired
}

export default FlatCard
