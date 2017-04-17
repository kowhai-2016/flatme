import { connect } from 'react-redux'

import Dashboard from '../components/Home/Dashboard'

import { createNewFlat, fetchUserFlats, joinFlat } from '../actions'

const mapStateToProps = state => {
  return {
    user: state.account.user
  }
}

const mapDispatchToProps = (dispatch, state) => {
  return {
    createNewFlat: (flat, user) => dispatch(createNewFlat(flat, user)),
    fetchUserFlats: id => dispatch(fetchUserFlats(id)),
    joinFlat: ({ joinFlatName }) => dispatch(joinFlat(joinFlatName))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
