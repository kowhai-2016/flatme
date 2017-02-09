import React from 'react'
import { Button, ControlLabel, Col, Checkbox, FormGroup, FormControl } from 'react-bootstrap'
import { Form, Control } from 'react-redux-form'

const Join = () => {
  return (
    <Form model="forms.account"
      onSubmit={account => this.handleSubmit(account)}>
      <div className="four columns">
        <label>First name:</label>
        <Control.text model=".firstName" />
      </div>

      <div className="four columns">
        <label>Last name:</label>
        <Control.text model=".lastName" />
      </div>

      <div className="four columns">
        <label>Mobile:</label>
        <Control.text model=".mobile" />
      </div>

      <button type="submit">Add</button>
    </Form>

  )
}

export default Join
