import { connect } from 'react-redux'

import Home from '../components/Home'

import { createNewFlat } from '../actions'

const mapStateToProps = state => {
  return {
    account: state.account
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createNewFlat: (flatName) => { return dispatch(createNewFlat(flatName)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
