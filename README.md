## ✅ JavaScript Anti Bom Klik New (Aman untuk AdSense)


## 🎯 Strategi yang Dipakai

Script ini:

1. Mendeteksi **klik berulang terlalu cepat**
2. Membatasi **jumlah klik per sesi**
3. Mengunci halaman sementara jika mencurigakan
4. Berlaku ke **semua klik**, termasuk iklan (tanpa menyentuh elemen iklan)

---


### 📌 Pasang di `<head>` atau sebelum `</body>`

```html
<script src="" </script>
```

---

## 🔐 Kenapa Script Ini Aman untuk AdSense?

* Tidak memodifikasi iframe iklan
* Tidak mendeteksi klik iklan secara spesifik
* Berlaku umum ke seluruh halaman
* Mencegah user & bot agresif

Google **membolehkan** proteksi trafik & bot selama:

* Tidak mengubah perilaku iklan
* Tidak memblokir iklan secara selektif

---

## 🚀 Versi Lebih Kuat (Rekomendasi)

Kalau mau **lebih ampuh**, kombinasikan:

### 1️⃣ JavaScript (ini)

### 2️⃣ Server-side protection (WAF / .htaccess)

```apache
<IfModule mod_evasive20.c>
  DOSHashTableSize 3097
  DOSPageCount 5
  DOSPageInterval 10
  DOSBlockingPeriod 600
</IfModule>
```
⚠️ **Catatan penting**:

* **Tidak ada JS yang 100% ampuh**, karena klik iklan AdSense bersifat sandbox
* Tujuan script ini adalah **mencegah perilaku mencurigakan di level user**, bukan memanipulasi iklan
* **Tidak menyentuh kode iklan AdSense** (ini WAJIB agar akun aman)

---
