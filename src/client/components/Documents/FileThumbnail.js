import React, { PropTypes } from 'react'
import { Thumbnail } from 'react-bootstrap'

const FileThumbnail = props => {
  const { url, name } = props.document
  return (
    <Thumbnail>
      <img className='img-thumbnail' src={url} />
      <h4>{name}</h4>
    </Thumbnail>
  )
}

FileThumbnail.propTypes = {
  document: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
}

export default FileThumbnail
