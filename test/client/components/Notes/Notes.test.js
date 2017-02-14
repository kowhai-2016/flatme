/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import Notes from '../../../../src/client/components/Notes'

test('Notes renders correctly', () => {
  const fetchNotes = () => {}
  const notes = []
  const params = {
    id: '1'
  }
  const tree = renderer.create(
    <Notes
      fetchNotes={fetchNotes}
      notes={notes}
      params={params}
      />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
