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
    login: () => { dispatch(login()) },
    logout: () => { dispatch(logout()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
