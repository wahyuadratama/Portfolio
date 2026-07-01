# 📜 Panduan Menambah Sertifikat Baru

## Lokasi File
File yang perlu diedit: `js/main.js`

## Langkah-Langkah

### 1. Upload Gambar Sertifikat
- Simpan file gambar sertifikat ke folder `images/`
- Gunakan format nama: `CER X.png` (X = nomor urut)
- Contoh: `CER 4.png`, `CER 5.png`, dst.

### 2. Edit File JavaScript
Buka file `js/main.js` dan cari bagian ini (sekitar baris 55-77):

```javascript
const certificatesData = [
  {
    id: 1,
    title: "Front-End Developer Learning Path",
    issuer: "Dicoding Indonesia",
    year: "2024",
    image: "images/CER 2.png",
  },
  {
    id: 2,
    title: "Hackathon 2025 Winner",
    issuer: "Google Developer Student Club",
    year: "2025",
    image: "images/CER 1.png",
  },
  {
    id: 3,
    title: "AI for Everyone",
    issuer: "Coursera",
    year: "2024",
    image: "images/CER 3.png",
  },
];
```

### 3. Tambahkan Sertifikat Baru
Tambahkan object baru **sebelum tanda kurung tutup** `]`:

```javascript
const certificatesData = [
  // ... sertifikat yang sudah ada ...
  {
    id: 3,
    title: "AI for Everyone",
    issuer: "Coursera",
    year: "2024",
    image: "images/CER 3.png",
  },
  // TAMBAHKAN SERTIFIKAT BARU DI SINI
  {
    id: 4,  // ⚠️ INCREMENT dari ID terakhir
    title: "Nama Sertifikat Baru",
    issuer: "Platform/Institusi",
    year: "2026",  // Tahun perolehan
    image: "images/CER 4.png",  // Path ke gambar
  },
];
```

### 4. Format Data Sertifikat

| Field | Tipe | Contoh | Keterangan |
|-------|----------|
| `id` | number | `4` | ID unik, increment dari terakhir |
| `title` | string | `"JavaScript Mastery"` | Nama sertifikat |
| `issuer` | string | `"Udemy"` | Platform/institusi pemberi |
| `year` | string | `"2026"` | Tahun perolehan |
| `image` | string | `"images/CER 4.png"` | Path relatif ke gambar |

### 5. Contoh Lengkap

```javascript
const certificatesData = [
  {
    id: 1,
    title: "Front-End Developer Learning Path",
    issuer: "Dicoding Indonesia",
    year: "2024",
    image: "images/CER 2.png",
  },
  {
    id: 2,
    title: "Hackathon 2025 Winner",
    issuer: "Google Developer Student Club",
    year: "2025",
    image: "images/CER 1.png",
  },
  {
    id: 3,
    title: "AI for Everyone",
    issuer: "Coursera",
    year: "2024",
    image: "images/CER 3.png",
  },
  {
    id: 4,
    title: "Advanced React Development",
    issuer: "Meta (Facebook)",
    year: "2026",
    image: "images/CER 4.png",
  },
  {
    id: 5,
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    year: "2026",
    image: "images/CER 5.png",
  },
];
```

### 6. Simpan & Refresh
1. **Save** file `js/main.js`
2. **Refresh** browser (F5 atau Ctrl+R)
3. Sertifikat baru akan muncul otomatis

## ⚠️ Catatan Penting

- **Jangan lupa koma** (`,`) setelah setiap object
- **ID harus unik** dan berurutan
- **Path gambar harus benar** (`images/CER X.png`)
- **Tahun dalam format string** (`"2026"`, bukan `2026`)
- Gambar akan di-**click untuk zoom** (sudah ada fitur lightbox)

## 🐛 Troubleshooting

### Sertifikat tidak muncul?
1. Cek console browser (F12) untuk error
2. Pastikan path gambar benar
3. Pastikan tidak ada syntax error (koma, kurung)

### Gambar tidak tampil?
1. Cek apakah file gambar sudah ada di folder `images/`
2. Cek nama file sama dengan yang di kode
3. Cek format gambar (PNG/JPG)

## 📸 Format Gambar yang Disarankan

- **Format**: PNG atau JPG
- **Ukuran**: Maksimal 2MB
- **Dimensi**: Minimal 800x600px
- **Rasio**: 4:3 atau 16:9 untuk tampilan optimal

---

✅ **Selesai!** Sekarang Anda bisa menambah sertifikat kapan saja dengan mudah.
</contents>