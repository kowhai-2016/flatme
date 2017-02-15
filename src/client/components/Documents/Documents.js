import React, { PropTypes } from 'react'

import FileThumbnails from './FileThumbnails'
import ImageForm from './ImageForm'
import './style.css'

const Documents = React.createClass({
  render () {
    return (
      <div className='Document'>
        <h1>Documents</h1>
        {this.props.flat ? <ImageForm flatId={this.props.flat.id} /> : null}
        {this.props.flat ? <FileThumbnails documents={this.props.flat.documents} /> : null}
      </div>
    )
  }
})

Documents.propTypes = {
  flat: PropTypes.object
}

export default Documents
