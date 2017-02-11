import React from 'react'
import { Control, Errors, Form } from 'react-redux-form'
import { Col, FormControl } from 'react-bootstrap'

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
        <div className='titleJoinForm'>
          <Col sm={6} md={2}>
            <label>First name:</label>
          </Col>
          <Col sm={6} md={10}>
            <Control.text
              className='formShape'
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
          <Col sm={6} md={2}>
            <label>Last Name:</label>
          </Col>
          <Col sm={6} md={10}>
            <Control.text
              className='formShape'
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
            <Col sm={6} md={2}>
              <label>Email:</label>
            </Col>
            <Col sm={6} md={10}>
              <Control.text
                className='formShape'
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
            <Col sm={6} md={2}>
              <label>Phone Number:</label>
            </Col>
            <Col sm={6} md={10}>
              <Control.text
                className='formShape'
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
            <Col sm={6} md={2}>
              <label>Password:</label>
            </Col>
            <Col sm={6} md={10}>
              <Control
                className='formShape'
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
            <Col sm={6} md={2}>
              <label>Confirm Password:</label>
            </Col>
            <Col sm={6} md={10}>
              <Control
                className='formShape'
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
        <button type='submit'>Add</button>
        <div id='successful-signup-confirm' />
      </Form>
    )
  }
})

export default Join
