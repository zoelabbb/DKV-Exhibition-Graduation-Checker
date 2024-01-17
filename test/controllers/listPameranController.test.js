// tests/controllers/listPameranController.test.js

const fs = require('fs');
const path = require('path');
const { getListPameran, getAngkatan } = require('../../src/controllers/listPameranController');

// Mocking fs.readFileSync
jest.mock('fs');

describe('List Pameran Controller Tests', () => {
  beforeEach(() => {
    // Set up mock for fs.readFileSync
    fs.readFileSync.mockReturnValue('{"123456": {"angkatan": 2020}, "789012": {"angkatan": 2019}}');
  });

  test('getListPameran should return a list of pameran', () => {
    const req = {};
    const res = {
      json: jest.fn(),
    };

    getListPameran(req, res);

    // Ensure that fs.readFileSync is called with the correct path
    expect(fs.readFileSync).toHaveBeenCalledWith(expect.stringContaining('data/dataMhs.json'), 'utf8');

    // Ensure that res.json is called with the correct data
    expect(res.json).toHaveBeenCalledWith({ "123456": { "angkatan": 2020 }, "789012": { "angkatan": 2019 } });
  });

  test('getAngkatan should return mahasiswa of a specific angkatan', () => {
    const req = {
      params: { angkatan: '2020' },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    getAngkatan(req, res);

    // Ensure that fs.readFileSync is called with the correct path
    expect(fs.readFileSync).toHaveBeenCalledWith(expect.stringContaining('data/dataMhs.json'), 'utf8');

    // Ensure that res.json is called with the correct data
    expect(res.json).toHaveBeenCalledWith([{ "angkatan": 2020 }]);
  });

  test('getAngkatan should handle not found angkatan', () => {
    const req = {
      params: { angkatan: '2021' },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    getAngkatan(req, res);

    // Ensure that fs.readFileSync is called with the correct path
    expect(fs.readFileSync).toHaveBeenCalledWith(expect.stringContaining('data/dataMhs.json'), 'utf8');

    // Ensure that res.status and res.json are called with the correct data
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ status: 'Angkatan tidak ditemukan', nama: 'Data tidak ditemukan.' });
  });
});
