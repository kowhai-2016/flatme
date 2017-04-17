import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const FlatCard = React.createClass({
  render () {
    const flats = this.props.flats.map((flat, index) => {
      return (
        <div className='row' key={index}>
          <div className='col-md-6 col-md-offset-3'>
            <div className='panel-group main-flat-card'>
              <div className='panel panel-default flat-card'>
                <div className='panel-heading'><h4>My Flat # {index + 1}</h4></div>
                <div className='panel-body'>
                  <ul>
                    <li>
                      <Link to={`/flat/${flat.id}`}>
                        <h3><img src='/images/livingroom-window-with-curtains.svg' className='curtains' />{flat.flatName}</h3>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
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
