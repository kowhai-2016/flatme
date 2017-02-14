import React, { PropTypes } from 'react'
import { Row, Col } from 'react-bootstrap'

import FileThumbnail from './FileThumbnail'

const FileThumbnails = props => {
  const thumbnails = props.documents.map((document, index) => {
    return (
      <Col key={index} xs={6} md={4}>
        <FileThumbnail document={document} />
      </Col>
    )
  })
  return (
    <Row>
      {thumbnails}
    </Row>
  )
}

FileThumbnails.propTypes = {
  documents: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default FileThumbnails
