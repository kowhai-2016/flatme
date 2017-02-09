/* eslint-env jest */

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import React from 'react'

import Home from '../../../../src/client/components/Home'

const account = {}

test('Home renders correctly', () => {
  const wrapper = shallow(<Home account={account} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})
