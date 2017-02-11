import {connect} from 'react-redux'

import { } from '../actions'
import Navigation from '../components/App/Navigation'

const mapStateToProps = (state, ownProps) => {
  const id = Number(ownProps.params.id)
  return {
    flat: state.flats[id]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: () => { return dispatch(login(email, password)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
