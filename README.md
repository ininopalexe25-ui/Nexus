# NEXUS GAMING - Official Esports Gear & Battlestation Store

Aplikasi web E-Commerce Modern berfitur lengkap (Single Page Application Prototype) yang berfokus **khusus pada penjualan perangkat keras (hardware), periferal turnamen esports, dan aksesoris battlestation gaming**.

Dibangun dengan standar produksi menggunakan **HTML5 Semantik**, **Tailwind CSS (CDN)**, dan **Vanilla JavaScript (ES6+)**, dengan sistem manajemen state persisten di sisi klien via `localStorage`.

---

## 🎮 Kategori Produk Gaming Spesifik & Orisinal

Katalog memiliki **27 produk gaming orisinal dari brand resmi** yang terbagi rata dalam 5 kategori utama dengan foto asli perangkat:
1. **PC & Konsol Gaming (5 Produk)**: Sony PlayStation 5 Slim Disc Edition, Nintendo Switch OLED Model, Xbox Wireless Controller Robot White, ASUS ROG Zephyrus G16 (2024), NZXT Player Three Custom Gaming Desktop PC.
2. **Keyboard & Mouse Gaming (7 Produk)**: Logitech G Pro X Superlight Wireless, Razer DeathAdder V3 Pro Wireless, Razer Viper V3 Pro Ultra-Lightweight, Keychron K2 Wireless Mechanical Keyboard, Keychron Q1 Pro Custom Mechanical Keyboard, Corsair K70 RGB PRO Mechanical Keyboard, Ducky One 3 RGB TKL Hot-Swap.
3. **Audio & Headset Gaming (6 Produk)**: HyperX Cloud II Wireless Gaming Headset, SteelSeries Arctis Nova Pro Wireless, Audio-Technica ATH-M50x Professional Monitor, Shure SM7B Cardioid Dynamic Microphone, Elgato Wave:3 USB Condenser Microphone, Moondrop Chu II In-Ear Monitors (IEM).
4. **Monitor & Setup Gaming (7 Produk)**: Samsung Odyssey G7 32" Curved 240Hz, ASUS ROG Swift OLED PG27AQDM 27", BenQ ZOWIE XL2546K Esports Gaming Monitor, Dual Monitor Desk Mount Gas Spring Heavy Duty Arm, Elgato Stream Deck MK.2, BenQ WiT ScreenBar LED Monitor Hanging Light, Govee Glide Hexa Pro 3D RGBIC Panels.
5. **Kursi & Meja Gaming (2 Produk)**: Secretlab TITAN Evo 2024 Ergonomic Gaming Chair (SoftWeave Plus), Battlestation Corner L-Shape Gaming Desk with Monitor Riser.

---

## 🌟 Fitur Utama & Arsitektur

### 1. UI/UX & Desain Sistem Bertema Esports
- **Tema Glassmorphism**: Navbar sticky transparan dengan *backdrop-blur* dan tema gelap/terang (Dark/Light mode persisten).
- **Micro-interactions**: Efek hover zoom halus, animasi *cart bounce*, detak wishlist pop, dan animasi *skeleton loading shimmer* saat berpindah filter.
- **Desain Responsif**: Tampilan mobile-first yang dioptimalkan untuk Smartphone, Tablet, hingga Layar Desktop Ultra-Wide.

### 2. Flash Sale Esports & Real-time Countdown Timer
- Penghitung waktu mundur aktif (`setInterval`) berformat `Jam : Menit : Detik`.
- Progress bar ketersediaan stok ("Segera Habis - Terjual X%").

### 3. Sistem Filter Multi-Kriteria, Search Debounce & Sorting
- **Live Search**: Input pencarian real-time dengan *debounce* (300ms) dan tombol *clear* (X).
- **Filter Kategori**: Tombol pills interaktif untuk 5 kategori gaming dengan counter item otomatis.
- **Filter Rentang Harga**: Input batas harga minimum dan maksimum.
- **Filter Rating 4.0+**: Menampilkan periferal dengan rating bintang 4 ke atas.
- **Sorting**: Paling Relevan, Harga Terendah, Harga Tertinggi, Terlaris, dan Rating Tertinggi.
- **Empty State**: Ilustrasi informatif dengan tombol *Reset Semua Filter*.

### 4. Detail Produk (Quick View Modal)
- Galeri foto dengan thumbnail interaktif.
- Pemilih varian saklar (Switches: Linear Red, Tactile Brown), varian RAM/SSD, ukuran mousepad/kursi, dan pilihan warna.
- Stepper kuantitas yang dibatasi sisa stok unit.
- Tombol *Tambah ke Keranjang* dan *Beli Sekarang*.

### 5. Keranjang Belanja (Slide-Over Drawer)
- Slide-over dari kanan dengan *backdrop blur*.
- Manajemen kuantitas item (+ / -) dan penghapusan otomatis jika kuantitas mencapai 0.
- **Kode Voucher Promo**:
  - `GAMEON10` / `HEMAT10`: Diskon 10% untuk seluruh gaming gear.
  - `ESPORTS50` / `BELANJA50`: Potongan Rp 50.000 (Min. belanja Rp 300.000).
  - `GRATISONGKIR`: Potongan biaya pengiriman menjadi Rp 0.
- Kalkulasi otomatis Subtotal, Diskon Voucher, Pajak PPN 11%, Ongkos Kirim, dan Grand Total dalam format Rupiah (`Intl.NumberFormat`).

### 6. Alur Checkout & Faktur Resmi (Invoice Modal)
- Validasi data pengiriman (Nama, No HP/WhatsApp, Kota, Kode Pos, Alamat).
- Pilihan ekspedisi khusus: Reguler (Rp 15.000), Express Next Day (Rp 30.000), Kargo Kayu & Asuransi (Rp 10.000) untuk pengiriman aman monitor/PC.
- Opsi pembayaran: QRIS Instant, Virtual Account (BCA, Mandiri, BRI), E-Wallet GoPay, dan COD.
- Simulasi proses verifikasi pembayaran (1.2 detik).
- Pengurangan stok dan penambahan jumlah terjual tersimpan secara persisten di `localStorage`.
- **Faktur/Struk Resmi**: Dilengkapi nomor referensi unik (contoh: `INV-20261011-XXXX`), rincian pesanan, dan tombol **Cetak Struk / Simpan PDF** (`window.print()`).

### 7. Toast Notifications
- Notifikasi visual kustom di pojok kanan atas layar dengan durasi 3 detik untuk setiap aksi pengguna.

---

## 🚀 Cara Menjalankan

Cukup buka berkas [index.html](file:///home/nopal/Projects/StrukturData/ecommerce/index.html) langsung di browser Anda atau gunakan live server:

```bash
# Menjalankan HTTP server lokal via Python
python3 -m http.server 8000

# Atau buka index.html langsung di browser Linux
xdg-open index.html
```
Akses di browser pada `http://localhost:8000`.
# Nexus
