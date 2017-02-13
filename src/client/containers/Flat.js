import { connect } from 'react-redux'

import { acceptJoinRequest, fetchFlat, ignoreJoinRequest } from '../actions'
import Flat from '../components/Flat'

const mapStateToProps = (state, ownProps) => {
  const id = Number(ownProps.params.id)
  return {
    flat: state.flats[id]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    acceptJoinRequest: requestId => {
      dispatch(acceptJoinRequest(requestId))
    },
    fetchFlat: () => {
      const id = Number(ownProps.params.id)
      dispatch(fetchFlat(id))
    },
    ignoreJoinRequest: requestId => {
      dispatch(ignoreJoinRequest(requestId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Flat)
