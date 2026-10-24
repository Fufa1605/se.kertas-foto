# SE.KERTASFOTO — DOKUMENTASI LENGKAP & PANDUAN PENGELOLAAN
## Website Statis Photobooth Kreatif & Studio Cetak Kenangan Fisik (100% Bahasa Indonesia & SEO Teroptimasi)

Selamat datang di repositori website resmi **Se.kertasfoto** (*Studio Photobooth Kreatif & Kenangan Cetak Fisik Jabodetabek*).

Website ini dibangun dengan pendekatan estetika modern bergaya studio indie (*neo-brutalist* sentuhan tangan manusia, ramah, dan menggemaskan):
- 🎨 **Palet Warna Studio Penuh Karakter**:
  - Warna Utama (*Primary*): `#5e17eb` (*Electric Studio Violet*)
  - Warna Sekunder (*Secondary*): `#9047ca` (*Orchid Violet*)
  - Aksen Kontras (*Accent*): `#FFDE59` (*Sunshine Yellow*)
- 🏷️ **Sentuhan Scrapbook & Washi Tape**: Efek selotip washi tape bertekstur robek alami yang menempel di foto-foto portofolio.
- ✍️ **Tulisan Tangan Personal**: Font aksen *Caveat* dengan coretan ramah, panah, dan emoji hati yang terasa akrab dan hidup.
- 📸 **Lampu Flash & Suara Rana Kamera**: Efek kilatan cahaya layar (*flash*) dan suara klik mekanik rana kamera (*Web Audio API*) saat membuka foto galeri atau menekan tombol interaktif.
- 🎯 **100% Bahasa Indonesia**: Seluruh antarmuka, tombol, formulir WhatsApp, FAQ, dan navigasi menggunakan bahasa Indonesia yang ramah, sopan, dan mengundang tanpa kata-kata bahasa Inggris kaku.
- 🚀 **Optimasi SEO Terlengkap**: Dilengkapi meta tags, Open Graph `id_ID`, Geo tags Jabodetabek, dan Schema JSON-LD ganda (`EntertainmentBusiness` & `FAQPage`) untuk tampil maksimal di Google.

---

## DAFTAR ISI
1. [Struktur Berkas & Folder](#1-struktur-berkas--folder)
2. [Fitur SEO & Mesin Pencari Google](#2-fitur-seo--mesin-pencari-google)
3. [Cara Menjalankan Website (Preview Lokal)](#3-cara-menjalankan-website-preview-lokal)
4. [Panduan Konfigurasi Cepat (WhatsApp, Media Sosial, & Paket)](#4-panduan-konfigurasi-cepat-whatsapp-media-sosial--paket)
5. [Cara Mengganti Logo Studio](#5-cara-mengganti-logo-studio)
6. [Cara Mengganti Foto Demo dengan Foto Acara Asli](#6-cara-mengganti-foto-demo-dengan-foto-acara-asli)
7. [Panduan Lengkap Google Analytics 4 (GA4) Gratis](#7-panduan-lengkap-google-analytics-4-ga4-gratis)
8. [Panduan Deployment / Publish ke Internet (Gratis)](#8-panduan-deployment--publish-ke-internet-gratis)
9. [Checklist Data Bisnis Sebelum Peluncuran](#9-checklist-data-bisnis-sebelum-peluncuran)

---

## 1. STRUKTUR BERKAS & FOLDER

```text
Se.kertasfoto photobooth/
├── index.html                   # Halaman utama landing page (HTML5 semantik, 100% Bahasa Indonesia & SEO)
├── style.css                    # Desain sistem editorial (warna #5e17eb, #9047ca, grid, kartu neo-brutalist)
├── script.js                    # Konfigurasi WhatsApp, efek suara rana, akordion FAQ, lightbox foto, GA4
├── README.md                    # Buku panduan lengkap (berkas ini)
└── assets/
    ├── logo/
    │   ├── logo-placeholder.svg # Logo & wordmark Se.kertasfoto vektor SVG
    │   └── favicon.svg          # Ikon tab browser (favicon)
    └── images/                  # Kumpulan foto lokal teroptimasi (siap diganti foto acara asli)
        ├── hero-main.jpg        # Foto utama di bagian hero
        ├── hero-strip-1.jpg     # Foto strip simulasi frame 1
        ├── hero-strip-2.jpg     # Foto strip simulasi frame 2
        ├── hero-strip-3.jpg     # Foto strip simulasi frame 3
        ├── brand-philosophy.jpg # Detail foto cetak di filosofi studio
        ├── exp-wedding.jpg      # Foto kategori Pernikahan & Lamaran
        ├── exp-party.jpg        # Foto kategori Ulang Tahun & Pesta Privat
        ├── exp-corporate.jpg    # Foto kategori Gathering Kantor & Acara Perusahaan
        ├── exp-graduation.jpg   # Foto kategori Wisuda & Perayaan Keluarga
        ├── parallax-signature.jpg # Foto lanskap signature parallax
        ├── 20240331_*.avif      # 9 foto asli AVIF hasil cetak galeri & lightbox (rasio 2:3)
        └── cta-bg.jpg           # Foto pendukung
```

---

## 2. FITUR SEO & MESIN PENCARI GOOGLE

Website ini telah dioptimasi secara mendalam untuk meraih peringkat terbaik pada pencarian lokal Indonesia:

1. **Kata Kunci Berbobot Tinggi**: Menargetkan pencarian seperti *"sewa photobooth jakarta"*, *"sewa photobooth pernikahan"*, *"jasa photobooth event tangerang/bekasi"*, dan *"photo strip wedding"*.
2. **Schema JSON-LD Terintegrasi**:
   - `EntertainmentBusiness` / `LocalBusiness`: Menginformasikan nama studio, wilayah cakupan (Jakarta, Bogor, Depok, Tangerang, Bekasi), nomor kontak WhatsApp, rentang harga, jam buka operasional, dan katalog paket layanan.
   - `FAQPage`: Struktur tanya jawab pertanyaan umum yang memungkinkan Google memunculkan dropdown FAQ langsung di hasil pencarian Google (*Google Rich Snippets*).
3. **Open Graph & Twitter Card**: Pratinjau tautan WhatsApp, Facebook, dan Twitter tampil rapi dengan judul, deskripsi bahasa Indonesia, dan gambar banner resmi saat Anda membagikan link website.
4. **Geo Meta Tags**: Penanda koordinat geografis wilayah Jabodetabek (`geo.region: ID-JK`) untuk prioritas pencarian calon pengantin dan event organizer lokal.
5. **Hierarki Judul Semantik**: Struktur tag `<h1>`, `<h2>`, dan `<h3>` tersusun rapi dengan atribut `alt` berbahasa Indonesia deskriptif di seluruh 19 foto.

---

## 3. CARA MENJALANKAN WEBSITE (PREVIEW LOKAL)

Website ini 100% statis (*zero backend, no database, no npm build required*). Anda dapat membukanya kapan saja:

### Cara 1: Buka Langsung di Browser
- Masuk ke folder `Se.kertasfoto photobooth`.
- Klik dua kali (*double click*) pada berkas **`index.html`**.
- Halaman akan langsung terbuka di Google Chrome, Safari, Firefox, atau Edge Anda.

### Cara 2: Menggunakan VS Code Live Server (Direkomendasikan)
- Buka folder proyek di **Visual Studio Code**.
- Pasang ekstensi **Live Server** (oleh Ritwick Dey).
- Klik kanan pada `index.html` dan pilih **"Open with Live Server"**.
- Browser akan membuka `http://127.0.0.1:5500` dengan fitur *auto-reload* saat berkas disimpan.

---

## 4. PANDUAN KONFIGURASI CEPAT (WHATSAPP, MEDIA SOSIAL, & PAKET)

Semua pengaturan utama telah dipusatkan pada file **`script.js`** di baris 18:

```javascript
const SE_CONFIG = {
  // Nama Brand
  brandName: "Se.kertasfoto",
  
  // Kontak WhatsApp Resmi (Wajib diganti dengan nomor WhatsApp aktif Anda)
  // Masukkan nomor dengan awalan 62 (tanpa spasi, tanda +, atau strip)
  whatsappNumber: "628981655905", 

  // Media Sosial Studio
  instagramHandle: "@se.kertasfoto",
  instagramUrl: "https://instagram.com/se.kertasfoto",

  // Area Layanan Operasional
  serviceArea: "Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi) & Siap Luar Kota",

  // Bar Pengumuman di Atas Navbar
  announcement: {
    enabled: true, // Ubah ke 'false' jika ingin menyembunyikan pengumuman
    text: "✨ Jadwal 2026/2027 sudah dibuka! Booking lebih awal untuk amankan tanggal pernikahan & pesta kamu ♡",
    badge: "JADWAL DIBUKA",
    ctaText: "Lihat Paket",
    ctaLink: "#paket"
  },

  // Konfigurasi Paket Photobooth & Template Pesan WhatsApp
  packages: {
    essential: {
      name: "Paket Essential",
      price: "Hubungi untuk Cek Harga",
      duration: "2 Jam Layanan",
      inquiriesMessage: "Halo Se.kertasfoto! Saya tertarik menanyakan Paket Essential (2 Jam) untuk acara saya. Boleh info detail ketersediaan tanggal dan rincian harganya? Terima kasih!"
    },
    signature: {
      name: "Paket Signature",
      price: "Hubungi untuk Cek Harga",
      duration: "3 Jam Layanan",
      inquiriesMessage: "Halo Se.kertasfoto! Saya tertarik menanyakan Paket Signature (3 Jam) untuk acara saya. Boleh info detail ketersediaan tanggal dan rincian harganya? Terima kasih!"
    },
    fullExperience: {
      name: "Paket Full Experience",
      price: "Hubungi untuk Cek Harga",
      duration: "4 Jam Layanan",
      inquiriesMessage: "Halo Se.kertasfoto! Saya tertarik menanyakan Paket Full Experience (4 Jam) untuk acara saya. Boleh info detail ketersediaan tanggal dan rincian harganya? Terima kasih!"
    }
  },

  // Google Analytics 4 (GA4) Measurement ID (Format: G-XXXXXXXXXX)
  ga4MeasurementId: "" 
};
```

---

## 5. CARA MENGGANTI LOGO STUDIO

Logo resmi Anda dapat ditambahkan dengan dua cara:

### Cara A: Ganti File SVG (Paling Bersih & Otomatis)
1. Siapkan file logo Anda dalam format `.svg` atau `.png`.
2. Beri nama file tersebut: `logo-placeholder.svg` (atau `logo-placeholder.png`).
3. Ganti file yang berada di dalam folder `assets/logo/logo-placeholder.svg`.
4. Muat ulang (*refresh*) browser Anda. Logo akan langsung terpasang di Navbar dan Footer.

### Cara B: Ubah Tag Gambar di `index.html`
Buka `index.html`, cari bagian `<header id="mainNavbar">` dan `<footer>`, kemudian ubah tautan `src`:
```html
<img src="assets/logo/my-logo.png" alt="Logo Se.kertasfoto Photobooth" class="h-8 md:h-9 w-auto">
```

---

## 6. CARA MENGGANTI FOTO DEMO DENGAN FOTO ACARA ASLI

Semua foto disimpan secara lokal di dalam folder **`assets/images/`**. Anda dapat dengan mudah menimpa (*overwrite*) foto-foto tersebut dengan hasil karya asli Se.kertasfoto:

| Nama File | Lokasi pada Website | Rasio / Orientasi Rekomendasi |
| :--- | :--- | :--- |
| `hero-main.jpg` | Foto utama di sisi kanan Hero | Lanskap / 4:3 (kamera flash candid) |
| `hero-strip-1.jpg` | Frame atas pada photo strip Hero | Tegak / 4:3 |
| `hero-strip-2.jpg` | Frame tengah pada photo strip Hero | Tegak / 4:3 |
| `hero-strip-3.jpg` | Frame bawah pada photo strip Hero | Tegak / 4:3 |
| `brand-philosophy.jpg` | Foto tangan memegang cetakan foto di Filosofi Studio | Lanskap / 4:3 |
| `exp-wedding.jpg` | Layanan: Pernikahan & Lamaran | Lanskap / 16:10 |
| `exp-party.jpg` | Layanan: Ulang Tahun & Pesta Privat | Lanskap / 16:10 |
| `exp-corporate.jpg` | Layanan: Acara Kantor & Korporat | Lanskap / 16:10 |
| `exp-graduation.jpg`| Layanan: Wisuda & Perayaan Keluarga | Lanskap / 16:10 |
| `parallax-signature.jpg` | **Signature Parallax Moment** | Lanskap lebar (resolusi min. 1600px) |
| `20240331_*.avif` (9 file) | Galeri Hasil Cetak & Lightbox | Potret 2:3 (cetak fisik instan photobooth) |

---

## 7. PANDUAN LENGKAP GOOGLE ANALYTICS 4 (GA4) GRATIS

Website ini telah dilengkapi pelacakan interaksi aman (*PII-free*):

1. Buat akun di [analytics.google.com](https://analytics.google.com/) dan buat properti baru bertipe **Web**.
2. Salin kode **Measurement ID** Anda (berawalan `G-`, contoh: `G-XXXXXXXXXX`).
3. Buka file **`script.js`**, lalu masukkan ID tersebut pada baris `ga4MeasurementId`:
   ```javascript
   ga4MeasurementId: "G-XXXXXXXXXX"
   ```
4. Selesai! Data kunjungan halaman (`page_view`), klik WhatsApp (`whatsapp_click`), klik foto galeri (`gallery_view`), dan klik tanya jawab (`faq_toggle`) akan otomatis tercatat.

---

## 8. PANDUAN DEPLOYMENT / PUBLISH KE INTERNET (GRATIS)

Karena website ini berjenis *static site*, Anda dapat menghostingnya secara gratis selamanya:

### Pilihan 1: Netlify Drop (Paling Mudah, Tanpa Koding)
1. Buka [app.netlify.com/drop](https://app.netlify.com/drop).
2. Tarik (*drag & drop*) seluruh folder `Se.kertasfoto photobooth` ke kotak yang tersedia di browser.
3. Website Anda langsung aktif dan memiliki tautan publik gratis (contoh: `sekertasfoto.netlify.app`).

### Pilihan 2: Vercel
1. Buat akun di [Vercel.com](https://vercel.com).
2. Hubungkan repositori GitHub Anda atau gunakan Vercel CLI.
3. Klik **Deploy**.

### Pilihan 3: Web Hosting Standar (cPanel)
1. Masuk ke cPanel hosting Anda, buka File Manager > `public_html`.
2. Unggah seluruh isi folder ini (`index.html`, `style.css`, `script.js`, dan folder `assets`).

---

## 9. CHECKLIST DATA BISNIS SEBELUM PELUNCURAN

- [ ] **Nomor WhatsApp**: Pastikan telah mengganti nomor default di `script.js` pada `SE_CONFIG.whatsappNumber`.
- [ ] **Tautan Instagram**: Pastikan username `@se.kertasfoto` di `script.js` sesuai akun aktif Anda.
- [ ] **Paket & Biaya**: Pastikan penamaan dan rincian fasilitas paket telah sesuai dengan penawaran studio Anda.
- [ ] **Logo Resmi**: Tambahkan file logo resmi ke `assets/logo/`.
- [ ] **Foto Portofolio Asli**: Masukkan foto-foto dokumentasi karya asli Se.kertasfoto ke `assets/images/`.
- [ ] **Google Analytics 4**: Masukkan ID Pengukuran `G-XXXXXXXXXX` ke `script.js` jika ingin melihat statistik pengunjung.

---

*Se.kertasfoto — Momen Manis. Dicetak Nyata. ✦*
