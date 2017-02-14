import React from 'react'
import { track, Control, Form, Errors } from 'react-redux-form'

import './style.css'
const maxLength = length => val => val && val.length <= length
const isNumber = val => !isNaN(Number(val))

const Edit = React.createClass({
  onSubmit (values) {
    console.log(values)
    this.props.updateUser(values)
  },

  render () {
    const { user } = this.props

    return (
        <div>
        <div className='text-center'>
          <h1>Update your profile</h1>
        </div>
      <Form model="forms.account.user"
        onSubmit={this.onSubmit}
        >
        <div className='field'>
          <label>First name:</label>
          <Control.text
            model='.firstName'
            validators={{
              maxLength: maxLength(15)
            }}
          />
        <Errors
          className='errors'
          model='.firstName'
          show='touched'
          messages={{
            maxLength: 'Must be 15 characters or less'
          }}
        />
        </div>

        <div className='field'>
          <label>Last name:</label>
          <Control.text
            model='.lastName'
            validators={{
              maxLength: maxLength(15)
              }}
          />
          <Errors
            className='errors'
            model='.lastName'
            show='touched'
            messages={{
              maxLength: 'Must be 15 characters or less'
            }}
          />
        </div>

        <div className='field'>
          <label>Phone number:</label>
            <Control.text
              model='.phoneNumber'
              validators={{
                isNumber
                }}
            />
            <Errors
              className='errors'
              model='.phoneNumber'
              show='touched'
              messages={{
                isNumber: 'Must be Number'
              }}
            />
        </div>

        <div className='field'>
          <label>Email:</label>
            <Control.text
                model='.email'
                validators={{
                  validEmail: (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)
                  }}
              />
              <Errors
                className='errors'
                model='.email'
                show='touched'
                messages={{
                  validEmail: ' Invalid email address'
                }}
              />
        </div>
        <button type='submit'>Update</button>
        <Control.reset  model="forms.account.user" type='reset'>
          Reset
        </Control.reset>
      </Form>
      </div>
    )
  }
})

export default Edit
