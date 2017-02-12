import { connect } from 'react-redux'

import Dashboard from '../components/Home/Dashboard'

import { createNewFlat, fetchUserFlats } from '../actions'

const mapStateToProps = state => {
  return {
    user: state.account.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createNewFlat: flat => dispatch(createNewFlat(flat)),
    fetchUserFlats: id => dispatch(fetchUserFlats(id))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
