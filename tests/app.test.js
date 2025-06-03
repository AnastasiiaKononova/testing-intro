const request = require('supertest');
const app = require('./../index');

describe('Testing app', () => {
  it('response from GET / should be 200 "Ok"', done => {
    request(app).get('/').expect(200).expect('Ok').end(done);
  });
});