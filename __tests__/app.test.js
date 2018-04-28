const request = require('supertest');
const app = require('../server/app');

jest.mock('node-fetch');

test('get "/" should send redirect', () => request(app).get('/').expect(302));
test('get /organization/:company/funding-rounds should return data', () => );
test('get /overview should return data', () => true);
test('get /api/funding_round should return data', () => true);
