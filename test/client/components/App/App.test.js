/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'

import App from '../../../../src/client/components/App'

describe('App', () => {
  test('should render Navigation component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.text().includes('Navigation')).toBe(true)
  })
})
