/* eslint-env jest */

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import React from 'react'

import PageNotFound from '..'

test('PageNotFound renders correctly', () => {
  const wrapper = shallow(<PageNotFound />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})
