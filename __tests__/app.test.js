const request = require('supertest');
const app = require('../server/app');
const dummyData = require('../__mocks__/dummyData');

jest.mock('node-fetch');

test('get "/" should send redirect', () => request(app).get('/').expect(302));
test('get "/organization/Facebook/funding-rounds" should return data', () => request(app).get('/organization/Facebook/funding-rounds').expect(dummyData));
test('get /people should return data', () => request(app).get('/people/Facebook').expect(dummyData));
test('get /api/funding_round should return data', () => request(app).get('/api/funding_round').expect(dummyData));
