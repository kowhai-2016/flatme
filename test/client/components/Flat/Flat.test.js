/* eslint-env jest */

import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

import Flat from '../../../../src/client/components/Flat'

const mockStore = configureStore([])

test('Flat renders correctly', () => {
  const acceptJoinRequest = () => {}
  const fetchFlat = () => {}
  const ignoreJoinRequest = () => {}
  const params = {id: '1'}
  const store = mockStore({
    flats: {
      '1': {}
    }
  })
  const tree = renderer.create(
    <Provider store={store}>
      <Flat
        acceptJoinRequest={acceptJoinRequest}
        fetchFlat={fetchFlat}
        ignoreJoinRequest={ignoreJoinRequest}
        params={params}
        />
    </Provider>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
