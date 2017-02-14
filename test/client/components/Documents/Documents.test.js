/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import Documents from '../../../../src/client/components/Documents'

test('Documents renders correctly', () => {
  const documents = []
  const params = {
    id: '1'
  }
  const tree = renderer.create(
    <Documents documents={documents} params={params} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
