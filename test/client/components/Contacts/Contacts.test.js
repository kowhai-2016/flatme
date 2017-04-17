/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import Contacts from '../../../../src/client/components/Contacts'

test('Contacts renders correctly', () => {
  const tree = renderer.create(
    <Contacts />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
