const request = require('supertest');
const app = require('./../index');

describe('Testing app', () => {
  it('response from GET / should be 200 "Ok"', (done) => {
    request(app).get('/').expect(200).expect('Ok').end(done);
  });

  // Протестувати GET /users/4 -> 200 {name: "Test"}Add commentMore actions
  it('response from GET /users/4 expects 200 {name: "Test"}', (done) => {
    request(app).get('/users/4').expect(200).expect({ name: 'Test' }).end(done);
  });
});
