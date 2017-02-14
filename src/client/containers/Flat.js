import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import { acceptJoinRequest, fetchFlat, ignoreJoinRequest, leaveFlat } from '../actions'
import Flat from '../components/Flat'

const mapStateToProps = (state, ownProps) => {
  const id = Number(ownProps.params.id)
  return {
    flat: state.flats[id],
    userId: state.account.user.id
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    acceptJoinRequest (requestId) {
      dispatch(acceptJoinRequest(requestId))
        .then(() => {
          dispatch(this.fetchFlat())
        })
    },
    fetchFlat () {
      const id = Number(ownProps.params.id)
      dispatch(fetchFlat(id))
    },
    ignoreJoinRequest (requestId) {
      dispatch(ignoreJoinRequest(requestId))
        .then(() => {
          dispatch(this.fetchFlat())
        })
    },
    leaveFlat (userId, flatId) {
      dispatch(leaveFlat(userId, flatId))
        .then(() => {
          browserHistory.push('/')
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Flat)
