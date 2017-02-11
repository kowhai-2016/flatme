/* eslint-env jest */

import { render } from 'enzyme'
import React from 'react'

import Categories from '../../../../src/client/components/Flat/Categories'

describe('Categories', () => {
  test('should render Categories component', () => {
    const wrapper = render(<Categories />)
    expect(wrapper.text().includes('Contacts')).toBe(true)
  })
})
