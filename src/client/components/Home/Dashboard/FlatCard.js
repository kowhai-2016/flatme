import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const FlatCard = React.createClass({
  render () {
    const flats = this.props.flats.map((flat, index) => {
      return (
        <div className='panel-group' key={index}>
          <div className='panel panel-default'>
            <div className='panel-heading'>MyFlat</div>
            <div className='panel-body'>
              <ul>
                <li>
                  <Link to={`/flat/${flat.id}`}>
                    {flat.flatName}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div>
        {flats}
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
