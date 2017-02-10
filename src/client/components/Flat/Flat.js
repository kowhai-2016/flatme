import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Grid, Row, Col } from 'react-bootstrap'

import Categories from './Categories'

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
      <Grid>
        <Row>
          <Col md={3}>
            <Categories id={this.props.params.id} />
          </Col>
          <Col md={9}>
            <h1>{title}</h1>
            <h2>Flatmates</h2>
            <ul>
              {flatmates(this.props)}
            </ul>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
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
