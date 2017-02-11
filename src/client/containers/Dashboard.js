import { connect } from 'react-redux'

import Dashboard from '../components/Home/Dashboard'

import { createNewFlat } from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    createNewFlat: flat => dispatch(createNewFlat(flat))
  }
}
export default connect(null, mapDispatchToProps)(Dashboard)
