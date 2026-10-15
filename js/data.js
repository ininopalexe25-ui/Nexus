/**
 * ============================================================
 * NEXUS GAMING - MOCK DATABASE & STATIC CONFIGURATION
 * Khusus Brand Gaming Gear & Komponen Rakit PC Terkenal Dunia (140 Produk Resmi)
 * CPU, GPU, Motherboard, RAM, SSD, PSU, Case, Cooling, Konsol, Periferal, Audio, Monitor & Furniture
 * ============================================================
 */

const INITIAL_PRODUCTS = [
  {
    "id": "CPU-001",
    "name": "Intel Core i9-14900K 24-Core Desktop Processor",
    "category": "Komponen Rakit PC",
    "price": 9850000,
    "originalPrice": 10999000,
    "discountPercentage": 10,
    "rating": 4.9,
    "reviewCount": 140,
    "soldCount": 420,
    "stock": 14,
    "isFlashSale": true,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Intel%20i9-14900KF%20CPU.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Box Resmi Garansi 3 Tahun"
      ],
      "sizes": [
        "LGA1700"
      ]
    },
    "description": "Prosesor desktop flagship Intel Core generasi 14 dengan 24 Core (8 P-Core + 16 E-Core) 32 Thread. Max Turbo Frequency hingga 6.0 GHz dengan Intel Thermal Velocity Boost, cache 36MB, dan grafis terintegrasi Intel UHD 770."
  },
  {
    "id": "CPU-002",
    "name": "AMD Ryzen 7 7800X3D 8-Core Gaming Processor (AM5)",
    "category": "Komponen Rakit PC",
    "price": 6890000,
    "originalPrice": 7650000,
    "discountPercentage": 10,
    "rating": 5.0,
    "reviewCount": 510,
    "soldCount": 1750,
    "stock": 18,
    "isFlashSale": true,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/AMD%20Ryzen%205%207600%20top%20IMGP6773%20smial%20wp.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Box Resmi Garansi 3 Tahun"
      ],
      "sizes": [
        "Socket AM5"
      ]
    },
    "description": "Prosesor gaming nomor 1 di dunia dengan teknologi 3D V-Cache generasi ke-2. Memiliki 8 Core / 16 Thread, boost clock 5.0 GHz, dan total cache raksasa 104MB untuk framerate tertinggi dan 1% low fps paling stabil di game kompetitif."
  },
  {
    "id": "CPU-003",
    "name": "Intel Core i7-14700K 20-Core Desktop Processor",
    "category": "Komponen Rakit PC",
    "price": 6750000,
    "originalPrice": 7450000,
    "discountPercentage": 9,
    "rating": 4.9,
    "reviewCount": 210,
    "soldCount": 680,
    "stock": 20,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/2023%20Intel%20Core%20i7%2012700KF%20(5).jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Box Resmi"
      ],
      "sizes": [
        "LGA1700"
      ]
    },
    "description": "Prosesor Intel Core generasi 14 dengan arsitektur hybrid 20 Core (8 P-Core + 12 E-Core) dan 28 Thread. Max turbo clock 5.6 GHz, cache 33MB, sangat optimal untuk gaming kelas berat dan rendering konten simultan."
  },
  {
    "id": "CPU-004",
    "name": "AMD Ryzen 5 7600X 6-Core Gaming Processor (AM5)",
    "category": "Komponen Rakit PC",
    "price": 3450000,
    "originalPrice": 3950000,
    "discountPercentage": 13,
    "rating": 4.8,
    "reviewCount": 320,
    "soldCount": 1250,
    "stock": 25,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/AMD%20Ryzen%207%201800X.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Box Resmi"
      ],
      "sizes": [
        "Socket AM5"
      ]
    },
    "description": "Prosesor gaming arsitektur Zen 4 5nm bertenaga 6 Core / 12 Thread dengan boost clock hingga 5.3 GHz. Mendukung memori DDR5 berkecepatan tinggi dan jalur PCIe 5.0 untuk rakitan gaming hemat daya berperforma tinggi."
  },
  {
    "id": "CPU-005",
    "name": "Intel Core i5-14600K 14-Core Gaming Processor",
    "category": "Komponen Rakit PC",
    "price": 4950000,
    "originalPrice": 5600000,
    "discountPercentage": 12,
    "rating": 4.9,
    "reviewCount": 290,
    "soldCount": 940,
    "stock": 22,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Intel%20CPU%20Core%20i7%2012700K%20Alder%20Lake%20bottom.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Box Resmi"
      ],
      "sizes": [
        "LGA1700"
      ]
    },
    "description": "Prosesor pilihan terbaik price-to-performance untuk gaming kompetitif. Memiliki 14 Core (6 P-Core + 8 E-Core) 20 Thread dengan clock hingga 5.3 GHz dan dukungan overclocking penuh pada motherboard seri Z."
  },
  {
    "id": "CPU-006",
    "name": "AMD Ryzen 9 7950X3D 16-Core Flagship Processor",
    "category": "Komponen Rakit PC",
    "price": 10500000,
    "originalPrice": 11800000,
    "discountPercentage": 11,
    "rating": 5.0,
    "reviewCount": 85,
    "soldCount": 210,
    "stock": 8,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/AMD%20Ryzen%209%207900X.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Box Resmi"
      ],
      "sizes": [
        "Socket AM5"
      ]
    },
    "description": "Prosesor hybrid workstation dan gaming terkuat dari AMD. 16 Core / 32 Thread dengan 3D V-Cache 144MB total, clock hingga 5.7 GHz, memberikan efisiensi daya luar biasa untuk kreator konten dan gamer profesional."
  },
  {
    "id": "CPU-007",
    "name": "Intel Core i5-13400F 10-Core Desktop Processor",
    "category": "Komponen Rakit PC",
    "price": 3150000,
    "originalPrice": 3600000,
    "discountPercentage": 13,
    "rating": 4.8,
    "reviewCount": 460,
    "soldCount": 1820,
    "stock": 30,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Intel%20CPU%20Core%20i7%202600K%20Sandy%20Bridge%20perspective.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Box with Intel Stock Cooler"
      ],
      "sizes": [
        "LGA1700"
      ]
    },
    "description": "Prosesor rakit PC gaming hemat anggaran paling terpercaya. 10 Core (6 P-Core + 4 E-Core) 16 Thread dengan turbo boost 4.6 GHz, 20MB cache, dan TDP hemat 65 Watt."
  },
  {
    "id": "CPU-008",
    "name": "AMD Ryzen 5 5600X 6-Core Desktop Processor (AM4)",
    "category": "Komponen Rakit PC",
    "price": 2150000,
    "originalPrice": 2550000,
    "discountPercentage": 16,
    "rating": 4.9,
    "reviewCount": 890,
    "soldCount": 3500,
    "stock": 40,
    "isFlashSale": true,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/AMD%20Ryzen%205%202600%20(39851733273).jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Box with Wraith Stealth Cooler"
      ],
      "sizes": [
        "Socket AM4"
      ]
    },
    "description": "Prosesor legendaris platform AM4 dengan 6 Core / 12 Thread, boost clock 4.6 GHz, dan cache 35MB. Pilihan paling ekonomis untuk rakit PC gaming esport dengan performa tinggi."
  },
  {
    "id": "GPU-001",
    "name": "ASUS ROG Strix GeForce RTX 4090 24GB GDDR6X OC Edition",
    "category": "Komponen Rakit PC",
    "price": 36999000,
    "originalPrice": 41500000,
    "discountPercentage": 11,
    "rating": 5.0,
    "reviewCount": 95,
    "soldCount": 160,
    "stock": 5,
    "isFlashSale": true,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Asus_Strix_RTX_4090.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Strix Gunmetal Black",
        "White Edition"
      ],
      "sizes": [
        "24GB GDDR6X"
      ]
    },
    "description": "Kartu grafis gaming terkencang di muka bumi. Bersenjatakan GPU NVIDIA AD102 dengan 16.384 CUDA Core, VRAM 24GB GDDR6X 384-bit, pendingin 3.5 slot vapor chamber dengan kipas Axial-tech, dan frame diecast logam kokoh."
  },
  {
    "id": "GPU-002",
    "name": "MSI GeForce RTX 4080 Super 16GB Gaming X Slim",
    "category": "Komponen Rakit PC",
    "price": 18450000,
    "originalPrice": 20500000,
    "discountPercentage": 10,
    "rating": 4.9,
    "reviewCount": 120,
    "soldCount": 310,
    "stock": 10,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/MSI_GeForce_RTX_3070_VENTUS_3X_OC.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Black Slim",
        "White Edition"
      ],
      "sizes": [
        "16GB GDDR6X"
      ]
    },
    "description": "Kartu grafis gaming 4K berperforma tinggi dengan arsitektur NVIDIA Ada Lovelace. Dilengkapi 10.240 CUDA Core, VRAM 16GB GDDR6X, sistem pendingin TRI FROZR 3 dengan kipas TORX Fan 5.0, dan pelat dasar tembaga berlapis nikel."
  },
  {
    "id": "GPU-003",
    "name": "Gigabyte GeForce RTX 4070 Ti Super AERO OC 16GB White",
    "category": "Komponen Rakit PC",
    "price": 15200000,
    "originalPrice": 16900000,
    "discountPercentage": 10,
    "rating": 4.9,
    "reviewCount": 140,
    "soldCount": 420,
    "stock": 12,
    "isFlashSale": false,
    "badge": "Baru",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Gigabyte_GeForce_RTX_3090_Eagle_OC_24G,_24576_MiB_GDDR6X_Front_20201114_DSC5880.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "AERO White Metal"
      ],
      "sizes": [
        "16GB GDDR6X"
      ]
    },
    "description": "Kartu grafis bertema putih elegan untuk rakitan PC all-white. Memiliki VRAM 16GB GDDR6X pada bus 256-bit, sistem pendingin WINDFORCE dengan 3 kipas blade unik berputar bolak-balik, dan pipa panas tembaga komposit."
  },
  {
    "id": "GPU-004",
    "name": "ZOTAC Gaming GeForce RTX 4070 Super Twin Edge 12GB",
    "category": "Komponen Rakit PC",
    "price": 10450000,
    "originalPrice": 11800000,
    "discountPercentage": 11,
    "rating": 4.8,
    "reviewCount": 260,
    "soldCount": 890,
    "stock": 16,
    "isFlashSale": true,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Zotac_GeForce_RTX_3060_12GB_VRAM_LHR_video_card.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Black Twin Edge",
        "White OC"
      ],
      "sizes": [
        "12GB GDDR6X"
      ]
    },
    "description": "Kartu grafis kompak dual-slot yang bertenaga untuk gaming resolusi 1440p maksimal dengan DLSS 3 Frame Generation. Dilengkapi pendingin IceStorm 2.0 canggih, kontrol kipas aktif FREEZE, dan pelat belakang logam pelindung."
  },
  {
    "id": "GPU-005",
    "name": "ASUS Dual GeForce RTX 4060 Ti EVO OC Edition 8GB",
    "category": "Komponen Rakit PC",
    "price": 6850000,
    "originalPrice": 7650000,
    "discountPercentage": 10,
    "rating": 4.8,
    "reviewCount": 410,
    "soldCount": 1450,
    "stock": 24,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Asus_Strix_RTX_4090_operational.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Black Edition",
        "White Edition"
      ],
      "sizes": [
        "8GB GDDR6"
      ]
    },
    "description": "GPU gaming 1080p dan 1440p paling populer dengan efisiensi daya luar biasa hanya 160 Watt. Desain 2 kipas Axial-tech dengan bantalan bola ganda yang senyap dan teknologi Auto-Extreme manufaktur otomatis presisi."
  },
  {
    "id": "GPU-006",
    "name": "MSI GeForce RTX 4060 Ventus 2X Black 8GB OC",
    "category": "Komponen Rakit PC",
    "price": 4950000,
    "originalPrice": 5500000,
    "discountPercentage": 10,
    "rating": 4.8,
    "reviewCount": 380,
    "soldCount": 1620,
    "stock": 28,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Size_comparison_between_RTX_3090_and_RTX_4090.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Black Ventus",
        "White Ventus"
      ],
      "sizes": [
        "8GB GDDR6"
      ]
    },
    "description": "GPU gaming berkinerja tinggi hemat daya berarsitektur Ada Lovelace. Mendukung penuh Ray Tracing Gen-3 dan DLSS 3 Frame Generation dengan dua kipas TORX Fan 4.0 dan backplate penguat struktural."
  },
  {
    "id": "GPU-007",
    "name": "Sapphire NITRO+ AMD Radeon RX 7900 XTX Vapor-X 24GB",
    "category": "Komponen Rakit PC",
    "price": 17990000,
    "originalPrice": 19990000,
    "discountPercentage": 10,
    "rating": 4.9,
    "reviewCount": 88,
    "soldCount": 190,
    "stock": 7,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sapphire%20AMD%20Radeon%20RX%207900%20XTX.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Gunmetal Gray with RGB Lightbar"
      ],
      "sizes": [
        "24GB GDDR6"
      ]
    },
    "description": "Kartu grafis flagship AMD dari Sapphire dengan pendingin ruang uap Vapor-X komposit. Dilengkapi 6.144 Stream Processors, VRAM 24GB GDDR6 384-bit, rangka aluminium magnesium die-cast, dan bilah kipas kecepatan tinggi berdesain angular."
  },
  {
    "id": "GPU-008",
    "name": "PowerColor Hellhound AMD Radeon RX 7800 XT 16GB",
    "category": "Komponen Rakit PC",
    "price": 8950000,
    "originalPrice": 9950000,
    "discountPercentage": 10,
    "rating": 4.8,
    "reviewCount": 130,
    "soldCount": 380,
    "stock": 14,
    "isFlashSale": false,
    "badge": "Baru",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Amd-radeon-rx6800xt-from2020year-front.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Spectral White",
        "Classic Black"
      ],
      "sizes": [
        "16GB GDDR6"
      ]
    },
    "description": "Kartu grafis gaming 1440p berdaya saing tinggi dari PowerColor. 16GB VRAM GDDR6 berkecepatan 19.5 Gbps, dual BIOS (OC/Silent), pencahayaan LED Ice Blue / Ametis, dan 3 kipas bantalan ganda tahan lama."
  },
  {
    "id": "MBO-001",
    "name": "ASUS ROG Maximus Z790 Dark Hero WiFi Motherboard",
    "category": "Komponen Rakit PC",
    "price": 11450000,
    "originalPrice": 12800000,
    "discountPercentage": 11,
    "rating": 5.0,
    "reviewCount": 65,
    "soldCount": 120,
    "stock": 8,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/2023%20P%C5%82yta%20g%C5%82%C3%B3wna%20Asus%20ROG%20STRIX%20Z690-A%20GAMING%20WIFI.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Polymo Lighting Dark Armor"
      ],
      "sizes": [
        "ATX (LGA1700)"
      ]
    },
    "description": "Motherboard kelas antusias tertinggi untuk prosesor Intel Core generasi 14. Dilengkapi 20+1+2 power stage 90A, dukungan memori DDR5 hingga 8000+ MT/s, 5 slot M.2 onboard (termasuk PCIe 5.0), Wi-Fi 7 terintegrasi, dan dual Thunderbolt 4."
  },
  {
    "id": "MBO-002",
    "name": "MSI MAG B650 Tomahawk WiFi AM5 Motherboard",
    "category": "Komponen Rakit PC",
    "price": 3890000,
    "originalPrice": 4350000,
    "discountPercentage": 11,
    "rating": 4.9,
    "reviewCount": 380,
    "soldCount": 1150,
    "stock": 20,
    "isFlashSale": true,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Asus%20ROG%20Strix%20Z390-H%20motherboard.JPG?width=800"
    ],
    "variants": {
      "colors": [
        "Military Black Heatsink"
      ],
      "sizes": [
        "ATX (AM5)"
      ]
    },
    "description": "Motherboard terfavorit untuk prosesor AMD Ryzen seri 7000/8000. Memiliki 14+2+1 Duet Rail Power System dengan VRM heatsink tebal, 3 slot M.2 dengan M.2 Shield Frozr, koneksi Wi-Fi 6E, LAN 2.5G, dan Audio Boost 5."
  },
  {
    "id": "MBO-003",
    "name": "ASUS TUF Gaming B760-Plus WiFi DDR5 Motherboard",
    "category": "Komponen Rakit PC",
    "price": 3450000,
    "originalPrice": 3890000,
    "discountPercentage": 11,
    "rating": 4.8,
    "reviewCount": 240,
    "soldCount": 780,
    "stock": 18,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Asus-ROG-Strix-Z390-F-Gaming-Motherboard%2020201120%20DSC6025.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "TUF Tactical Black"
      ],
      "sizes": [
        "ATX (LGA1700)"
      ]
    },
    "description": "Motherboard berdaya tahan militer dengan komponen TUF Chokes dan TUF Capacitors. Mendukung prosesor Intel LGA1700, memori DDR5, slot PCIe 5.0 x16 untuk GPU modern, 3 slot M.2 PCIe 4.0, dan antena Wi-Fi 6 eksternal."
  },
  {
    "id": "MBO-004",
    "name": "Gigabyte B650 AORUS Elite AX ICE White AM5 Motherboard",
    "category": "Komponen Rakit PC",
    "price": 4250000,
    "originalPrice": 4790000,
    "discountPercentage": 11,
    "rating": 4.9,
    "reviewCount": 110,
    "soldCount": 340,
    "stock": 14,
    "isFlashSale": false,
    "badge": "Baru",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/GIGABYTE%20P55-UD6%20Motherboard%20Unboxed.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Full White PCB & Heatsink"
      ],
      "sizes": [
        "ATX (AM5)"
      ]
    },
    "description": "Motherboard serba putih murni dari PCB hingga heatsink armor untuk rakitan PC putih impian. Dilengkapi 12+2+2 Twin Digital VRM, slot M.2 EZ-Latch tanpa obeng, Wi-Fi 6E, dan dukungan memori DDR5 hingga 8000+ MHz."
  },
  {
    "id": "MBO-005",
    "name": "ASRock B650M Pro RS WiFi Micro-ATX AM5 Motherboard",
    "category": "Komponen Rakit PC",
    "price": 2750000,
    "originalPrice": 3100000,
    "discountPercentage": 11,
    "rating": 4.8,
    "reviewCount": 180,
    "soldCount": 590,
    "stock": 20,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/2023%20P%C5%82yta%20g%C5%82%C3%B3wna%20ASRock%20A320M-DVS.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "White Silver Heatsink"
      ],
      "sizes": [
        "Micro-ATX (AM5)"
      ]
    },
    "description": "Motherboard ukuran ringkas Micro-ATX dengan fitur kelas atas: 8+2+1 power phase Dr.MOS, 3 slot M.2 (termasuk Blazing M.2 PCIe 5.0), modul Wi-Fi 6E, dan slot penguat baja PCIe Steel Slot."
  },
  {
    "id": "MBO-006",
    "name": "MSI PRO Z790-P WiFi DDR5 LGA1700 Motherboard",
    "category": "Komponen Rakit PC",
    "price": 4190000,
    "originalPrice": 4650000,
    "discountPercentage": 10,
    "rating": 4.8,
    "reviewCount": 150,
    "soldCount": 490,
    "stock": 16,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Supermicro%20-%20X11SAE%20%E2%80%93%20CeBIT%202016%2001.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Professional Black"
      ],
      "sizes": [
        "ATX (LGA1700)"
      ]
    },
    "description": "Motherboard workstation dan gaming berkecepatan tinggi dengan 14+1+1 Duet Rail VRM, 4 slot M.2 PCIe 4.0, slot PCIe 5.0 x16, konektivitas LAN 2.5G Intel, dan Wi-Fi 6E kecepatan tinggi."
  },
  {
    "id": "RAM-001",
    "name": "Corsair Vengeance RGB DDR5 32GB (2x16GB) 6000MHz CL30",
    "category": "Komponen Rakit PC",
    "price": 2150000,
    "originalPrice": 2450000,
    "discountPercentage": 12,
    "rating": 4.9,
    "reviewCount": 510,
    "soldCount": 1780,
    "stock": 30,
    "isFlashSale": true,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/2023%20Pami%C4%99ci%20Corsair%20Vengeance%20RGB.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Black Heatsink",
        "White Heatsink"
      ],
      "sizes": [
        "32GB (2x16GB) 6000MHz CL30",
        "64GB (2x32GB) 6000MHz CL30"
      ]
    },
    "description": "Kit memori DDR5 berkecepatan tinggi dengan timing ketat CL30 optimal untuk AMD EXPO dan Intel XMP 3.0. Dilengkapi 10 zona pencahayaan LED RGB dinamis per keping memori dan heatspreader aluminium pembuang panas solid."
  },
  {
    "id": "RAM-002",
    "name": "G.Skill Trident Z5 RGB DDR5 32GB (2x16GB) 6400MHz CL32",
    "category": "Komponen Rakit PC",
    "price": 2490000,
    "originalPrice": 2850000,
    "discountPercentage": 13,
    "rating": 5.0,
    "reviewCount": 320,
    "soldCount": 920,
    "stock": 22,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Tridentz%20red%20RAM.JPG?width=800"
    ],
    "variants": {
      "colors": [
        "Metallic Silver",
        "Matte Black"
      ],
      "sizes": [
        "32GB (2x16GB) 6400MHz",
        "48GB (2x24GB) 7200MHz"
      ]
    },
    "description": "Memori DDR5 kelas hyper-performance pemenang penghargaan desain Red Dot. Menggunakan chip IC pilihan tangan terbaik, bodi aluminium dual-texture bergaris halus, dan light bar RGB streamline yang memesona."
  },
  {
    "id": "RAM-003",
    "name": "Kingston FURY Beast DDR5 32GB (2x16GB) 5600MHz",
    "category": "Komponen Rakit PC",
    "price": 1650000,
    "originalPrice": 1890000,
    "discountPercentage": 13,
    "rating": 4.8,
    "reviewCount": 430,
    "soldCount": 1560,
    "stock": 35,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/16%20GiB-DDR4-RAM-Riegel%20RAM019FIX%20Small%20Crop%2090%20PCNT.png?width=800"
    ],
    "variants": {
      "colors": [
        "Black Low-Profile"
      ],
      "sizes": [
        "16GB (2x8GB) 5600MHz",
        "32GB (2x16GB) 5600MHz"
      ]
    },
    "description": "Kit RAM DDR5 bertinggi rendah (low-profile) yang sangat ramah terhadap pendingin CPU menara besar (air cooler). Menghadirkan stabilitas tinggi dengan on-die ECC dan sertifikasi Intel XMP 3.0 serta AMD EXPO."
  },
  {
    "id": "RAM-004",
    "name": "Team T-Force Delta RGB DDR5 32GB (2x16GB) 6000MHz White",
    "category": "Komponen Rakit PC",
    "price": 1950000,
    "originalPrice": 2250000,
    "discountPercentage": 13,
    "rating": 4.8,
    "reviewCount": 260,
    "soldCount": 810,
    "stock": 20,
    "isFlashSale": false,
    "badge": "Baru",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/2*8Go%20DDR4%20Corsair%20-%202018-05-08.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Pure White",
        "Stealth Black"
      ],
      "sizes": [
        "32GB (2x16GB) 6000MHz"
      ]
    },
    "description": "Desain heat spreader geometris stealth bertema pesawat tempur dengan sudut pencahayaan RGB 120 derajat ultra-lebar. Dilengkapi Power Management IC (PMIC) cerdas dan gel termal silikon konduktif tinggi."
  },
  {
    "id": "RAM-005",
    "name": "Corsair Dominator Titanium RGB DDR5 64GB (2x32GB) 6000MHz",
    "category": "Komponen Rakit PC",
    "price": 5450000,
    "originalPrice": 6100000,
    "discountPercentage": 11,
    "rating": 5.0,
    "reviewCount": 65,
    "soldCount": 140,
    "stock": 10,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/DDR5%20SDRAM%20IMGP6304%20smial%20wp.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "First Edition White",
        "First Edition Black"
      ],
      "sizes": [
        "64GB (2x32GB) 6000MHz"
      ]
    },
    "description": "Mahakarya RAM paling prestisius dari Corsair. Bodi aluminium tempa presisi tinggi dengan bilah atas (top bar) modular yang dapat diganti, 11 LED CAPELLIX RGB ultra-terang, dan pendingin dipatenkan DHX cooling."
  },
  {
    "id": "RAM-006",
    "name": "Adata XPG Lancer Blade RGB DDR5 32GB (2x16GB) 6000MHz",
    "category": "Komponen Rakit PC",
    "price": 1820000,
    "originalPrice": 2090000,
    "discountPercentage": 13,
    "rating": 4.8,
    "reviewCount": 190,
    "soldCount": 670,
    "stock": 24,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Viper%20DDR4%20Ram%20-%203004.png?width=800"
    ],
    "variants": {
      "colors": [
        "Black",
        "White"
      ],
      "sizes": [
        "32GB (2x16GB) 6000MHz CL30"
      ]
    },
    "description": "Memori DDR5 bertinggi ringkas ramah casing Mini-ITX dan pendingin udara besar. Mendukung penuh AMD EXPO dan profil XMP dengan heatsink bersudut tajam bergaris geometris."
  },
  {
    "id": "SSD-001",
    "name": "Samsung 990 PRO 2TB PCIe 4.0 NVMe M.2 SSD (7450 MB/s)",
    "category": "Komponen Rakit PC",
    "price": 3150000,
    "originalPrice": 3600000,
    "discountPercentage": 13,
    "rating": 5.0,
    "reviewCount": 680,
    "soldCount": 2200,
    "stock": 25,
    "isFlashSale": true,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Samsung%20980%20PRO%20PCIe%204.0%20NVMe%20SSD%201TB-top%20PNr%C2%B00915.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Standard Edition",
        "With Heatsink (PS5 Ready)"
      ],
      "sizes": [
        "1TB NVMe",
        "2TB NVMe",
        "4TB NVMe"
      ]
    },
    "description": "SSD NVMe Gen4 tercepat di kelasnya dengan kecepatan baca sekuensial hingga 7.450 MB/s dan tulis 6.900 MB/s. Dilengkapi kontroler berlapis nikel pengatur suhu cerdas dan efisiensi daya 50% lebih baik dari 980 PRO."
  },
  {
    "id": "SSD-002",
    "name": "WD_BLACK SN850X 2TB NVMe M.2 SSD Gaming (7300 MB/s)",
    "category": "Komponen Rakit PC",
    "price": 2890000,
    "originalPrice": 3350000,
    "discountPercentage": 14,
    "rating": 4.9,
    "reviewCount": 490,
    "soldCount": 1650,
    "stock": 22,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Samsung%20980%20PRO%20PCIe%204.0%20NVMe%20SSD%201TB-bottom%20PNr%C2%B00916.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Black PCB"
      ],
      "sizes": [
        "1TB (7300 MB/s)",
        "2TB (7300 MB/s)"
      ]
    },
    "description": "SSD khusus gaming performa papan atas dengan fitur Game Mode 2.0 di WD_BLACK Dashboard untuk loading game tanpa menunggu. Kecepatan baca mencapai 7.300 MB/s dengan IOPS acak hingga 1.200.000."
  },
  {
    "id": "SSD-003",
    "name": "Kingston KC3000 1TB PCIe 4.0 NVMe M.2 SSD (7000 MB/s)",
    "category": "Komponen Rakit PC",
    "price": 1450000,
    "originalPrice": 1690000,
    "discountPercentage": 14,
    "rating": 4.8,
    "reviewCount": 380,
    "soldCount": 1390,
    "stock": 30,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/2017%20Dysk%20SSD%20Plextor%20M8Pe(Y)%20256GB.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Graphene Aluminum Spreader"
      ],
      "sizes": [
        "1TB PCIe 4.0",
        "2TB PCIe 4.0"
      ]
    },
    "description": "Menggunakan pengontrol Phison E18 dan 3D TLC NAND generasi terbaru dengan penyebar panas graphene aluminium tipis. Memberikan performa baca tulis 7.000 MB/s yang stabil untuk rendering video dan gaming intensif."
  },
  {
    "id": "SSD-004",
    "name": "Crucial T700 1TB PCIe 5.0 NVMe M.2 SSD (11.700 MB/s)",
    "category": "Komponen Rakit PC",
    "price": 3350000,
    "originalPrice": 3890000,
    "discountPercentage": 14,
    "rating": 4.9,
    "reviewCount": 95,
    "soldCount": 210,
    "stock": 10,
    "isFlashSale": false,
    "badge": "Baru",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/256GB%202230%20NVME%20SSD%201.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "With Premium Heatsink"
      ],
      "sizes": [
        "1TB Gen5 (11.700 MB/s)",
        "2TB Gen5 (12.400 MB/s)"
      ]
    },
    "description": "SSD generasi masa depan PCIe Gen5 dengan kecepatan luar biasa menembus 11.700 MB/s baca dan 9.500 MB/s tulis. Hampir 2x lipat lebih kencang dari SSD Gen4 tercepat, membawa heatsink aluminium tembaga khusus."
  },
  {
    "id": "SSD-005",
    "name": "Lexar NM790 2TB PCIe 4.0 NVMe SSD (7400 MB/s)",
    "category": "Komponen Rakit PC",
    "price": 2350000,
    "originalPrice": 2750000,
    "discountPercentage": 15,
    "rating": 4.8,
    "reviewCount": 240,
    "soldCount": 790,
    "stock": 25,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/256GB%202230%20NVME%20SSD%20%2B%20256GB%20NGFF%20SSD.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Black PCB"
      ],
      "sizes": [
        "1TB NVMe",
        "2TB NVMe",
        "4TB NVMe"
      ]
    },
    "description": "SSD NVMe DRAM-less berkecepatan tinggi dengan teknologi HMB (Host Memory Buffer) 3.0. Menghasilkan performa fantastis hingga 7.400 MB/s baca sekuensial dengan konsumsi daya dan suhu yang sangat rendah."
  },
  {
    "id": "SSD-006",
    "name": "Seagate FireCuda 530 2TB NVMe M.2 SSD with Heatsink",
    "category": "Komponen Rakit PC",
    "price": 3490000,
    "originalPrice": 3990000,
    "discountPercentage": 13,
    "rating": 4.9,
    "reviewCount": 150,
    "soldCount": 420,
    "stock": 14,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Samsung%20980%20PRO%20PCIe%204.0%20NVMe%20SSD%201TB-top%20PNr%C2%B00915.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "EKWB Custom Heatsink"
      ],
      "sizes": [
        "2TB NVMe"
      ]
    },
    "description": "SSD ketahanan kelas industri dengan peringkat endurance 2550 TBW. Dilengkapi heatsink aluminium minimalis yang dirancang khusus bersama EK Water Blocks dan kompatibel penuh untuk slot ekspansi PlayStation 5."
  },
  {
    "id": "PSU-001",
    "name": "Corsair RM1000x SHIFT 1000W 80+ Gold Fully Modular ATX 3.0",
    "category": "Komponen Rakit PC",
    "price": 3150000,
    "originalPrice": 3550000,
    "discountPercentage": 11,
    "rating": 5.0,
    "reviewCount": 160,
    "soldCount": 480,
    "stock": 15,
    "isFlashSale": true,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Full%20modular%20ATX%20power%20supply%20unit.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Matte Black"
      ],
      "sizes": [
        "850W ATX 3.0",
        "1000W ATX 3.0",
        "1200W ATX 3.0"
      ]
    },
    "description": "Inovasi power supply pertama dengan konektor kabel modular di samping (side interface) untuk manajemen kabel yang sangat mudah. Standar ATX 3.0 dan PCIe 5.0 dengan kabel bawaan 12VHPWR native untuk kartu grafis seri RTX 40."
  },
  {
    "id": "PSU-002",
    "name": "Seasonic Focus GX-850 850W 80+ Gold Fully Modular",
    "category": "Komponen Rakit PC",
    "price": 2250000,
    "originalPrice": 2550000,
    "discountPercentage": 12,
    "rating": 4.9,
    "reviewCount": 310,
    "soldCount": 980,
    "stock": 20,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Kolink-Continuum-1200W-Netzteil%20Anschl%C3%BCsse%2020201120%20DSC6061.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Black",
        "White Edition"
      ],
      "sizes": [
        "750W 80+ Gold",
        "850W 80+ Gold"
      ]
    },
    "description": "Power supply standar emas ketahanan dari Seasonic dengan garansi pabrik 10 tahun. Kapasitor 105C buatan Jepang berkualitas tinggi, kipas Fluid Dynamic Bearing 120mm dengan mode Hybrid Silent Fan Control."
  },
  {
    "id": "PSU-003",
    "name": "MSI MAG A850GL PCIE5 850W 80+ Gold Power Supply",
    "category": "Komponen Rakit PC",
    "price": 1850000,
    "originalPrice": 2150000,
    "discountPercentage": 14,
    "rating": 4.8,
    "reviewCount": 240,
    "soldCount": 750,
    "stock": 25,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Kolink-Continuum-1200W-Netzteil%20R%C3%BCckseite%2020201120%20DSC6104.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Black"
      ],
      "sizes": [
        "750W PCIE5",
        "850W PCIE5"
      ]
    },
    "description": "PSU ATX 3.0 ramah anggaran dengan kabel 12V-2x6 berkonektor kuning khas MSI untuk memastikan kabel tertancap sempurna ke GPU RTX 40-series tanpa celah longgar."
  },
  {
    "id": "PSU-004",
    "name": "ASUS ROG Thor 1200W Platinum II Power Supply with OLED Display",
    "category": "Komponen Rakit PC",
    "price": 5890000,
    "originalPrice": 6600000,
    "discountPercentage": 11,
    "rating": 5.0,
    "reviewCount": 75,
    "soldCount": 160,
    "stock": 8,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Modular%20vs%20non-modular%20PSU.JPG?width=800"
    ],
    "variants": {
      "colors": [
        "ROG Aura OLED Armor"
      ],
      "sizes": [
        "1200W Platinum II"
      ]
    },
    "description": "Power supply paling hening di dunia dengan sertifikasi Lambda A++. Dilengkapi layar OLED internal yang menampilkan konsumsi daya Watt secara langsung, heatsink ROG masif, dan kipas PWM Wing-blade 135mm."
  },
  {
    "id": "PSU-005",
    "name": "be quiet! Pure Power 12 M 750W 80+ Gold ATX 3.0",
    "category": "Komponen Rakit PC",
    "price": 1780000,
    "originalPrice": 2050000,
    "discountPercentage": 13,
    "rating": 4.8,
    "reviewCount": 160,
    "soldCount": 490,
    "stock": 20,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/CMPSU-620HX.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Black"
      ],
      "sizes": [
        "750W ATX 3.0",
        "850W ATX 3.0"
      ]
    },
    "description": "Ketenangan akustik legendaris rekayasa Jerman. Kompatibilitas ganda ATX 3.0 dan PCIe 5.0 dengan dua rel 12V independen dan kipas be quiet! 120mm yang tidak terdengar sama sekali."
  },
  {
    "id": "PSU-006",
    "name": "Cooler Master MWE 750 Bronze V2 750W 80+ Bronze",
    "category": "Komponen Rakit PC",
    "price": 990000,
    "originalPrice": 1190000,
    "discountPercentage": 17,
    "rating": 4.8,
    "reviewCount": 680,
    "soldCount": 2400,
    "stock": 35,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/ATX%20Computer%20power%20supply%20unit.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Flat Black Cables"
      ],
      "sizes": [
        "650W Bronze",
        "750W Bronze"
      ]
    },
    "description": "Power supply entry-level paling teruji untuk rakitan gaming hemat biaya. Desain sirkuit DC-to-DC, sertifikasi efisiensi 80 PLUS Bronze 85%, dan kabel flat hitam fleksibel yang mudah dirapikan."
  },
  {
    "id": "CSE-001",
    "name": "Lian Li O11 Dynamic EVO RGB Dual-Chamber Mid-Tower Case",
    "category": "Komponen Rakit PC",
    "price": 2890000,
    "originalPrice": 3250000,
    "discountPercentage": 11,
    "rating": 5.0,
    "reviewCount": 340,
    "soldCount": 1100,
    "stock": 16,
    "isFlashSale": true,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Lian%20Li%20O11%20Dynamic%20Evo%20XL%20(der8auer%20edition)%20HOF1974-HDR%20RAW-Export%20000210%20CENS.png?width=800"
    ],
    "variants": {
      "colors": [
        "Black Anodized",
        "Pure White"
      ],
      "sizes": [
        "Standard ATX"
      ]
    },
    "description": "Casing dual-chamber panorama legendaris dengan strip pencahayaan L-shape ARGB di bagian atas dan bawah. Pilar sudut depan kaca tempered dapat dilepas tanpa tiang pilar penghalang pandangan internal hardware."
  },
  {
    "id": "CSE-002",
    "name": "NZXT H9 Flow Dual-Chamber Seamless Glass ATX Case",
    "category": "Komponen Rakit PC",
    "price": 2590000,
    "originalPrice": 2950000,
    "discountPercentage": 12,
    "rating": 4.9,
    "reviewCount": 280,
    "soldCount": 890,
    "stock": 18,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Lian%20Li%20O11%20Dynamic%20XL%2020190601.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Matte White",
        "Matte Black"
      ],
      "sizes": [
        "Standard ATX"
      ]
    },
    "description": "Casing berpanel kaca tembus pandang tanpa sudut lengkung dengan aliran udara perforasi mesh di bagian atas dan samping. Mendukung hingga 10 kipas pendingin 120mm dan 3 radiator 360mm secara simultan."
  },
  {
    "id": "CSE-003",
    "name": "Fractal Design North Charcoal Black Mid-Tower Real Wood",
    "category": "Komponen Rakit PC",
    "price": 2450000,
    "originalPrice": 2790000,
    "discountPercentage": 12,
    "rating": 5.0,
    "reviewCount": 190,
    "soldCount": 540,
    "stock": 12,
    "isFlashSale": false,
    "badge": "Baru",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/PC-Geh%C3%A4use%20Kolink%20Observatory%20RGB%20Midi-Tower%2020201120%20DSC6134.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Charcoal Black with Walnut Wood",
        "Chalk White with Oak Wood"
      ],
      "sizes": [
        "Tempered Glass Side",
        "Mesh Side Panel"
      ]
    },
    "description": "Casing berdesain Skandinavia modern dengan bilah kayu kenari (walnut) asli di panel depan dan aksen kuningan mewah. Sangat elegan untuk setup meja gaming minimalis interior hangat."
  },
  {
    "id": "CSE-004",
    "name": "Corsair 4000D Airflow Tempered Glass Mid-Tower Case",
    "category": "Komponen Rakit PC",
    "price": 1450000,
    "originalPrice": 1690000,
    "discountPercentage": 14,
    "rating": 4.8,
    "reviewCount": 520,
    "soldCount": 1980,
    "stock": 28,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/ATX%20computer%20case%20-%20left%20-%202018-05-18.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Black Airflow",
        "White Airflow"
      ],
      "sizes": [
        "ATX Mid-Tower"
      ]
    },
    "description": "Casing PC paling populer di dunia untuk airflow optimal dengan panel depan berlubang segitiga ventilasi tinggi. Memiliki sistem manajemen kabel RapidRoute dengan saluran kabel terpusat selebar 25mm."
  },
  {
    "id": "CSE-005",
    "name": "Hyte Y70 Touch Infinite Dual-Chamber Case with 14.5\" 4K Screen",
    "category": "Komponen Rakit PC",
    "price": 6450000,
    "originalPrice": 7200000,
    "discountPercentage": 10,
    "rating": 5.0,
    "reviewCount": 70,
    "soldCount": 150,
    "stock": 6,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Lian%20Li%20O11%20Dynamic%20XL%2020190601.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Snow White Touch",
        "Pitch Black Touch"
      ],
      "sizes": [
        "Integrated Touchscreen"
      ]
    },
    "description": "Casing showcase terdepan di industri dengan layar sentuh kapasitif terintegrasi 14.5 inci 688x2560 60Hz pada panel sudut. Menampilkan widget sistem Nexus Touch, kontrol musik, dan wallpaper animasi dinamis."
  },
  {
    "id": "CSE-006",
    "name": "Montech KING 95 PRO Curved Glass ATX Case with 6 ARGB Fans",
    "category": "Komponen Rakit PC",
    "price": 1950000,
    "originalPrice": 2250000,
    "discountPercentage": 13,
    "rating": 4.9,
    "reviewCount": 310,
    "soldCount": 980,
    "stock": 20,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Computer%20case%20-%20Full%20Tower.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Gentleman Black",
        "Pure White",
        "Prussian Blue"
      ],
      "sizes": [
        "Includes 6x ARGB PWM Fans"
      ]
    },
    "description": "Casing kaca lengkung industri tempered glass industri dengan paket lengkap 6 kipas ARGB PWM bawaan. Termasuk panel depan mesh alternatif yang dapat ditukar untuk mode ventilasi angin maksimum."
  },
  {
    "id": "CLR-001",
    "name": "NZXT Kraken Elite 360 RGB AIO Liquid Cooler with 2.36\" LCD",
    "category": "Komponen Rakit PC",
    "price": 4550000,
    "originalPrice": 5100000,
    "discountPercentage": 11,
    "rating": 4.9,
    "reviewCount": 210,
    "soldCount": 620,
    "stock": 12,
    "isFlashSale": true,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Corsair%20H100i%20240mm%20CPU%20cooler.%20On%20MSI%20Z590%20Torpedo%20motherboard.%20(51987363353).jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Matte Black RGB",
        "Matte White RGB"
      ],
      "sizes": [
        "360mm Radiator"
      ]
    },
    "description": "Pendingin cair AIO flagship dengan layar IPS LCD melingkar 2.36 inci beresolusi 640x640 60Hz. Mampu menampilkan animasi GIF kustom, suhu CPU/GPU waktu nyata, pompa Asetek generasi ke-7, dan kipas F120 RGB Core."
  },
  {
    "id": "CLR-002",
    "name": "ASUS ROG Ryujin III 360 ARGB Liquid CPU Cooler with 3.5\" LCD",
    "category": "Komponen Rakit PC",
    "price": 5490000,
    "originalPrice": 6200000,
    "discountPercentage": 11,
    "rating": 5.0,
    "reviewCount": 85,
    "soldCount": 180,
    "stock": 8,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cooler%20Master%20ML240P%20series%2020190601.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Black Edition",
        "White Edition"
      ],
      "sizes": [
        "360mm"
      ]
    },
    "description": "AIO pendingin tertinggi dengan layar LCD 3.5 inci raksasa, pompa Asetek Gen8 terbaru, kipas ARGB daisy-chain magnetis, dan kipas mini VRM terintegrasi di dalam blok pompa untuk mendinginkan area motherboard."
  },
  {
    "id": "CLR-003",
    "name": "Noctua NH-D15 chromax.black Dual-Tower Air Cooler",
    "category": "Komponen Rakit PC",
    "price": 2150000,
    "originalPrice": 2450000,
    "discountPercentage": 12,
    "rating": 5.0,
    "reviewCount": 390,
    "soldCount": 1120,
    "stock": 15,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/NH-D15%20with%20black%20fans.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Full chromax.black"
      ],
      "sizes": [
        "Dual 140mm Fans"
      ]
    },
    "description": "Raja pendingin udara menara ganda buatan Austria berfinishing hitam pekat. Memiliki 6 heatpipe tembaga, 2 kipas legendaris NF-A15 PWM yang senyap luar biasa dengan thermal paste Noctua NT-H1 bawaan."
  },
  {
    "id": "CLR-004",
    "name": "Thermalright Peerless Assassin 120 SE Dual-Tower Air Cooler",
    "category": "Komponen Rakit PC",
    "price": 580000,
    "originalPrice": 750000,
    "discountPercentage": 23,
    "rating": 4.9,
    "reviewCount": 780,
    "soldCount": 2890,
    "stock": 35,
    "isFlashSale": true,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/NH-D15%20with%20classic%20fans.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Black",
        "White ARGB"
      ],
      "sizes": [
        "Dual 120mm Fans"
      ]
    },
    "description": "Pendingin udara CPU value-for-money terhebat di dunia saat ini. Mampu menaklukkan suhu prosesor Intel i7 dan Ryzen 7 dengan 6 heatpipe AGHP anti-gravitasi dan dual kipas TL-C12C PWM berkinerja tinggi."
  },
  {
    "id": "CLR-005",
    "name": "Lian Li Uni Fan SL-Infinity 120 RGB Triple Pack with Controller",
    "category": "Komponen Rakit PC",
    "price": 1490000,
    "originalPrice": 1750000,
    "discountPercentage": 15,
    "rating": 4.9,
    "reviewCount": 310,
    "soldCount": 980,
    "stock": 25,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/2023%20Ch%C5%82odzenie%20procesora%20Endorfy%20Fera%205%20ARGB.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Black 3-Pack",
        "White 3-Pack"
      ],
      "sizes": [
        "120mm PWM"
      ]
    },
    "description": "Kipas casing canggih dengan sistem interlocking daisy-chain tanpa kabel berantakan. Memiliki cermin infinity mirror 3D di tengah sumbu dan frame samping, bantalan FDB senyap, dan kontrol software L-Connect 3."
  },
  {
    "id": "CLR-006",
    "name": "Thermal Grizzly Kryonaut Extreme High Performance Thermal Paste",
    "category": "Komponen Rakit PC",
    "price": 285000,
    "originalPrice": 350000,
    "discountPercentage": 19,
    "rating": 4.9,
    "reviewCount": 620,
    "soldCount": 2450,
    "stock": 50,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/2023%20Ch%C5%82odzenie%20procesora%20Jonsbo%20CR-1100%20ARGB.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Pink Rose Extreme"
      ],
      "sizes": [
        "2g Syringe with Applicator"
      ]
    },
    "description": "Pasta termal kelas overclocking ekstrem dari Jerman dengan konduktivitas termal fenomenal 14.2 W/mk. Tidak menghantarkan arus listrik (non-conductive) dan tidak mengering bahkan di suhu operasi konstan 80 derajat Celcius."
  },
  {
    "id": "CON-001",
    "name": "Sony PlayStation 5 Slim Disc Edition",
    "category": "PC & Konsol Gaming",
    "price": 8999000,
    "originalPrice": 9999000,
    "discountPercentage": 10,
    "rating": 4.9,
    "reviewCount": 420,
    "soldCount": 1150,
    "stock": 14,
    "isFlashSale": true,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/PlayStation_5_and_DualSense.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Playstation_DualSense_Controller.png?width=800"
    ],
    "variants": {
      "colors": [
        "Glacier White",
        "Midnight Black"
      ],
      "sizes": [
        "Disc Edition 1TB SSD",
        "Digital Edition 1TB SSD"
      ]
    },
    "description": "Konsol PlayStation 5 Slim resmi Sony Indonesia dengan kapasitas SSD 1TB ultra-high speed. Mendukung visual 4K 120Hz, Ray Tracing, audio 3D Tempest, dan kontroler DualSense haptic feedback."
  },
  {
    "id": "CON-002",
    "name": "Nintendo Switch OLED Model Neon Blue/Red",
    "category": "PC & Konsol Gaming",
    "price": 4699000,
    "originalPrice": 5299000,
    "discountPercentage": 11,
    "rating": 4.9,
    "reviewCount": 310,
    "soldCount": 920,
    "stock": 18,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Nintendo-Switch-Console-Docked-wJoyConRB.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Neon Blue & Red",
        "White Joy-Con"
      ],
      "sizes": [
        "64GB Internal Storage"
      ]
    },
    "description": "Konsol gaming portabel Nintendo Switch dengan layar 7.0 inci OLED tajam dan warna kontras pekat. Dilengkapi kickstand lebar, dock berport LAN terintegrasi, dan speaker stereo internal jernih."
  },
  {
    "id": "CON-003",
    "name": "Valve Steam Deck OLED 1TB Handheld Gaming PC",
    "category": "PC & Konsol Gaming",
    "price": 11499000,
    "originalPrice": 12999000,
    "discountPercentage": 12,
    "rating": 4.9,
    "reviewCount": 145,
    "soldCount": 380,
    "stock": 9,
    "isFlashSale": true,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Steam_Deck_%28front%29.png?width=800"
    ],
    "variants": {
      "colors": [
        "Matte Black"
      ],
      "sizes": [
        "512GB NVMe OLED",
        "1TB Anti-Glare Etched Glass"
      ]
    },
    "description": "Perangkat PC gaming genggam resmi Valve bertenaga APU AMD kustom. Dilengkapi layar sentuh 7.4 inci HDR OLED 90Hz respons 0.1ms, baterai tahan lama 50Wh, Wi-Fi 6E, dan SteamOS."
  },
  {
    "id": "CON-004",
    "name": "Xbox Wireless Controller Carbon Black",
    "category": "PC & Konsol Gaming",
    "price": 950000,
    "originalPrice": 1150000,
    "discountPercentage": 17,
    "rating": 4.8,
    "reviewCount": 195,
    "soldCount": 680,
    "stock": 22,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Xbox_Series_Controller_Carbon_Black.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Carbon Black",
        "Robot White",
        "Shock Blue"
      ],
      "sizes": []
    },
    "description": "Gamepad nirkabel resmi Microsoft Xbox dengan grip anti-licin, D-pad hybrid presisi, tombol Share, dan Bluetooth instan untuk Windows, Xbox Series X/S, dan smartphone."
  },
  {
    "id": "CON-005",
    "name": "ASUS ROG Zephyrus G16 (2024) Gaming Laptop",
    "category": "PC & Konsol Gaming",
    "price": 37999000,
    "originalPrice": 42999000,
    "discountPercentage": 12,
    "rating": 4.9,
    "reviewCount": 68,
    "soldCount": 95,
    "stock": 6,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Eclipse Gray Aluminum",
        "Platinum White"
      ],
      "sizes": [
        "32GB RAM / 1TB SSD",
        "64GB RAM / 2TB SSD"
      ]
    },
    "description": "Laptop gaming ultra-tipis aluminium CNC unibody, Intel Core Ultra 9 dan NVIDIA GeForce RTX 4080. Layar 16 inci ROG Nebula Display OLED 2.5K 240Hz 0.2ms 100% DCI-P3."
  },
  {
    "id": "CON-006",
    "name": "Logitech G29 Driving Force Racing Wheel & Pedals",
    "category": "PC & Konsol Gaming",
    "price": 4499000,
    "originalPrice": 5299000,
    "discountPercentage": 15,
    "rating": 4.9,
    "reviewCount": 220,
    "soldCount": 540,
    "stock": 12,
    "isFlashSale": true,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Logitech_G29_steering_wheel.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Leather Black with Blue Accent"
      ],
      "sizes": [
        "Wheel & Pedals Set",
        "Bundle with Shifter"
      ]
    },
    "description": "Setir dan pedal balap simulator resmi Logitech G untuk PS5, PS4, dan PC. Force feedback dual-motor realistis, setir kulit asli jahitan tangan, dan paddle shifter stainless steel."
  },
  {
    "id": "CON-007",
    "name": "Sony PlayStation DualSense Wireless Controller White",
    "category": "PC & Konsol Gaming",
    "price": 1099000,
    "originalPrice": 1299000,
    "discountPercentage": 15,
    "rating": 4.9,
    "reviewCount": 540,
    "soldCount": 1820,
    "stock": 25,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Playstation_DualSense_Controller.png?width=800"
    ],
    "variants": {
      "colors": [
        "White",
        "Midnight Black",
        "Cosmic Red"
      ],
      "sizes": []
    },
    "description": "Kontroler nirkabel resmi PlayStation 5 dengan teknologi Haptic Feedback revolusioner, Adaptive Triggers dinamis, mikrofon terintegrasi, dan tombol Create inovatif."
  },
  {
    "id": "CON-008",
    "name": "ASUS ROG Ally X Handheld Gaming PC (AMD Z1 Extreme / 24GB)",
    "category": "PC & Konsol Gaming",
    "price": 13999000,
    "originalPrice": 15499000,
    "discountPercentage": 10,
    "rating": 4.9,
    "reviewCount": 110,
    "soldCount": 280,
    "stock": 8,
    "isFlashSale": false,
    "badge": "Baru",
    "images": [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Stealth Black Ergonomic"
      ],
      "sizes": [
        "24GB RAM / 1TB SSD"
      ]
    },
    "description": "Konsol gaming portabel Windows 11 bertenaga prosesor AMD Ryzen Z1 Extreme, RAM 24GB LPDDR5X, baterai jumbo 80Wh, joystick hall effect anti-drift, dan layar 120Hz 1080p."
  },
  {
    "id": "MOU-001",
    "name": "Logitech G502 HERO High Performance Gaming Mouse",
    "category": "Keyboard & Mouse Gaming",
    "price": 699000,
    "originalPrice": 899000,
    "discountPercentage": 22,
    "rating": 4.9,
    "reviewCount": 1450,
    "soldCount": 4200,
    "stock": 35,
    "isFlashSale": true,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/2023%20Mysz%20komputerowa%20Logitech%20G903%20Lightspeed.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Matte Black",
        "White K/DA Edition"
      ],
      "sizes": []
    },
    "description": "Mouse gaming paling ikonik di dunia. Sensor optik HERO 25K dengan 25.600 DPI, 11 tombol dapat diprogram, 5 pemberat 3.6g dapat disesuaikan, dan pencahayaan LIGHTSYNC RGB."
  },
  {
    "id": "MOU-002",
    "name": "Logitech G Pro X Superlight Wireless Gaming Mouse",
    "category": "Keyboard & Mouse Gaming",
    "price": 1899000,
    "originalPrice": 2299000,
    "discountPercentage": 17,
    "rating": 5.0,
    "reviewCount": 820,
    "soldCount": 2450,
    "stock": 28,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Razer_DeathAdder_Elite-front_oblique-ar_16to10-fs_PNr%C2%B00465.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Hitam Matte",
        "Putih",
        "Magenta Pink"
      ],
      "sizes": []
    },
    "description": "Mouse nirkabel turnamen dunia berbobot ultra-ringan 63g. Sensor HERO 25K akurasi sub-mikron, nirkabel LIGHTSPEED 1ms bebas lag, dan feet mouse PTFE murni."
  },
  {
    "id": "MOU-003",
    "name": "Razer DeathAdder Essential Gaming Mouse",
    "category": "Keyboard & Mouse Gaming",
    "price": 320000,
    "originalPrice": 450000,
    "discountPercentage": 29,
    "rating": 4.8,
    "reviewCount": 980,
    "soldCount": 3100,
    "stock": 40,
    "isFlashSale": true,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Razer_DeathAdder_Elite-front_oblique-ar_16to10-fs_PNr%C2%B00465.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Classic Black",
        "Mercury White"
      ],
      "sizes": []
    },
    "description": "Mouse gaming ergonomis legendaris Razer dengan sensor optik 6.400 DPI, 5 tombol Hyperesponse, switch mekanis Razer tahan 10 juta klik, dan bentuk berkontur nyaman."
  },
  {
    "id": "MOU-004",
    "name": "Razer DeathAdder V3 Pro Wireless Gaming Mouse",
    "category": "Keyboard & Mouse Gaming",
    "price": 2199000,
    "originalPrice": 2599000,
    "discountPercentage": 15,
    "rating": 4.9,
    "reviewCount": 380,
    "soldCount": 1120,
    "stock": 19,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Black",
        "White"
      ],
      "sizes": []
    },
    "description": "Bentuk ergonomis esports 63g dengan sensor Focus Pro 30K, switch optik Gen-3 tahan 90 juta klik, dan baterai hingga 90 jam pemakaian nirkabel."
  },
  {
    "id": "MOU-005",
    "name": "Razer Viper V3 Pro Ultra-Lightweight Wireless Mouse",
    "category": "Keyboard & Mouse Gaming",
    "price": 2499000,
    "originalPrice": 2899000,
    "discountPercentage": 14,
    "rating": 4.9,
    "reviewCount": 160,
    "soldCount": 480,
    "stock": 15,
    "isFlashSale": false,
    "badge": "Baru",
    "images": [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Black Matte",
        "White Mercury"
      ],
      "sizes": []
    },
    "description": "Mouse esports simetris 54g dengan sensor Focus Pro 35K Gen-2 dan dongle nirkabel Razer HyperPolling 8000Hz bawaan untuk responsivitas seketika."
  },
  {
    "id": "MOU-006",
    "name": "SteelSeries Rival 3 Wireless Gaming Mouse",
    "category": "Keyboard & Mouse Gaming",
    "price": 790000,
    "originalPrice": 990000,
    "discountPercentage": 20,
    "rating": 4.8,
    "reviewCount": 240,
    "soldCount": 780,
    "stock": 25,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Matte Black"
      ],
      "sizes": []
    },
    "description": "Mouse gaming nirkabel dual-koneksi 2.4GHz Quantum 2.0 dan Bluetooth 5.0 dengan daya tahan baterai fantastis hingga 400 jam dan sensor TrueMove Air."
  },
  {
    "id": "KBD-001",
    "name": "Razer BlackWidow V3 Mechanical Gaming Keyboard",
    "category": "Keyboard & Mouse Gaming",
    "price": 1599000,
    "originalPrice": 1999000,
    "discountPercentage": 20,
    "rating": 4.8,
    "reviewCount": 280,
    "soldCount": 750,
    "stock": 18,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/2018%20Bay%20Area%20Mechanical%20Keyboard%20Meetup%20(44130269470).jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Classic Black"
      ],
      "sizes": [
        "Green Switch (Clicky)",
        "Yellow Switch (Linear Silent)"
      ]
    },
    "description": "Keyboard mekanik Razer dengan housing transparan untuk Razer Chroma RGB lebih terang, keycaps ABS doubleshot tebal, rangka aluminium, dan wrist rest ergonomis."
  },
  {
    "id": "KBD-002",
    "name": "Corsair K70 RGB PRO Mechanical Gaming Keyboard",
    "category": "Keyboard & Mouse Gaming",
    "price": 2399000,
    "originalPrice": 2899000,
    "discountPercentage": 17,
    "rating": 4.8,
    "reviewCount": 220,
    "soldCount": 610,
    "stock": 16,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/2018%20Bay%20Area%20Mechanical%20Keyboard%20Meetup%20(31007785067).jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Black Anodized Aluminum"
      ],
      "sizes": [
        "Cherry MX Red (Linear)",
        "Cherry MX Speed Silver"
      ]
    },
    "description": "Keyboard gaming aluminium anodized dengan hyper-polling AXON 8000Hz, switch Cherry MX orisinal Jerman, keycaps PBT double-shot, dan palm rest magnetik."
  },
  {
    "id": "KBD-003",
    "name": "Keychron K2 Wireless Mechanical Keyboard (Version 2)",
    "category": "Keyboard & Mouse Gaming",
    "price": 1250000,
    "originalPrice": 1550000,
    "discountPercentage": 19,
    "rating": 4.8,
    "reviewCount": 340,
    "soldCount": 950,
    "stock": 20,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Aluminium Frame Dark",
        "White Backlight Edition"
      ],
      "sizes": [
        "Gateron Red",
        "Gateron Brown",
        "Gateron Blue"
      ]
    },
    "description": "Keyboard mekanikal nirkabel 75% compact 84 tombol. Koneksi Bluetooth hingga 3 perangkat dan USB-C kabel, kompatibel penuh Mac dan Windows, baterai 4000mAh."
  },
  {
    "id": "KBD-004",
    "name": "Keychron Q1 Pro Custom Mechanical Keyboard QMK/VIA",
    "category": "Keyboard & Mouse Gaming",
    "price": 2850000,
    "originalPrice": 3350000,
    "discountPercentage": 15,
    "rating": 4.9,
    "reviewCount": 145,
    "soldCount": 390,
    "stock": 12,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Carbon Black CNC",
        "Silver Gray CNC"
      ],
      "sizes": [
        "Red Switch (Linear)",
        "Brown Switch (Tactile)",
        "Banana Switch"
      ]
    },
    "description": "Keyboard kustom full aluminium CNC 6063 double-gasket akustik empuk. Bluetooth nirkabel, PCB hot-swappable 5-pin, kenop putar encoder, dan keycaps PBT OSA."
  },
  {
    "id": "KBD-005",
    "name": "SteelSeries Apex Pro TKL Wireless OmniPoint 2.0",
    "category": "Keyboard & Mouse Gaming",
    "price": 3890000,
    "originalPrice": 4450000,
    "discountPercentage": 13,
    "rating": 5.0,
    "reviewCount": 180,
    "soldCount": 420,
    "stock": 10,
    "isFlashSale": true,
    "badge": "Official Store",
    "images": [
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Aircraft Aluminum Matte Black"
      ],
      "sizes": [
        "OmniPoint 2.0 Adjustable Switches"
      ]
    },
    "description": "Keyboard gaming tercepat dengan switch magnetik OmniPoint 2.0: aktuasi dapat diatur per tombol dari 0.2mm hingga 3.8mm, fitur Rapid Trigger, dan layar OLED Smart Display."
  },
  {
    "id": "KBD-006",
    "name": "HyperX Alloy Origins Core RGB Mechanical Keyboard",
    "category": "Keyboard & Mouse Gaming",
    "price": 1290000,
    "originalPrice": 1550000,
    "discountPercentage": 17,
    "rating": 4.8,
    "reviewCount": 420,
    "soldCount": 1420,
    "stock": 25,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Full Aircraft Aluminum Body"
      ],
      "sizes": [
        "HyperX Red (Linear)",
        "HyperX Aqua (Tactile)"
      ]
    },
    "description": "Keyboard TKL ramping dengan bodi full aluminium kelas penerbangan kokoh. Menggunakan switch mekanis orisinal HyperX berdaya tahan 80 juta ketukan dan LED RGB terbuka terang."
  },
  {
    "id": "AUD-001",
    "name": "HyperX Cloud II Wireless Gaming Headset (7.1 Surround)",
    "category": "Audio & Headset Gaming",
    "price": 1799000,
    "originalPrice": 2199000,
    "discountPercentage": 18,
    "rating": 4.9,
    "reviewCount": 540,
    "soldCount": 1820,
    "stock": 25,
    "isFlashSale": true,
    "badge": "Terlaris",
    "images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Red & Black Signature",
        "Gunmetal Black"
      ],
      "sizes": []
    },
    "description": "Headset gaming nirkabel legendaris dengan busa memori khas HyperX berlapis kulit sintetis lembut. Driver 53mm bertenaga, virtual 7.1 surround sound, dan baterai hingga 30 jam."
  },
  {
    "id": "AUD-002",
    "name": "SteelSeries Arctis Nova 7 Wireless Gaming Headset",
    "category": "Audio & Headset Gaming",
    "price": 2899000,
    "originalPrice": 3499000,
    "discountPercentage": 17,
    "rating": 4.9,
    "reviewCount": 230,
    "soldCount": 580,
    "stock": 14,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Nova 7 Black (PC)",
        "Nova 7P White (PlayStation)"
      ],
      "sizes": []
    },
    "description": "Headset gaming nirkabel serbaguna SteelSeries dengan audio spasial 360 derajat Sonar EQ parametrik, koneksi dual wireless 2.4GHz dan Bluetooth simultan, serta baterai 38 jam."
  },
  {
    "id": "AUD-003",
    "name": "Sony Pulse 3D Wireless Headset PlayStation 5",
    "category": "Audio & Headset Gaming",
    "price": 1499000,
    "originalPrice": 1799000,
    "discountPercentage": 17,
    "rating": 4.8,
    "reviewCount": 380,
    "soldCount": 1250,
    "stock": 20,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "White Classic",
        "Midnight Black"
      ],
      "sizes": []
    },
    "description": "Headset nirkabel resmi Sony disetel khusus untuk menghadirkan audio 3D Tempest PS5. Mikrofon ganda peredam bising tersembunyi, earpad empuk, dan baterai isi ulang hingga 12 jam."
  },
  {
    "id": "AUD-004",
    "name": "Shure SM7B Cardioid Dynamic Vocal Microphone",
    "category": "Audio & Headset Gaming",
    "price": 6190000,
    "originalPrice": 7150000,
    "discountPercentage": 13,
    "rating": 5.0,
    "reviewCount": 280,
    "soldCount": 710,
    "stock": 11,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Shure_SM7.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Matte Black Pro Edition"
      ],
      "sizes": [
        "XLR Standalone Microphone"
      ]
    },
    "description": "Mikrofon vokal dinamik legendaris standar broadcast dan pro streamer dunia. Pola cardioid menolak bising ruangan dan keyboard mekanik, perisai elektromagnetik, dan shockmount internal."
  },
  {
    "id": "AUD-005",
    "name": "Elgato Wave:3 USB Condenser Microphone for Streamers",
    "category": "Audio & Headset Gaming",
    "price": 2290000,
    "originalPrice": 2750000,
    "discountPercentage": 17,
    "rating": 4.8,
    "reviewCount": 210,
    "soldCount": 650,
    "stock": 16,
    "isFlashSale": true,
    "badge": "Terlaris",
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Matte Black",
        "White Edition"
      ],
      "sizes": []
    },
    "description": "Mikrofon USB-C kondensor premium dari Elgato dengan teknologi anti-distorsi Clipguard eksklusif. Resolusi 24-bit 96kHz, tombol mute kapasitif, dan mixer audio digital Wave Link 9-channel."
  },
  {
    "id": "AUD-006",
    "name": "Audio-Technica ATH-M50x Professional Monitor Headphones",
    "category": "Audio & Headset Gaming",
    "price": 2150000,
    "originalPrice": 2650000,
    "discountPercentage": 19,
    "rating": 5.0,
    "reviewCount": 460,
    "soldCount": 1350,
    "stock": 20,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Black",
        "White Limited"
      ],
      "sizes": [
        "Standard 3.5mm with 6.3mm Adapter"
      ]
    },
    "description": "Headphone monitor studio kelas dunia andalan pro player untuk akurasi separasi langkah kaki lawan di game FPS. Driver 45mm aperture besar dengan isolasi pasif rapat dan earcup putar 90 derajat."
  },
  {
    "id": "MON-001",
    "name": "Samsung Odyssey G7 32\" Curved 240Hz 1ms Gaming Monitor",
    "category": "Monitor & Setup Gaming",
    "price": 8899000,
    "originalPrice": 10499000,
    "discountPercentage": 15,
    "rating": 4.9,
    "reviewCount": 175,
    "soldCount": 420,
    "stock": 12,
    "isFlashSale": true,
    "badge": "Official Store",
    "images": [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Black Matte with CoreSync RGB"
      ],
      "sizes": [
        "32 Inch QHD (2560x1440) 1000R"
      ]
    },
    "description": "Monitor gaming lengkung ekstrem 1000R Samsung dengan resolusi WQHD tajam dan refresh rate 240Hz 1ms GtG. Panel QLED 95% DCI-P3, sertifikasi DisplayHDR 600, dan kompatibel NVIDIA G-Sync."
  },
  {
    "id": "MON-002",
    "name": "BenQ ZOWIE XL2546K 24.5\" 240Hz DyAc+ Esports Gaming Monitor",
    "category": "Monitor & Setup Gaming",
    "price": 7990000,
    "originalPrice": 9200000,
    "discountPercentage": 13,
    "rating": 4.9,
    "reviewCount": 320,
    "soldCount": 910,
    "stock": 14,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Matte Black Shield Edition"
      ],
      "sizes": [
        "24.5 Inch FHD (1920x1080) TN 240Hz"
      ]
    },
    "description": "Monitor turnamen FPS nomor satu dunia dengan DyAc+ (Dynamic Accuracy Plus) yang meminimalisir motion blur saat recoil spray senjata. Dudukan base ringkas fleksibel dan switch profil cepat S-Switch."
  },
  {
    "id": "MON-003",
    "name": "ASUS ROG Swift OLED PG27AQDM 27\" 240Hz Gaming Monitor",
    "category": "Monitor & Setup Gaming",
    "price": 16499000,
    "originalPrice": 18999000,
    "discountPercentage": 13,
    "rating": 5.0,
    "reviewCount": 82,
    "soldCount": 140,
    "stock": 7,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://images.unsplash.com/photo-1547119957-637f8679db1e?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Titanium Gray Armor"
      ],
      "sizes": [
        "27 Inch QHD (2560x1440) OLED"
      ]
    },
    "description": "Monitor gaming OLED 27 inci 1440p ASUS ROG dengan refresh rate 240Hz dan response time 0.03ms GTG. Heatsink kustom anti burn-in, kecerahan 1000 nits, dan 99% DCI-P3 color gamut."
  },
  {
    "id": "MON-004",
    "name": "Elgato Stream Deck MK.2 Studio Controller (15 LCD Keys)",
    "category": "Monitor & Setup Gaming",
    "price": 2390000,
    "originalPrice": 2850000,
    "discountPercentage": 16,
    "rating": 4.8,
    "reviewCount": 160,
    "soldCount": 620,
    "stock": 18,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://images.unsplash.com/photo-1616469829941-c7200edec809?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "White Edition",
        "Black Edition"
      ],
      "sizes": [
        "15 Tombol LCD"
      ]
    },
    "description": "Pengontrol antarmuka studio siaran langsung resmi Elgato dengan 15 tombol LCD taktil yang dapat dipersonalisasi. Mengontrol OBS Studio, Discord, Spotify, dan shortcut game dalam satu sentuhan."
  },
  {
    "id": "CHR-001",
    "name": "Secretlab TITAN Evo 2024 Gaming Chair (SoftWeave Plus)",
    "category": "Kursi & Meja Gaming",
    "price": 7790000,
    "originalPrice": 9200000,
    "discountPercentage": 15,
    "rating": 4.9,
    "reviewCount": 290,
    "soldCount": 610,
    "stock": 10,
    "isFlashSale": true,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Microsoft%20Taiwan%20booth%20and%20ASUS%20ROG%20gaming%20chair%2020231125.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Cookies & Cream",
        "Stealth Black",
        "Frost Blue"
      ],
      "sizes": [
        "Regular (Tinggi 170-189cm)",
        "XL (Tinggi 181-205cm)"
      ]
    },
    "description": "Kursi gaming ergonomis standar atlet esports dunia dari Secretlab dengan kain SoftWeave Plus berpori sejuk. Penopang lumbar 4-arah L-ADAPT, bantal kepala magnetik busa memori gel pendingin, dan armrest 4D."
  },
  {
    "id": "CHR-002",
    "name": "Razer Iskur V2 Ergonomic Gaming Chair",
    "category": "Kursi & Meja Gaming",
    "price": 8899000,
    "originalPrice": 10500000,
    "discountPercentage": 15,
    "rating": 4.9,
    "reviewCount": 140,
    "soldCount": 320,
    "stock": 8,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Gaming_chair_1.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Black / Green Razer Signature",
        "Dark Gray Dark Edition"
      ],
      "sizes": [
        "Standard Adult Ergonomic"
      ]
    },
    "description": "Kursi gaming ergonomis premium dari Razer dengan penopang lumbar adaptif 6D yang mengikuti postur tulang punggung. Kulit sintetis EPU bermutu tinggi, recline 152 derajat, dan sandaran tangan 4D."
  },
  {
    "id": "CON-009",
    "name": "Microsoft Xbox Series X 1TB Gaming Console",
    "category": "PC & Konsol Gaming",
    "price": 8499000,
    "originalPrice": 9499000,
    "discountPercentage": 10,
    "rating": 4.9,
    "reviewCount": 310,
    "soldCount": 780,
    "stock": 12,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Xbox%20Series%20X%202.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Carbon Black"
      ],
      "sizes": [
        "1TB Custom NVMe SSD"
      ]
    },
    "description": "Konsol generasi terbaru paling bertenaga dari Microsoft dengan 12 Teraflops GPU RDNA 2, arsitektur Xbox Velocity, Quick Resume instan, dan dukungan gameplay 4K hingga 120 FPS."
  },
  {
    "id": "CON-010",
    "name": "Microsoft Xbox Series S 512GB All-Digital Console",
    "category": "PC & Konsol Gaming",
    "price": 4650000,
    "originalPrice": 5200000,
    "discountPercentage": 10,
    "rating": 4.8,
    "reviewCount": 240,
    "soldCount": 650,
    "stock": 15,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Xbox%20Series%20S%20with%20controller.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Robot White"
      ],
      "sizes": [
        "512GB NVMe SSD"
      ]
    },
    "description": "Konsol digital generasi baru dengan form-factor terkecil dan paling ringkas dari Microsoft. Mendukung framerate hingga 120 FPS pada resolusi 1440p, DirectX Raytracing, dan ribuan game di Xbox Game Pass."
  },
  {
    "id": "CON-011",
    "name": "Sony PlayStation Portal Remote Player for PS5",
    "category": "PC & Konsol Gaming",
    "price": 3699000,
    "originalPrice": 4200000,
    "discountPercentage": 12,
    "rating": 4.7,
    "reviewCount": 180,
    "soldCount": 490,
    "stock": 14,
    "isFlashSale": true,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/PlayStation%20Portal.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "White Signature"
      ],
      "sizes": [
        "8 Inch Full HD LCD Screen"
      ]
    },
    "description": "Perangkat streaming jarak jauh resmi PlayStation 5 dengan layar LCD 8 inci 1080p 60fps. Menghadirkan seluruh sensasi kontroler DualSense termasuk haptic feedback dan adaptive triggers langsung di genggaman via Wi-Fi."
  },
  {
    "id": "CON-012",
    "name": "Nintendo Switch Pro Controller Official",
    "category": "PC & Konsol Gaming",
    "price": 890000,
    "originalPrice": 1100000,
    "discountPercentage": 19,
    "rating": 4.9,
    "reviewCount": 420,
    "soldCount": 1350,
    "stock": 25,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Nintendo-Switch-Pro-Controller-FL.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Translucent Black Edition",
        "Zelda Tears of the Kingdom Edition"
      ],
      "sizes": [
        "Standard Wireless Controller"
      ]
    },
    "description": "Kontroler nirkabel ergonomis premium resmi Nintendo untuk Switch dengan HD rumble sensitif, motion controls gyro 6-axis, pembaca amiibo NFC bawaan, dan daya tahan baterai fantastis hingga 40 jam."
  },
  {
    "id": "CON-013",
    "name": "Xbox Elite Wireless Controller Series 2 Core",
    "category": "PC & Konsol Gaming",
    "price": 2199000,
    "originalPrice": 2600000,
    "discountPercentage": 15,
    "rating": 4.8,
    "reviewCount": 160,
    "soldCount": 390,
    "stock": 11,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/The%20XBox%20elite%20controller%20(18849729446).jpg?width=800"
    ],
    "variants": {
      "colors": [
        "White/Black Core",
        "Full Carbon Red"
      ],
      "sizes": [
        "Adjustable Tension Thumbsticks"
      ]
    },
    "description": "Kontroler level kompetitif profesional dengan thumbstick yang dapat diatur tingkat ketegangannya, hair-trigger locks 3-posisi yang lebih pendek, pegangan karet bertekstur menyeluruh, dan baterai isi ulang hingga 40 jam."
  },
  {
    "id": "CON-014",
    "name": "Lenovo Legion Go 8.8\" QHD+ Handheld Gaming PC",
    "category": "PC & Konsol Gaming",
    "price": 12999000,
    "originalPrice": 14500000,
    "discountPercentage": 10,
    "rating": 4.8,
    "reviewCount": 115,
    "soldCount": 290,
    "stock": 8,
    "isFlashSale": false,
    "badge": "Baru",
    "images": [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Shadow Black"
      ],
      "sizes": [
        "512GB PCIe 4.0 NVMe",
        "1TB PCIe 4.0 NVMe"
      ]
    },
    "description": "PC gaming genggam bertenaga AMD Ryzen Z1 Extreme dengan layar masif 8.8 inci QHD+ (2560x1600) 144Hz IPS. Dilengkapi kontroler Legion TrueStrike lepas-pasang dengan mode mouse FPS optic unik dan baterai 49.2Wh Super Rapid Charge."
  },
  {
    "id": "CON-015",
    "name": "Logitech G923 TRUEFORCE Racing Wheel for PS5 / PC",
    "category": "PC & Konsol Gaming",
    "price": 5499000,
    "originalPrice": 6500000,
    "discountPercentage": 15,
    "rating": 4.9,
    "reviewCount": 210,
    "soldCount": 540,
    "stock": 10,
    "isFlashSale": true,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Logitech_G29_steering_wheel.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Black Leather with Brushed Metal"
      ],
      "sizes": [
        "PlayStation 5 / PC Version"
      ]
    },
    "description": "Set setir balap kemudi kelas simulasi dengan teknologi feedback TRUEFORCE berfrekuensi tinggi hingga 4000Hz. Dilengkapi pedal progresif dual-clutch launch assist, paddle shifter stainless steel, dan balutan kulit asli jahitan tangan."
  },
  {
    "id": "CON-016",
    "name": "Thrustmaster T300 RS GT Edition Racing Wheel",
    "category": "PC & Konsol Gaming",
    "price": 6850000,
    "originalPrice": 7990000,
    "discountPercentage": 14,
    "rating": 4.9,
    "reviewCount": 145,
    "soldCount": 310,
    "stock": 7,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Logitech_G29_steering_wheel.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "GT Edition Official"
      ],
      "sizes": [
        "Dual-Belt Force Feedback System"
      ]
    },
    "description": "Kemudi balap kelas simulator dengan sistem dual-belt tanpa gesekan dan motor brushless industri 25W. Dilengkapi pedal 3-buah T3PA GT Edition berbahan logam penuh, sensor magnetik H.E.A.R.T presisi 16-bit, dan lingkar setir 28cm lepas pasang."
  },
  {
    "id": "CON-017",
    "name": "ASUS ROG Strix SCAR 18 (2024) RTX 4090 Gaming Laptop",
    "category": "PC & Konsol Gaming",
    "price": 66999000,
    "originalPrice": 72999000,
    "discountPercentage": 8,
    "rating": 5.0,
    "reviewCount": 42,
    "soldCount": 88,
    "stock": 5,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/MSI%20Gaming%20Laptop%20on%20wood%20floor.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Off Black ROG Stealth"
      ],
      "sizes": [
        "Core i9-14900HX / RTX 4090 / 64GB DDR5 / 2TB SSD"
      ]
    },
    "description": "Laptop gaming monster bertenaga prosesor Intel Core i9-14900HX dan GPU NVIDIA GeForce RTX 4090 175W TGP. Dilengkapi layar ROG Nebula HDR 18 inci Mini LED 2.5K 240Hz, sistem pendingin Conductonaut Extreme liquid metal, dan audio 4-speaker Dolby Atmos."
  },
  {
    "id": "CON-018",
    "name": "MSI Titan 18 HX A14V Flagship Gaming Laptop",
    "category": "PC & Konsol Gaming",
    "price": 78999000,
    "originalPrice": 85999000,
    "discountPercentage": 8,
    "rating": 5.0,
    "reviewCount": 28,
    "soldCount": 52,
    "stock": 4,
    "isFlashSale": false,
    "badge": "Baru",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/HP%20Victus%2015%20gaming%20laptop%20side%20view.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Core Black Titan"
      ],
      "sizes": [
        "Core i9-14900HX / RTX 4090 / 128GB RAM / 4TB SSD"
      ]
    },
    "description": "Laptop desktop replacement terbaik di dunia dengan layar 18 inci 4K 120Hz Mini-LED pertama di industri. Memiliki keyboard mekanikal Cherry MX Ultra-Low Profile, touchpad RGB haptic tanpa batas (seamless), dan 4 slot memori DDR5 hingga 128GB."
  },
  {
    "id": "MOU-007",
    "name": "Logitech G502 X PLUS LIGHTSPEED Wireless RGB Gaming Mouse",
    "category": "Keyboard & Mouse Gaming",
    "price": 2190000,
    "originalPrice": 2590000,
    "discountPercentage": 15,
    "rating": 4.9,
    "reviewCount": 310,
    "soldCount": 850,
    "stock": 16,
    "isFlashSale": true,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/G502_Hero.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Black",
        "White"
      ],
      "sizes": [
        "LIGHTFORCE Hybrid Optical-Mechanical"
      ]
    },
    "description": "Evolusi tercanggih dari mouse gaming paling ikonik di dunia. Dibekali switch optik-mekanikal hybrid LIGHTFORCE, sensor HERO 25K berakurasi sub-mikron, 13 tombol yang dapat diprogram, dan pencahayaan LIGHTSYNC 8-LED aktif."
  },
  {
    "id": "MOU-008",
    "name": "Logitech G304 / G305 LIGHTSPEED Wireless Gaming Mouse",
    "category": "Keyboard & Mouse Gaming",
    "price": 499000,
    "originalPrice": 649000,
    "discountPercentage": 23,
    "rating": 4.9,
    "reviewCount": 1420,
    "soldCount": 5800,
    "stock": 45,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Black",
        "White",
        "Lilac",
        "Blue"
      ],
      "sizes": [
        "Compact Wireless 99g"
      ]
    },
    "description": "Mouse gaming nirkabel sejuta umat dengan teknologi LIGHTSPEED latency 1ms bebas lag. Menggunakan sensor optik HERO 12.000 DPI yang hemat daya luar biasa, bertahan hingga 250 jam hanya dengan satu baterai AA."
  },
  {
    "id": "MOU-009",
    "name": "Razer Basilisk V3 Pro Wireless Ergonomic Gaming Mouse",
    "category": "Keyboard & Mouse Gaming",
    "price": 2490000,
    "originalPrice": 2899000,
    "discountPercentage": 14,
    "rating": 4.9,
    "reviewCount": 185,
    "soldCount": 520,
    "stock": 12,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Razer_DeathAdder_Elite-front_oblique-ar_16to10-fs_PNr%C2%B00465.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Classic Black",
        "Mercury White"
      ],
      "sizes": [
        "Wireless HyperSpeed 4K Compatible"
      ]
    },
    "description": "Mouse gaming ergonomis berfitur paling lengkap dari Razer dengan scroll wheel Razer HyperScroll tilt 4-arah (tactile/free-spin otomatis), sensor Focus Pro 30K Optical, switch Optical Gen-3, dan 13 zona pencahayaan Razer Chroma RGB."
  },
  {
    "id": "MOU-010",
    "name": "Pulsar X2 V2 Wireless Superglide Gaming Mouse",
    "category": "Keyboard & Mouse Gaming",
    "price": 1540000,
    "originalPrice": 1790000,
    "discountPercentage": 14,
    "rating": 4.8,
    "reviewCount": 140,
    "soldCount": 410,
    "stock": 15,
    "isFlashSale": false,
    "badge": "Baru",
    "images": [
      "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Black Ultra-Matte",
        "White Pure"
      ],
      "sizes": [
        "Size 1 (Mini 51g)",
        "Size 2 (Medium 53g)"
      ]
    },
    "description": "Mouse esports simetris ultra-ringan 53 gram tanpa lubang honeycomb. Menggunakan switch optik anti-double click, encoder Pulsar Blue tahan debu, sensor PixArt PAW3395 26.000 DPI, dan polling rate hingga 4000Hz (dengan 4K dongle opsional)."
  },
  {
    "id": "MOU-011",
    "name": "Finalmouse UltralightX Lion Wireless Carbon Fiber Mouse",
    "category": "Keyboard & Mouse Gaming",
    "price": 3890000,
    "originalPrice": 4500000,
    "discountPercentage": 13,
    "rating": 4.9,
    "reviewCount": 65,
    "soldCount": 130,
    "stock": 6,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Phantom Carbon Finish",
        "Guardian Gold Accent"
      ],
      "sizes": [
        "Medium (Lion - 35 Gram)"
      ]
    },
    "description": "Mouse gaming paling ringan di dunia berbahan sasis komposit serat karbon berkekuatan tinggi (bobot hanya 35 gram). Menggunakan sensor PixArt PAW3395 kustom, wireless 8000Hz polling rate, dan skate PTFE perawan."
  },
  {
    "id": "MOU-012",
    "name": "BenQ ZOWIE EC2-CW Wireless Esports Gaming Mouse",
    "category": "Keyboard & Mouse Gaming",
    "price": 2490000,
    "originalPrice": 2850000,
    "discountPercentage": 12,
    "rating": 4.9,
    "reviewCount": 220,
    "soldCount": 610,
    "stock": 14,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Matte Black Esports Standard"
      ],
      "sizes": [
        "EC2-CW (Medium Ergonomic)"
      ]
    },
    "description": "Bentuk ergonomis legendaris ZOWIE favorit pro-player Counter-Strike dan Valorant dunia kini hadir dalam varian nirkabel. Dilengkapi Enhanced Wireless Receiver mandiri anti-interferensi frekuensi panggung turnamen, sensor 3370, dan plug-and-play tanpa driver."
  },
  {
    "id": "MOU-013",
    "name": "Glorious Model O 2 Wireless Ultra-Light Gaming Mouse",
    "category": "Keyboard & Mouse Gaming",
    "price": 1350000,
    "originalPrice": 1590000,
    "discountPercentage": 15,
    "rating": 4.8,
    "reviewCount": 190,
    "soldCount": 580,
    "stock": 18,
    "isFlashSale": true,
    "badge": "Terlaris",
    "images": [
      "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Matte Black",
        "Matte White"
      ],
      "sizes": [
        "Wireless 68 Gram BAMF 2.0"
      ]
    },
    "description": "Mouse gaming nirkabel ultra-ringan 68 gram dengan sensor optik BAMF 2.0 26.000 DPI 650 IPS. Memiliki konektivitas ganda 2.4GHz nirkabel dan Bluetooth 5.2 LE, baterai hingga 210 jam, switch Glorious 80 juta klik, dan skate G-Skates 100% PTFE murni."
  },
  {
    "id": "KBD-007",
    "name": "Wooting 60HE+ Rapid Trigger Analog Mechanical Keyboard",
    "category": "Keyboard & Mouse Gaming",
    "price": 3690000,
    "originalPrice": 4200000,
    "discountPercentage": 12,
    "rating": 5.0,
    "reviewCount": 480,
    "soldCount": 1200,
    "stock": 10,
    "isFlashSale": true,
    "badge": "Terlaris",
    "images": [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Black Anodized Metal Plate",
        "Ghost Polycarbonate Plate"
      ],
      "sizes": [
        "Lekker Linear60 Hall Effect Switches"
      ]
    },
    "description": "Keyboard gaming paling dicari di skena FPS dunia. Dilengkapi switch magnetis Hall Effect Lekker dengan aktuasi analog penuh 0.1mm - 4.0mm dan fitur Rapid Trigger instan yang mereset tombol seketika saat jari terangkat untuk counter-strafing sempurna."
  },
  {
    "id": "KBD-008",
    "name": "Logitech G915 LIGHTSPEED Wireless RGB Mechanical Keyboard",
    "category": "Keyboard & Mouse Gaming",
    "price": 3190000,
    "originalPrice": 3799000,
    "discountPercentage": 16,
    "rating": 4.9,
    "reviewCount": 310,
    "soldCount": 760,
    "stock": 12,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Carbon Brushed Aluminum",
        "White Silver Edition"
      ],
      "sizes": [
        "GL Tactile",
        "GL Linear",
        "GL Clicky"
      ]
    },
    "description": "Keyboard gaming nirkabel ultra-tipis berbahan paduan aluminium kelas pesawat terbang. Menggunakan switch mekanikal low-profile GL berkecepatan tinggi, konektivitas nirkabel pro-grade LIGHTSPEED 1ms, roller volume khusus, dan baterai tahan hingga 30 jam."
  },
  {
    "id": "KBD-009",
    "name": "Razer Huntsman V3 Pro TKL Analog Optical Esports Keyboard",
    "category": "Keyboard & Mouse Gaming",
    "price": 3890000,
    "originalPrice": 4499000,
    "discountPercentage": 13,
    "rating": 4.9,
    "reviewCount": 175,
    "soldCount": 430,
    "stock": 11,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Classic Black Textured"
      ],
      "sizes": [
        "Razer Gen-2 Analog Optical Switches"
      ]
    },
    "description": "Keyboard turnamen esports tenkeyless dengan switch optik analog generasi ke-2 Razer. Dilengkapi rentang aktuasi cepat 0.1 - 4.0mm, Rapid Trigger terkalibrasi, indikator LED multi-fungsi onboard, palm rest magnetik busa kulit, dan keycap PBT doubleshot."
  },
  {
    "id": "KBD-010",
    "name": "Ducky One 3 RGB TKL Hot-Swappable Mechanical Keyboard",
    "category": "Keyboard & Mouse Gaming",
    "price": 1890000,
    "originalPrice": 2200000,
    "discountPercentage": 14,
    "rating": 4.9,
    "reviewCount": 240,
    "soldCount": 680,
    "stock": 16,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Daybreak (Navy/Blue/Yellow)",
        "Fuji (Pink/White)",
        "Classic Pure Black"
      ],
      "sizes": [
        "Cherry MX Brown",
        "Cherry MX Red",
        "Cherry MX Silver Speed"
      ]
    },
    "description": "Keyboard mekanikal legendaris dari Ducky Taiwan dengan filosofi desain QUACK Mechanics. Memiliki soket hot-swap Kailh, peredam suara busa EVA multi-lapis ganda, keycap PBT doubleshot seamless berkualitas tinggi, dan kabel USB Type-C braided lepas-pasang."
  },
  {
    "id": "KBD-011",
    "name": "ASUS ROG Azoth 75% Wireless Custom Mechanical Keyboard OLED",
    "category": "Keyboard & Mouse Gaming",
    "price": 3990000,
    "originalPrice": 4699000,
    "discountPercentage": 15,
    "rating": 5.0,
    "reviewCount": 210,
    "soldCount": 510,
    "stock": 9,
    "isFlashSale": true,
    "badge": "Official Store",
    "images": [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Space Gray Gunmetal",
        "Moonlight White Edition"
      ],
      "sizes": [
        "ROG NX Snow Linear Switches (Pre-lubed)"
      ]
    },
    "description": "Keyboard custom 75% nirkabel tercanggih ASUS ROG dengan gasket mount silikon dan peredam 3 lapis. Dilengkapi layar OLED 2 inci interaktif dengan tombol kenop 3-arah, switch hot-swap ROG NX Snow yang sudah di-lube dari pabrik, dan DIY switch lube kit lengkap."
  },
  {
    "id": "KBD-012",
    "name": "Keychron V1 QMK Custom Mechanical Keyboard (Frosted Black)",
    "category": "Keyboard & Mouse Gaming",
    "price": 1250000,
    "originalPrice": 1450000,
    "discountPercentage": 13,
    "rating": 4.9,
    "reviewCount": 380,
    "soldCount": 1140,
    "stock": 20,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Frosted Black Translucent",
        "Carbon Black Solid"
      ],
      "sizes": [
        "Keychron K Pro Red (Linear)",
        "Keychron K Pro Brown (Tactile)"
      ]
    },
    "description": "Keyboard mekanikal kustom 75% dengan dukungan penuh firmware open-source QMK/VIA untuk mapping tombol tanpa batas. Menggunakan switch hot-swap Keychron K Pro pre-lubed, screw-in stabilizer PCB, keycap OSA profile PBT doubleshot, dan case transparan."
  },
  {
    "id": "KBD-013",
    "name": "Akko MOD007B-HE Hall Effect Magnetic Switch Keyboard",
    "category": "Keyboard & Mouse Gaming",
    "price": 2450000,
    "originalPrice": 2890000,
    "discountPercentage": 15,
    "rating": 4.9,
    "reviewCount": 160,
    "soldCount": 420,
    "stock": 14,
    "isFlashSale": false,
    "badge": "Baru",
    "images": [
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Santorini Blue Theme",
        "Year of the Dragon Edition"
      ],
      "sizes": [
        "Akko Cream Yellow Magnetic Switches"
      ]
    },
    "description": "Keyboard gasket mount nirkabel tri-mode dengan switch magnetik Hall Effect Akko. Memiliki Rapid Trigger 0.1-4.0mm, dynamic keystrokes (4 aksi dalam 1 penekanan tombol), knob putar CNC berbahan aluminium, dan koneksi nirkabel multi-perangkat."
  },
  {
    "id": "AUD-007",
    "name": "Logitech G PRO X 2 LIGHTSPEED Wireless Gaming Headset (Graphene)",
    "category": "Audio & Headset Gaming",
    "price": 3699000,
    "originalPrice": 4299000,
    "discountPercentage": 14,
    "rating": 4.9,
    "reviewCount": 260,
    "soldCount": 680,
    "stock": 12,
    "isFlashSale": true,
    "badge": "Official Store",
    "images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Black Stealth",
        "White Pure",
        "Magenta Esports"
      ],
      "sizes": [
        "Pro Graphene 50mm Drivers"
      ]
    },
    "description": "Headset gaming esports profesional pertama di dunia dengan driver Graphene 50mm untuk fidelitas audio tanpa distorsi. Koneksi nirkabel LIGHTSPEED hingga rentang 30 meter, masa pakai baterai hingga 50 jam, dan mikrofon cardioid 6mm Blue VO!CE."
  },
  {
    "id": "AUD-008",
    "name": "Razer BlackShark V2 Pro (2023) Wireless Esports Headset",
    "category": "Audio & Headset Gaming",
    "price": 2999000,
    "originalPrice": 3499000,
    "discountPercentage": 14,
    "rating": 4.9,
    "reviewCount": 310,
    "soldCount": 820,
    "stock": 15,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Classic Black",
        "White Edition"
      ],
      "sizes": [
        "HyperClear Super Wideband Mic"
      ]
    },
    "description": "Headset gaming turnamen resmi atlet esports Razer dengan mikrofon HyperClear Super Wideband 32kHz bersuara sejernih mikrofon studio. Driver TriForce Titanium 50mm, isolasi suara pasif ultra-kedap, dan daya tahan baterai hingga 70 jam."
  },
  {
    "id": "AUD-009",
    "name": "SteelSeries Arctis Nova Pro Wireless High-Fidelity Audio System",
    "category": "Audio & Headset Gaming",
    "price": 5790000,
    "originalPrice": 6599000,
    "discountPercentage": 12,
    "rating": 5.0,
    "reviewCount": 180,
    "soldCount": 410,
    "stock": 8,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Obsidian Black Metal",
        "White Arctic Edition"
      ],
      "sizes": [
        "PC / PlayStation / Dual-USB System"
      ]
    },
    "description": "Sistem audio gaming paling mutakhir di dunia dengan Active Noise Cancellation (ANC) 4-mikrofon hybrid dan Infinity Power System (2 baterai hot-swap tanpa mati daya). Dilengkapi Base Station OLED multi-input untuk berpindah PC ke konsol instan."
  },
  {
    "id": "AUD-010",
    "name": "HyperX Cloud Alpha Wireless Gaming Headset (300 Jam Baterai)",
    "category": "Audio & Headset Gaming",
    "price": 2890000,
    "originalPrice": 3350000,
    "discountPercentage": 13,
    "rating": 4.9,
    "reviewCount": 420,
    "soldCount": 1100,
    "stock": 16,
    "isFlashSale": true,
    "badge": "Terlaris",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Black / Red Aluminum Signature"
      ],
      "sizes": [
        "300-Hour Battery Life Edition"
      ]
    },
    "description": "Headset gaming nirkabel pertama di dunia dengan rekor daya tahan baterai fantastis hingga 300 jam dalam sekali pengisian daya. Memiliki driver Dual Chamber 50mm yang memisahkan bass dari mid/high, busa memori signature HyperX, dan audio spasial DTS Headphone:X."
  },
  {
    "id": "AUD-011",
    "name": "Beyerdynamic DT 990 PRO 250 Ohm Studio Gaming Headphones",
    "category": "Audio & Headset Gaming",
    "price": 2450000,
    "originalPrice": 2850000,
    "discountPercentage": 14,
    "rating": 4.9,
    "reviewCount": 340,
    "soldCount": 980,
    "stock": 14,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Gray Velour Silver Edition",
        "Black Special Edition"
      ],
      "sizes": [
        "250 Ohm High-Impedance Studio"
      ]
    },
    "description": "Headphone open-back legendaris buatan Jerman yang menjadi standar emas soundstage dan imaging akurat untuk mendengarkan step musuh di CS2, Apex, dan Tarkov. Earpad bahan beludru velour lembut untuk kenyamanan bermain berjam-jam."
  },
  {
    "id": "AUD-012",
    "name": "Sennheiser / EPOS H6PRO Closed Acoustic Gaming Headset",
    "category": "Audio & Headset Gaming",
    "price": 2690000,
    "originalPrice": 3190000,
    "discountPercentage": 15,
    "rating": 4.8,
    "reviewCount": 150,
    "soldCount": 370,
    "stock": 11,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Sebring Black",
        "Ghost White",
        "Racing Green"
      ],
      "sizes": [
        "Closed-Back Passive Acoustic Isolation"
      ]
    },
    "description": "Headset gaming akustik tertutup dengan karakter suara audiofil murni khas Sennheiser Jerman. Mikrofon boom magnetik lift-to-mute yang bisa dilepas, bantalan telinga memori busa dengan insulasi pasif terbaik, dan volume wheel presisi di earcup."
  },
  {
    "id": "AUD-013",
    "name": "Corsair Virtuoso RGB Wireless XT High-Fidelity Gaming Headset",
    "category": "Audio & Headset Gaming",
    "price": 3950000,
    "originalPrice": 4590000,
    "discountPercentage": 14,
    "rating": 4.8,
    "reviewCount": 120,
    "soldCount": 290,
    "stock": 9,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Slate Gunmetal Machined Aluminum"
      ],
      "sizes": [
        "Simultaneous SLIPSTREAM & Bluetooth"
      ]
    },
    "description": "Headset gaming mewah dengan rangka aluminium CNC mesin presisi tinggi. Menggunakan driver neodymium 50mm matched-pair frekuensi 20Hz-40.000Hz, mikrofon omnidirectional kelas broadcast 9.5mm, dan audio Dolby Atmos spasial."
  },
  {
    "id": "AUD-014",
    "name": "Audio-Technica AT2020 Cardioid Condenser Studio Microphone",
    "category": "Audio & Headset Gaming",
    "price": 1490000,
    "originalPrice": 1750000,
    "discountPercentage": 15,
    "rating": 4.9,
    "reviewCount": 580,
    "soldCount": 1950,
    "stock": 22,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/AKG%20C214%20condenser%20microphone%20with%20H85%20shock%20mount.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Black Matte Metal"
      ],
      "sizes": [
        "Standard XLR 3-Pin Connector"
      ]
    },
    "description": "Mikrofon kondenser studio cardioid paling populer di kalangan content creator dan streamer. Diafragma berbobot ringan 16mm menghasilkan respons frekuensi luas, rentang dinamis tinggi, dan SPL maksimum 144 dB."
  },
  {
    "id": "AUD-015",
    "name": "Rode NT-USB Mini Studio Condenser USB Microphone",
    "category": "Audio & Headset Gaming",
    "price": 1650000,
    "originalPrice": 1950000,
    "discountPercentage": 15,
    "rating": 4.9,
    "reviewCount": 310,
    "soldCount": 880,
    "stock": 18,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Studio%20microphone%20with%20pop-shield%20crop.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Matte Black Steel"
      ],
      "sizes": [
        "USB-C Plug & Play with Magnetic Stand"
      ]
    },
    "description": "Mikrofon USB studio ringkas buatan Australia dengan kapsul kondenser premium bersuara hangat dan jernih. Pop filter internal terintegrasi, dudukan magnetik meja anti-getaran, dan output headphone zero-latency monitoring 3.5mm."
  },
  {
    "id": "AUD-016",
    "name": "Elgato Wave DX Dynamic Broadcast XLR Microphone",
    "category": "Audio & Headset Gaming",
    "price": 1890000,
    "originalPrice": 2250000,
    "discountPercentage": 16,
    "rating": 4.9,
    "reviewCount": 140,
    "soldCount": 410,
    "stock": 12,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Shure_SM7.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Midnight Black"
      ],
      "sizes": [
        "XLR Dynamic Broadcast Capsule"
      ]
    },
    "description": "Mikrofon dinamis kelas siaran hasil kolaborasi Elgato dan Lewitt Audio Austria. Pola polar cardioid terfokus menangkap vokal tebal dan mengeliminasi suara ketikan keyboard atau desah kipas PC di latar belakang."
  },
  {
    "id": "AUD-017",
    "name": "Razer Seiren Mini Ultra-Compact Condenser Microphone",
    "category": "Audio & Headset Gaming",
    "price": 649000,
    "originalPrice": 799000,
    "discountPercentage": 19,
    "rating": 4.8,
    "reviewCount": 890,
    "soldCount": 3400,
    "stock": 35,
    "isFlashSale": true,
    "badge": "Terlaris",
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Classic Black",
        "Mercury White",
        "Quartz Pink"
      ],
      "sizes": [
        "Ultra-Compact 14mm Capsule"
      ]
    },
    "description": "Mikrofon USB mini ultra-kompak dengan pola penangkapan supercardioid super terarah. Menekan suara bising di sekitar ruangan, dilengkapi shockmount bawaan peredam getaran meja, dan pengaturan plug-and-play instan."
  },
  {
    "id": "AUD-018",
    "name": "SteelSeries Arena 7 2.1 Bluetooth Gaming Speakers with Subwoofer",
    "category": "Audio & Headset Gaming",
    "price": 4990000,
    "originalPrice": 5690000,
    "discountPercentage": 12,
    "rating": 4.9,
    "reviewCount": 95,
    "soldCount": 210,
    "stock": 7,
    "isFlashSale": false,
    "badge": "Baru",
    "images": [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Matte Black with 4-Zone RGB"
      ],
      "sizes": [
        "2.1 System (Dual Satellites + 6.5\" Subwoofer)"
      ]
    },
    "description": "Sistem speaker gaming 2.1 surround imersif dengan subwoofer 6.5 inci bertenaga bass menggelegar. Memiliki tweeter kubah sutra, driver woofer kerucut serat organik, dan pencahayaan reaktif RGB 4-zona yang merespons aksi di layar game."
  },
  {
    "id": "MON-005",
    "name": "LG UltraGear 27GR95QE-B 27\" OLED 240Hz 0.03ms Gaming Monitor",
    "category": "Monitor & Setup Gaming",
    "price": 14499000,
    "originalPrice": 16500000,
    "discountPercentage": 12,
    "rating": 4.9,
    "reviewCount": 190,
    "soldCount": 420,
    "stock": 9,
    "isFlashSale": true,
    "badge": "Official Store",
    "images": [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Hexagon Backlight Black"
      ],
      "sizes": [
        "27 Inch QHD (2560x1440) OLED 240Hz"
      ]
    },
    "description": "Monitor gaming OLED 27 inci 1440p pertama di dunia dari LG dengan refresh rate 240Hz dan response time kilat 0.03ms (GtG). Rasio kontras tak hingga 1.500.000:1, gamut warna DCI-P3 98.5%, dan kompatibel NVIDIA G-SYNC."
  },
  {
    "id": "MON-006",
    "name": "Samsung Odyssey Neo G9 49\" Dual QHD 240Hz Mini-LED Curved Monitor",
    "category": "Monitor & Setup Gaming",
    "price": 25999000,
    "originalPrice": 29999000,
    "discountPercentage": 13,
    "rating": 5.0,
    "reviewCount": 75,
    "soldCount": 160,
    "stock": 5,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://images.unsplash.com/photo-1547119957-637f8679db1e?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Glossy White Sci-Fi Odyssey"
      ],
      "sizes": [
        "49 Inch 32:9 DQHD (5120x1440) 1000R Curvature"
      ]
    },
    "description": "Monitor lengkung ultrawide 49 inci tercanggih Samsung dengan kelengkungan 1000R yang pas dengan pandangan mata manusia. Teknologi Quantum Matrix Quantum Mini-LED 2048 zona dimming lokal, HDR2000, 240Hz, dan CoreSync lighting."
  },
  {
    "id": "MON-007",
    "name": "ASUS TUF Gaming VG27AQ 27\" 2K QHD 165Hz IPS Gaming Monitor",
    "category": "Monitor & Setup Gaming",
    "price": 4350000,
    "originalPrice": 4999000,
    "discountPercentage": 13,
    "rating": 4.9,
    "reviewCount": 510,
    "soldCount": 1850,
    "stock": 20,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Stealth Black TUF Armor"
      ],
      "sizes": [
        "27 Inch WQHD (2560x1440) Fast IPS 165Hz"
      ]
    },
    "description": "Monitor gaming favorit gamer PC kompetitif dengan panel IPS 2K 165Hz dan teknologi eksklusif ASUS ELMB Sync (Extreme Low Motion Blur) yang dapat aktif bersamaan dengan G-SYNC Compatible untuk menghilangkan ghosting sepenuhnya."
  },
  {
    "id": "MON-008",
    "name": "BenQ MOBIUZ EX2710Q 27\" 165Hz 1ms IPS Gaming Monitor treVolo",
    "category": "Monitor & Setup Gaming",
    "price": 5490000,
    "originalPrice": 6200000,
    "discountPercentage": 11,
    "rating": 4.9,
    "reviewCount": 180,
    "soldCount": 490,
    "stock": 12,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://images.unsplash.com/photo-1547119957-637f8679db1e?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Metallic Gray with Orange Accent"
      ],
      "sizes": [
        "27 Inch QHD (2560x1440) IPS 165Hz 1ms"
      ]
    },
    "description": "Monitor gaming imersif dengan teknologi BenQ HDRi cerdas dan sistem audio terintegrasi 2.1 channel treVolo dengan subwoofer 5W internal. Menghadirkan warna akurat DCI-P3 95% dan perlindungan mata Eye-Care cerdas."
  },
  {
    "id": "MON-009",
    "name": "MSI MAG 274QRF QD E2 27\" Rapid IPS 180Hz Quantum Dot Monitor",
    "category": "Monitor & Setup Gaming",
    "price": 4790000,
    "originalPrice": 5490000,
    "discountPercentage": 13,
    "rating": 4.9,
    "reviewCount": 140,
    "soldCount": 380,
    "stock": 15,
    "isFlashSale": false,
    "badge": "Baru",
    "images": [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Dark Black MSI Gaming"
      ],
      "sizes": [
        "27 Inch WQHD Rapid IPS 180Hz Quantum Dot"
      ]
    },
    "description": "Monitor gaming bertenaga teknologi Quantum Dot dengan cakupan warna spektakuler 150% sRGB dan 98% DCI-P3. Panel Rapid IPS 180Hz refresh rate dengan response time 1ms GTG, port USB Type-C display 65W PD, dan KVM switch."
  },
  {
    "id": "MON-010",
    "name": "Gigabyte M27Q 27\" 170Hz 1440p SS IPS Gaming Monitor with KVM",
    "category": "Monitor & Setup Gaming",
    "price": 4190000,
    "originalPrice": 4750000,
    "discountPercentage": 12,
    "rating": 4.8,
    "reviewCount": 320,
    "soldCount": 1100,
    "stock": 16,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://images.unsplash.com/photo-1547119957-637f8679db1e?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Classic Matte Black"
      ],
      "sizes": [
        "27 Inch Super Speed IPS QHD 170Hz"
      ]
    },
    "description": "Monitor gaming produktivitas nomor 1 dengan fitur tombol fisik KVM built-in untuk mengontrol dua PC / laptop menggunakan satu set keyboard mouse. Refresh rate 170Hz, Super Speed IPS 0.5ms MPRT, dan 92% DCI-P3."
  },
  {
    "id": "MON-011",
    "name": "AOC 24G2SP 23.8\" 165Hz IPS 1ms Frameless Esports Monitor",
    "category": "Monitor & Setup Gaming",
    "price": 1999000,
    "originalPrice": 2450000,
    "discountPercentage": 18,
    "rating": 4.9,
    "reviewCount": 890,
    "soldCount": 3600,
    "stock": 28,
    "isFlashSale": true,
    "badge": "Terlaris",
    "images": [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Black with Red Gamer Accent"
      ],
      "sizes": [
        "23.8 Inch Full HD 165Hz IPS 1ms"
      ]
    },
    "description": "Monitor gaming esports 1080p paling laris di Indonesia dengan harga terjangkau. Panel IPS warna cerah 125% sRGB, 165Hz refresh rate bebas stutter, stand ergonomis yang bisa diatur ketinggian, tilt, dan putar pivot 90 derajat."
  },
  {
    "id": "MON-012",
    "name": "Elgato Key Light Air Professional Studio LED Panel WiFi",
    "category": "Monitor & Setup Gaming",
    "price": 2150000,
    "originalPrice": 2590000,
    "discountPercentage": 17,
    "rating": 4.9,
    "reviewCount": 210,
    "soldCount": 580,
    "stock": 16,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://images.unsplash.com/photo-1507499739999-097706ad8914?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Pure White Opal Glass"
      ],
      "sizes": [
        "1400 Lumens WiFi Desk Mount"
      ]
    },
    "description": "Lampu studio siaran profesional berkekuatan 1400 Lumens dengan teknologi pencahayaan multi-lapis edge-lit yang nyaman di mata tanpa silau. Kontrol suhu warna (2900-7000K) dan tingkat kecerahan langsung via aplikasi PC atau Stream Deck."
  },
  {
    "id": "MON-013",
    "name": "Elgato Facecam Full HD 60FPS Uncompressed Studio Webcam",
    "category": "Monitor & Setup Gaming",
    "price": 2490000,
    "originalPrice": 2890000,
    "discountPercentage": 14,
    "rating": 4.8,
    "reviewCount": 170,
    "soldCount": 460,
    "stock": 14,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Matte Black"
      ],
      "sizes": [
        "1080p60 Uncompressed Optical Glass Lens"
      ]
    },
    "description": "Webcam khusus streamer dan pro-gaming dengan lensa optik Elgato Prime Lens f/2.4 24mm all-glass dan sensor Sony STARVIS CMOS. Menghasilkan rekaman video 1080p 60fps murni tanpa kompresi artefak dengan memori internal onboard."
  },
  {
    "id": "MON-014",
    "name": "BenQ ScreenBar Halo Wireless Monitor Light Bar with Backlight",
    "category": "Monitor & Setup Gaming",
    "price": 2690000,
    "originalPrice": 3100000,
    "discountPercentage": 13,
    "rating": 5.0,
    "reviewCount": 195,
    "soldCount": 540,
    "stock": 15,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://images.unsplash.com/photo-1507499739999-097706ad8914?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Metallic Space Silver"
      ],
      "sizes": [
        "Wireless Controller Edition (Curved/Flat Monitor)"
      ]
    },
    "description": "Lampu bar monitor tercanggih dengan controller nirkabel putar presisi dan lampu latar ambient belakang 3-mode. Desain optik asimetris menerangi meja secara merata tanpa silau dan tanpa pantulan pada permukaan layar monitor."
  },
  {
    "id": "MON-015",
    "name": "Logitech Brio 4K Ultra HD Streaming Webcam with HDR",
    "category": "Monitor & Setup Gaming",
    "price": 2850000,
    "originalPrice": 3400000,
    "discountPercentage": 16,
    "rating": 4.8,
    "reviewCount": 310,
    "soldCount": 820,
    "stock": 12,
    "isFlashSale": true,
    "badge": "Terlaris",
    "images": [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Black Anodized Aluminum"
      ],
      "sizes": [
        "4K Ultra HD 30fps / 1080p 60fps HDR"
      ]
    },
    "description": "Webcam resolusi 4K Ultra HD profesional dengan teknologi RightLight 3 dan HDR otomatis dalam segala kondisi pencahayaan. Memiliki sudut pandang yang dapat disesuaikan (65, 78, atau 90 derajat) dan sensor inframerah pengenal wajah Windows Hello."
  },
  {
    "id": "MON-016",
    "name": "Elgato Stream Deck + Dial and Touch Strip Audio Controller",
    "category": "Monitor & Setup Gaming",
    "price": 3690000,
    "originalPrice": 4290000,
    "discountPercentage": 14,
    "rating": 5.0,
    "reviewCount": 130,
    "soldCount": 340,
    "stock": 10,
    "isFlashSale": false,
    "badge": "Baru",
    "images": [
      "https://images.unsplash.com/photo-1616469829941-c7200edec809?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Matte Black",
        "White Edition"
      ],
      "sizes": [
        "8 LCD Keys + 4 Rotary Dials + Touch Strip"
      ]
    },
    "description": "Pusat kendali audio dan broadcasting hibrida dengan 8 tombol LCD interaktif, strip sentuh dinamis, dan 4 rotary dial putar presisi 360 derajat. Mengontrol volume mixing channel game, musik, mic, dan efek suara secara real-time."
  },
  {
    "id": "CHR-003",
    "name": "Corsair TC100 RELAXED Fabric Gaming Chair",
    "category": "Kursi & Meja Gaming",
    "price": 3490000,
    "originalPrice": 4100000,
    "discountPercentage": 15,
    "rating": 4.8,
    "reviewCount": 210,
    "soldCount": 580,
    "stock": 12,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Aorus%20gaming%20chair%20on%20the%20stage%2020230205.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Fabric Black/Anthracite",
        "Fabric Black/Gray"
      ],
      "sizes": [
        "Relaxed Fit (Lebar Dudukan 54cm)"
      ]
    },
    "description": "Kursi gaming ergonomis dengan kain fabric lembut berpori yang sejuk digunakan berjam-jam di iklim tropis. Memiliki dudukan lebar yang santai, sandaran yang dapat direbahkan hingga 160 derajat, dan bantal pinggang busa memori tebal."
  },
  {
    "id": "CHR-004",
    "name": "ASUS ROG Destrier Ergo Gaming Chair (Cyborg Exoskeleton)",
    "category": "Kursi & Meja Gaming",
    "price": 13990000,
    "originalPrice": 15999000,
    "discountPercentage": 13,
    "rating": 5.0,
    "reviewCount": 45,
    "soldCount": 90,
    "stock": 6,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sihoo%20M57%20mesh%20office%20chair%2003.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Cyberpunk Matte Black Exoskeleton"
      ],
      "sizes": [
        "Full Ergonomic Mesh Body"
      ]
    },
    "description": "Kursi gaming ergonomis futuristik bergaya exoskeleton cyborg dengan jaring mesh breathable berkekuatan tinggi. Dilengkapi panel akustik penangkal gema suara di kepala, armrest 360 derajat dengan elevasi khusus untuk mobile gaming, dan lumbar support multi-level."
  },
  {
    "id": "CHR-005",
    "name": "Secretlab TITAN Evo 2024 NEO Hybrid Leatherette",
    "category": "Kursi & Meja Gaming",
    "price": 7990000,
    "originalPrice": 9400000,
    "discountPercentage": 15,
    "rating": 4.9,
    "reviewCount": 350,
    "soldCount": 890,
    "stock": 14,
    "isFlashSale": true,
    "badge": "Official Store",
    "images": [
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Stealth Black / Gold",
        "Royal Navy Blue",
        "Cyberpunk 2077 Edition"
      ],
      "sizes": [
        "Regular (170-189cm)",
        "XL (181-205cm)"
      ]
    },
    "description": "Kursi flagship Secretlab berbalut kulit sintetis NEO Hybrid 12x lebih tahan lama dibandingkan kulit PU biasa. Dilengkapi sistem penyangga pinggang 4-arah L-ADAPT, bantal kepala magnetis busa memori gel pendingin, dan recline 165 derajat."
  },
  {
    "id": "CHR-006",
    "name": "Noblechairs HERO Real Leather Gaming Chair Black Edition",
    "category": "Kursi & Meja Gaming",
    "price": 11500000,
    "originalPrice": 13200000,
    "discountPercentage": 13,
    "rating": 4.9,
    "reviewCount": 85,
    "soldCount": 190,
    "stock": 7,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Gaming_chair_1.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Real Leather Black Diamond Stitching"
      ],
      "sizes": [
        "HERO Large Frame Capacity 150kg"
      ]
    },
    "description": "Kursi gaming eksekutif mewah asal Jerman berlapis 100% kulit sapi asli (Real Leather). Rangka baja padat dengan dudukan busa dingin (cold-foam) berdensitas tinggi, lumbar support terintegrasi mekanis, dan roda poliuretan 60mm mulus."
  },
  {
    "id": "CHR-007",
    "name": "Herman Miller x Logitech G Embody Ergonomic Gaming Chair",
    "category": "Kursi & Meja Gaming",
    "price": 26500000,
    "originalPrice": 29900000,
    "discountPercentage": 11,
    "rating": 5.0,
    "reviewCount": 95,
    "soldCount": 210,
    "stock": 5,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sihoo%20M57%20mesh%20office%20chair%2003.jpg?width=800"
    ],
    "variants": {
      "colors": [
        "Cyan Back / Black Fabric",
        "Black On Black Stealth"
      ],
      "sizes": [
        "Pixelated Support Matrix Fit 136kg"
      ]
    },
    "description": "Mahakarya kolaborasi medis dan esports kelas tertinggi di dunia antara Herman Miller dan Logitech G. Menggunakan matriks piksel dinamis yang mendistribusikan tekanan berat badan secara merata, lapisan busa pendingin tembaga, dan garansi resmi 12 tahun."
  },
  {
    "id": "CHR-008",
    "name": "Secretlab MAGNUS Pro XL Sit-to-Stand Metal Gaming Desk",
    "category": "Kursi & Meja Gaming",
    "price": 14500000,
    "originalPrice": 16800000,
    "discountPercentage": 14,
    "rating": 5.0,
    "reviewCount": 110,
    "soldCount": 240,
    "stock": 6,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Signature Stealth Black Metal"
      ],
      "sizes": [
        "XL 177cm (Panjang 177cm x Lebar 80cm)"
      ]
    },
    "description": "Meja gaming elektrik sit-to-stand pertama di dunia dengan kolom suplai daya listrik terintegrasi di dalam kaki meja. Sasis baja murni berkekuatan 120kg, baki kabel magnetik penuh tersembunyi, motor ganda super senyap, dan permukaan alas Magpad magnetis."
  },
  {
    "id": "CHR-009",
    "name": "Eureka Ergonomic 60\" Electric Standing Gaming Desk RGB",
    "category": "Kursi & Meja Gaming",
    "price": 6890000,
    "originalPrice": 8200000,
    "discountPercentage": 16,
    "rating": 4.8,
    "reviewCount": 140,
    "soldCount": 360,
    "stock": 10,
    "isFlashSale": false,
    "badge": "Terlaris",
    "images": [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Carbon Fiber Texture Black"
      ],
      "sizes": [
        "152cm x 70cm Dual Motor Electric"
      ]
    },
    "description": "Meja gaming elektrik dengan sayap pencahayaan spektrum RGB reaktif musik di kedua sisi. Dilengkapi motor ganda tenang dengan panel kontrol digital 4 preset memori ketinggian, gantungan headphone ganda, dan lubang manajemen kabel tersembunyi."
  },
  {
    "id": "CHR-010",
    "name": "Cougar Mars Pro 150 Ergonomic Dual-Sided RGB Gaming Desk",
    "category": "Kursi & Meja Gaming",
    "price": 5490000,
    "originalPrice": 6500000,
    "discountPercentage": 15,
    "rating": 4.8,
    "reviewCount": 90,
    "soldCount": 230,
    "stock": 9,
    "isFlashSale": false,
    "badge": "Official Store",
    "images": [
      "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&auto=format&fit=crop&q=80"
    ],
    "variants": {
      "colors": [
        "Carbon Black Matte Finish"
      ],
      "sizes": [
        "Panjang 150cm x Lebar 77cm (3 Ketinggian Manual)"
      ]
    },
    "description": "Meja gaming ergonomis berdaya tahan beban 150kg dengan rangka baja tebal dan lapisan serat karbon anti-gores. Memiliki I/O hub bawaan dengan port USB 3.0, port USB Type-C display monitor, jack audio 3.5mm, dan efek pencahayaan strip RGB sinkronisasi motherboard."
  }
];

const PROMO_CODES = {
  "HEMAT10": {
    code: "HEMAT10",
    type: "percentage",
    value: 0.10,
    minSpend: 0,
    description: "Diskon 10% tanpa batas minimum belanja"
  },
  "ESPORTS50": {
    code: "ESPORTS50",
    type: "fixed",
    value: 50000,
    minSpend: 300000,
    description: "Potongan langsung Rp 50.000 (Min. belanja Rp 300.000)"
  },
  "BELANJA50": {
    code: "BELANJA50",
    type: "fixed",
    value: 50000,
    minSpend: 300000,
    description: "Potongan langsung Rp 50.000 (Min. belanja Rp 300.000)"
  },
  "GRATISONGKIR": {
    code: "GRATISONGKIR",
    type: "shipping",
    value: 1.0,
    minSpend: 0,
    description: "Potongan ongkos kirim menjadi Rp 0"
  }
};

const COURIER_OPTIONS = [
  { id: "reguler", name: "Reguler (SiCepat / J&T Express)", etd: "2-3 Hari Kerja", price: 15000 },
  { id: "express", name: "Express Next Day (JNE YES Khusus Hardware)", etd: "1 Hari (Besok Tiba)", price: 30000 },
  { id: "kargo", name: "Kargo Kayu & Asuransi (J&T Cargo)", etd: "4-7 Hari Kerja (Aman untuk Monitor/Kursi/PC)", price: 10000 }
];

const PAYMENT_METHODS = [
  { id: "qris", name: "QRIS Instant Pay", icon: "fa-qrcode", desc: "Scan otomatis via GoPay, OVO, ShopeePay, BCA QR" },
  { id: "bca_va", name: "BCA Virtual Account", icon: "fa-building-columns", desc: "Verifikasi instan otomatis 24 Jam" },
  { id: "mandiri_va", name: "Mandiri Virtual Account", icon: "fa-university", desc: "Bayar via Livin' by Mandiri atau ATM" },
  { id: "bri_va", name: "BRI Virtual Account (BRIVA)", icon: "fa-landmark", desc: "Bayar via BRImo atau ATM BRI" },
  { id: "gopay", name: "GoPay / GoPay Later", icon: "fa-wallet", desc: "Konfirmasi kilat lewat saldo GoPay" },
  { id: "cod", name: "COD (Bayar di Tempat)", icon: "fa-hand-holding-dollar", desc: "Bayar tunai ke kurir saat paket diterima" }
];

if (typeof window !== 'undefined') {
  window.INITIAL_PRODUCTS = INITIAL_PRODUCTS;
  window.PROMO_CODES = PROMO_CODES;
  window.COURIER_OPTIONS = COURIER_OPTIONS;
  window.PAYMENT_METHODS = PAYMENT_METHODS;
}

