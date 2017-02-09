
import { connect } from 'react-redux'

import Joins from './Join'

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
