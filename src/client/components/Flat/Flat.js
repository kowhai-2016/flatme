import React, { PropTypes } from 'react'
import { Row, Col } from 'react-bootstrap'

import Categories from './Categories'

const Flat = React.createClass({
  componentDidMount () {
    this.props.fetchFlat()
  },
  render () {
    const flat = this.props.flat
    const flatName = flat ? flat.flatName : null
    return (
      <div className='container-fluid plain-background flat'>
        <Row>
          <Col md={3}>
            <Categories id={this.props.params.id} />
          </Col>
          <Col md={6} className='popout'>
            <h1 className='text-center'>{flatName}</h1>
            {this.props.children && React.cloneElement(this.props.children, {
              flat
            }
          )}
          </Col>
          <Col md={3} />
        </Row>
      </div>
    )
  }
})

Flat.propTypes = {
  fetchFlat: PropTypes.func.isRequired,
  flat: PropTypes.shape({
    flatName: PropTypes.string.isRequired
  }),
  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired
}

export default Flat
