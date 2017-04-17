import React from 'react'
import { Control, Form } from 'react-redux-form'

const Edit = React.createClass({
  handleSubmit (values) {
    this.props.updateUser(values)
  },

  render () {
    return (
      <div className='row'>
        <div className='container'>
        <div className='text-center'>
          <h1>Update your profile</h1>
        </div>
      <Form model='forms.edit'
        onSubmit={this.handleSubmit}
        >
        <div className='form-group'>
        <div className='field'>
          <label>First name:</label>
          <Control.text model='.firstName' />
        </div>
        </div>
        <div className='form-group'>
        <div className='field'>
          <label>Last name:</label>
          <Control.text model='.lastName' />
        </div>
        </div>
        <div className='form-group'>
        <div className='field'>
          <label>Phone number:</label>
          <Control.text model='.phoneNumber' />
        </div>
        </div>
        <div className='form-group'>
        <div className='field'>
          <label>Email:</label>
          <Control.text model='.email' />
        </div>
        </div>
        <button type='submit'>Update</button>
      </Form>
      </div>
      </div>
    )
  }
})

export default Edit
