/* eslint-env jest */

import reducer from '../../../src/client/reducers/users'

test('fetch user reducer', () => {
  const actual = reducer(
    {},
    {
      type: 'FETCH_USER_SUCCESS',
      user: {
        id: 1
      }
    }
  )
  expect(actual).toEqual({'1': {id: 1}})
})

test('users reducer default', () => {
  const actual = reducer(
    {
      '1': {id: 1}
    },
    {
      type: 'NOT_AN_ACTION'
    }
  )
  expect(actual).toEqual({'1': {id: 1}})
})
