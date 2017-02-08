/* eslint-env jest */

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import React from 'react'

import Join from '..'

test('Join renders correctly', () => {
  const wrapper = shallow(<Join />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})
