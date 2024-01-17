const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data/dataMhs.json');

const readDataPameran = () => {
    try {
        const data = fs.readFileSync(dataPath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Gagal membaca list data pameran:', err);
        return {};
    }
}

// get list pameran
const getListPameran = (req, res) => {
    const dataPameran = readDataPameran();
    res.json(dataPameran);
}

// get angkatan
const getAngkatan = (req, res) => {
    const dataPameran = readDataPameran();
    const { angkatan } = req.params;

    const mhsAngkatan = Object.values(dataPameran).filter(mahasiswa => mahasiswa.angkatan === parseInt(angkatan));

    if (mhsAngkatan.length > 0) {
        res.json(mhsAngkatan);
    } else {
        res.status(404).json({ status: 'Angkatan tidak ditemukan', nama: 'Data tidak ditemukan.' });
    }
}

module.exports = {
    getListPameran,
    getAngkatan
}