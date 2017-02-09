/* eslint-env jest */

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import React from 'react'

import App from '../../../../src/client/components/App'

test('App renders correctly', () => {
  const wrapper = shallow(<App />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})
