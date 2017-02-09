import {connect} from 'react-redux'

import { login, logout } from '../../actions'
import Navigation from '../Components/Navigation'

const mapStateToProps = ({isLoggedIn}) => {
  return {
    isLoggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: () => { dispatch(login()) },
    logout: () => { dispatch(logout()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
