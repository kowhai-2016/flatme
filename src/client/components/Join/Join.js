import React, { PropTypes } from 'react'
import { Control, Errors, Form } from 'react-redux-form'
import { Col } from 'react-bootstrap'

import './style.css'

const isNumber = val => !isNaN(Number(val))
const maxLength = length => val => val && val.length <= length
const passwordMatch = vals => vals.confirmPassword === vals.password
const required = val => val && val.length

const Join = React.createClass({
  handleSubmit (values) {
    this.props.signUp(values)
    .then(user => {
      if (user) {
        document.getElementById('successful-signup-confirm').innerHTML = 'Sign up successful!'
      }
    })
  },
  render () {
    return (
      <div className='Join container-fluid'>
        <div className='row'>
          <div className='col-md-12 bg-join'>
            <div className='container containerJoin'>
              <Form model='forms.join'
                onSubmit={this.handleSubmit}
                validators={{
                  '': {
                    passwordMatch
                  }
                }}
                >
                <div className='joinTitle'>
                  <Col sm={12} >
                    <h1>Join us</h1>
                  </Col>
                </div>
                <div className='globalJoinForm'>
                  <div className='titleJoinForm'>
                    <Col sm={4} >
                      <label>First name:</label>
                    </Col>
                    <Col sm={6}>
                      <Control.text
                        className='input-group input-group-lg'
                        placeholder='Enter Your Name'
                        model='.firstName'
                        validators={{
                          required,
                          maxLength: maxLength(15)
                        }}
                      />
                      <Errors
                        className='errors'
                        model='forms.join.firstName'
                        show='touched'
                        messages={{
                          required: 'Required',
                          maxLength: ' Must be 15 characters or less'
                        }}
                      />
                    </Col>
                  </div>

                  <div className='titleJoinForm'>
                    <Col sm={4} >
                      <label>Last Name:</label>
                    </Col>
                    <Col sm={6}>
                      <Control.text
                        placeholder='Enter Your Family Name'
                        className='input-group input-group-lg'
                        model='.lastName'
                        validators={{
                          required,
                          maxLength: maxLength(15)
                        }}
                      />
                      <Errors
                        className='errors'
                        model='forms.join.lastName'
                        show='touched'
                        messages={{
                          required: 'Required',
                          maxLength: ' Must be 15 characters or less'
                        }}
                      />
                    </Col>
                  </div>

                  <div className='titleJoinForm'>
                    <Col sm={4} >
                      <label>Email:</label>
                    </Col>
                    <Col sm={6}>
                      <Control.text
                        placeholder='Enter Your Email'
                        className='input-group input-group-lg'
                        model='.email'
                        validators={{
                          required,
                          validEmail: (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)
                        }}
                      />
                      <Errors
                        className='errors'
                        model='forms.join.email'
                        show='touched'
                        messages={{
                          required: 'Required',
                          validEmail: ' Invalid email address'
                        }}
                      />
                    </Col>
                  </div>

                  <div className='titleJoinForm'>
                    <Col sm={4} >
                      <label>Phone Number:</label>
                    </Col>
                    <Col sm={6}>
                      <Control.text
                        placeholder='Enter Your Phone Number'
                        className='input-group input-group-lg'
                        model='.phoneNumber'
                        validators={{
                          required,
                          isNumber,
                          maxLength: maxLength(15)
                        }}
                      />
                      <Errors
                        className='errors'
                        model='forms.join.phoneNumber'
                        show='touched'
                        messages={{
                          required: 'Required',
                          isNumber: ' Must be a phone number'
                        }}
                      />
                    </Col>
                  </div>
                  <div className='titleJoinForm'>
                    <Col sm={4} >
                      <label>Password:</label>
                    </Col>
                    <Col sm={6}>
                      <Control
                        placeholder='Enter Your Password'
                        className='input-group input-group-lg'
                        type='password'
                        model='.password'
                        validators={{
                          required,
                          maxLength: maxLength(15)
                        }}
                      />
                      <Errors
                        className='errors'
                        model='forms.join.password'
                        show='touched'
                        messages={{
                          required: 'Required',
                          maxLength: ' Must be 15 characters or less'
                        }}
                      />
                    </Col>
                  </div>

                  <div className='titleJoinForm'>
                    <Col sm={4} >
                      <label>Confirm Password:</label>
                    </Col>
                    <Col sm={6}>
                      <Control
                        placeholder='Re-Enter Your Password Here'
                        className='input-group input-group-lg'
                        type='password'
                        model='.confirmPassword'
                        validators={{
                          required,
                          maxLength: maxLength(15)
                        }}
                      />

                      <Errors
                        className='errors'
                        model='forms.join.confirmPassword'
                        show='touched'
                        messages={{
                          required: 'Required',
                          maxLength: ' Must be 15 characters or less'
                        }}
                      />

                      <Errors
                        model='forms.join'
                        messages={{
                          passwordMatch: 'Password need to match'
                        }}
                    />
                    </Col>
                  </div>
                  <div>
                    <Col sm={12} >
                      <button className='submitJoinBtn btn btn-default dropdown-toggle' type='submit'>Add</button>
                      <div id='successful-signup-confirm' />
                    </Col>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

Join.propTypes = {
  signUp: PropTypes.func.isRequired
}

export default Join
