/* eslint-env jest */

import { render } from 'enzyme'
import React from 'react'

import Flat from '../../../../src/client/components/Flat'

describe('Flat', () => {
  test('should render categories-bar', () => {
    const fetchFlat = () => {}
    const flat = {
      flatName: 'Flat'
    }
    const params = {
      id: '1'
    }
    const wrapper = render(<Flat fetchFlat={fetchFlat} flat={flat} params={params} />)
    expect(wrapper.find('.categories-bar').length).toBe(1)
  })
})
