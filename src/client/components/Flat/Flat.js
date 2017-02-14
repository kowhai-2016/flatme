import React, { PropTypes } from 'react'
import { Row, Col } from 'react-bootstrap'

import Categories from './Categories'
import JoinRequests from './JoinRequests'
import LeaveFlat from './LeaveFlat'

import './style.css'

const Flat = React.createClass({
  componentDidMount () {
    this.props.fetchFlat()
  },

  leaveFlat() {
    this.props.leaveFlat(this.props.userId, this.props.flat.id)
  },

  render () {
    const flat = this.props.flat
    const flatName = flat ? flat.flatName : null
    const joinRequests = flat ? flat.requests : []
    const acceptJoinRequest = requestId => this.props.acceptJoinRequest(requestId)
    const ignoreJoinRequest = requestId => this.props.ignoreJoinRequest(requestId)
    return (
      <div className='Flat container-fluid plain-background flat'>
        <Row>
          <Col mdOffset={1} md={3}>
            <Categories id={this.props.params.id} />
          </Col>
          <Col md={5} className='popout'>
            <h1 className='text-center'>{flatName}</h1>
            {this.props.children && React.cloneElement(this.props.children, {
              flat
            }
          )}
          </Col>
          <Col md={3}>
            <JoinRequests
              acceptJoinRequest={acceptJoinRequest}
              ignoreJoinRequest={ignoreJoinRequest}
              requests={joinRequests}
              />
            <LeaveFlat leaveFlat={this.leaveFlat} />
          </Col>
        </Row>
      </div>
    )
  }
})

Flat.propTypes = {
  acceptJoinRequest: PropTypes.func.isRequired,
  fetchFlat: PropTypes.func.isRequired,
  flat: PropTypes.shape({
    flatName: PropTypes.string.isRequired
  }),
  ignoreJoinRequest: PropTypes.func.isRequired,
  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired
}

export default Flat
