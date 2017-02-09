/* eslint-env jest */

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import React from 'react'

import User from '..'

test('User renders correctly', () => {
  const fetchUser = () => {}
  const wrapper = shallow(<User fetchUser={fetchUser} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})
