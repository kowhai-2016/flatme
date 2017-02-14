import React, { PropTypes } from 'react'
import { Thumbnail } from 'react-bootstrap'

const FileThumbnail = props => {
  const { url, name } = props.document
  const showBackupImage = event => {
    event.target.src = 'http://img.freepik.com/free-icon/document-file-hand-drawn-symbol_318-52062.jpg?size=338&ext=jpg'
  }
  return (
    <Thumbnail href={url}>
      <img className='img-thumbnail' src={url} onError={showBackupImage} />
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
