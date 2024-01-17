// tests/routes/listPameranRoutes.test.js

const request = require('supertest');
const express = require('express');
const listPameranRoutes = require('../../src/routes/listPameranRoutes');
const listPameranController = require('../../src/controllers/listPameranController');
const mhsData = require('../../test/data/dataMhs.json');

// Mock the listPameranController methods
jest.mock('../../src/controllers/listPameranController', () => ({
    getListPameran: jest.fn(),
    getAngkatan: jest.fn(),
}));

const app = express();
app.use('/api/list', listPameranRoutes);

describe('List Pameran Routes Tests', () => {
    beforeEach(() => {
        // Reset the mock implementation before each test
        jest.clearAllMocks();
    });

    test('GET /api/list should call listPameranController.getListPameran', async () => {
        // Mock the implementation of listPameranController.getListPameran
        listPameranController.getListPameran.mockReturnValue(Object.values(mhsData));

        // Send a GET request to /api/list
        const response = await request(app).get('/api/list');

        // Ensure that listPameranController.getListPameran is called
        expect(listPameranController.getListPameran).toHaveBeenCalled();

        // Ensure that the response body matches the expected result
        expect(response.body).toEqual(Object.values(data));
    });

    test('GET /api/list/angkatan/:angkatan should call listPameranController.getAngkatan', async () => {
        const angkatan = 2019;

        // Mock the implementation of listPameranController.getAngkatan
        listPameranController.getAngkatan.mockReturnValue([]);

        // Send a GET request to /api/list/angkatan/:angkatan
        const response = await request(app).get(`/api/list/angkatan/${angkatan}`);

        // Ensure that listPameranController.getAngkatan is called with the correct parameter
        expect(listPameranController.getAngkatan).toHaveBeenCalledWith(expect.objectContaining({
            params: { angkatan: angkatan.toString() },
        }), expect.any(Object));

        // Ensure that the response body matches the expected result
        expect(response.body).toEqual([]);
    }, 15000);
});
