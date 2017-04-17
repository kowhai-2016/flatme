/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import Home from '../../../../src/client/components/Home'

test('Home renders logout correctly', () => {
  const tree = renderer.create(
    <Home account={{}} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
