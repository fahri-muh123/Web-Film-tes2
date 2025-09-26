# Movie Explore 🎬

Aplikasi web modern untuk menjelajahi dunia film pahlawan yang dibangun dengan Public API dari OMDB, React, Vite, dan Tailwind CSS. Temukan ratusan film pahlawan dengan antarmuka dark/light mode yang menarik.

## ✨ Fitur Utama

- 🎥 **Penjelajahan Film** - Jelajahi dan cari film dari database yang luas
- 🌙 **Mode Gelap/Terang** - Beralih antara tema gelap dan terang
- 🔍 **Pencarian Lanjutan** - Temukan film berdasarkan judul, tahun, dan lainnya
- 📱 **Desain Responsif** - Dioptimalkan untuk semua perangkat
- ⚡ **Performansi Cepat** - Dibangun dengan Vite untuk kecepatan optimal
- 🎨 **UI Modern** - Efek glass morphism dan animasi yang indah
- 📊 **Penyortiran & Filter** - Urutkan berdasarkan tahun, judul, rating
- 🔄 **Paginasi** - Navigasi mudah melalui hasil film
- 🏷️ **Detail Film** - Halaman informasi film yang komprehensif

## 🛠️ Teknologi yang Digunakan

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **API**: OMDB API
- **Icons**: Heroicons, PNG Kustom
- **Deployment**: Vercel

## 🚀 Memulai dengan Cepat

### Persyaratan Sistem

- Node.js (versi 14 atau lebih tinggi)
- npm atau yarn

### Instalasi

1. **Instal Vite+React**
```bash
npm create vite@latest
my-project-app
React
JavaScript
```

2. **Install dependencies**
```bash
npm install
```

3. **Jalankan server development**
```bash
npm run dev
```

4. **Buka browser**
Akses `http://localhost:3000`

5. **Install Tailwind CSS**
```bash
npm install tailwindcss @tailwindcss/vite
```
6. **Konfigurasi Tailwind CSS di file vite.config.js**

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    port: 3000,
    open: true
  }
})

7. **Update file index.css**

@import "tailwindcss";

## 📁 Struktur Penting Project

```
movie-explore/
├── node_modules
├── public/
│   ├── icon1.png
│   └── vite.svg
├── src/
│   ├──assets
│   |   ├── react.svg
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   ├── Loading.jsx
│   │   ├── Error.jsx
│   │   └── DarkModeToggle.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── MovieDetail.jsx
│   ├── hooks/
│   │   └── useMovies.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Perintah yang Tersedia

- `npm run dev` - Menjalankan server development
- `npm run build` - Build untuk production
- `npm run preview` - Preview build production
- `npm run lint` - Menjalankan ESLint

## 🌐 Integrasi API

Project ini menggunakan [OMDB API](http://www.omdbapi.com/) untuk mengambil data film. Anda perlu:

1. Kunjungi [OMDB API](http://www.omdbapi.com/apikey.aspx)
2. Request API key gratis, dengan cara Registrasi 
3. Gunakan Di dalam file `js atau .env` Anda

## 🎨 Skema Warna

### Mode Terang
- Latar Belakang: `#ffffff`
- Teks: `#1a1a1a`
- Kartu: `#f8fafc`
- Warna Primer: `#0ea5e9`

### Mode Gelap
- Latar Belakang: `#0f172a`
- Teks: `#f1f5f9`
- Kartu: `#1e293b`
- Warna Primer: `#0ea5e9`

## 📱 Breakpoint Responsif

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Kustomisasi

### Menambah Fitur Baru
1. Buat komponen baru di `src/components/`
2. Tambah halaman baru di `src/pages/`
3. Update routes di `src/App.jsx`

### Modifikasi Styling
- Modifikasi `src/index.css` untuk style global
- Gunakan class Tailwind untuk style spesifik komponen

## 🚀 Deployment

### Deployment ke Vercel
```bash
npm install -g vercel
vercel
```

### Platform Lain
Project dapat di-deploy di layanan hosting static apapun:
- GitHub Pages
- Firebase Hosting
- AWS S3
- Heroku

## 🐛 Pemecahan Masalah

### Masalah Umum

1. **Error API Key**
   - Pastikan API key sudah benar di `js`
   - Periksa apakah API key memiliki permission yang tepat

2. **Masalah Styling**
   - Clear cache browser
   - Restart server development
   - Periksa konfigurasi Tailwind CSS

3. **Error Build**
   - Update dependencies: `npm update`
   - Clear node_modules: `rm -rf node_modules && npm install`

## 📈 Optimisasi Performa

- **Code Splitting**: React.lazy untuk splitting berdasarkan route
- **Optimisasi Gambar**: Lazy loading untuk poster film
- **Caching API**: Caching data film yang efisien
- **Optimisasi Bundle**: Optimisasi built-in Vite



### Detail Anggota Kelompok

**Kelompok-8**: Movie Explorers

**Anggota**:
1. **Thifaal Fauzan Oktaviansyah Irawan** - Ketua Kelompok
   - Bertanggung jawab atas keberhasilan project dan memastikan pekerjaan berjalan dengan lancar, membantu mengembangkan komponen juga

2. **Fahri Muhammadani** - Frontend Developer
   - Bertanggung jawab pada desain UI/UX dan styling

3. **M. Nouval Rafif Al Farezy** - Intergrasi
   - Bertanggung jawab pada penggabungan beberapa komponen, sistem, dan bagian yang terpisah menjadi satu

4. **Gavindra Mohammad Athallah** - Frontend Developer
   - Bertanggung jawab pada pengembangan komponen

5. **Ihram Gema Baihaqi** - Deployment 
   - Bertanggung jawab pada proses menerapkan/menerbitkan aplikasi yang sudah dikembangkan ke lingkungan production (server) sehingga dapat diakses oleh pengguna.

## 🔗 Tautan Penting

- **Demo Live**: [https://movie-explore-demo.vercel.app](https://movie-explore-demo.vercel.app)
- **Dokumentasi API**: [Dokumentasi OMDB API](http://www.omdbapi.com/)
- **Repository GitHub**: [https://github.com/username-anda/movie-explore](https://github.com/username-anda/movie-explore)

## 🎉 Ucapan Terima Kasih

- OMDB API untuk menyediakan data film
- Tailwind CSS untuk utility classes yang luar biasa
- Tim Vite untuk build tooling yang excellent
- Komunitas React untuk perbaikan terus-menerus

---

**Movie Explore** - Temukan film favorit Anda berikutnya! 🍿

Untuk pertanyaan atau dukungan, silakan buat issue di GitHub atau hubungi tim pengembangan.