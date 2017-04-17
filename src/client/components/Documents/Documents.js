import React, { PropTypes } from 'react'

import ImageForm from './ImageForm'

const Documents = React.createClass({
  render () {
    return (
      <div>
        <h1>Documents</h1>
        {this.props.flat ? <ImageForm flatId={this.props.flat.id} /> : null}
      </div>
    )
  }
})

Documents.propTypes = {
  flat: PropTypes.object
}

export default Documents
