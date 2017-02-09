import React from 'react'
import { Control, Errors, Form } from 'react-redux-form'

const required = val => val && val.length
const maxLength = length => val => val && val.length <= length
const passwordMatch = vals => vals.confirmPassword === vals.password

const Join = React.createClass({
  handleSubmit (values) {
    console.log('Submit Join form:', values)
  },
  render () {
    return (
      <Form model='forms.join'
        onSubmit={values => this.handleSubmit(values)}
        validators={{
          '': {
            passwordMatch
          }
        }}
        >
        <div className='four columns'>
          <label>First name:</label>
          <Control.text
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
        </div>

        <div className='four columns'>
          <label>Last name:</label>
          <Control.text model='.lastName'
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
        </div>

        <div className='four columns'>
          <label>Email:</label>
          <Control.text model='.email'
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
        </div>

        <div className='four columns'>
          <label>Phone Number:</label>
          <Control.text model='.phoneNumber'
            validators={{
              required,
              maxLength: maxLength(15)
            }}
          />
          <Errors
            className='errors'
            model='forms.join.phoneNumber'
            show='touched'
            messages={{
              required: 'Required',
              maxLength: ' Must be 15 characters or less'
            }}
          />
        </div>

        <div className='four columns'>
          <label>Password:</label>
          <Control type='password' model='.password'
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
        </div>

        <div className='four columns'>
          <label>Confirm Password:</label>
          <Control type='password' model='.confirmPassword'
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
        </div>
        <Errors model='forms.join'
          messages={{
            passwordMatch: 'Password need to match'
          }} />
        <button type='submit'>Add</button>
      </Form>
    )
  }
})

export default Join
