/* eslint-env jest */

import reducer from '../../../src/client/reducers/account'

test('account login reducer', () => {
  const actual = reducer(
    {},
    {
      type: 'LOGIN_SUCCESS',
      user: {
        id: 1
      }
    }
  )
  expect(actual).toEqual({user: {id: 1}})
})

test('account logout reducer', () => {
  const actual = reducer(
    {user: {id: 1}},
    {
      type: 'LOGOUT_SUCCESS'
    }
  )
  expect(actual).toEqual({})
})
