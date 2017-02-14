import { connect } from 'react-redux'

import { updateUsers } from '../actions'

import Edit from '../components/Edit'

const mapDispatchToProps = dispatch => {
  return {
    updateUser: values => { return dispatch(updateUsers(values)) }
  }
}

export default connect(null, mapDispatchToProps)(Edit)