/* eslint-env jest */

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import React from 'react'

import Flat from '..'

test('Flat renders correctly', () => {
  const wrapper = shallow(<Flat />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})
