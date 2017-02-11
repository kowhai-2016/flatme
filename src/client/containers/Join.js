import { connect } from 'react-redux'

import { signUp } from '../actions'

import Join from '../components/Join'

const mapDispatchToProps = dispatch => {
  return {
    signUp: values => { return dispatch(signUp(values)) }
  }
}

export default connect(null, mapDispatchToProps)(Join)
