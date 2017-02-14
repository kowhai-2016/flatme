import { connect } from 'react-redux'

import { updateUser } from '../actions'

import Edit from '../components/Edit'

const mapDispatchToProps = dispatch => {
  return {
    updateUser: values => { return dispatch(updateUser(values)) }
  }
}

export default connect(null, mapDispatchToProps)(Edit)
