import React from 'react'
import { Control, Form } from 'react-redux-form'

const Edit = React.createClass({
  handleSubmit (values) {
    this.props.updateUser(values)
  },

  render () {
    return (
      <Form model='forms.edit'
        onSubmit={this.handleSubmit}
        >
        <label>First name:</label>
        <Control.text model='.firstName' />
        <label>Last name:</label>
        <Control.text model='.lastName' />
        <label>Phone number:</label>
        <Control.text model='.phoneNumber' />
        <label>Email:</label>
        <Control.text model='.email' />
        <button type='submit'>Update</button>
      </Form>
    )
  }
})

export default Edit
