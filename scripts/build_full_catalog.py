#!/usr/bin/env python3
import json

true = True
false = False

# Import existing 84 products from generate_all
try:
    import scripts.generate_all as existing_gen
except ModuleNotFoundError:
    import generate_all as existing_gen

def get_complete_140_catalog():
    # Start with existing products from generate_all
    base_catalog = existing_gen.generate_catalog()
    
    # Check current categories
    existing_by_id = {p['id']: p for p in base_catalog}
    items = list(base_catalog)

    # ---------------------------------------------------------
    # PC & KONSOL GAMING ADDITIONS (CON-009 to CON-018) -> 10 items
    # Total PC & Konsol = 8 + 10 = 18
    # ---------------------------------------------------------
    new_con = [
        {
            "id": "CON-009",
            "name": "Microsoft Xbox Series X 1TB Gaming Console",
            "category": "PC & Konsol Gaming",
            "price": 8499000, "originalPrice": 9499000, "discountPercentage": 10,
            "rating": 4.9, "reviewCount": 310, "soldCount": 780, "stock": 12, "isFlashSale": false, "badge": "Official Store",
            "images": ["https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Carbon Black"], "sizes": ["1TB Custom NVMe SSD"]},
            "description": "Konsol generasi terbaru paling bertenaga dari Microsoft dengan 12 Teraflops GPU RDNA 2, arsitektur Xbox Velocity, Quick Resume instan, dan dukungan gameplay 4K hingga 120 FPS."
        },
        {
            "id": "CON-010",
            "name": "Microsoft Xbox Series S 512GB All-Digital Console",
            "category": "PC & Konsol Gaming",
            "price": 4650000, "originalPrice": 5200000, "discountPercentage": 10,
            "rating": 4.8, "reviewCount": 240, "soldCount": 650, "stock": 15, "isFlashSale": false, "badge": "Terlaris",
            "images": ["https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Robot White"], "sizes": ["512GB NVMe SSD"]},
            "description": "Konsol digital generasi baru dengan form-factor terkecil dan paling ringkas dari Microsoft. Mendukung framerate hingga 120 FPS pada resolusi 1440p, DirectX Raytracing, dan ribuan game di Xbox Game Pass."
        },
        {
            "id": "CON-011",
            "name": "Sony PlayStation Portal Remote Player for PS5",
            "category": "PC & Konsol Gaming",
            "price": 3699000, "originalPrice": 4200000, "discountPercentage": 12,
            "rating": 4.7, "reviewCount": 180, "soldCount": 490, "stock": 14, "isFlashSale": true, "badge": "Official Store",
            "images": ["https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["White Signature"], "sizes": ["8 Inch Full HD LCD Screen"]},
            "description": "Perangkat streaming jarak jauh resmi PlayStation 5 dengan layar LCD 8 inci 1080p 60fps. Menghadirkan seluruh sensasi kontroler DualSense termasuk haptic feedback dan adaptive triggers langsung di genggaman via Wi-Fi."
        },
        {
            "id": "CON-012",
            "name": "Nintendo Switch Pro Controller Official",
            "category": "PC & Konsol Gaming",
            "price": 890000, "originalPrice": 1100000, "discountPercentage": 19,
            "rating": 4.9, "reviewCount": 420, "soldCount": 1350, "stock": 25, "isFlashSale": false, "badge": "Terlaris",
            "images": ["https://commons.wikimedia.org/wiki/Special:FilePath/Nintendo-Switch-Pro-Controller-FL.jpg?width=800"],
            "variants": {"colors": ["Translucent Black Edition", "Zelda Tears of the Kingdom Edition"], "sizes": ["Standard Wireless Controller"]},
            "description": "Kontroler nirkabel ergonomis premium resmi Nintendo untuk Switch dengan HD rumble sensitif, motion controls gyro 6-axis, pembaca amiibo NFC bawaan, dan daya tahan baterai fantastis hingga 40 jam."
        },
        {
            "id": "CON-013",
            "name": "Xbox Elite Wireless Controller Series 2 Core",
            "category": "PC & Konsol Gaming",
            "price": 2199000, "originalPrice": 2600000, "discountPercentage": 15,
            "rating": 4.8, "reviewCount": 160, "soldCount": 390, "stock": 11, "isFlashSale": false, "badge": "Official Store",
            "images": ["https://commons.wikimedia.org/wiki/Special:FilePath/Xbox_Series_Controller_Carbon_Black.jpg?width=800"],
            "variants": {"colors": ["White/Black Core", "Full Carbon Red"], "sizes": ["Adjustable Tension Thumbsticks"]},
            "description": "Kontroler level kompetitif profesional dengan thumbstick yang dapat diatur tingkat ketegangannya, hair-trigger locks 3-posisi yang lebih pendek, pegangan karet bertekstur menyeluruh, dan baterai isi ulang hingga 40 jam."
        },
        {
            "id": "CON-014",
            "name": "Lenovo Legion Go 8.8\" QHD+ Handheld Gaming PC",
            "category": "PC & Konsol Gaming",
            "price": 12999000, "originalPrice": 14500000, "discountPercentage": 10,
            "rating": 4.8, "reviewCount": 115, "soldCount": 290, "stock": 8, "isFlashSale": false, "badge": "Baru",
            "images": ["https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Shadow Black"], "sizes": ["512GB PCIe 4.0 NVMe", "1TB PCIe 4.0 NVMe"]},
            "description": "PC gaming genggam bertenaga AMD Ryzen Z1 Extreme dengan layar masif 8.8 inci QHD+ (2560x1600) 144Hz IPS. Dilengkapi kontroler Legion TrueStrike lepas-pasang dengan mode mouse FPS optic unik dan baterai 49.2Wh Super Rapid Charge."
        },
        {
            "id": "CON-015",
            "name": "Logitech G923 TRUEFORCE Racing Wheel for PS5 / PC",
            "category": "PC & Konsol Gaming",
            "price": 5499000, "originalPrice": 6500000, "discountPercentage": 15,
            "rating": 4.9, "reviewCount": 210, "soldCount": 540, "stock": 10, "isFlashSale": true, "badge": "Official Store",
            "images": ["https://commons.wikimedia.org/wiki/Special:FilePath/Logitech_G29_steering_wheel.jpg?width=800"],
            "variants": {"colors": ["Black Leather with Brushed Metal"], "sizes": ["PlayStation 5 / PC Version"]},
            "description": "Set setir balap kemudi kelas simulasi dengan teknologi feedback TRUEFORCE berfrekuensi tinggi hingga 4000Hz. Dilengkapi pedal progresif dual-clutch launch assist, paddle shifter stainless steel, dan balutan kulit asli jahitan tangan."
        },
        {
            "id": "CON-016",
            "name": "Thrustmaster T300 RS GT Edition Racing Wheel",
            "category": "PC & Konsol Gaming",
            "price": 6850000, "originalPrice": 7990000, "discountPercentage": 14,
            "rating": 4.9, "reviewCount": 145, "soldCount": 310, "stock": 7, "isFlashSale": false, "badge": "Official Store",
            "images": ["https://commons.wikimedia.org/wiki/Special:FilePath/Logitech_G29_steering_wheel.jpg?width=800"],
            "variants": {"colors": ["GT Edition Official"], "sizes": ["Dual-Belt Force Feedback System"]},
            "description": "Kemudi balap kelas simulator dengan sistem dual-belt tanpa gesekan dan motor brushless industri 25W. Dilengkapi pedal 3-buah T3PA GT Edition berbahan logam penuh, sensor magnetik H.E.A.R.T presisi 16-bit, dan lingkar setir 28cm lepas pasang."
        },
        {
            "id": "CON-017",
            "name": "ASUS ROG Strix SCAR 18 (2024) RTX 4090 Gaming Laptop",
            "category": "PC & Konsol Gaming",
            "price": 66999000, "originalPrice": 72999000, "discountPercentage": 8,
            "rating": 5.0, "reviewCount": 42, "soldCount": 88, "stock": 5, "isFlashSale": false, "badge": "Official Store",
            "images": ["https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Off Black ROG Stealth"], "sizes": ["Core i9-14900HX / RTX 4090 / 64GB DDR5 / 2TB SSD"]},
            "description": "Laptop gaming monster bertenaga prosesor Intel Core i9-14900HX dan GPU NVIDIA GeForce RTX 4090 175W TGP. Dilengkapi layar ROG Nebula HDR 18 inci Mini LED 2.5K 240Hz, sistem pendingin Conductonaut Extreme liquid metal, dan audio 4-speaker Dolby Atmos."
        },
        {
            "id": "CON-018",
            "name": "MSI Titan 18 HX A14V Flagship Gaming Laptop",
            "category": "PC & Konsol Gaming",
            "price": 78999000, "originalPrice": 85999000, "discountPercentage": 8,
            "rating": 5.0, "reviewCount": 28, "soldCount": 52, "stock": 4, "isFlashSale": false, "badge": "Baru",
            "images": ["https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Core Black Titan"], "sizes": ["Core i9-14900HX / RTX 4090 / 128GB RAM / 4TB SSD"]},
            "description": "Laptop desktop replacement terbaik di dunia dengan layar 18 inci 4K 120Hz Mini-LED pertama di industri. Memiliki keyboard mekanikal Cherry MX Ultra-Low Profile, touchpad RGB haptic tanpa batas (seamless), dan 4 slot memori DDR5 hingga 128GB."
        }
    ]

    # ---------------------------------------------------------
    # KEYBOARD & MOUSE GAMING ADDITIONS (14 items: MOU 7-13, KBD 7-13)
    # Total Keyboard & Mouse = 12 + 14 = 26
    # ---------------------------------------------------------
    new_peripherals = [
        {
            "id": "MOU-007",
            "name": "Logitech G502 X PLUS LIGHTSPEED Wireless RGB Gaming Mouse",
            "category": "Keyboard & Mouse Gaming",
            "price": 2190000, "originalPrice": 2590000, "discountPercentage": 15,
            "rating": 4.9, "reviewCount": 310, "soldCount": 850, "stock": 16, "isFlashSale": true, "badge": "Official Store",
            "images": ["https://commons.wikimedia.org/wiki/Special:FilePath/G502_Hero.jpg?width=800"],
            "variants": {"colors": ["Black", "White"], "sizes": ["LIGHTFORCE Hybrid Optical-Mechanical"]},
            "description": "Evolusi tercanggih dari mouse gaming paling ikonik di dunia. Dibekali switch optik-mekanikal hybrid LIGHTFORCE, sensor HERO 25K berakurasi sub-mikron, 13 tombol yang dapat diprogram, dan pencahayaan LIGHTSYNC 8-LED aktif."
        },
        {
            "id": "MOU-008",
            "name": "Logitech G304 / G305 LIGHTSPEED Wireless Gaming Mouse",
            "category": "Keyboard & Mouse Gaming",
            "price": 499000, "originalPrice": 649000, "discountPercentage": 23,
            "rating": 4.9, "reviewCount": 1420, "soldCount": 5800, "stock": 45, "isFlashSale": false, "badge": "Terlaris",
            "images": ["https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Black", "White", "Lilac", "Blue"], "sizes": ["Compact Wireless 99g"]},
            "description": "Mouse gaming nirkabel sejuta umat dengan teknologi LIGHTSPEED latency 1ms bebas lag. Menggunakan sensor optik HERO 12.000 DPI yang hemat daya luar biasa, bertahan hingga 250 jam hanya dengan satu baterai AA."
        },
        {
            "id": "MOU-009",
            "name": "Razer Basilisk V3 Pro Wireless Ergonomic Gaming Mouse",
            "category": "Keyboard & Mouse Gaming",
            "price": 2490000, "originalPrice": 2899000, "discountPercentage": 14,
            "rating": 4.9, "reviewCount": 185, "soldCount": 520, "stock": 12, "isFlashSale": false, "badge": "Official Store",
            "images": ["https://commons.wikimedia.org/wiki/Special:FilePath/Razer_DeathAdder_Elite-front_oblique-ar_16to10-fs_PNr%C2%B00465.jpg?width=800"],
            "variants": {"colors": ["Classic Black", "Mercury White"], "sizes": ["Wireless HyperSpeed 4K Compatible"]},
            "description": "Mouse gaming ergonomis berfitur paling lengkap dari Razer dengan scroll wheel Razer HyperScroll tilt 4-arah (tactile/free-spin otomatis), sensor Focus Pro 30K Optical, switch Optical Gen-3, dan 13 zona pencahayaan Razer Chroma RGB."
        },
        {
            "id": "MOU-010",
            "name": "Pulsar X2 V2 Wireless Superglide Gaming Mouse",
            "category": "Keyboard & Mouse Gaming",
            "price": 1540000, "originalPrice": 1790000, "discountPercentage": 14,
            "rating": 4.8, "reviewCount": 140, "soldCount": 410, "stock": 15, "isFlashSale": false, "badge": "Baru",
            "images": ["https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Black Ultra-Matte", "White Pure"], "sizes": ["Size 1 (Mini 51g)", "Size 2 (Medium 53g)"]},
            "description": "Mouse esports simetris ultra-ringan 53 gram tanpa lubang honeycomb. Menggunakan switch optik anti-double click, encoder Pulsar Blue tahan debu, sensor PixArt PAW3395 26.000 DPI, dan polling rate hingga 4000Hz (dengan 4K dongle opsional)."
        },
        {
            "id": "MOU-011",
            "name": "Finalmouse UltralightX Lion Wireless Carbon Fiber Mouse",
            "category": "Keyboard & Mouse Gaming",
            "price": 3890000, "originalPrice": 4500000, "discountPercentage": 13,
            "rating": 4.9, "reviewCount": 65, "soldCount": 130, "stock": 6, "isFlashSale": false, "badge": "Official Store",
            "images": ["https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Phantom Carbon Finish", "Guardian Gold Accent"], "sizes": ["Medium (Lion - 35 Gram)"]},
            "description": "Mouse gaming paling ringan di dunia berbahan sasis komposit serat karbon berkekuatan tinggi (bobot hanya 35 gram). Menggunakan sensor PixArt PAW3395 kustom, wireless 8000Hz polling rate, dan skate PTFE perawan."
        },
        {
            "id": "MOU-012",
            "name": "BenQ ZOWIE EC2-CW Wireless Esports Gaming Mouse",
            "category": "Keyboard & Mouse Gaming",
            "price": 2490000, "originalPrice": 2850000, "discountPercentage": 12,
            "rating": 4.9, "reviewCount": 220, "soldCount": 610, "stock": 14, "isFlashSale": false, "badge": "Terlaris",
            "images": ["https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Matte Black Esports Standard"], "sizes": ["EC2-CW (Medium Ergonomic)"]},
            "description": "Bentuk ergonomis legendaris ZOWIE favorit pro-player Counter-Strike dan Valorant dunia kini hadir dalam varian nirkabel. Dilengkapi Enhanced Wireless Receiver mandiri anti-interferensi frekuensi panggung turnamen, sensor 3370, dan plug-and-play tanpa driver."
        },
        {
            "id": "MOU-013",
            "name": "Glorious Model O 2 Wireless Ultra-Light Gaming Mouse",
            "category": "Keyboard & Mouse Gaming",
            "price": 1350000, "originalPrice": 1590000, "discountPercentage": 15,
            "rating": 4.8, "reviewCount": 190, "soldCount": 580, "stock": 18, "isFlashSale": true, "badge": "Terlaris",
            "images": ["https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Matte Black", "Matte White"], "sizes": ["Wireless 68 Gram BAMF 2.0"]},
            "description": "Mouse gaming nirkabel ultra-ringan 68 gram dengan sensor optik BAMF 2.0 26.000 DPI 650 IPS. Memiliki konektivitas ganda 2.4GHz nirkabel dan Bluetooth 5.2 LE, baterai hingga 210 jam, switch Glorious 80 juta klik, dan skate G-Skates 100% PTFE murni."
        },
        {
            "id": "KBD-007",
            "name": "Wooting 60HE+ Rapid Trigger Analog Mechanical Keyboard",
            "category": "Keyboard & Mouse Gaming",
            "price": 3690000, "originalPrice": 4200000, "discountPercentage": 12,
            "rating": 5.0, "reviewCount": 480, "soldCount": 1200, "stock": 10, "isFlashSale": true, "badge": "Terlaris",
            "images": ["https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Black Anodized Metal Plate", "Ghost Polycarbonate Plate"], "sizes": ["Lekker Linear60 Hall Effect Switches"]},
            "description": "Keyboard gaming paling dicari di skena FPS dunia. Dilengkapi switch magnetis Hall Effect Lekker dengan aktuasi analog penuh 0.1mm - 4.0mm dan fitur Rapid Trigger instan yang mereset tombol seketika saat jari terangkat untuk counter-strafing sempurna."
        },
        {
            "id": "KBD-008",
            "name": "Logitech G915 LIGHTSPEED Wireless RGB Mechanical Keyboard",
            "category": "Keyboard & Mouse Gaming",
            "price": 3190000, "originalPrice": 3799000, "discountPercentage": 16,
            "rating": 4.9, "reviewCount": 310, "soldCount": 760, "stock": 12, "isFlashSale": false, "badge": "Official Store",
            "images": ["https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Carbon Brushed Aluminum", "White Silver Edition"], "sizes": ["GL Tactile", "GL Linear", "GL Clicky"]},
            "description": "Keyboard gaming nirkabel ultra-tipis berbahan paduan aluminium kelas pesawat terbang. Menggunakan switch mekanikal low-profile GL berkecepatan tinggi, konektivitas nirkabel pro-grade LIGHTSPEED 1ms, roller volume khusus, dan baterai tahan hingga 30 jam."
        },
        {
            "id": "KBD-009",
            "name": "Razer Huntsman V3 Pro TKL Analog Optical Esports Keyboard",
            "category": "Keyboard & Mouse Gaming",
            "price": 3890000, "originalPrice": 4499000, "discountPercentage": 13,
            "rating": 4.9, "reviewCount": 175, "soldCount": 430, "stock": 11, "isFlashSale": false, "badge": "Official Store",
            "images": ["https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Classic Black Textured"], "sizes": ["Razer Gen-2 Analog Optical Switches"]},
            "description": "Keyboard turnamen esports tenkeyless dengan switch optik analog generasi ke-2 Razer. Dilengkapi rentang aktuasi cepat 0.1 - 4.0mm, Rapid Trigger terkalibrasi, indikator LED multi-fungsi onboard, palm rest magnetik busa kulit, dan keycap PBT doubleshot."
        },
        {
            "id": "KBD-010",
            "name": "Ducky One 3 RGB TKL Hot-Swappable Mechanical Keyboard",
            "category": "Keyboard & Mouse Gaming",
            "price": 1890000, "originalPrice": 2200000, "discountPercentage": 14,
            "rating": 4.9, "reviewCount": 240, "soldCount": 680, "stock": 16, "isFlashSale": false, "badge": "Terlaris",
            "images": ["https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Daybreak (Navy/Blue/Yellow)", "Fuji (Pink/White)", "Classic Pure Black"], "sizes": ["Cherry MX Brown", "Cherry MX Red", "Cherry MX Silver Speed"]},
            "description": "Keyboard mekanikal legendaris dari Ducky Taiwan dengan filosofi desain QUACK Mechanics. Memiliki soket hot-swap Kailh, peredam suara busa EVA multi-lapis ganda, keycap PBT doubleshot seamless berkualitas tinggi, dan kabel USB Type-C braided lepas-pasang."
        },
        {
            "id": "KBD-011",
            "name": "ASUS ROG Azoth 75% Wireless Custom Mechanical Keyboard OLED",
            "category": "Keyboard & Mouse Gaming",
            "price": 3990000, "originalPrice": 4699000, "discountPercentage": 15,
            "rating": 5.0, "reviewCount": 210, "soldCount": 510, "stock": 9, "isFlashSale": true, "badge": "Official Store",
            "images": ["https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Space Gray Gunmetal", "Moonlight White Edition"], "sizes": ["ROG NX Snow Linear Switches (Pre-lubed)"]},
            "description": "Keyboard custom 75% nirkabel tercanggih ASUS ROG dengan gasket mount silikon dan peredam 3 lapis. Dilengkapi layar OLED 2 inci interaktif dengan tombol kenop 3-arah, switch hot-swap ROG NX Snow yang sudah di-lube dari pabrik, dan DIY switch lube kit lengkap."
        },
        {
            "id": "KBD-012",
            "name": "Keychron V1 QMK Custom Mechanical Keyboard (Frosted Black)",
            "category": "Keyboard & Mouse Gaming",
            "price": 1250000, "originalPrice": 1450000, "discountPercentage": 13,
            "rating": 4.9, "reviewCount": 380, "soldCount": 1140, "stock": 20, "isFlashSale": false, "badge": "Terlaris",
            "images": ["https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Frosted Black Translucent", "Carbon Black Solid"], "sizes": ["Keychron K Pro Red (Linear)", "Keychron K Pro Brown (Tactile)"]},
            "description": "Keyboard mekanikal kustom 75% dengan dukungan penuh firmware open-source QMK/VIA untuk mapping tombol tanpa batas. Menggunakan switch hot-swap Keychron K Pro pre-lubed, screw-in stabilizer PCB, keycap OSA profile PBT doubleshot, dan case transparan."
        },
        {
            "id": "KBD-013",
            "name": "Akko MOD007B-HE Hall Effect Magnetic Switch Keyboard",
            "category": "Keyboard & Mouse Gaming",
            "price": 2450000, "originalPrice": 2890000, "discountPercentage": 15,
            "rating": 4.9, "reviewCount": 160, "soldCount": 420, "stock": 14, "isFlashSale": false, "badge": "Baru",
            "images": ["https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Santorini Blue Theme", "Year of the Dragon Edition"], "sizes": ["Akko Cream Yellow Magnetic Switches"]},
            "description": "Keyboard gasket mount nirkabel tri-mode dengan switch magnetik Hall Effect Akko. Memiliki Rapid Trigger 0.1-4.0mm, dynamic keystrokes (4 aksi dalam 1 penekanan tombol), knob putar CNC berbahan aluminium, dan koneksi nirkabel multi-perangkat."
        }
    ]

    # ---------------------------------------------------------
    # AUDIO & HEADSET GAMING ADDITIONS (AUD 7-18) -> 12 items
    # Total Audio = 6 + 12 = 18
    # ---------------------------------------------------------
    new_audio = [
        {
            "id": "AUD-007",
            "name": "Logitech G PRO X 2 LIGHTSPEED Wireless Gaming Headset (Graphene)",
            "category": "Audio & Headset Gaming",
            "price": 3699000, "originalPrice": 4299000, "discountPercentage": 14,
            "rating": 4.9, "reviewCount": 260, "soldCount": 680, "stock": 12, "isFlashSale": true, "badge": "Official Store",
            "images": ["https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Black Stealth", "White Pure", "Magenta Esports"], "sizes": ["Pro Graphene 50mm Drivers"]},
            "description": "Headset gaming esports profesional pertama di dunia dengan driver Graphene 50mm untuk fidelitas audio tanpa distorsi. Koneksi nirkabel LIGHTSPEED hingga rentang 30 meter, masa pakai baterai hingga 50 jam, dan mikrofon cardioid 6mm Blue VO!CE."
        },
        {
            "id": "AUD-008",
            "name": "Razer BlackShark V2 Pro (2023) Wireless Esports Headset",
            "category": "Audio & Headset Gaming",
            "price": 2999000, "originalPrice": 3499000, "discountPercentage": 14,
            "rating": 4.9, "reviewCount": 310, "soldCount": 820, "stock": 15, "isFlashSale": false, "badge": "Official Store",
            "images": ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Classic Black", "White Edition"], "sizes": ["HyperClear Super Wideband Mic"]},
            "description": "Headset gaming turnamen resmi atlet esports Razer dengan mikrofon HyperClear Super Wideband 32kHz bersuara sejernih mikrofon studio. Driver TriForce Titanium 50mm, isolasi suara pasif ultra-kedap, dan daya tahan baterai hingga 70 jam."
        },
        {
            "id": "AUD-009",
            "name": "SteelSeries Arctis Nova Pro Wireless High-Fidelity Audio System",
            "category": "Audio & Headset Gaming",
            "price": 5790000, "originalPrice": 6599000, "discountPercentage": 12,
            "rating": 5.0, "reviewCount": 180, "soldCount": 410, "stock": 8, "isFlashSale": false, "badge": "Official Store",
            "images": ["https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Obsidian Black Metal", "White Arctic Edition"], "sizes": ["PC / PlayStation / Dual-USB System"]},
            "description": "Sistem audio gaming paling mutakhir di dunia dengan Active Noise Cancellation (ANC) 4-mikrofon hybrid dan Infinity Power System (2 baterai hot-swap tanpa mati daya). Dilengkapi Base Station OLED multi-input untuk berpindah PC ke konsol instan."
        },
        {
            "id": "AUD-010",
            "name": "HyperX Cloud Alpha Wireless Gaming Headset (300 Jam Baterai)",
            "category": "Audio & Headset Gaming",
            "price": 2890000, "originalPrice": 3350000, "discountPercentage": 13,
            "rating": 4.9, "reviewCount": 420, "soldCount": 1100, "stock": 16, "isFlashSale": true, "badge": "Terlaris",
            "images": ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Black / Red Aluminum Signature"], "sizes": ["300-Hour Battery Life Edition"]},
            "description": "Headset gaming nirkabel pertama di dunia dengan rekor daya tahan baterai fantastis hingga 300 jam dalam sekali pengisian daya. Memiliki driver Dual Chamber 50mm yang memisahkan bass dari mid/high, busa memori signature HyperX, dan audio spasial DTS Headphone:X."
        },
        {
            "id": "AUD-011",
            "name": "Beyerdynamic DT 990 PRO 250 Ohm Studio Gaming Headphones",
            "category": "Audio & Headset Gaming",
            "price": 2450000, "originalPrice": 2850000, "discountPercentage": 14,
            "rating": 4.9, "reviewCount": 340, "soldCount": 980, "stock": 14, "isFlashSale": false, "badge": "Terlaris",
            "images": ["https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Gray Velour Silver Edition", "Black Special Edition"], "sizes": ["250 Ohm High-Impedance Studio"]},
            "description": "Headphone open-back legendaris buatan Jerman yang menjadi standar emas soundstage dan imaging akurat untuk mendengarkan step musuh di CS2, Apex, dan Tarkov. Earpad bahan beludru velour lembut untuk kenyamanan bermain berjam-jam."
        },
        {
            "id": "AUD-012",
            "name": "Sennheiser / EPOS H6PRO Closed Acoustic Gaming Headset",
            "category": "Audio & Headset Gaming",
            "price": 2690000, "originalPrice": 3190000, "discountPercentage": 15,
            "rating": 4.8, "reviewCount": 150, "soldCount": 370, "stock": 11, "isFlashSale": false, "badge": "Official Store",
            "images": ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Sebring Black", "Ghost White", "Racing Green"], "sizes": ["Closed-Back Passive Acoustic Isolation"]},
            "description": "Headset gaming akustik tertutup dengan karakter suara audiofil murni khas Sennheiser Jerman. Mikrofon boom magnetik lift-to-mute yang bisa dilepas, bantalan telinga memori busa dengan insulasi pasif terbaik, dan volume wheel presisi di earcup."
        },
        {
            "id": "AUD-013",
            "name": "Corsair Virtuoso RGB Wireless XT High-Fidelity Gaming Headset",
            "category": "Audio & Headset Gaming",
            "price": 3950000, "originalPrice": 4590000, "discountPercentage": 14,
            "rating": 4.8, "reviewCount": 120, "soldCount": 290, "stock": 9, "isFlashSale": false, "badge": "Official Store",
            "images": ["https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Slate Gunmetal Machined Aluminum"], "sizes": ["Simultaneous SLIPSTREAM & Bluetooth"]},
            "description": "Headset gaming mewah dengan rangka aluminium CNC mesin presisi tinggi. Menggunakan driver neodymium 50mm matched-pair frekuensi 20Hz-40.000Hz, mikrofon omnidirectional kelas broadcast 9.5mm, dan audio Dolby Atmos spasial."
        },
        {
            "id": "AUD-014",
            "name": "Audio-Technica AT2020 Cardioid Condenser Studio Microphone",
            "category": "Audio & Headset Gaming",
            "price": 1490000, "originalPrice": 1750000, "discountPercentage": 15,
            "rating": 4.9, "reviewCount": 580, "soldCount": 1950, "stock": 22, "isFlashSale": false, "badge": "Terlaris",
            "images": ["https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Black Matte Metal"], "sizes": ["Standard XLR 3-Pin Connector"]},
            "description": "Mikrofon kondenser studio cardioid paling populer di kalangan content creator dan streamer. Diafragma berbobot ringan 16mm menghasilkan respons frekuensi luas, rentang dinamis tinggi, dan SPL maksimum 144 dB."
        },
        {
            "id": "AUD-015",
            "name": "Rode NT-USB Mini Studio Condenser USB Microphone",
            "category": "Audio & Headset Gaming",
            "price": 1650000, "originalPrice": 1950000, "discountPercentage": 15,
            "rating": 4.9, "reviewCount": 310, "soldCount": 880, "stock": 18, "isFlashSale": false, "badge": "Official Store",
            "images": ["https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Matte Black Steel"], "sizes": ["USB-C Plug & Play with Magnetic Stand"]},
            "description": "Mikrofon USB studio ringkas buatan Australia dengan kapsul kondenser premium bersuara hangat dan jernih. Pop filter internal terintegrasi, dudukan magnetik meja anti-getaran, dan output headphone zero-latency monitoring 3.5mm."
        },
        {
            "id": "AUD-016",
            "name": "Elgato Wave DX Dynamic Broadcast XLR Microphone",
            "category": "Audio & Headset Gaming",
            "price": 1890000, "originalPrice": 2250000, "discountPercentage": 16,
            "rating": 4.9, "reviewCount": 140, "soldCount": 410, "stock": 12, "isFlashSale": false, "badge": "Official Store",
            "images": ["https://commons.wikimedia.org/wiki/Special:FilePath/Shure_SM7.jpg?width=800"],
            "variants": {"colors": ["Midnight Black"], "sizes": ["XLR Dynamic Broadcast Capsule"]},
            "description": "Mikrofon dinamis kelas siaran hasil kolaborasi Elgato dan Lewitt Audio Austria. Pola polar cardioid terfokus menangkap vokal tebal dan mengeliminasi suara ketikan keyboard atau desah kipas PC di latar belakang."
        },
        {
            "id": "AUD-017",
            "name": "Razer Seiren Mini Ultra-Compact Condenser Microphone",
            "category": "Audio & Headset Gaming",
            "price": 649000, "originalPrice": 799000, "discountPercentage": 19,
            "rating": 4.8, "reviewCount": 890, "soldCount": 3400, "stock": 35, "isFlashSale": true, "badge": "Terlaris",
            "images": ["https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Classic Black", "Mercury White", "Quartz Pink"], "sizes": ["Ultra-Compact 14mm Capsule"]},
            "description": "Mikrofon USB mini ultra-kompak dengan pola penangkapan supercardioid super terarah. Menekan suara bising di sekitar ruangan, dilengkapi shockmount bawaan peredam getaran meja, dan pengaturan plug-and-play instan."
        },
        {
            "id": "AUD-018",
            "name": "SteelSeries Arena 7 2.1 Bluetooth Gaming Speakers with Subwoofer",
            "category": "Audio & Headset Gaming",
            "price": 4990000, "originalPrice": 5690000, "discountPercentage": 12,
            "rating": 4.9, "reviewCount": 95, "soldCount": 210, "stock": 7, "isFlashSale": false, "badge": "Baru",
            "images": ["https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Matte Black with 4-Zone RGB"], "sizes": ["2.1 System (Dual Satellites + 6.5\" Subwoofer)"]},
            "description": "Sistem speaker gaming 2.1 surround imersif dengan subwoofer 6.5 inci bertenaga bass menggelegar. Memiliki tweeter kubah sutra, driver woofer kerucut serat organik, dan pencahayaan reaktif RGB 4-zona yang merespons aksi di layar game."
        }
    ]

    # ---------------------------------------------------------
    # MONITOR & SETUP GAMING ADDITIONS (MON 5-16) -> 12 items
    # Total Monitor = 4 + 12 = 16
    # ---------------------------------------------------------
    new_monitors = [
        {
            "id": "MON-005",
            "name": "LG UltraGear 27GR95QE-B 27\" OLED 240Hz 0.03ms Gaming Monitor",
            "category": "Monitor & Setup Gaming",
            "price": 14499000, "originalPrice": 16500000, "discountPercentage": 12,
            "rating": 4.9, "reviewCount": 190, "soldCount": 420, "stock": 9, "isFlashSale": true, "badge": "Official Store",
            "images": ["https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Hexagon Backlight Black"], "sizes": ["27 Inch QHD (2560x1440) OLED 240Hz"]},
            "description": "Monitor gaming OLED 27 inci 1440p pertama di dunia dari LG dengan refresh rate 240Hz dan response time kilat 0.03ms (GtG). Rasio kontras tak hingga 1.500.000:1, gamut warna DCI-P3 98.5%, dan kompatibel NVIDIA G-SYNC."
        },
        {
            "id": "MON-006",
            "name": "Samsung Odyssey Neo G9 49\" Dual QHD 240Hz Mini-LED Curved Monitor",
            "category": "Monitor & Setup Gaming",
            "price": 25999000, "originalPrice": 29999000, "discountPercentage": 13,
            "rating": 5.0, "reviewCount": 75, "soldCount": 160, "stock": 5, "isFlashSale": false, "badge": "Official Store",
            "images": ["https://images.unsplash.com/photo-1547119957-637f8679db1e?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Glossy White Sci-Fi Odyssey"], "sizes": ["49 Inch 32:9 DQHD (5120x1440) 1000R Curvature"]},
            "description": "Monitor lengkung ultrawide 49 inci tercanggih Samsung dengan kelengkungan 1000R yang pas dengan pandangan mata manusia. Teknologi Quantum Matrix Quantum Mini-LED 2048 zona dimming lokal, HDR2000, 240Hz, dan CoreSync lighting."
        },
        {
            "id": "MON-007",
            "name": "ASUS TUF Gaming VG27AQ 27\" 2K QHD 165Hz IPS Gaming Monitor",
            "category": "Monitor & Setup Gaming",
            "price": 4350000, "originalPrice": 4999000, "discountPercentage": 13,
            "rating": 4.9, "reviewCount": 510, "soldCount": 1850, "stock": 20, "isFlashSale": false, "badge": "Terlaris",
            "images": ["https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Stealth Black TUF Armor"], "sizes": ["27 Inch WQHD (2560x1440) Fast IPS 165Hz"]},
            "description": "Monitor gaming favorit gamer PC kompetitif dengan panel IPS 2K 165Hz dan teknologi eksklusif ASUS ELMB Sync (Extreme Low Motion Blur) yang dapat aktif bersamaan dengan G-SYNC Compatible untuk menghilangkan ghosting sepenuhnya."
        },
        {
            "id": "MON-008",
            "name": "BenQ MOBIUZ EX2710Q 27\" 165Hz 1ms IPS Gaming Monitor treVolo",
            "category": "Monitor & Setup Gaming",
            "price": 5490000, "originalPrice": 6200000, "discountPercentage": 11,
            "rating": 4.9, "reviewCount": 180, "soldCount": 490, "stock": 12, "isFlashSale": false, "badge": "Official Store",
            "images": ["https://images.unsplash.com/photo-1547119957-637f8679db1e?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Metallic Gray with Orange Accent"], "sizes": ["27 Inch QHD (2560x1440) IPS 165Hz 1ms"]},
            "description": "Monitor gaming imersif dengan teknologi BenQ HDRi cerdas dan sistem audio terintegrasi 2.1 channel treVolo dengan subwoofer 5W internal. Menghadirkan warna akurat DCI-P3 95% dan perlindungan mata Eye-Care cerdas."
        },
        {
            "id": "MON-009",
            "name": "MSI MAG 274QRF QD E2 27\" Rapid IPS 180Hz Quantum Dot Monitor",
            "category": "Monitor & Setup Gaming",
            "price": 4790000, "originalPrice": 5490000, "discountPercentage": 13,
            "rating": 4.9, "reviewCount": 140, "soldCount": 380, "stock": 15, "isFlashSale": false, "badge": "Baru",
            "images": ["https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Dark Black MSI Gaming"], "sizes": ["27 Inch WQHD Rapid IPS 180Hz Quantum Dot"]},
            "description": "Monitor gaming bertenaga teknologi Quantum Dot dengan cakupan warna spektakuler 150% sRGB dan 98% DCI-P3. Panel Rapid IPS 180Hz refresh rate dengan response time 1ms GTG, port USB Type-C display 65W PD, dan KVM switch."
        },
        {
            "id": "MON-010",
            "name": "Gigabyte M27Q 27\" 170Hz 1440p SS IPS Gaming Monitor with KVM",
            "category": "Monitor & Setup Gaming",
            "price": 4190000, "originalPrice": 4750000, "discountPercentage": 12,
            "rating": 4.8, "reviewCount": 320, "soldCount": 1100, "stock": 16, "isFlashSale": false, "badge": "Terlaris",
            "images": ["https://images.unsplash.com/photo-1547119957-637f8679db1e?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Classic Matte Black"], "sizes": ["27 Inch Super Speed IPS QHD 170Hz"]},
            "description": "Monitor gaming produktivitas nomor 1 dengan fitur tombol fisik KVM built-in untuk mengontrol dua PC / laptop menggunakan satu set keyboard mouse. Refresh rate 170Hz, Super Speed IPS 0.5ms MPRT, dan 92% DCI-P3."
        },
        {
            "id": "MON-011",
            "name": "AOC 24G2SP 23.8\" 165Hz IPS 1ms Frameless Esports Monitor",
            "category": "Monitor & Setup Gaming",
            "price": 1999000, "originalPrice": 2450000, "discountPercentage": 18,
            "rating": 4.9, "reviewCount": 890, "soldCount": 3600, "stock": 28, "isFlashSale": true, "badge": "Terlaris",
            "images": ["https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Black with Red Gamer Accent"], "sizes": ["23.8 Inch Full HD 165Hz IPS 1ms"]},
            "description": "Monitor gaming esports 1080p paling laris di Indonesia dengan harga terjangkau. Panel IPS warna cerah 125% sRGB, 165Hz refresh rate bebas stutter, stand ergonomis yang bisa diatur ketinggian, tilt, dan putar pivot 90 derajat."
        },
        {
            "id": "MON-012",
            "name": "Elgato Key Light Air Professional Studio LED Panel WiFi",
            "category": "Monitor & Setup Gaming",
            "price": 2150000, "originalPrice": 2590000, "discountPercentage": 17,
            "rating": 4.9, "reviewCount": 210, "soldCount": 580, "stock": 16, "isFlashSale": false, "badge": "Official Store",
            "images": ["https://images.unsplash.com/photo-1507499739999-097706ad8914?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Pure White Opal Glass"], "sizes": ["1400 Lumens WiFi Desk Mount"]},
            "description": "Lampu studio siaran profesional berkekuatan 1400 Lumens dengan teknologi pencahayaan multi-lapis edge-lit yang nyaman di mata tanpa silau. Kontrol suhu warna (2900-7000K) dan tingkat kecerahan langsung via aplikasi PC atau Stream Deck."
        },
        {
            "id": "MON-013",
            "name": "Elgato Facecam Full HD 60FPS Uncompressed Studio Webcam",
            "category": "Monitor & Setup Gaming",
            "price": 2490000, "originalPrice": 2890000, "discountPercentage": 14,
            "rating": 4.8, "reviewCount": 170, "soldCount": 460, "stock": 14, "isFlashSale": false, "badge": "Official Store",
            "images": ["https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Matte Black"], "sizes": ["1080p60 Uncompressed Optical Glass Lens"]},
            "description": "Webcam khusus streamer dan pro-gaming dengan lensa optik Elgato Prime Lens f/2.4 24mm all-glass dan sensor Sony STARVIS CMOS. Menghasilkan rekaman video 1080p 60fps murni tanpa kompresi artefak dengan memori internal onboard."
        },
        {
            "id": "MON-014",
            "name": "BenQ ScreenBar Halo Wireless Monitor Light Bar with Backlight",
            "category": "Monitor & Setup Gaming",
            "price": 2690000, "originalPrice": 3100000, "discountPercentage": 13,
            "rating": 5.0, "reviewCount": 195, "soldCount": 540, "stock": 15, "isFlashSale": false, "badge": "Official Store",
            "images": ["https://images.unsplash.com/photo-1507499739999-097706ad8914?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Metallic Space Silver"], "sizes": ["Wireless Controller Edition (Curved/Flat Monitor)"]},
            "description": "Lampu bar monitor tercanggih dengan controller nirkabel putar presisi dan lampu latar ambient belakang 3-mode. Desain optik asimetris menerangi meja secara merata tanpa silau dan tanpa pantulan pada permukaan layar monitor."
        },
        {
            "id": "MON-015",
            "name": "Logitech Brio 4K Ultra HD Streaming Webcam with HDR",
            "category": "Monitor & Setup Gaming",
            "price": 2850000, "originalPrice": 3400000, "discountPercentage": 16,
            "rating": 4.8, "reviewCount": 310, "soldCount": 820, "stock": 12, "isFlashSale": true, "badge": "Terlaris",
            "images": ["https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Black Anodized Aluminum"], "sizes": ["4K Ultra HD 30fps / 1080p 60fps HDR"]},
            "description": "Webcam resolusi 4K Ultra HD profesional dengan teknologi RightLight 3 dan HDR otomatis dalam segala kondisi pencahayaan. Memiliki sudut pandang yang dapat disesuaikan (65, 78, atau 90 derajat) dan sensor inframerah pengenal wajah Windows Hello."
        },
        {
            "id": "MON-016",
            "name": "Elgato Stream Deck + Dial and Touch Strip Audio Controller",
            "category": "Monitor & Setup Gaming",
            "price": 3690000, "originalPrice": 4290000, "discountPercentage": 14,
            "rating": 5.0, "reviewCount": 130, "soldCount": 340, "stock": 10, "isFlashSale": false, "badge": "Baru",
            "images": ["https://images.unsplash.com/photo-1616469829941-c7200edec809?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Matte Black", "White Edition"], "sizes": ["8 LCD Keys + 4 Rotary Dials + Touch Strip"]},
            "description": "Pusat kendali audio dan broadcasting hibrida dengan 8 tombol LCD interaktif, strip sentuh dinamis, dan 4 rotary dial putar presisi 360 derajat. Mengontrol volume mixing channel game, musik, mic, dan efek suara secara real-time."
        }
    ]

    # ---------------------------------------------------------
    # KURSI & MEJA GAMING ADDITIONS (CHR 3-10) -> 8 items
    # Total Kursi & Meja = 2 + 8 = 10
    # ---------------------------------------------------------
    new_furniture = [
        {
            "id": "CHR-003",
            "name": "Corsair TC100 RELAXED Fabric Gaming Chair",
            "category": "Kursi & Meja Gaming",
            "price": 3490000, "originalPrice": 4100000, "discountPercentage": 15,
            "rating": 4.8, "reviewCount": 210, "soldCount": 580, "stock": 12, "isFlashSale": false, "badge": "Terlaris",
            "images": ["https://commons.wikimedia.org/wiki/Special:FilePath/Gaming_chair_1.jpg?width=800"],
            "variants": {"colors": ["Fabric Black/Anthracite", "Fabric Black/Gray"], "sizes": ["Relaxed Fit (Lebar Dudukan 54cm)"]},
            "description": "Kursi gaming ergonomis dengan kain fabric lembut berpori yang sejuk digunakan berjam-jam di iklim tropis. Memiliki dudukan lebar yang santai, sandaran yang dapat direbahkan hingga 160 derajat, dan bantal pinggang busa memori tebal."
        },
        {
            "id": "CHR-004",
            "name": "ASUS ROG Destrier Ergo Gaming Chair (Cyborg Exoskeleton)",
            "category": "Kursi & Meja Gaming",
            "price": 13990000, "originalPrice": 15999000, "discountPercentage": 13,
            "rating": 5.0, "reviewCount": 45, "soldCount": 90, "stock": 6, "isFlashSale": false, "badge": "Official Store",
            "images": ["https://commons.wikimedia.org/wiki/Special:FilePath/Gaming_chair_1.jpg?width=800"],
            "variants": {"colors": ["Cyberpunk Matte Black Exoskeleton"], "sizes": ["Full Ergonomic Mesh Body"]},
            "description": "Kursi gaming ergonomis futuristik bergaya exoskeleton cyborg dengan jaring mesh breathable berkekuatan tinggi. Dilengkapi panel akustik penangkal gema suara di kepala, armrest 360 derajat dengan elevasi khusus untuk mobile gaming, dan lumbar support multi-level."
        },
        {
            "id": "CHR-005",
            "name": "Secretlab TITAN Evo 2024 NEO Hybrid Leatherette",
            "category": "Kursi & Meja Gaming",
            "price": 7990000, "originalPrice": 9400000, "discountPercentage": 15,
            "rating": 4.9, "reviewCount": 350, "soldCount": 890, "stock": 14, "isFlashSale": true, "badge": "Official Store",
            "images": ["https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Stealth Black / Gold", "Royal Navy Blue", "Cyberpunk 2077 Edition"], "sizes": ["Regular (170-189cm)", "XL (181-205cm)"]},
            "description": "Kursi flagship Secretlab berbalut kulit sintetis NEO Hybrid 12x lebih tahan lama dibandingkan kulit PU biasa. Dilengkapi sistem penyangga pinggang 4-arah L-ADAPT, bantal kepala magnetis busa memori gel pendingin, dan recline 165 derajat."
        },
        {
            "id": "CHR-006",
            "name": "Noblechairs HERO Real Leather Gaming Chair Black Edition",
            "category": "Kursi & Meja Gaming",
            "price": 11500000, "originalPrice": 13200000, "discountPercentage": 13,
            "rating": 4.9, "reviewCount": 85, "soldCount": 190, "stock": 7, "isFlashSale": false, "badge": "Official Store",
            "images": ["https://commons.wikimedia.org/wiki/Special:FilePath/Gaming_chair_1.jpg?width=800"],
            "variants": {"colors": ["Real Leather Black Diamond Stitching"], "sizes": ["HERO Large Frame Capacity 150kg"]},
            "description": "Kursi gaming eksekutif mewah asal Jerman berlapis 100% kulit sapi asli (Real Leather). Rangka baja padat dengan dudukan busa dingin (cold-foam) berdensitas tinggi, lumbar support terintegrasi mekanis, dan roda poliuretan 60mm mulus."
        },
        {
            "id": "CHR-007",
            "name": "Herman Miller x Logitech G Embody Ergonomic Gaming Chair",
            "category": "Kursi & Meja Gaming",
            "price": 26500000, "originalPrice": 29900000, "discountPercentage": 11,
            "rating": 5.0, "reviewCount": 95, "soldCount": 210, "stock": 5, "isFlashSale": false, "badge": "Official Store",
            "images": ["https://commons.wikimedia.org/wiki/Special:FilePath/Gaming_chair_1.jpg?width=800"],
            "variants": {"colors": ["Cyan Back / Black Fabric", "Black On Black Stealth"], "sizes": ["Pixelated Support Matrix Fit 136kg"]},
            "description": "Mahakarya kolaborasi medis dan esports kelas tertinggi di dunia antara Herman Miller dan Logitech G. Menggunakan matriks piksel dinamis yang mendistribusikan tekanan berat badan secara merata, lapisan busa pendingin tembaga, dan garansi resmi 12 tahun."
        },
        {
            "id": "CHR-008",
            "name": "Secretlab MAGNUS Pro XL Sit-to-Stand Metal Gaming Desk",
            "category": "Kursi & Meja Gaming",
            "price": 14500000, "originalPrice": 16800000, "discountPercentage": 14,
            "rating": 5.0, "reviewCount": 110, "soldCount": 240, "stock": 6, "isFlashSale": false, "badge": "Official Store",
            "images": ["https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Signature Stealth Black Metal"], "sizes": ["XL 177cm (Panjang 177cm x Lebar 80cm)"]},
            "description": "Meja gaming elektrik sit-to-stand pertama di dunia dengan kolom suplai daya listrik terintegrasi di dalam kaki meja. Sasis baja murni berkekuatan 120kg, baki kabel magnetik penuh tersembunyi, motor ganda super senyap, dan permukaan alas Magpad magnetis."
        },
        {
            "id": "CHR-009",
            "name": "Eureka Ergonomic 60\" Electric Standing Gaming Desk RGB",
            "category": "Kursi & Meja Gaming",
            "price": 6890000, "originalPrice": 8200000, "discountPercentage": 16,
            "rating": 4.8, "reviewCount": 140, "soldCount": 360, "stock": 10, "isFlashSale": false, "badge": "Terlaris",
            "images": ["https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Carbon Fiber Texture Black"], "sizes": ["152cm x 70cm Dual Motor Electric"]},
            "description": "Meja gaming elektrik dengan sayap pencahayaan spektrum RGB reaktif musik di kedua sisi. Dilengkapi motor ganda tenang dengan panel kontrol digital 4 preset memori ketinggian, gantungan headphone ganda, dan lubang manajemen kabel tersembunyi."
        },
        {
            "id": "CHR-010",
            "name": "Cougar Mars Pro 150 Ergonomic Dual-Sided RGB Gaming Desk",
            "category": "Kursi & Meja Gaming",
            "price": 5490000, "originalPrice": 6500000, "discountPercentage": 15,
            "rating": 4.8, "reviewCount": 90, "soldCount": 230, "stock": 9, "isFlashSale": false, "badge": "Official Store",
            "images": ["https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&auto=format&fit=crop&q=80"],
            "variants": {"colors": ["Carbon Black Matte Finish"], "sizes": ["Panjang 150cm x Lebar 77cm (3 Ketinggian Manual)"]},
            "description": "Meja gaming ergonomis berdaya tahan beban 150kg dengan rangka baja tebal dan lapisan serat karbon anti-gores. Memiliki I/O hub bawaan dengan port USB 3.0, port USB Type-C display monitor, jack audio 3.5mm, dan efek pencahayaan strip RGB sinkronisasi motherboard."
        }
    ]

    # Combine all items ensuring no duplicate IDs
    all_additions = new_con + new_peripherals + new_audio + new_monitors + new_furniture
    for item in all_additions:
        if item['id'] not in existing_by_id:
            items.append(item)
            existing_by_id[item['id']] = item

    # =========================================================================
    # AUTHENTIC REAL-WORLD PHOTOGRAPHY OVERRIDES
    # Menggantikan render 3D / AI abstrak dengan foto DSLR & unboxing perangkat fisik asli
    # =========================================================================
    AUTHENTIC_PHOTO_OVERRIDES = {
        # --- CPUs (Prosesor Intel & AMD Fisik) ---
        "CPU-001": ["https://commons.wikimedia.org/wiki/Special:FilePath/Intel%20i9-14900KF%20CPU.jpg?width=800"],
        "CPU-002": ["https://commons.wikimedia.org/wiki/Special:FilePath/AMD%20Ryzen%205%207600%20top%20IMGP6773%20smial%20wp.jpg?width=800"],
        "CPU-003": ["https://commons.wikimedia.org/wiki/Special:FilePath/2023%20Intel%20Core%20i7%2012700KF%20(5).jpg?width=800"],
        "CPU-004": ["https://commons.wikimedia.org/wiki/Special:FilePath/AMD%20Ryzen%207%201800X.jpg?width=800"],
        "CPU-005": ["https://commons.wikimedia.org/wiki/Special:FilePath/Intel%20CPU%20Core%20i7%2012700K%20Alder%20Lake%20bottom.jpg?width=800"],
        "CPU-006": ["https://commons.wikimedia.org/wiki/Special:FilePath/AMD%20Ryzen%209%207900X.jpg?width=800"],
        "CPU-007": ["https://commons.wikimedia.org/wiki/Special:FilePath/Intel%20CPU%20Core%20i7%202600K%20Sandy%20Bridge%20perspective.jpg?width=800"],
        "CPU-008": ["https://commons.wikimedia.org/wiki/Special:FilePath/AMD%20Ryzen%205%202600%20(39851733273).jpg?width=800"],

        # --- GPUs (Kartu Grafis ASUS, MSI, Gigabyte, ZOTAC, Sapphire) ---
        "GPU-001": ["https://commons.wikimedia.org/wiki/Special:FilePath/Asus_Strix_RTX_4090.jpg?width=800"],
        "GPU-002": ["https://commons.wikimedia.org/wiki/Special:FilePath/MSI_GeForce_RTX_3070_VENTUS_3X_OC.jpg?width=800"],
        "GPU-003": ["https://commons.wikimedia.org/wiki/Special:FilePath/Gigabyte_GeForce_RTX_3090_Eagle_OC_24G,_24576_MiB_GDDR6X_Front_20201114_DSC5880.jpg?width=800"],
        "GPU-004": ["https://commons.wikimedia.org/wiki/Special:FilePath/Zotac_GeForce_RTX_3060_12GB_VRAM_LHR_video_card.jpg?width=800"],
        "GPU-005": ["https://commons.wikimedia.org/wiki/Special:FilePath/Asus_Strix_RTX_4090_operational.jpg?width=800"],
        "GPU-006": ["https://commons.wikimedia.org/wiki/Special:FilePath/Size_comparison_between_RTX_3090_and_RTX_4090.jpg?width=800"],
        "GPU-007": ["https://commons.wikimedia.org/wiki/Special:FilePath/Sapphire%20AMD%20Radeon%20RX%207900%20XTX.jpg?width=800"],
        "GPU-008": ["https://commons.wikimedia.org/wiki/Special:FilePath/Amd-radeon-rx6800xt-from2020year-front.jpg?width=800"],

        # --- Motherboards (Papan Utama ROG, MSI, TUF, AORUS, ASRock) ---
        "MBO-001": ["https://commons.wikimedia.org/wiki/Special:FilePath/2023%20P%C5%82yta%20g%C5%82%C3%B3wna%20Asus%20ROG%20STRIX%20Z690-A%20GAMING%20WIFI.jpg?width=800"],
        "MBO-002": ["https://commons.wikimedia.org/wiki/Special:FilePath/Asus%20ROG%20Strix%20Z390-H%20motherboard.JPG?width=800"],
        "MBO-003": ["https://commons.wikimedia.org/wiki/Special:FilePath/Asus-ROG-Strix-Z390-F-Gaming-Motherboard%2020201120%20DSC6025.jpg?width=800"],
        "MBO-004": ["https://commons.wikimedia.org/wiki/Special:FilePath/GIGABYTE%20P55-UD6%20Motherboard%20Unboxed.jpg?width=800"],
        "MBO-005": ["https://commons.wikimedia.org/wiki/Special:FilePath/2023%20P%C5%82yta%20g%C5%82%C3%B3wna%20ASRock%20A320M-DVS.jpg?width=800"],
        "MBO-006": ["https://commons.wikimedia.org/wiki/Special:FilePath/Supermicro%20-%20X11SAE%20%E2%80%93%20CeBIT%202016%2001.jpg?width=800"],

        # --- RAM (Modul Memori Fisik DDR4 / DDR5) ---
        "RAM-001": ["https://commons.wikimedia.org/wiki/Special:FilePath/2023%20Pami%C4%99ci%20Corsair%20Vengeance%20RGB.jpg?width=800"],
        "RAM-002": ["https://commons.wikimedia.org/wiki/Special:FilePath/Tridentz%20red%20RAM.JPG?width=800"],
        "RAM-003": ["https://commons.wikimedia.org/wiki/Special:FilePath/16%20GiB-DDR4-RAM-Riegel%20RAM019FIX%20Small%20Crop%2090%20PCNT.png?width=800"],
        "RAM-004": ["https://commons.wikimedia.org/wiki/Special:FilePath/2*8Go%20DDR4%20Corsair%20-%202018-05-08.jpg?width=800"],
        "RAM-005": ["https://commons.wikimedia.org/wiki/Special:FilePath/DDR5%20SDRAM%20IMGP6304%20smial%20wp.jpg?width=800"],
        "RAM-006": ["https://commons.wikimedia.org/wiki/Special:FilePath/Viper%20DDR4%20Ram%20-%203004.png?width=800"],

        # --- SSD & NVMe Storage (Modul M.2 2280 Asli) ---
        "SSD-001": ["https://commons.wikimedia.org/wiki/Special:FilePath/Samsung%20980%20PRO%20PCIe%204.0%20NVMe%20SSD%201TB-top%20PNr%C2%B00915.jpg?width=800"],
        "SSD-002": ["https://commons.wikimedia.org/wiki/Special:FilePath/Samsung%20980%20PRO%20PCIe%204.0%20NVMe%20SSD%201TB-bottom%20PNr%C2%B00916.jpg?width=800"],
        "SSD-003": ["https://commons.wikimedia.org/wiki/Special:FilePath/2017%20Dysk%20SSD%20Plextor%20M8Pe(Y)%20256GB.jpg?width=800"],
        "SSD-004": ["https://commons.wikimedia.org/wiki/Special:FilePath/256GB%202230%20NVME%20SSD%201.jpg?width=800"],
        "SSD-005": ["https://commons.wikimedia.org/wiki/Special:FilePath/256GB%202230%20NVME%20SSD%20%2B%20256GB%20NGFF%20SSD.jpg?width=800"],
        "SSD-006": ["https://commons.wikimedia.org/wiki/Special:FilePath/Samsung%20980%20PRO%20PCIe%204.0%20NVMe%20SSD%201TB-top%20PNr%C2%B00915.jpg?width=800"],

        # --- Power Supply Units (Modular ATX PSU Fisik) ---
        "PSU-001": ["https://commons.wikimedia.org/wiki/Special:FilePath/Full%20modular%20ATX%20power%20supply%20unit.jpg?width=800"],
        "PSU-002": ["https://commons.wikimedia.org/wiki/Special:FilePath/Kolink-Continuum-1200W-Netzteil%20Anschl%C3%BCsse%2020201120%20DSC6061.jpg?width=800"],
        "PSU-003": ["https://commons.wikimedia.org/wiki/Special:FilePath/Kolink-Continuum-1200W-Netzteil%20R%C3%BCckseite%2020201120%20DSC6104.jpg?width=800"],
        "PSU-004": ["https://commons.wikimedia.org/wiki/Special:FilePath/Modular%20vs%20non-modular%20PSU.JPG?width=800"],
        "PSU-005": ["https://commons.wikimedia.org/wiki/Special:FilePath/CMPSU-620HX.jpg?width=800"],
        "PSU-006": ["https://commons.wikimedia.org/wiki/Special:FilePath/ATX%20Computer%20power%20supply%20unit.jpg?width=800"],

        # --- Casing PC (Casing Fisik Lian Li, Kolink, Tempered Glass) ---
        "CSE-001": ["https://commons.wikimedia.org/wiki/Special:FilePath/Lian%20Li%20O11%20Dynamic%20Evo%20XL%20(der8auer%20edition)%20HOF1974-HDR%20RAW-Export%20000210%20CENS.png?width=800"],
        "CSE-002": ["https://commons.wikimedia.org/wiki/Special:FilePath/Lian%20Li%20O11%20Dynamic%20XL%2020190601.jpg?width=800"],
        "CSE-003": ["https://commons.wikimedia.org/wiki/Special:FilePath/PC-Geh%C3%A4use%20Kolink%20Observatory%20RGB%20Midi-Tower%2020201120%20DSC6134.jpg?width=800"],
        "CSE-004": ["https://commons.wikimedia.org/wiki/Special:FilePath/ATX%20computer%20case%20-%20left%20-%202018-05-18.jpg?width=800"],
        "CSE-005": ["https://commons.wikimedia.org/wiki/Special:FilePath/Lian%20Li%20O11%20Dynamic%20XL%2020190601.jpg?width=800"],
        "CSE-006": ["https://commons.wikimedia.org/wiki/Special:FilePath/Computer%20case%20-%20Full%20Tower.jpg?width=800"],

        # --- Pendingin CPU & Kipas (AIO Liquid & Dual-Tower Air Cooler) ---
        "CLR-001": ["https://commons.wikimedia.org/wiki/Special:FilePath/Corsair%20H100i%20240mm%20CPU%20cooler.%20On%20MSI%20Z590%20Torpedo%20motherboard.%20(51987363353).jpg?width=800"],
        "CLR-002": ["https://commons.wikimedia.org/wiki/Special:FilePath/Cooler%20Master%20ML240P%20series%2020190601.jpg?width=800"],
        "CLR-003": ["https://commons.wikimedia.org/wiki/Special:FilePath/NH-D15%20with%20black%20fans.jpg?width=800"],
        "CLR-004": ["https://commons.wikimedia.org/wiki/Special:FilePath/NH-D15%20with%20classic%20fans.jpg?width=800"],
        "CLR-005": ["https://commons.wikimedia.org/wiki/Special:FilePath/2023%20Ch%C5%82odzenie%20procesora%20Endorfy%20Fera%205%20ARGB.jpg?width=800"],
        "CLR-006": ["https://commons.wikimedia.org/wiki/Special:FilePath/2023%20Ch%C5%82odzenie%20procesora%20Jonsbo%20CR-1100%20ARGB.jpg?width=800"],

        # --- Konsol, Laptop Gaming & Kontroler ---
        "CON-009": ["https://commons.wikimedia.org/wiki/Special:FilePath/Xbox%20Series%20X%202.jpg?width=800"],
        "CON-010": ["https://commons.wikimedia.org/wiki/Special:FilePath/Xbox%20Series%20S%20with%20controller.jpg?width=800"],
        "CON-011": ["https://commons.wikimedia.org/wiki/Special:FilePath/PlayStation%20Portal.jpg?width=800"],
        "CON-013": ["https://commons.wikimedia.org/wiki/Special:FilePath/The%20XBox%20elite%20controller%20(18849729446).jpg?width=800"],
        "CON-017": ["https://commons.wikimedia.org/wiki/Special:FilePath/MSI%20Gaming%20Laptop%20on%20wood%20floor.jpg?width=800"],
        "CON-018": ["https://commons.wikimedia.org/wiki/Special:FilePath/HP%20Victus%2015%20gaming%20laptop%20side%20view.jpg?width=800"],

        # --- Kursi & Ergonomi Gaming ---
        "CHR-001": ["https://commons.wikimedia.org/wiki/Special:FilePath/Microsoft%20Taiwan%20booth%20and%20ASUS%20ROG%20gaming%20chair%2020231125.jpg?width=800"],
        "CHR-003": ["https://commons.wikimedia.org/wiki/Special:FilePath/Aorus%20gaming%20chair%20on%20the%20stage%2020230205.jpg?width=800"],
        "CHR-004": ["https://commons.wikimedia.org/wiki/Special:FilePath/Sihoo%20M57%20mesh%20office%20chair%2003.jpg?width=800"],
        "CHR-006": ["https://commons.wikimedia.org/wiki/Special:FilePath/Gaming_chair_1.jpg?width=800"],
        "CHR-007": ["https://commons.wikimedia.org/wiki/Special:FilePath/Sihoo%20M57%20mesh%20office%20chair%2003.jpg?width=800"],

        # --- Mikrofon & Audio Penyiaran ---
        "AUD-014": ["https://commons.wikimedia.org/wiki/Special:FilePath/AKG%20C214%20condenser%20microphone%20with%20H85%20shock%20mount.jpg?width=800"],
        "AUD-015": ["https://commons.wikimedia.org/wiki/Special:FilePath/Studio%20microphone%20with%20pop-shield%20crop.jpg?width=800"],
        "AUD-016": ["https://commons.wikimedia.org/wiki/Special:FilePath/Shure_SM7.jpg?width=800"],

        # --- Mouse & Keyboard Fisik ---
        "MOU-001": ["https://commons.wikimedia.org/wiki/Special:FilePath/2023%20Mysz%20komputerowa%20Logitech%20G903%20Lightspeed.jpg?width=800"],
        "MOU-002": ["https://commons.wikimedia.org/wiki/Special:FilePath/Razer_DeathAdder_Elite-front_oblique-ar_16to10-fs_PNr%C2%B00465.jpg?width=800"],
        "MOU-007": ["https://commons.wikimedia.org/wiki/Special:FilePath/G502_Hero.jpg?width=800"],
        "KBD-001": ["https://commons.wikimedia.org/wiki/Special:FilePath/2018%20Bay%20Area%20Mechanical%20Keyboard%20Meetup%20(44130269470).jpg?width=800"],
        "KBD-002": ["https://commons.wikimedia.org/wiki/Special:FilePath/2018%20Bay%20Area%20Mechanical%20Keyboard%20Meetup%20(31007785067).jpg?width=800"]
    }

    for item in items:
        if item["id"] in AUTHENTIC_PHOTO_OVERRIDES:
            item["images"] = AUTHENTIC_PHOTO_OVERRIDES[item["id"]]

    return items

def build_data_js():
    items = get_complete_140_catalog()
    
    js_content = """/**
 * ============================================================
 * NEXUS GAMING - MOCK DATABASE & STATIC CONFIGURATION
 * Khusus Brand Gaming Gear & Komponen Rakit PC Terkenal Dunia (140 Produk Resmi)
 * CPU, GPU, Motherboard, RAM, SSD, PSU, Case, Cooling, Konsol, Periferal, Audio, Monitor & Furniture
 * ============================================================
 */

const INITIAL_PRODUCTS = """
    
    js_content += json.dumps(items, indent=2, ensure_ascii=False)
    js_content += """;

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
"""

    with open("js/data.js", "w", encoding="utf-8") as f:
        f.write(js_content)
    
    print(f"Successfully wrote {len(items)} products to js/data.js!")

if __name__ == "__main__":
    build_data_js()
