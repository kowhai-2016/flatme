/* eslint-env jest */

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import React from 'react'

import Home from '..'

test('Home renders correctly', () => {
  const wrapper = shallow(<Home />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})
