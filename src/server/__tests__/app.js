/* eslint-env jest */

const request = require('supertest')

const app = require('../app')

test('html response from /', done => {
  request(app)
    .get('/')
    .expect('Content-Type', 'text/html')
    .expect(200, done)
})

test('everything else responds with 404', done => {
  request(app)
    .get('/foo/bar')
    .expect(404, done)
})
