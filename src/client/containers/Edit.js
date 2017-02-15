import { connect } from 'react-redux'

import { updateUser } from '../actions'

import Edit from '../components/Edit'

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUser: values => dispatch(updateUser(values))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
