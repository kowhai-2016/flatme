/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import About from '../../../../src/client/components/About'

test('About renders correctly', () => {
  const tree = renderer.create(
    <About />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
