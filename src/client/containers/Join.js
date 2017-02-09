
import { connect } from 'react-redux'

import Joins from '../components/Join'

const mapStateToProps = ({ account }) => {
  return {
    account
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Joins)
