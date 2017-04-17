/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import JoinRequest from '../../../../src/client/components/Flat/JoinRequest'

test('JoinRequest renders correctly', () => {
  const acceptJoinRequest = () => {}
  const request = {
    id: 1,
    user: {
      id: 1,
      firstName: 'First',
      lastName: 'Last'
    }
  }
  const ignoreJoinRequest = () => {}
  const tree = renderer.create(
    <JoinRequest
      acceptJoinRequest={acceptJoinRequest}
      request={request}
      ignoreJoinRequest={ignoreJoinRequest}
      />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
