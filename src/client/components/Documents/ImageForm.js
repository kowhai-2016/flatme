import React, { PropTypes } from 'react'

function uploadFile (file, signedRequest, url, flatId) {
  const xhr = new window.XMLHttpRequest()
  xhr.open('PUT', signedRequest)
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        document.getElementById('preview').src = url
        document.getElementById('avatar-url').value = url
      } else {
        window.alert('Could not upload file.')
      }
    }
  }
  xhr.send(file)
}

function getSignedRequest (file, flatId, name) {
  const xhr = new window.XMLHttpRequest()
  xhr.open('GET', `/v1/flats/${flatId}/documents/sign-s3?file-name=${file.name}&file-type=${file.type}`)
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText)
        uploadFile(file, response.signedRequest, response.url, flatId)
      } else {
        window.alert('Could not get signed URL.')
      }
    }
  }
  xhr.send()
}

const ImageForm = React.createClass({
  componentDidMount () {
    const flatId = this.props.flatId

    document.getElementById('file-input').onchange = () => {
      const files = document.getElementById('file-input').files
      const file = files[0]
      if (file == null) {
        window.alert('No file selected.')
      }
      getSignedRequest(file, flatId)
    }
  },
  render () {
    const defaultImage = event => {
      event.target.src = '/images/list-verification.svg'
    }
    return (
      <div className='uploadBox'>
        <input className='uploadFile' type='file' id='file-input' />
        <label htmlFor='file-input'>Choose a file</label>
        <p id='status'>Please select a file</p>
        <img id='preview' value='/images/notebook.png' onError={defaultImage} style={{maxWidth: '100%', height: 'auto'}} />
        <form method='POST' action={`/v1/flats/${this.props.flatId}/documents`}>
          <input type='hidden' id='avatar-url' name='avatar-url' value='/images/notebook.png' />
          <input type='submit' value='Upload Document' />
        </form>
      </div>
    )
  }
})

ImageForm.propTypes = {
  flatId: PropTypes.number.isRequired
}

export default ImageForm
