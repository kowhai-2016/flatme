import React, { PropTypes } from 'react'

const Image = props => {
  return <img src={props.image.url} />
}

Image.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
}

export default Image
