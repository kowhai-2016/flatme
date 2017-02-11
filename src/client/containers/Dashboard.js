import { connect } from 'react-redux'

import Dashboard from '../components/Home/Dashboard'

import { createNewFlat } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    createNewFlat: (flatName) => { return dispatch(createNewFlat(flatName)) }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Dashboard)
