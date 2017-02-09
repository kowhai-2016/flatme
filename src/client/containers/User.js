import { connect } from 'react-redux'

import { fetchUser } from '../actions'
import User from '../components/User'

const mapStateToProps = (state, ownProps) => {
  const id = Number(ownProps.params.id)
  return {
    user: state.users[id]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUser: () => {
      const id = Number(ownProps.params.id)
      dispatch(fetchUser(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
