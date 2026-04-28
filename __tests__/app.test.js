const request = require('supertest');
const app = require('../index');

describe('Basic API Tests', () => {

  test('GET / should return hello message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello World');
  });

  test('GET /healthz should return OK', async () => {
    const res = await request(app).get('/healthz');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('OK');
  });

});