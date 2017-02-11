/* eslint-env jest */

import { shallow, render } from 'enzyme'
import React from 'react'

import Home from '../../../../src/client/components/Home'

describe('Home', () => {
  test('if logged out render Landing component', () => {
    const account = {}
    const wrapper = shallow(<Home account={account} />)
    expect(wrapper.find('Landing').length).toBe(1)
  })
  test('if logged in render Dashboard component', () => {
    const account = {user: {}}
    const wrapper = render(<Home account={account} />)
    console.log(wrapper)
    expect(wrapper.find('Dashboard').length).toBe(1)
  })
})
