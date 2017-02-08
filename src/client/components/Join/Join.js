import React from 'react'
import { Button, ControlLabel, Col, Checkbox, Form, FormGroup, FormControl } from 'react-bootstrap'

const Join = () => {
  return (
    <div>
      <Form horizontal>
      <FormGroup controlId='formHorizontalSurname'>
        <Col componentClass={ControlLabel} sm={2}>
          Surname
        </Col>
        <Col sm={10}>
          <FormControl type='surname' placeholder='Surname' />
        </Col>
      </FormGroup>

      <FormGroup controlId='formHorizontalName'>
        <Col componentClass={ControlLabel} sm={2}>
          Name
        </Col>
        <Col sm={10}>
          <FormControl type='name' placeholder='Name' />
        </Col>
      </FormGroup>

      <FormGroup controlId='formHorizontalEmail'>
        <Col componentClass={ControlLabel} sm={2}>
          Email
        </Col>
        <Col sm={10}>
          <FormControl type='email' placeholder='Email' />
        </Col>
      </FormGroup>

      <FormGroup controlId='formHorizontalPassword'>
        <Col componentClass={ControlLabel} sm={2}>
          Password
        </Col>
        <Col sm={10}>
          <FormControl type='password' placeholder='Password' />
        </Col>
      </FormGroup>

      <FormGroup controlId='formHorizontalConfirmPassword'>
        <Col componentClass={ControlLabel} sm={2}>
          Confirm Password
        </Col>
        <Col sm={10}>
          <FormControl type='password' placeholder='Confirm Password' />
        </Col>
      </FormGroup>

      <FormGroup controlId='formHorizontalTelephone'>
        <Col componentClass={ControlLabel} sm={2}>
          Telephone
        </Col>
        <Col sm={10}>
          <FormControl type='telephone' placeholder='Telephone' />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Checkbox>Remember me</Checkbox>
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button type='submit'>
            Sign in
          </Button>
        </Col>
      </FormGroup>
    </Form>
  </div>
  )
}

export default Join
