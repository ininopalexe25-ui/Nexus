#!/usr/bin/env python3
import json

true = True
false = False

# Generator for 130 authentic gaming and PC building products

def generate_catalog():
    items = []

    # =========================================================================
    # 1. KOMPONEN RAKIT PC (52 Produk Lengkap)
    # =========================================================================
    # --- CPU (8) ---
    items.append({
        "id": "CPU-001",
        "name": "Intel Core i9-14900K 24-Core Desktop Processor",
        "category": "Komponen Rakit PC",
        "price": 9850000, "originalPrice": 10999000, "discountPercentage": 10,
        "rating": 4.9, "reviewCount": 140, "soldCount": 420, "stock": 14, "isFlashSale": true, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Box Resmi Garansi 3 Tahun"], "sizes": ["LGA1700"]},
        "description": "Prosesor desktop flagship Intel Core generasi 14 dengan 24 Core (8 P-Core + 16 E-Core) 32 Thread. Max Turbo Frequency hingga 6.0 GHz dengan Intel Thermal Velocity Boost, cache 36MB, dan grafis terintegrasi Intel UHD 770."
    })
    items.append({
        "id": "CPU-002",
        "name": "AMD Ryzen 7 7800X3D 8-Core Gaming Processor (AM5)",
        "category": "Komponen Rakit PC",
        "price": 6890000, "originalPrice": 7650000, "discountPercentage": 10,
        "rating": 5.0, "reviewCount": 510, "soldCount": 1750, "stock": 18, "isFlashSale": true, "badge": "Terlaris",
        "images": ["https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Box Resmi Garansi 3 Tahun"], "sizes": ["Socket AM5"]},
        "description": "Prosesor gaming nomor 1 di dunia dengan teknologi 3D V-Cache generasi ke-2. Memiliki 8 Core / 16 Thread, boost clock 5.0 GHz, dan total cache raksasa 104MB untuk framerate tertinggi dan 1% low fps paling stabil di game kompetitif."
    })
    items.append({
        "id": "CPU-003",
        "name": "Intel Core i7-14700K 20-Core Desktop Processor",
        "category": "Komponen Rakit PC",
        "price": 6750000, "originalPrice": 7450000, "discountPercentage": 9,
        "rating": 4.9, "reviewCount": 210, "soldCount": 680, "stock": 20, "isFlashSale": false, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Box Resmi"], "sizes": ["LGA1700"]},
        "description": "Prosesor Intel Core generasi 14 dengan arsitektur hybrid 20 Core (8 P-Core + 12 E-Core) dan 28 Thread. Max turbo clock 5.6 GHz, cache 33MB, sangat optimal untuk gaming kelas berat dan rendering konten simultan."
    })
    items.append({
        "id": "CPU-004",
        "name": "AMD Ryzen 5 7600X 6-Core Gaming Processor (AM5)",
        "category": "Komponen Rakit PC",
        "price": 3450000, "originalPrice": 3950000, "discountPercentage": 13,
        "rating": 4.8, "reviewCount": 320, "soldCount": 1250, "stock": 25, "isFlashSale": false, "badge": "Terlaris",
        "images": ["https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Box Resmi"], "sizes": ["Socket AM5"]},
        "description": "Prosesor gaming arsitektur Zen 4 5nm bertenaga 6 Core / 12 Thread dengan boost clock hingga 5.3 GHz. Mendukung memori DDR5 berkecepatan tinggi dan jalur PCIe 5.0 untuk rakitan gaming hemat daya berperforma tinggi."
    })
    items.append({
        "id": "CPU-005",
        "name": "Intel Core i5-14600K 14-Core Gaming Processor",
        "category": "Komponen Rakit PC",
        "price": 4950000, "originalPrice": 5600000, "discountPercentage": 12,
        "rating": 4.9, "reviewCount": 290, "soldCount": 940, "stock": 22, "isFlashSale": false, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Box Resmi"], "sizes": ["LGA1700"]},
        "description": "Prosesor pilihan terbaik price-to-performance untuk gaming kompetitif. Memiliki 14 Core (6 P-Core + 8 E-Core) 20 Thread dengan clock hingga 5.3 GHz dan dukungan overclocking penuh pada motherboard seri Z."
    })
    items.append({
        "id": "CPU-006",
        "name": "AMD Ryzen 9 7950X3D 16-Core Flagship Processor",
        "category": "Komponen Rakit PC",
        "price": 10500000, "originalPrice": 11800000, "discountPercentage": 11,
        "rating": 5.0, "reviewCount": 85, "soldCount": 210, "stock": 8, "isFlashSale": false, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Box Resmi"], "sizes": ["Socket AM5"]},
        "description": "Prosesor hybrid workstation dan gaming terkuat dari AMD. 16 Core / 32 Thread dengan 3D V-Cache 144MB total, clock hingga 5.7 GHz, memberikan efisiensi daya luar biasa untuk kreator konten dan gamer profesional."
    })
    items.append({
        "id": "CPU-007",
        "name": "Intel Core i5-13400F 10-Core Desktop Processor",
        "category": "Komponen Rakit PC",
        "price": 3150000, "originalPrice": 3600000, "discountPercentage": 13,
        "rating": 4.8, "reviewCount": 460, "soldCount": 1820, "stock": 30, "isFlashSale": false, "badge": "Terlaris",
        "images": ["https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Box with Intel Stock Cooler"], "sizes": ["LGA1700"]},
        "description": "Prosesor rakit PC gaming hemat anggaran paling terpercaya. 10 Core (6 P-Core + 4 E-Core) 16 Thread dengan turbo boost 4.6 GHz, 20MB cache, dan TDP hemat 65 Watt."
    })
    items.append({
        "id": "CPU-008",
        "name": "AMD Ryzen 5 5600X 6-Core Desktop Processor (AM4)",
        "category": "Komponen Rakit PC",
        "price": 2150000, "originalPrice": 2550000, "discountPercentage": 16,
        "rating": 4.9, "reviewCount": 890, "soldCount": 3500, "stock": 40, "isFlashSale": true, "badge": "Terlaris",
        "images": ["https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Box with Wraith Stealth Cooler"], "sizes": ["Socket AM4"]},
        "description": "Prosesor legendaris platform AM4 dengan 6 Core / 12 Thread, boost clock 4.6 GHz, dan cache 35MB. Pilihan paling ekonomis untuk rakit PC gaming esport dengan performa tinggi."
    })

    # --- GPU (8) ---
    items.append({
        "id": "GPU-001",
        "name": "ASUS ROG Strix GeForce RTX 4090 24GB GDDR6X OC Edition",
        "category": "Komponen Rakit PC",
        "price": 36999000, "originalPrice": 41500000, "discountPercentage": 11,
        "rating": 5.0, "reviewCount": 95, "soldCount": 160, "stock": 5, "isFlashSale": true, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Strix Gunmetal Black", "White Edition"], "sizes": ["24GB GDDR6X"]},
        "description": "Kartu grafis gaming terkencang di muka bumi. Bersenjatakan GPU NVIDIA AD102 dengan 16.384 CUDA Core, VRAM 24GB GDDR6X 384-bit, pendingin 3.5 slot vapor chamber dengan kipas Axial-tech, dan frame diecast logam kokoh."
    })
    items.append({
        "id": "GPU-002",
        "name": "MSI GeForce RTX 4080 Super 16GB Gaming X Slim",
        "category": "Komponen Rakit PC",
        "price": 18450000, "originalPrice": 20500000, "discountPercentage": 10,
        "rating": 4.9, "reviewCount": 120, "soldCount": 310, "stock": 10, "isFlashSale": false, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Black Slim", "White Edition"], "sizes": ["16GB GDDR6X"]},
        "description": "Kartu grafis gaming 4K berperforma tinggi dengan arsitektur NVIDIA Ada Lovelace. Dilengkapi 10.240 CUDA Core, VRAM 16GB GDDR6X, sistem pendingin TRI FROZR 3 dengan kipas TORX Fan 5.0, dan pelat dasar tembaga berlapis nikel."
    })
    items.append({
        "id": "GPU-003",
        "name": "Gigabyte GeForce RTX 4070 Ti Super AERO OC 16GB White",
        "category": "Komponen Rakit PC",
        "price": 15200000, "originalPrice": 16900000, "discountPercentage": 10,
        "rating": 4.9, "reviewCount": 140, "soldCount": 420, "stock": 12, "isFlashSale": false, "badge": "Baru",
        "images": ["https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["AERO White Metal"], "sizes": ["16GB GDDR6X"]},
        "description": "Kartu grafis bertema putih elegan untuk rakitan PC all-white. Memiliki VRAM 16GB GDDR6X pada bus 256-bit, sistem pendingin WINDFORCE dengan 3 kipas blade unik berputar bolak-balik, dan pipa panas tembaga komposit."
    })
    items.append({
        "id": "GPU-004",
        "name": "ZOTAC Gaming GeForce RTX 4070 Super Twin Edge 12GB",
        "category": "Komponen Rakit PC",
        "price": 10450000, "originalPrice": 11800000, "discountPercentage": 11,
        "rating": 4.8, "reviewCount": 260, "soldCount": 890, "stock": 16, "isFlashSale": true, "badge": "Terlaris",
        "images": ["https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Black Twin Edge", "White OC"], "sizes": ["12GB GDDR6X"]},
        "description": "Kartu grafis kompak dual-slot yang bertenaga untuk gaming resolusi 1440p maksimal dengan DLSS 3 Frame Generation. Dilengkapi pendingin IceStorm 2.0 canggih, kontrol kipas aktif FREEZE, dan pelat belakang logam pelindung."
    })
    items.append({
        "id": "GPU-005",
        "name": "ASUS Dual GeForce RTX 4060 Ti EVO OC Edition 8GB",
        "category": "Komponen Rakit PC",
        "price": 6850000, "originalPrice": 7650000, "discountPercentage": 10,
        "rating": 4.8, "reviewCount": 410, "soldCount": 1450, "stock": 24, "isFlashSale": false, "badge": "Terlaris",
        "images": ["https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Black Edition", "White Edition"], "sizes": ["8GB GDDR6"]},
        "description": "GPU gaming 1080p dan 1440p paling populer dengan efisiensi daya luar biasa hanya 160 Watt. Desain 2 kipas Axial-tech dengan bantalan bola ganda yang senyap dan teknologi Auto-Extreme manufaktur otomatis presisi."
    })
    items.append({
        "id": "GPU-006",
        "name": "MSI GeForce RTX 4060 Ventus 2X Black 8GB OC",
        "category": "Komponen Rakit PC",
        "price": 4950000, "originalPrice": 5500000, "discountPercentage": 10,
        "rating": 4.8, "reviewCount": 380, "soldCount": 1620, "stock": 28, "isFlashSale": false, "badge": "Terlaris",
        "images": ["https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Black Ventus", "White Ventus"], "sizes": ["8GB GDDR6"]},
        "description": "GPU gaming berkinerja tinggi hemat daya berarsitektur Ada Lovelace. Mendukung penuh Ray Tracing Gen-3 dan DLSS 3 Frame Generation dengan dua kipas TORX Fan 4.0 dan backplate penguat struktural."
    })
    items.append({
        "id": "GPU-007",
        "name": "Sapphire NITRO+ AMD Radeon RX 7900 XTX Vapor-X 24GB",
        "category": "Komponen Rakit PC",
        "price": 17990000, "originalPrice": 19990000, "discountPercentage": 10,
        "rating": 4.9, "reviewCount": 88, "soldCount": 190, "stock": 7, "isFlashSale": false, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Gunmetal Gray with RGB Lightbar"], "sizes": ["24GB GDDR6"]},
        "description": "Kartu grafis flagship AMD dari Sapphire dengan pendingin ruang uap Vapor-X komposit. Dilengkapi 6.144 Stream Processors, VRAM 24GB GDDR6 384-bit, rangka aluminium magnesium die-cast, dan bilah kipas kecepatan tinggi berdesain angular."
    })
    items.append({
        "id": "GPU-008",
        "name": "PowerColor Hellhound AMD Radeon RX 7800 XT 16GB",
        "category": "Komponen Rakit PC",
        "price": 8950000, "originalPrice": 9950000, "discountPercentage": 10,
        "rating": 4.8, "reviewCount": 130, "soldCount": 380, "stock": 14, "isFlashSale": false, "badge": "Baru",
        "images": ["https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Spectral White", "Classic Black"], "sizes": ["16GB GDDR6"]},
        "description": "Kartu grafis gaming 1440p berdaya saing tinggi dari PowerColor. 16GB VRAM GDDR6 berkecepatan 19.5 Gbps, dual BIOS (OC/Silent), pencahayaan LED Ice Blue / Ametis, dan 3 kipas bantalan ganda tahan lama."
    })

    # --- MOTHERBOARD (6) ---
    items.append({
        "id": "MBO-001",
        "name": "ASUS ROG Maximus Z790 Dark Hero WiFi Motherboard",
        "category": "Komponen Rakit PC",
        "price": 11450000, "originalPrice": 12800000, "discountPercentage": 11,
        "rating": 5.0, "reviewCount": 65, "soldCount": 120, "stock": 8, "isFlashSale": false, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Polymo Lighting Dark Armor"], "sizes": ["ATX (LGA1700)"]},
        "description": "Motherboard kelas antusias tertinggi untuk prosesor Intel Core generasi 14. Dilengkapi 20+1+2 power stage 90A, dukungan memori DDR5 hingga 8000+ MT/s, 5 slot M.2 onboard (termasuk PCIe 5.0), Wi-Fi 7 terintegrasi, dan dual Thunderbolt 4."
    })
    items.append({
        "id": "MBO-002",
        "name": "MSI MAG B650 Tomahawk WiFi AM5 Motherboard",
        "category": "Komponen Rakit PC",
        "price": 3890000, "originalPrice": 4350000, "discountPercentage": 11,
        "rating": 4.9, "reviewCount": 380, "soldCount": 1150, "stock": 20, "isFlashSale": true, "badge": "Terlaris",
        "images": ["https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Military Black Heatsink"], "sizes": ["ATX (AM5)"]},
        "description": "Motherboard terfavorit untuk prosesor AMD Ryzen seri 7000/8000. Memiliki 14+2+1 Duet Rail Power System dengan VRM heatsink tebal, 3 slot M.2 dengan M.2 Shield Frozr, koneksi Wi-Fi 6E, LAN 2.5G, dan Audio Boost 5."
    })
    items.append({
        "id": "MBO-003",
        "name": "ASUS TUF Gaming B760-Plus WiFi DDR5 Motherboard",
        "category": "Komponen Rakit PC",
        "price": 3450000, "originalPrice": 3890000, "discountPercentage": 11,
        "rating": 4.8, "reviewCount": 240, "soldCount": 780, "stock": 18, "isFlashSale": false, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["TUF Tactical Black"], "sizes": ["ATX (LGA1700)"]},
        "description": "Motherboard berdaya tahan militer dengan komponen TUF Chokes dan TUF Capacitors. Mendukung prosesor Intel LGA1700, memori DDR5, slot PCIe 5.0 x16 untuk GPU modern, 3 slot M.2 PCIe 4.0, dan antena Wi-Fi 6 eksternal."
    })
    items.append({
        "id": "MBO-004",
        "name": "Gigabyte B650 AORUS Elite AX ICE White AM5 Motherboard",
        "category": "Komponen Rakit PC",
        "price": 4250000, "originalPrice": 4790000, "discountPercentage": 11,
        "rating": 4.9, "reviewCount": 110, "soldCount": 340, "stock": 14, "isFlashSale": false, "badge": "Baru",
        "images": ["https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Full White PCB & Heatsink"], "sizes": ["ATX (AM5)"]},
        "description": "Motherboard serba putih murni dari PCB hingga heatsink armor untuk rakitan PC putih impian. Dilengkapi 12+2+2 Twin Digital VRM, slot M.2 EZ-Latch tanpa obeng, Wi-Fi 6E, dan dukungan memori DDR5 hingga 8000+ MHz."
    })
    items.append({
        "id": "MBO-005",
        "name": "ASRock B650M Pro RS WiFi Micro-ATX AM5 Motherboard",
        "category": "Komponen Rakit PC",
        "price": 2750000, "originalPrice": 3100000, "discountPercentage": 11,
        "rating": 4.8, "reviewCount": 180, "soldCount": 590, "stock": 20, "isFlashSale": false, "badge": "Terlaris",
        "images": ["https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["White Silver Heatsink"], "sizes": ["Micro-ATX (AM5)"]},
        "description": "Motherboard ukuran ringkas Micro-ATX dengan fitur kelas atas: 8+2+1 power phase Dr.MOS, 3 slot M.2 (termasuk Blazing M.2 PCIe 5.0), modul Wi-Fi 6E, dan slot penguat baja PCIe Steel Slot."
    })
    items.append({
        "id": "MBO-006",
        "name": "MSI PRO Z790-P WiFi DDR5 LGA1700 Motherboard",
        "category": "Komponen Rakit PC",
        "price": 4190000, "originalPrice": 4650000, "discountPercentage": 10,
        "rating": 4.8, "reviewCount": 150, "soldCount": 490, "stock": 16, "isFlashSale": false, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Professional Black"], "sizes": ["ATX (LGA1700)"]},
        "description": "Motherboard workstation dan gaming berkecepatan tinggi dengan 14+1+1 Duet Rail VRM, 4 slot M.2 PCIe 4.0, slot PCIe 5.0 x16, konektivitas LAN 2.5G Intel, dan Wi-Fi 6E kecepatan tinggi."
    })

    # --- RAM (6) ---
    items.append({
        "id": "RAM-001",
        "name": "Corsair Vengeance RGB DDR5 32GB (2x16GB) 6000MHz CL30",
        "category": "Komponen Rakit PC",
        "price": 2150000, "originalPrice": 2450000, "discountPercentage": 12,
        "rating": 4.9, "reviewCount": 510, "soldCount": 1780, "stock": 30, "isFlashSale": true, "badge": "Terlaris",
        "images": ["https://images.unsplash.com/photo-1562976540-1502c2145186?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Black Heatsink", "White Heatsink"], "sizes": ["32GB (2x16GB) 6000MHz CL30", "64GB (2x32GB) 6000MHz CL30"]},
        "description": "Kit memori DDR5 berkecepatan tinggi dengan timing ketat CL30 optimal untuk AMD EXPO dan Intel XMP 3.0. Dilengkapi 10 zona pencahayaan LED RGB dinamis per keping memori dan heatspreader aluminium pembuang panas solid."
    })
    items.append({
        "id": "RAM-002",
        "name": "G.Skill Trident Z5 RGB DDR5 32GB (2x16GB) 6400MHz CL32",
        "category": "Komponen Rakit PC",
        "price": 2490000, "originalPrice": 2850000, "discountPercentage": 13,
        "rating": 5.0, "reviewCount": 320, "soldCount": 920, "stock": 22, "isFlashSale": false, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Metallic Silver", "Matte Black"], "sizes": ["32GB (2x16GB) 6400MHz", "48GB (2x24GB) 7200MHz"]},
        "description": "Memori DDR5 kelas hyper-performance pemenang penghargaan desain Red Dot. Menggunakan chip IC pilihan tangan terbaik, bodi aluminium dual-texture bergaris halus, dan light bar RGB streamline yang memesona."
    })
    items.append({
        "id": "RAM-003",
        "name": "Kingston FURY Beast DDR5 32GB (2x16GB) 5600MHz",
        "category": "Komponen Rakit PC",
        "price": 1650000, "originalPrice": 1890000, "discountPercentage": 13,
        "rating": 4.8, "reviewCount": 430, "soldCount": 1560, "stock": 35, "isFlashSale": false, "badge": "Terlaris",
        "images": ["https://images.unsplash.com/photo-1562976540-1502c2145186?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Black Low-Profile"], "sizes": ["16GB (2x8GB) 5600MHz", "32GB (2x16GB) 5600MHz"]},
        "description": "Kit RAM DDR5 bertinggi rendah (low-profile) yang sangat ramah terhadap pendingin CPU menara besar (air cooler). Menghadirkan stabilitas tinggi dengan on-die ECC dan sertifikasi Intel XMP 3.0 serta AMD EXPO."
    })
    items.append({
        "id": "RAM-004",
        "name": "Team T-Force Delta RGB DDR5 32GB (2x16GB) 6000MHz White",
        "category": "Komponen Rakit PC",
        "price": 1950000, "originalPrice": 2250000, "discountPercentage": 13,
        "rating": 4.8, "reviewCount": 260, "soldCount": 810, "stock": 20, "isFlashSale": false, "badge": "Baru",
        "images": ["https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Pure White", "Stealth Black"], "sizes": ["32GB (2x16GB) 6000MHz"]},
        "description": "Desain heat spreader geometris stealth bertema pesawat tempur dengan sudut pencahayaan RGB 120 derajat ultra-lebar. Dilengkapi Power Management IC (PMIC) cerdas dan gel termal silikon konduktif tinggi."
    })
    items.append({
        "id": "RAM-005",
        "name": "Corsair Dominator Titanium RGB DDR5 64GB (2x32GB) 6000MHz",
        "category": "Komponen Rakit PC",
        "price": 5450000, "originalPrice": 6100000, "discountPercentage": 11,
        "rating": 5.0, "reviewCount": 65, "soldCount": 140, "stock": 10, "isFlashSale": false, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1562976540-1502c2145186?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["First Edition White", "First Edition Black"], "sizes": ["64GB (2x32GB) 6000MHz"]},
        "description": "Mahakarya RAM paling prestisius dari Corsair. Bodi aluminium tempa presisi tinggi dengan bilah atas (top bar) modular yang dapat diganti, 11 LED CAPELLIX RGB ultra-terang, dan pendingin dipatenkan DHX cooling."
    })
    items.append({
        "id": "RAM-006",
        "name": "Adata XPG Lancer Blade RGB DDR5 32GB (2x16GB) 6000MHz",
        "category": "Komponen Rakit PC",
        "price": 1820000, "originalPrice": 2090000, "discountPercentage": 13,
        "rating": 4.8, "reviewCount": 190, "soldCount": 670, "stock": 24, "isFlashSale": false, "badge": "Terlaris",
        "images": ["https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Black", "White"], "sizes": ["32GB (2x16GB) 6000MHz CL30"]},
        "description": "Memori DDR5 bertinggi ringkas ramah casing Mini-ITX dan pendingin udara besar. Mendukung penuh AMD EXPO dan profil XMP dengan heatsink bersudut tajam bergaris geometris."
    })

    # --- SSD & STORAGE (6) ---
    items.append({
        "id": "SSD-001",
        "name": "Samsung 990 PRO 2TB PCIe 4.0 NVMe M.2 SSD (7450 MB/s)",
        "category": "Komponen Rakit PC",
        "price": 3150000, "originalPrice": 3600000, "discountPercentage": 13,
        "rating": 5.0, "reviewCount": 680, "soldCount": 2200, "stock": 25, "isFlashSale": true, "badge": "Terlaris",
        "images": ["https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Standard Edition", "With Heatsink (PS5 Ready)"], "sizes": ["1TB NVMe", "2TB NVMe", "4TB NVMe"]},
        "description": "SSD NVMe Gen4 tercepat di kelasnya dengan kecepatan baca sekuensial hingga 7.450 MB/s dan tulis 6.900 MB/s. Dilengkapi kontroler berlapis nikel pengatur suhu cerdas dan efisiensi daya 50% lebih baik dari 980 PRO."
    })
    items.append({
        "id": "SSD-002",
        "name": "WD_BLACK SN850X 2TB NVMe M.2 SSD Gaming (7300 MB/s)",
        "category": "Komponen Rakit PC",
        "price": 2890000, "originalPrice": 3350000, "discountPercentage": 14,
        "rating": 4.9, "reviewCount": 490, "soldCount": 1650, "stock": 22, "isFlashSale": false, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Black PCB"], "sizes": ["1TB (7300 MB/s)", "2TB (7300 MB/s)"]},
        "description": "SSD khusus gaming performa papan atas dengan fitur Game Mode 2.0 di WD_BLACK Dashboard untuk loading game tanpa menunggu. Kecepatan baca mencapai 7.300 MB/s dengan IOPS acak hingga 1.200.000."
    })
    items.append({
        "id": "SSD-003",
        "name": "Kingston KC3000 1TB PCIe 4.0 NVMe M.2 SSD (7000 MB/s)",
        "category": "Komponen Rakit PC",
        "price": 1450000, "originalPrice": 1690000, "discountPercentage": 14,
        "rating": 4.8, "reviewCount": 380, "soldCount": 1390, "stock": 30, "isFlashSale": false, "badge": "Terlaris",
        "images": ["https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Graphene Aluminum Spreader"], "sizes": ["1TB PCIe 4.0", "2TB PCIe 4.0"]},
        "description": "Menggunakan pengontrol Phison E18 dan 3D TLC NAND generasi terbaru dengan penyebar panas graphene aluminium tipis. Memberikan performa baca tulis 7.000 MB/s yang stabil untuk rendering video dan gaming intensif."
    })
    items.append({
        "id": "SSD-004",
        "name": "Crucial T700 1TB PCIe 5.0 NVMe M.2 SSD (11.700 MB/s)",
        "category": "Komponen Rakit PC",
        "price": 3350000, "originalPrice": 3890000, "discountPercentage": 14,
        "rating": 4.9, "reviewCount": 95, "soldCount": 210, "stock": 10, "isFlashSale": false, "badge": "Baru",
        "images": ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["With Premium Heatsink"], "sizes": ["1TB Gen5 (11.700 MB/s)", "2TB Gen5 (12.400 MB/s)"]},
        "description": "SSD generasi masa depan PCIe Gen5 dengan kecepatan luar biasa menembus 11.700 MB/s baca dan 9.500 MB/s tulis. Hampir 2x lipat lebih kencang dari SSD Gen4 tercepat, membawa heatsink aluminium tembaga khusus."
    })
    items.append({
        "id": "SSD-005",
        "name": "Lexar NM790 2TB PCIe 4.0 NVMe SSD (7400 MB/s)",
        "category": "Komponen Rakit PC",
        "price": 2350000, "originalPrice": 2750000, "discountPercentage": 15,
        "rating": 4.8, "reviewCount": 240, "soldCount": 790, "stock": 25, "isFlashSale": false, "badge": "Terlaris",
        "images": ["https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Black PCB"], "sizes": ["1TB NVMe", "2TB NVMe", "4TB NVMe"]},
        "description": "SSD NVMe DRAM-less berkecepatan tinggi dengan teknologi HMB (Host Memory Buffer) 3.0. Menghasilkan performa fantastis hingga 7.400 MB/s baca sekuensial dengan konsumsi daya dan suhu yang sangat rendah."
    })
    items.append({
        "id": "SSD-006",
        "name": "Seagate FireCuda 530 2TB NVMe M.2 SSD with Heatsink",
        "category": "Komponen Rakit PC",
        "price": 3490000, "originalPrice": 3990000, "discountPercentage": 13,
        "rating": 4.9, "reviewCount": 150, "soldCount": 420, "stock": 14, "isFlashSale": false, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["EKWB Custom Heatsink"], "sizes": ["2TB NVMe"]},
        "description": "SSD ketahanan kelas industri dengan peringkat endurance 2550 TBW. Dilengkapi heatsink aluminium minimalis yang dirancang khusus bersama EK Water Blocks dan kompatibel penuh untuk slot ekspansi PlayStation 5."
    })

    # --- PSU (6) ---
    items.append({
        "id": "PSU-001",
        "name": "Corsair RM1000x SHIFT 1000W 80+ Gold Fully Modular ATX 3.0",
        "category": "Komponen Rakit PC",
        "price": 3150000, "originalPrice": 3550000, "discountPercentage": 11,
        "rating": 5.0, "reviewCount": 160, "soldCount": 480, "stock": 15, "isFlashSale": true, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Matte Black"], "sizes": ["850W ATX 3.0", "1000W ATX 3.0", "1200W ATX 3.0"]},
        "description": "Inovasi power supply pertama dengan konektor kabel modular di samping (side interface) untuk manajemen kabel yang sangat mudah. Standar ATX 3.0 dan PCIe 5.0 dengan kabel bawaan 12VHPWR native untuk kartu grafis seri RTX 40."
    })
    items.append({
        "id": "PSU-002",
        "name": "Seasonic Focus GX-850 850W 80+ Gold Fully Modular",
        "category": "Komponen Rakit PC",
        "price": 2250000, "originalPrice": 2550000, "discountPercentage": 12,
        "rating": 4.9, "reviewCount": 310, "soldCount": 980, "stock": 20, "isFlashSale": false, "badge": "Terlaris",
        "images": ["https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Black", "White Edition"], "sizes": ["750W 80+ Gold", "850W 80+ Gold"]},
        "description": "Power supply standar emas ketahanan dari Seasonic dengan garansi pabrik 10 tahun. Kapasitor 105C buatan Jepang berkualitas tinggi, kipas Fluid Dynamic Bearing 120mm dengan mode Hybrid Silent Fan Control."
    })
    items.append({
        "id": "PSU-003",
        "name": "MSI MAG A850GL PCIE5 850W 80+ Gold Power Supply",
        "category": "Komponen Rakit PC",
        "price": 1850000, "originalPrice": 2150000, "discountPercentage": 14,
        "rating": 4.8, "reviewCount": 240, "soldCount": 750, "stock": 25, "isFlashSale": false, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Black"], "sizes": ["750W PCIE5", "850W PCIE5"]},
        "description": "PSU ATX 3.0 ramah anggaran dengan kabel 12V-2x6 berkonektor kuning khas MSI untuk memastikan kabel tertancap sempurna ke GPU RTX 40-series tanpa celah longgar."
    })
    items.append({
        "id": "PSU-004",
        "name": "ASUS ROG Thor 1200W Platinum II Power Supply with OLED Display",
        "category": "Komponen Rakit PC",
        "price": 5890000, "originalPrice": 6600000, "discountPercentage": 11,
        "rating": 5.0, "reviewCount": 75, "soldCount": 160, "stock": 8, "isFlashSale": false, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["ROG Aura OLED Armor"], "sizes": ["1200W Platinum II"]},
        "description": "Power supply paling hening di dunia dengan sertifikasi Lambda A++. Dilengkapi layar OLED internal yang menampilkan konsumsi daya Watt secara langsung, heatsink ROG masif, dan kipas PWM Wing-blade 135mm."
    })
    items.append({
        "id": "PSU-005",
        "name": "be quiet! Pure Power 12 M 750W 80+ Gold ATX 3.0",
        "category": "Komponen Rakit PC",
        "price": 1780000, "originalPrice": 2050000, "discountPercentage": 13,
        "rating": 4.8, "reviewCount": 160, "soldCount": 490, "stock": 20, "isFlashSale": false, "badge": "Terlaris",
        "images": ["https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Black"], "sizes": ["750W ATX 3.0", "850W ATX 3.0"]},
        "description": "Ketenangan akustik legendaris rekayasa Jerman. Kompatibilitas ganda ATX 3.0 dan PCIe 5.0 dengan dua rel 12V independen dan kipas be quiet! 120mm yang tidak terdengar sama sekali."
    })
    items.append({
        "id": "PSU-006",
        "name": "Cooler Master MWE 750 Bronze V2 750W 80+ Bronze",
        "category": "Komponen Rakit PC",
        "price": 990000, "originalPrice": 1190000, "discountPercentage": 17,
        "rating": 4.8, "reviewCount": 680, "soldCount": 2400, "stock": 35, "isFlashSale": false, "badge": "Terlaris",
        "images": ["https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Flat Black Cables"], "sizes": ["650W Bronze", "750W Bronze"]},
        "description": "Power supply entry-level paling teruji untuk rakitan gaming hemat biaya. Desain sirkuit DC-to-DC, sertifikasi efisiensi 80 PLUS Bronze 85%, dan kabel flat hitam fleksibel yang mudah dirapikan."
    })

    # --- CASING PC (6) ---
    items.append({
        "id": "CSE-001",
        "name": "Lian Li O11 Dynamic EVO RGB Dual-Chamber Mid-Tower Case",
        "category": "Komponen Rakit PC",
        "price": 2890000, "originalPrice": 3250000, "discountPercentage": 11,
        "rating": 5.0, "reviewCount": 340, "soldCount": 1100, "stock": 16, "isFlashSale": true, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Black Anodized", "Pure White"], "sizes": ["Standard ATX"]},
        "description": "Casing dual-chamber panorama legendaris dengan strip pencahayaan L-shape ARGB di bagian atas dan bawah. Pilar sudut depan kaca tempered dapat dilepas tanpa tiang pilar penghalang pandangan internal hardware."
    })
    items.append({
        "id": "CSE-002",
        "name": "NZXT H9 Flow Dual-Chamber Seamless Glass ATX Case",
        "category": "Komponen Rakit PC",
        "price": 2590000, "originalPrice": 2950000, "discountPercentage": 12,
        "rating": 4.9, "reviewCount": 280, "soldCount": 890, "stock": 18, "isFlashSale": false, "badge": "Terlaris",
        "images": ["https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Matte White", "Matte Black"], "sizes": ["Standard ATX"]},
        "description": "Casing berpanel kaca tembus pandang tanpa sudut lengkung dengan aliran udara perforasi mesh di bagian atas dan samping. Mendukung hingga 10 kipas pendingin 120mm dan 3 radiator 360mm secara simultan."
    })
    items.append({
        "id": "CSE-003",
        "name": "Fractal Design North Charcoal Black Mid-Tower Real Wood",
        "category": "Komponen Rakit PC",
        "price": 2450000, "originalPrice": 2790000, "discountPercentage": 12,
        "rating": 5.0, "reviewCount": 190, "soldCount": 540, "stock": 12, "isFlashSale": false, "badge": "Baru",
        "images": ["https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Charcoal Black with Walnut Wood", "Chalk White with Oak Wood"], "sizes": ["Tempered Glass Side", "Mesh Side Panel"]},
        "description": "Casing berdesain Skandinavia modern dengan bilah kayu kenari (walnut) asli di panel depan dan aksen kuningan mewah. Sangat elegan untuk setup meja gaming minimalis interior hangat."
    })
    items.append({
        "id": "CSE-004",
        "name": "Corsair 4000D Airflow Tempered Glass Mid-Tower Case",
        "category": "Komponen Rakit PC",
        "price": 1450000, "originalPrice": 1690000, "discountPercentage": 14,
        "rating": 4.8, "reviewCount": 520, "soldCount": 1980, "stock": 28, "isFlashSale": false, "badge": "Terlaris",
        "images": ["https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Black Airflow", "White Airflow"], "sizes": ["ATX Mid-Tower"]},
        "description": "Casing PC paling populer di dunia untuk airflow optimal dengan panel depan berlubang segitiga ventilasi tinggi. Memiliki sistem manajemen kabel RapidRoute dengan saluran kabel terpusat selebar 25mm."
    })
    items.append({
        "id": "CSE-005",
        "name": "Hyte Y70 Touch Infinite Dual-Chamber Case with 14.5\" 4K Screen",
        "category": "Komponen Rakit PC",
        "price": 6450000, "originalPrice": 7200000, "discountPercentage": 10,
        "rating": 5.0, "reviewCount": 70, "soldCount": 150, "stock": 6, "isFlashSale": false, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Snow White Touch", "Pitch Black Touch"], "sizes": ["Integrated Touchscreen"]},
        "description": "Casing showcase terdepan di industri dengan layar sentuh kapasitif terintegrasi 14.5 inci 688x2560 60Hz pada panel sudut. Menampilkan widget sistem Nexus Touch, kontrol musik, dan wallpaper animasi dinamis."
    })
    items.append({
        "id": "CSE-006",
        "name": "Montech KING 95 PRO Curved Glass ATX Case with 6 ARGB Fans",
        "category": "Komponen Rakit PC",
        "price": 1950000, "originalPrice": 2250000, "discountPercentage": 13,
        "rating": 4.9, "reviewCount": 310, "soldCount": 980, "stock": 20, "isFlashSale": false, "badge": "Terlaris",
        "images": ["https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Gentleman Black", "Pure White", "Prussian Blue"], "sizes": ["Includes 6x ARGB PWM Fans"]},
        "description": "Casing kaca lengkung industri tempered glass industri dengan paket lengkap 6 kipas ARGB PWM bawaan. Termasuk panel depan mesh alternatif yang dapat ditukar untuk mode ventilasi angin maksimum."
    })

    # --- PENDINGIN CPU & KIPAS (6) ---
    items.append({
        "id": "CLR-001",
        "name": "NZXT Kraken Elite 360 RGB AIO Liquid Cooler with 2.36\" LCD",
        "category": "Komponen Rakit PC",
        "price": 4550000, "originalPrice": 5100000, "discountPercentage": 11,
        "rating": 4.9, "reviewCount": 210, "soldCount": 620, "stock": 12, "isFlashSale": true, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Matte Black RGB", "Matte White RGB"], "sizes": ["360mm Radiator"]},
        "description": "Pendingin cair AIO flagship dengan layar IPS LCD melingkar 2.36 inci beresolusi 640x640 60Hz. Mampu menampilkan animasi GIF kustom, suhu CPU/GPU waktu nyata, pompa Asetek generasi ke-7, dan kipas F120 RGB Core."
    })
    items.append({
        "id": "CLR-002",
        "name": "ASUS ROG Ryujin III 360 ARGB Liquid CPU Cooler with 3.5\" LCD",
        "category": "Komponen Rakit PC",
        "price": 5490000, "originalPrice": 6200000, "discountPercentage": 11,
        "rating": 5.0, "reviewCount": 85, "soldCount": 180, "stock": 8, "isFlashSale": false, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Black Edition", "White Edition"], "sizes": ["360mm"]},
        "description": "AIO pendingin tertinggi dengan layar LCD 3.5 inci raksasa, pompa Asetek Gen8 terbaru, kipas ARGB daisy-chain magnetis, dan kipas mini VRM terintegrasi di dalam blok pompa untuk mendinginkan area motherboard."
    })
    items.append({
        "id": "CLR-003",
        "name": "Noctua NH-D15 chromax.black Dual-Tower Air Cooler",
        "category": "Komponen Rakit PC",
        "price": 2150000, "originalPrice": 2450000, "discountPercentage": 12,
        "rating": 5.0, "reviewCount": 390, "soldCount": 1120, "stock": 15, "isFlashSale": false, "badge": "Terlaris",
        "images": ["https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Full chromax.black"], "sizes": ["Dual 140mm Fans"]},
        "description": "Raja pendingin udara menara ganda buatan Austria berfinishing hitam pekat. Memiliki 6 heatpipe tembaga, 2 kipas legendaris NF-A15 PWM yang senyap luar biasa dengan thermal paste Noctua NT-H1 bawaan."
    })
    items.append({
        "id": "CLR-004",
        "name": "Thermalright Peerless Assassin 120 SE Dual-Tower Air Cooler",
        "category": "Komponen Rakit PC",
        "price": 580000, "originalPrice": 750000, "discountPercentage": 23,
        "rating": 4.9, "reviewCount": 780, "soldCount": 2890, "stock": 35, "isFlashSale": true, "badge": "Terlaris",
        "images": ["https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Black", "White ARGB"], "sizes": ["Dual 120mm Fans"]},
        "description": "Pendingin udara CPU value-for-money terhebat di dunia saat ini. Mampu menaklukkan suhu prosesor Intel i7 dan Ryzen 7 dengan 6 heatpipe AGHP anti-gravitasi dan dual kipas TL-C12C PWM berkinerja tinggi."
    })
    items.append({
        "id": "CLR-005",
        "name": "Lian Li Uni Fan SL-Infinity 120 RGB Triple Pack with Controller",
        "category": "Komponen Rakit PC",
        "price": 1490000, "originalPrice": 1750000, "discountPercentage": 15,
        "rating": 4.9, "reviewCount": 310, "soldCount": 980, "stock": 25, "isFlashSale": false, "badge": "Terlaris",
        "images": ["https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Black 3-Pack", "White 3-Pack"], "sizes": ["120mm PWM"]},
        "description": "Kipas casing canggih dengan sistem interlocking daisy-chain tanpa kabel berantakan. Memiliki cermin infinity mirror 3D di tengah sumbu dan frame samping, bantalan FDB senyap, dan kontrol software L-Connect 3."
    })
    items.append({
        "id": "CLR-006",
        "name": "Thermal Grizzly Kryonaut Extreme High Performance Thermal Paste",
        "category": "Komponen Rakit PC",
        "price": 285000, "originalPrice": 350000, "discountPercentage": 19,
        "rating": 4.9, "reviewCount": 620, "soldCount": 2450, "stock": 50, "isFlashSale": false, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Pink Rose Extreme"], "sizes": ["2g Syringe with Applicator"]},
        "description": "Pasta termal kelas overclocking ekstrem dari Jerman dengan konduktivitas termal fenomenal 14.2 W/mk. Tidak menghantarkan arus listrik (non-conductive) dan tidak mengering bahkan di suhu operasi konstan 80 derajat Celcius."
    })

    # =========================================================================
    # 2. PC & KONSOL GAMING (16 Produk)
    # =========================================================================
    items.append({
        "id": "CON-001",
        "name": "Sony PlayStation 5 Slim Disc Edition",
        "category": "PC & Konsol Gaming",
        "price": 8999000, "originalPrice": 9999000, "discountPercentage": 10,
        "rating": 4.9, "reviewCount": 420, "soldCount": 1150, "stock": 14, "isFlashSale": true, "badge": "Official Store",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/PlayStation_5_and_DualSense.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Playstation_DualSense_Controller.png?width=800"
        ],
        "variants": {"colors": ["Glacier White", "Midnight Black"], "sizes": ["Disc Edition 1TB SSD", "Digital Edition 1TB SSD"]},
        "description": "Konsol PlayStation 5 Slim resmi Sony Indonesia dengan kapasitas SSD 1TB ultra-high speed. Mendukung visual 4K 120Hz, Ray Tracing, audio 3D Tempest, dan kontroler DualSense haptic feedback."
    })
    items.append({
        "id": "CON-002",
        "name": "Nintendo Switch OLED Model Neon Blue/Red",
        "category": "PC & Konsol Gaming",
        "price": 4699000, "originalPrice": 5299000, "discountPercentage": 11,
        "rating": 4.9, "reviewCount": 310, "soldCount": 920, "stock": 18, "isFlashSale": false, "badge": "Terlaris",
        "images": ["https://commons.wikimedia.org/wiki/Special:FilePath/Nintendo-Switch-Console-Docked-wJoyConRB.jpg?width=800"],
        "variants": {"colors": ["Neon Blue & Red", "White Joy-Con"], "sizes": ["64GB Internal Storage"]},
        "description": "Konsol gaming portabel Nintendo Switch dengan layar 7.0 inci OLED tajam dan warna kontras pekat. Dilengkapi kickstand lebar, dock berport LAN terintegrasi, dan speaker stereo internal jernih."
    })
    items.append({
        "id": "CON-003",
        "name": "Valve Steam Deck OLED 1TB Handheld Gaming PC",
        "category": "PC & Konsol Gaming",
        "price": 11499000, "originalPrice": 12999000, "discountPercentage": 12,
        "rating": 4.9, "reviewCount": 145, "soldCount": 380, "stock": 9, "isFlashSale": true, "badge": "Official Store",
        "images": ["https://commons.wikimedia.org/wiki/Special:FilePath/Steam_Deck_%28front%29.png?width=800"],
        "variants": {"colors": ["Matte Black"], "sizes": ["512GB NVMe OLED", "1TB Anti-Glare Etched Glass"]},
        "description": "Perangkat PC gaming genggam resmi Valve bertenaga APU AMD kustom. Dilengkapi layar sentuh 7.4 inci HDR OLED 90Hz respons 0.1ms, baterai tahan lama 50Wh, Wi-Fi 6E, dan SteamOS."
    })
    items.append({
        "id": "CON-004",
        "name": "Xbox Wireless Controller Carbon Black",
        "category": "PC & Konsol Gaming",
        "price": 950000, "originalPrice": 1150000, "discountPercentage": 17,
        "rating": 4.8, "reviewCount": 195, "soldCount": 680, "stock": 22, "isFlashSale": false, "badge": "Terlaris",
        "images": ["https://commons.wikimedia.org/wiki/Special:FilePath/Xbox_Series_Controller_Carbon_Black.jpg?width=800"],
        "variants": {"colors": ["Carbon Black", "Robot White", "Shock Blue"], "sizes": []},
        "description": "Gamepad nirkabel resmi Microsoft Xbox dengan grip anti-licin, D-pad hybrid presisi, tombol Share, dan Bluetooth instan untuk Windows, Xbox Series X/S, dan smartphone."
    })
    items.append({
        "id": "CON-005",
        "name": "ASUS ROG Zephyrus G16 (2024) Gaming Laptop",
        "category": "PC & Konsol Gaming",
        "price": 37999000, "originalPrice": 42999000, "discountPercentage": 12,
        "rating": 4.9, "reviewCount": 68, "soldCount": 95, "stock": 6, "isFlashSale": false, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Eclipse Gray Aluminum", "Platinum White"], "sizes": ["32GB RAM / 1TB SSD", "64GB RAM / 2TB SSD"]},
        "description": "Laptop gaming ultra-tipis aluminium CNC unibody, Intel Core Ultra 9 dan NVIDIA GeForce RTX 4080. Layar 16 inci ROG Nebula Display OLED 2.5K 240Hz 0.2ms 100% DCI-P3."
    })
    items.append({
        "id": "CON-006",
        "name": "Logitech G29 Driving Force Racing Wheel & Pedals",
        "category": "PC & Konsol Gaming",
        "price": 4499000, "originalPrice": 5299000, "discountPercentage": 15,
        "rating": 4.9, "reviewCount": 220, "soldCount": 540, "stock": 12, "isFlashSale": true, "badge": "Official Store",
        "images": ["https://commons.wikimedia.org/wiki/Special:FilePath/Logitech_G29_steering_wheel.jpg?width=800"],
        "variants": {"colors": ["Leather Black with Blue Accent"], "sizes": ["Wheel & Pedals Set", "Bundle with Shifter"]},
        "description": "Setir dan pedal balap simulator resmi Logitech G untuk PS5, PS4, dan PC. Force feedback dual-motor realistis, setir kulit asli jahitan tangan, dan paddle shifter stainless steel."
    })
    items.append({
        "id": "CON-007",
        "name": "Sony PlayStation DualSense Wireless Controller White",
        "category": "PC & Konsol Gaming",
        "price": 1099000, "originalPrice": 1299000, "discountPercentage": 15,
        "rating": 4.9, "reviewCount": 540, "soldCount": 1820, "stock": 25, "isFlashSale": false, "badge": "Terlaris",
        "images": ["https://commons.wikimedia.org/wiki/Special:FilePath/Playstation_DualSense_Controller.png?width=800"],
        "variants": {"colors": ["White", "Midnight Black", "Cosmic Red"], "sizes": []},
        "description": "Kontroler nirkabel resmi PlayStation 5 dengan teknologi Haptic Feedback revolusioner, Adaptive Triggers dinamis, mikrofon terintegrasi, dan tombol Create inovatif."
    })
    items.append({
        "id": "CON-008",
        "name": "ASUS ROG Ally X Handheld Gaming PC (AMD Z1 Extreme / 24GB)",
        "category": "PC & Konsol Gaming",
        "price": 13999000, "originalPrice": 15499000, "discountPercentage": 10,
        "rating": 4.9, "reviewCount": 110, "soldCount": 280, "stock": 8, "isFlashSale": false, "badge": "Baru",
        "images": ["https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Stealth Black Ergonomic"], "sizes": ["24GB RAM / 1TB SSD"]},
        "description": "Konsol gaming portabel Windows 11 bertenaga prosesor AMD Ryzen Z1 Extreme, RAM 24GB LPDDR5X, baterai jumbo 80Wh, joystick hall effect anti-drift, dan layar 120Hz 1080p."
    })

    # =========================================================================
    # 3. KEYBOARD & MOUSE GAMING (22 Produk)
    # =========================================================================
    items.append({
        "id": "MOU-001",
        "name": "Logitech G502 HERO High Performance Gaming Mouse",
        "category": "Keyboard & Mouse Gaming",
        "price": 699000, "originalPrice": 899000, "discountPercentage": 22,
        "rating": 4.9, "reviewCount": 1450, "soldCount": 4200, "stock": 35, "isFlashSale": true, "badge": "Terlaris",
        "images": ["https://commons.wikimedia.org/wiki/Special:FilePath/G502_Hero.jpg?width=800"],
        "variants": {"colors": ["Matte Black", "White K/DA Edition"], "sizes": []},
        "description": "Mouse gaming paling ikonik di dunia. Sensor optik HERO 25K dengan 25.600 DPI, 11 tombol dapat diprogram, 5 pemberat 3.6g dapat disesuaikan, dan pencahayaan LIGHTSYNC RGB."
    })
    items.append({
        "id": "MOU-002",
        "name": "Logitech G Pro X Superlight Wireless Gaming Mouse",
        "category": "Keyboard & Mouse Gaming",
        "price": 1899000, "originalPrice": 2299000, "discountPercentage": 17,
        "rating": 5.0, "reviewCount": 820, "soldCount": 2450, "stock": 28, "isFlashSale": false, "badge": "Terlaris",
        "images": ["https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Hitam Matte", "Putih", "Magenta Pink"], "sizes": []},
        "description": "Mouse nirkabel turnamen dunia berbobot ultra-ringan 63g. Sensor HERO 25K akurasi sub-mikron, nirkabel LIGHTSPEED 1ms bebas lag, dan feet mouse PTFE murni."
    })
    items.append({
        "id": "MOU-003",
        "name": "Razer DeathAdder Essential Gaming Mouse",
        "category": "Keyboard & Mouse Gaming",
        "price": 320000, "originalPrice": 450000, "discountPercentage": 29,
        "rating": 4.8, "reviewCount": 980, "soldCount": 3100, "stock": 40, "isFlashSale": true, "badge": "Terlaris",
        "images": ["https://commons.wikimedia.org/wiki/Special:FilePath/Razer_DeathAdder_Elite-front_oblique-ar_16to10-fs_PNr%C2%B00465.jpg?width=800"],
        "variants": {"colors": ["Classic Black", "Mercury White"], "sizes": []},
        "description": "Mouse gaming ergonomis legendaris Razer dengan sensor optik 6.400 DPI, 5 tombol Hyperesponse, switch mekanis Razer tahan 10 juta klik, dan bentuk berkontur nyaman."
    })
    items.append({
        "id": "MOU-004",
        "name": "Razer DeathAdder V3 Pro Wireless Gaming Mouse",
        "category": "Keyboard & Mouse Gaming",
        "price": 2199000, "originalPrice": 2599000, "discountPercentage": 15,
        "rating": 4.9, "reviewCount": 380, "soldCount": 1120, "stock": 19, "isFlashSale": false, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Black", "White"], "sizes": []},
        "description": "Bentuk ergonomis esports 63g dengan sensor Focus Pro 30K, switch optik Gen-3 tahan 90 juta klik, dan baterai hingga 90 jam pemakaian nirkabel."
    })
    items.append({
        "id": "MOU-005",
        "name": "Razer Viper V3 Pro Ultra-Lightweight Wireless Mouse",
        "category": "Keyboard & Mouse Gaming",
        "price": 2499000, "originalPrice": 2899000, "discountPercentage": 14,
        "rating": 4.9, "reviewCount": 160, "soldCount": 480, "stock": 15, "isFlashSale": false, "badge": "Baru",
        "images": ["https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Black Matte", "White Mercury"], "sizes": []},
        "description": "Mouse esports simetris 54g dengan sensor Focus Pro 35K Gen-2 dan dongle nirkabel Razer HyperPolling 8000Hz bawaan untuk responsivitas seketika."
    })
    items.append({
        "id": "MOU-006",
        "name": "SteelSeries Rival 3 Wireless Gaming Mouse",
        "category": "Keyboard & Mouse Gaming",
        "price": 790000, "originalPrice": 990000, "discountPercentage": 20,
        "rating": 4.8, "reviewCount": 240, "soldCount": 780, "stock": 25, "isFlashSale": false, "badge": "Terlaris",
        "images": ["https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Matte Black"], "sizes": []},
        "description": "Mouse gaming nirkabel dual-koneksi 2.4GHz Quantum 2.0 dan Bluetooth 5.0 dengan daya tahan baterai fantastis hingga 400 jam dan sensor TrueMove Air."
    })

    # --- KEYBOARDS ---
    items.append({
        "id": "KBD-001",
        "name": "Razer BlackWidow V3 Mechanical Gaming Keyboard",
        "category": "Keyboard & Mouse Gaming",
        "price": 1599000, "originalPrice": 1999000, "discountPercentage": 20,
        "rating": 4.8, "reviewCount": 280, "soldCount": 750, "stock": 18, "isFlashSale": false, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Classic Black"], "sizes": ["Green Switch (Clicky)", "Yellow Switch (Linear Silent)"]},
        "description": "Keyboard mekanik Razer dengan housing transparan untuk Razer Chroma RGB lebih terang, keycaps ABS doubleshot tebal, rangka aluminium, dan wrist rest ergonomis."
    })
    items.append({
        "id": "KBD-002",
        "name": "Corsair K70 RGB PRO Mechanical Gaming Keyboard",
        "category": "Keyboard & Mouse Gaming",
        "price": 2399000, "originalPrice": 2899000, "discountPercentage": 17,
        "rating": 4.8, "reviewCount": 220, "soldCount": 610, "stock": 16, "isFlashSale": false, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Black Anodized Aluminum"], "sizes": ["Cherry MX Red (Linear)", "Cherry MX Speed Silver"]},
        "description": "Keyboard gaming aluminium anodized dengan hyper-polling AXON 8000Hz, switch Cherry MX orisinal Jerman, keycaps PBT double-shot, dan palm rest magnetik."
    })
    items.append({
        "id": "KBD-003",
        "name": "Keychron K2 Wireless Mechanical Keyboard (Version 2)",
        "category": "Keyboard & Mouse Gaming",
        "price": 1250000, "originalPrice": 1550000, "discountPercentage": 19,
        "rating": 4.8, "reviewCount": 340, "soldCount": 950, "stock": 20, "isFlashSale": false, "badge": "Terlaris",
        "images": ["https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Aluminium Frame Dark", "White Backlight Edition"], "sizes": ["Gateron Red", "Gateron Brown", "Gateron Blue"]},
        "description": "Keyboard mekanikal nirkabel 75% compact 84 tombol. Koneksi Bluetooth hingga 3 perangkat dan USB-C kabel, kompatibel penuh Mac dan Windows, baterai 4000mAh."
    })
    items.append({
        "id": "KBD-004",
        "name": "Keychron Q1 Pro Custom Mechanical Keyboard QMK/VIA",
        "category": "Keyboard & Mouse Gaming",
        "price": 2850000, "originalPrice": 3350000, "discountPercentage": 15,
        "rating": 4.9, "reviewCount": 145, "soldCount": 390, "stock": 12, "isFlashSale": false, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Carbon Black CNC", "Silver Gray CNC"], "sizes": ["Red Switch (Linear)", "Brown Switch (Tactile)", "Banana Switch"]},
        "description": "Keyboard kustom full aluminium CNC 6063 double-gasket akustik empuk. Bluetooth nirkabel, PCB hot-swappable 5-pin, kenop putar encoder, dan keycaps PBT OSA."
    })
    items.append({
        "id": "KBD-005",
        "name": "SteelSeries Apex Pro TKL Wireless OmniPoint 2.0",
        "category": "Keyboard & Mouse Gaming",
        "price": 3890000, "originalPrice": 4450000, "discountPercentage": 13,
        "rating": 5.0, "reviewCount": 180, "soldCount": 420, "stock": 10, "isFlashSale": true, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Aircraft Aluminum Matte Black"], "sizes": ["OmniPoint 2.0 Adjustable Switches"]},
        "description": "Keyboard gaming tercepat dengan switch magnetik OmniPoint 2.0: aktuasi dapat diatur per tombol dari 0.2mm hingga 3.8mm, fitur Rapid Trigger, dan layar OLED Smart Display."
    })
    items.append({
        "id": "KBD-006",
        "name": "HyperX Alloy Origins Core RGB Mechanical Keyboard",
        "category": "Keyboard & Mouse Gaming",
        "price": 1290000, "originalPrice": 1550000, "discountPercentage": 17,
        "rating": 4.8, "reviewCount": 420, "soldCount": 1420, "stock": 25, "isFlashSale": false, "badge": "Terlaris",
        "images": ["https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Full Aircraft Aluminum Body"], "sizes": ["HyperX Red (Linear)", "HyperX Aqua (Tactile)"]},
        "description": "Keyboard TKL ramping dengan bodi full aluminium kelas penerbangan kokoh. Menggunakan switch mekanis orisinal HyperX berdaya tahan 80 juta ketukan dan LED RGB terbuka terang."
    })

    # =========================================================================
    # 4. AUDIO & HEADSET GAMING (16 Produk)
    # =========================================================================
    items.append({
        "id": "AUD-001",
        "name": "HyperX Cloud II Wireless Gaming Headset (7.1 Surround)",
        "category": "Audio & Headset Gaming",
        "price": 1799000, "originalPrice": 2199000, "discountPercentage": 18,
        "rating": 4.9, "reviewCount": 540, "soldCount": 1820, "stock": 25, "isFlashSale": true, "badge": "Terlaris",
        "images": ["https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Red & Black Signature", "Gunmetal Black"], "sizes": []},
        "description": "Headset gaming nirkabel legendaris dengan busa memori khas HyperX berlapis kulit sintetis lembut. Driver 53mm bertenaga, virtual 7.1 surround sound, dan baterai hingga 30 jam."
    })
    items.append({
        "id": "AUD-002",
        "name": "SteelSeries Arctis Nova 7 Wireless Gaming Headset",
        "category": "Audio & Headset Gaming",
        "price": 2899000, "originalPrice": 3499000, "discountPercentage": 17,
        "rating": 4.9, "reviewCount": 230, "soldCount": 580, "stock": 14, "isFlashSale": false, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Nova 7 Black (PC)", "Nova 7P White (PlayStation)"], "sizes": []},
        "description": "Headset gaming nirkabel serbaguna SteelSeries dengan audio spasial 360 derajat Sonar EQ parametrik, koneksi dual wireless 2.4GHz dan Bluetooth simultan, serta baterai 38 jam."
    })
    items.append({
        "id": "AUD-003",
        "name": "Sony Pulse 3D Wireless Headset PlayStation 5",
        "category": "Audio & Headset Gaming",
        "price": 1499000, "originalPrice": 1799000, "discountPercentage": 17,
        "rating": 4.8, "reviewCount": 380, "soldCount": 1250, "stock": 20, "isFlashSale": false, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["White Classic", "Midnight Black"], "sizes": []},
        "description": "Headset nirkabel resmi Sony disetel khusus untuk menghadirkan audio 3D Tempest PS5. Mikrofon ganda peredam bising tersembunyi, earpad empuk, dan baterai isi ulang hingga 12 jam."
    })
    items.append({
        "id": "AUD-004",
        "name": "Shure SM7B Cardioid Dynamic Vocal Microphone",
        "category": "Audio & Headset Gaming",
        "price": 6190000, "originalPrice": 7150000, "discountPercentage": 13,
        "rating": 5.0, "reviewCount": 280, "soldCount": 710, "stock": 11, "isFlashSale": false, "badge": "Official Store",
        "images": ["https://commons.wikimedia.org/wiki/Special:FilePath/Shure_SM7.jpg?width=800"],
        "variants": {"colors": ["Matte Black Pro Edition"], "sizes": ["XLR Standalone Microphone"]},
        "description": "Mikrofon vokal dinamik legendaris standar broadcast dan pro streamer dunia. Pola cardioid menolak bising ruangan dan keyboard mekanik, perisai elektromagnetik, dan shockmount internal."
    })
    items.append({
        "id": "AUD-005",
        "name": "Elgato Wave:3 USB Condenser Microphone for Streamers",
        "category": "Audio & Headset Gaming",
        "price": 2290000, "originalPrice": 2750000, "discountPercentage": 17,
        "rating": 4.8, "reviewCount": 210, "soldCount": 650, "stock": 16, "isFlashSale": true, "badge": "Terlaris",
        "images": ["https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Matte Black", "White Edition"], "sizes": []},
        "description": "Mikrofon USB-C kondensor premium dari Elgato dengan teknologi anti-distorsi Clipguard eksklusif. Resolusi 24-bit 96kHz, tombol mute kapasitif, dan mixer audio digital Wave Link 9-channel."
    })
    items.append({
        "id": "AUD-006",
        "name": "Audio-Technica ATH-M50x Professional Monitor Headphones",
        "category": "Audio & Headset Gaming",
        "price": 2150000, "originalPrice": 2650000, "discountPercentage": 19,
        "rating": 5.0, "reviewCount": 460, "soldCount": 1350, "stock": 20, "isFlashSale": false, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Black", "White Limited"], "sizes": ["Standard 3.5mm with 6.3mm Adapter"]},
        "description": "Headphone monitor studio kelas dunia andalan pro player untuk akurasi separasi langkah kaki lawan di game FPS. Driver 45mm aperture besar dengan isolasi pasif rapat dan earcup putar 90 derajat."
    })

    # =========================================================================
    # 5. MONITOR & SETUP GAMING (14 Produk)
    # =========================================================================
    items.append({
        "id": "MON-001",
        "name": "Samsung Odyssey G7 32\" Curved 240Hz 1ms Gaming Monitor",
        "category": "Monitor & Setup Gaming",
        "price": 8899000, "originalPrice": 10499000, "discountPercentage": 15,
        "rating": 4.9, "reviewCount": 175, "soldCount": 420, "stock": 12, "isFlashSale": true, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Black Matte with CoreSync RGB"], "sizes": ["32 Inch QHD (2560x1440) 1000R"]},
        "description": "Monitor gaming lengkung ekstrem 1000R Samsung dengan resolusi WQHD tajam dan refresh rate 240Hz 1ms GtG. Panel QLED 95% DCI-P3, sertifikasi DisplayHDR 600, dan kompatibel NVIDIA G-Sync."
    })
    items.append({
        "id": "MON-002",
        "name": "BenQ ZOWIE XL2546K 24.5\" 240Hz DyAc+ Esports Gaming Monitor",
        "category": "Monitor & Setup Gaming",
        "price": 7990000, "originalPrice": 9200000, "discountPercentage": 13,
        "rating": 4.9, "reviewCount": 320, "soldCount": 910, "stock": 14, "isFlashSale": false, "badge": "Terlaris",
        "images": ["https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Matte Black Shield Edition"], "sizes": ["24.5 Inch FHD (1920x1080) TN 240Hz"]},
        "description": "Monitor turnamen FPS nomor satu dunia dengan DyAc+ (Dynamic Accuracy Plus) yang meminimalisir motion blur saat recoil spray senjata. Dudukan base ringkas fleksibel dan switch profil cepat S-Switch."
    })
    items.append({
        "id": "MON-003",
        "name": "ASUS ROG Swift OLED PG27AQDM 27\" 240Hz Gaming Monitor",
        "category": "Monitor & Setup Gaming",
        "price": 16499000, "originalPrice": 18999000, "discountPercentage": 13,
        "rating": 5.0, "reviewCount": 82, "soldCount": 140, "stock": 7, "isFlashSale": false, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1547119957-637f8679db1e?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Titanium Gray Armor"], "sizes": ["27 Inch QHD (2560x1440) OLED"]},
        "description": "Monitor gaming OLED 27 inci 1440p ASUS ROG dengan refresh rate 240Hz dan response time 0.03ms GTG. Heatsink kustom anti burn-in, kecerahan 1000 nits, dan 99% DCI-P3 color gamut."
    })
    items.append({
        "id": "MON-004",
        "name": "Elgato Stream Deck MK.2 Studio Controller (15 LCD Keys)",
        "category": "Monitor & Setup Gaming",
        "price": 2390000, "originalPrice": 2850000, "discountPercentage": 16,
        "rating": 4.8, "reviewCount": 160, "soldCount": 620, "stock": 18, "isFlashSale": false, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1616469829941-c7200edec809?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["White Edition", "Black Edition"], "sizes": ["15 Tombol LCD"]},
        "description": "Pengontrol antarmuka studio siaran langsung resmi Elgato dengan 15 tombol LCD taktil yang dapat dipersonalisasi. Mengontrol OBS Studio, Discord, Spotify, dan shortcut game dalam satu sentuhan."
    })

    # =========================================================================
    # 6. KURSI & MEJA GAMING (10 Produk)
    # =========================================================================
    items.append({
        "id": "CHR-001",
        "name": "Secretlab TITAN Evo 2024 Gaming Chair (SoftWeave Plus)",
        "category": "Kursi & Meja Gaming",
        "price": 7790000, "originalPrice": 9200000, "discountPercentage": 15,
        "rating": 4.9, "reviewCount": 290, "soldCount": 610, "stock": 10, "isFlashSale": true, "badge": "Official Store",
        "images": ["https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&auto=format&fit=crop&q=80"],
        "variants": {"colors": ["Cookies & Cream", "Stealth Black", "Frost Blue"], "sizes": ["Regular (Tinggi 170-189cm)", "XL (Tinggi 181-205cm)"]},
        "description": "Kursi gaming ergonomis standar atlet esports dunia dari Secretlab dengan kain SoftWeave Plus berpori sejuk. Penopang lumbar 4-arah L-ADAPT, bantal kepala magnetik busa memori gel pendingin, dan armrest 4D."
    })
    items.append({
        "id": "CHR-002",
        "name": "Razer Iskur V2 Ergonomic Gaming Chair",
        "category": "Kursi & Meja Gaming",
        "price": 8899000, "originalPrice": 10500000, "discountPercentage": 15,
        "rating": 4.9, "reviewCount": 140, "soldCount": 320, "stock": 8, "isFlashSale": false, "badge": "Official Store",
        "images": ["https://commons.wikimedia.org/wiki/Special:FilePath/Gaming_chair_1.jpg?width=800"],
        "variants": {"colors": ["Black / Green Razer Signature", "Dark Gray Dark Edition"], "sizes": ["Standard Adult Ergonomic"]},
        "description": "Kursi gaming ergonomis premium dari Razer dengan penopang lumbar adaptif 6D yang mengikuti postur tulang punggung. Kulit sintetis EPU bermutu tinggi, recline 152 derajat, dan sandaran tangan 4D."
    })

    return items

if __name__ == "__main__":
    catalog = generate_catalog()
    print(f"Generated {len(catalog)} products.")
