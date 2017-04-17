/* eslint-env jest */

import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

import App from '../../../../src/client/components/App'

const mockStore = configureStore([])

test('App renders login correctly', () => {
  const store = mockStore({
    account: {
      user: {
        id: 1
      }
    }
  })
  const tree = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('App renders logout correctly', () => {
  const store = mockStore({account: {}})
  const tree = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
