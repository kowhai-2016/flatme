import React from 'react'
import { Control, Errors, Form } from 'react-redux-form'
import { Col } from 'react-bootstrap'

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
      <Form model='forms.join'
        onSubmit={this.handleSubmit}
        validators={{
          '': {
            passwordMatch
          }
        }}
      >
        <div className='globalJoinForm'>
          <div className='titleJoinForm'>
            <Col sm={6} >
              <label>First name:</label>
            </Col>
            <Col sm={6} >
              <Control.text
                className='input-group input-group-lg'
                placeholder='Enter Your Name'
                model='.firstName'
                validators={{
                  required,
                  maxLength: maxLength(15)
                }}
              />
            </Col>
            <Errors
              className='errors'
              model='forms.join.firstName'
              show='touched'
              messages={{
                required: 'Required',
                maxLength: ' Must be 15 characters or less'
              }}
            />
          </div>

          <div className='titleJoinForm'>
            <Col sm={6} >
              <label>Last Name:</label>
            </Col>
            <Col sm={6} >
              <Control.text
                placeholder='Enter Your Family Name'
                className='input-group input-group-lg'
                model='.lastName'
                validators={{
                  required,
                  maxLength: maxLength(15)
                }}
              />
            </Col>
            <Errors
              className='errors'
              model='forms.join.lastName'
              show='touched'
              messages={{
                required: 'Required',
                maxLength: ' Must be 15 characters or less'
              }}
            />
          </div>

          <div className='titleJoinForm'>
            <Col sm={6} >
              <label>Email:</label>
            </Col>
            <Col sm={6} >
              <Control.text
                placeholder='Enter Your Email'
                className='input-group input-group-lg'
                model='.email'
                validators={{
                  required,
                  validEmail: (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)
                }}
              />
            </Col>
            <Errors
              className='errors'
              model='forms.join.email'
              show='touched'
              messages={{
                required: 'Required',
                validEmail: ' Invalid email address'
              }}
            />
          </div>

          <div className='titleJoinForm'>
            <Col sm={6} >
              <label>Phone Number:</label>
            </Col>
            <Col sm={6} >
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
            </Col>
            <Errors
              className='errors'
              model='forms.join.phoneNumber'
              show='touched'
              messages={{
                required: 'Required',
                isNumber: 'Must be a phone number'
              }}
            />
          </div>

          <div className='titleJoinForm'>
            <Col sm={6} >
              <label>Password:</label>
            </Col>
            <Col sm={6} >
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
            </Col>
            <Errors
              className='errors'
              model='forms.join.password'
              show='touched'
              messages={{
                required: 'Required',
                maxLength: ' Must be 15 characters or less'
              }}
            />
          </div>

          <div className='titleJoinForm'>
            <Col sm={6} >
              <label>Confirm Password:</label>
            </Col>
            <Col sm={6} >
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
            </Col>
            <Errors
              className='errors'
              model='forms.join.confirmPassword'
              show='touched'
              messages={{
                required: 'Required',
                maxLength: ' Must be 15 characters or less'
              }}
            />
          </div>

          <Errors
            model='forms.join'
            messages={{
              passwordMatch: 'Password need to match'
            }}
            />
          <button className='submitJoinBtn' type='submit'>Add</button>
          <div id='successful-signup-confirm' />
        </div>
      </Form>
    )
  }
})

export default Join
