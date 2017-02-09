/* eslint-env jest */

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import React from 'react'

import Flat from '..'

test('Flat renders correctly', () => {
  const fetchFlat = () => {}
  const wrapper = shallow(<Flat fetchFlat={fetchFlat} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})
