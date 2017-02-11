import React, { PropTypes } from 'react'

import Image from './Image'

const Images = props => {
  return (
    <div>
      {props.images.map((image, key) => <Image key={key} image={image} />)}
    </div>
  )
}

Images.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired
    }).isRequired
  )
}

export default Images
