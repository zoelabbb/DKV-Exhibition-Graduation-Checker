const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data/dataMhs.json');

// Membaca data kelulusan dari json
const readDataKelulusan = () => {
    try {
        const data = fs.readFileSync(dataPath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Gagal membaca data kelulusan:', err);
        return {};
    }
};

// Kontroller untuk memeriksa kelulusan berdasarkan nomor peserta
const getPengecekanKelulusan = (req, res) => {
    const dataKelulusan = readDataKelulusan();
    const { nimMahasiswa } = req.params;

    const getMhsNim = Object.values(dataKelulusan).filter(mahasiswa => mahasiswa.nim === parseInt(nimMahasiswa));

    if (getMhsNim.length > 0) {
        res.json(getMhsNim);
    } else {
        res.status(404).json({ status: 'NIM / Mahasiswa tidak ditemukan', nama: 'Data tidak ditemukan.' });
    }
};

module.exports = {
    getPengecekanKelulusan,
    readDataKelulusan
};
