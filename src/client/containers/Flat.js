import { connect } from 'react-redux'

import { fetchFlat } from '../actions'
import Flat from '../components/Flat'

const mapStateToProps = (state, ownProps) => {
  const id = Number(ownProps.params.id)
  return {
    flat: state.flats[id]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchFlat: () => {
      const id = Number(ownProps.params.id)
      dispatch(fetchFlat(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Flat)
