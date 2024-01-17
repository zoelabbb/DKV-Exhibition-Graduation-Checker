// tests/index.test.js

const request = require('supertest');
const app = require('../src/index');

describe('Server Setup Tests', () => {
    test('Server is running at http://localhost:3000', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(404); // Atau kode status lain yang sesuai
    });
});
