import React, { PropTypes } from 'react'

import Images from './Images'
import UploadImage from './UploadImage'

const Documents = props => {
  const images = [
    {url: 'some-image'}
  ]
  return (
    <div>
      <h1>Documents</h1>
      <UploadImage flatId={Number(props.params.id)} />
      <Images images={images} />
    </div>
  )
}

Documents.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired
}

export default Documents
