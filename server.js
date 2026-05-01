const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;


// Middleware untuk file statis
app.use(express.static('public'));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Route untuk halaman utama
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/index.html'));
});

// Route untuk halaman about TKJ
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/about.html'));
});

// Route untuk halaman guru
app.get('/teachers', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/teachers.html'));
});

// Route untuk halaman alumni
app.get('/alumni', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/alumni.html'));
});

// Route untuk halaman materi
app.get('/materials', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/materials.html'));
});

// API endpoint untuk data (simulasi database)
app.get('/api/teachers', (req, res) => {
    const teachers = [
        { name: 'Dr. Ahmad Fauzi, S.Kom., M.Kom.', subject: 'Sistem Operasi Linux', photo: 'teacher1.jpg' },
        { name: 'Ibu Siti Nurhaliza, S.T., M.T.', subject: 'Jaringan Komputer', photo: 'teacher2.jpg' },
        { name: 'Bapak Budi Santoso, S.ST., M.Eng.', subject: 'Robotik & IoT', photo: 'teacher3.jpg' },
        { name: 'Ibu Dewi Anggraeni, S.Kom.', subject: 'Keamanan Jaringan', photo: 'teacher4.jpg' }
    ];
    res.json(teachers);
});

// app.get('/api/alumni', (req, res) => {
//     const alumni = [
//         { name: 'Rizki Pratama', task: 'Instalasi Server Debian', year: '2024', photo: 'ujikom1.jpg' },
//         { name: 'Nadia Putri', task: 'Konfigurasi Mikrotik & Hotspot', year: '2024', photo: 'ujikom2.jpg' },
//         { name: 'Andi Wijaya', task: 'Troubleshooting Jaringan WAN', year: '2024', photo: 'ujikom3.jpg' },
//         { name: 'Sari Mulyani', task: 'Rancang Bangun Jaringan Lokal', year: '2024', photo: 'ujikom4.jpg' }
//     ];
//     res.json(alumni);
// });



app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});