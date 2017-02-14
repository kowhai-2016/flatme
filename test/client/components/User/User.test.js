/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import User from '../../../../src/client/components/User'

test('User renders logout correctly', () => {
  const fetchUser = () => {}
  const tree = renderer.create(
    <User fetchUser={fetchUser} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
