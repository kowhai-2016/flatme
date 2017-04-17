/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import Categories from '../../../../src/client/components/Flat/Categories'

test('Categories renders correctly', () => {
  const tree = renderer.create(
    <Categories />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
