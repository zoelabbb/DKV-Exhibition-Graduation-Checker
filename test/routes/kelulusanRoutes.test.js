// tests/controllers/kelulusanController.test.js

const fs = require('fs');
const path = require('path');
const { getPengecekanKelulusan, readDataKelulusan } = require('../../src/controllers/kelulusanController');
const mhsData = require('../../test/data/dataMhs.json');

// Mocking fs.readFileSync
jest.mock('fs');

describe('Kelulusan Controller Tests', () => {
    beforeEach(() => {
        // Set up mock for fs.readFileSync
        fs.readFileSync.mockReturnValue(JSON.stringify(mhsData));
    });

    test('getPengecekanKelulusan should return kelulusan data for a specific nomorPeserta', () => {
        const req = {
            params: { nomorPeserta: '123456' },
        };
        const res = {
            json: jest.fn(),
        };

        getPengecekanKelulusan(req, res);

        // Ensure that fs.readFileSync is called with the correct path
        expect(fs.readFileSync).toHaveBeenCalledWith(expect.stringContaining('data/dataMhs.json'), 'utf8');

        // Ensure that res.json is called with the correct data
        expect(res.json).toHaveBeenCalledWith({
            "status_kelulusan": "Lulus Pameran",
            "nama": "Raisa Clayton",
            "nim": 123456,
            "angkatan": 2020,
            "prodi": "Desain Komunikasi Visual",
            "nilai_pameran": "A+",
            "tema_pameran": "Karya Tulis Ilmiah",
            "value_status_kelulusan": true
        });
    });

    test('getPengecekanKelulusan should handle not found nomorPeserta', () => {
        const req = {
            params: { nomorPeserta: '999999' },
        };
        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
        };

        getPengecekanKelulusan(req, res);

        // Ensure that fs.readFileSync is called with the correct path
        expect(fs.readFileSync).toHaveBeenCalledWith(expect.stringContaining('data/dataMhs.json'), 'utf8');

        // Ensure that res.status and res.json are called with the correct data
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ status: 'NIM / Mahasiswa tidak ditemukan', nama: 'Data tidak ditemukan.' });
    });

    test('readDataKelulusan should return parsed kelulusan data from json', () => {
        // Call the original function since we are not mocking fs.readFileSync here
        const result = readDataKelulusan();

        // Ensure that the function returns the correct parsed data
        expect(result).toEqual(mhsData);
    });
});
