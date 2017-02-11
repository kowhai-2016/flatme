import {connect} from 'react-redux'

import { login, logout } from '../actions'
import Navigation from '../components/App/Navigation'

const mapStateToProps = ({account}) => {
  return {
    account
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    login: (email, password) => { return dispatch(login(email, password)) },
    logout: () => { return dispatch(logout()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
