/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import App from '../../../../src/client/components/App'

const mockStore = configureStore([])

test('App renders correctly', () => {
  const store = mockStore({account: {}})
  const tree = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
