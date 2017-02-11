import { connect } from 'react-redux'

import Documents from '../components/Documents'

const mapStateToProps = (state, ownProps) => {
  const id = Number(ownProps.params.id)
  const flat = state.flats[id]
  let documents = []
  if (flat && flat.documents) {
    documents = flat.documents
  }
  return {
    documents
  }
}

export default connect(mapStateToProps)(Documents)
