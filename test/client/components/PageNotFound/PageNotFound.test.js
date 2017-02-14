/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import PageNotFound from '../../../../src/client/components/PageNotFound'

test('PageNotFound renders logout correctly', () => {
  const tree = renderer.create(
    <PageNotFound />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
