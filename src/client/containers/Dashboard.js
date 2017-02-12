import { connect } from 'react-redux'

import Dashboard from '../components/Home/Dashboard'

import { createNewFlat, joinFlat } from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    createNewFlat: flat => dispatch(createNewFlat(flat)),
    joinFlat: ({ joinFlatName }) => dispatch(joinFlat(joinFlatName))
  }
}
export default connect(null, mapDispatchToProps)(Dashboard)
