/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import Dashboard from '../../../../src/client/components/Home/Dashboard'

test('Dashboard renders correctly', () => {
  const createNewFlat = () => {}
  const fetchUserFlats = () => {}
  const joinFlat = () => {}
  const user = {}
  const tree = renderer.create(
    <Dashboard
      createNewFlat={createNewFlat}
      fetchUserFlats={fetchUserFlats}
      joinFlat={joinFlat}
      user={user}
      />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
