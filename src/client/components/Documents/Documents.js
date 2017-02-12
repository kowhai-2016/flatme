import React, { PropTypes } from 'react'

import Images from './Images'
import UploadImage from './UploadImage'

const Documents = React.createClass({
  render () {
    const images = this.props.documents.map(document => {
      return {
        url: document
      }
    })
    return (
      <div>
        <h1>Documents</h1>
        <UploadImage flatId={Number(this.props.params.id)} />
        <Images images={images} />
      </div>
    )
  }
})

Documents.propTypes = {
  documents: PropTypes.arrayOf(PropTypes.string).isRequired,
  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired
}

export default Documents
