/**
 * ============================================================
 * MAISON VENDÔME & AURA - MASTERPIECE CATALOG & ARCHIVES
 * High-End Luxury Database: Haute Horlogerie, Joaillerie & Leather
 * ============================================================
 */

const LUXURY_COLLECTIONS = [
  { id: 'all', name: 'All Masterpieces', french: 'Toutes les Créations' },
  { id: 'horlogerie', name: 'Haute Horlogerie', french: 'Haute Horlogerie' },
  { id: 'joaillerie', name: 'Haute Joaillerie', french: 'Haute Joaillerie' },
  { id: 'maroquinerie', name: 'Maroquinerie d\'Art', french: 'Maroquinerie d\'Art' },
  { id: 'parfumerie', name: 'Haute Parfumerie & Objets', french: 'Haute Parfumerie & Objets' }
];

const LUXURY_PRODUCTS = [
  {
    id: 'HH-01',
    name: 'The Celestial Tourbillon No. 07',
    category: 'Haute Horlogerie',
    categoryId: 'horlogerie',
    collection: 'Collection Constellation 2026',
    edition: 'Numbered Allocation: No. 07 / 25 Globally',
    isPieceUnique: false,
    isFeatured: true,
    priceUSD: 145000,
    priceEUR: 138000,
    priceIDR: 2320000000,
    provenance: 'Vallée de Joux, Suisse',
    leadTime: 'Immediate White-Glove Vault Dispatch',
    materials: ['950 Platinum Case', 'Gibeon Meteorite Dial', 'Blued Titanium Cage', 'Hand-Stitched Alligator Strap'],
    description: 'An architectural marvel of micro-mechanics. The Celestial Tourbillon features an authentic extraterrestrial Gibeon meteorite dial with distinct Widmanstätten crystalline structures, paired with a 60-second flying tourbillon carriage that defies Earth\'s gravitational pull.',
    specifications: {
      caliber: 'Calibre MV-890 Manufacture Mechanical Manual-Wind',
      frequency: '21,600 vph (3 Hz)',
      powerReserve: '72 Hours Twin-Barrel Reserve',
      caseDiameter: '41.5 mm, Thickness 10.8 mm',
      waterResistance: '30 Meters (3 ATM)',
      certification: 'Poinçon de Genève Certified Hallmark'
    },
    images: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'HH-02',
    name: 'Chronographe Monopoussoir Rose Gold',
    category: 'Haute Horlogerie',
    categoryId: 'horlogerie',
    collection: 'Vendôme Héritage 1894',
    edition: 'Strictly Limited to 15 Exemplars',
    isPieceUnique: false,
    isFeatured: true,
    priceUSD: 88000,
    priceEUR: 84000,
    priceIDR: 1410000000,
    provenance: 'Genève, Suisse',
    leadTime: 'Immediate White-Glove Vault Dispatch',
    materials: ['18K Fairmined Rose Gold', 'Grand Feu Enamel Dial', 'Column Wheel Mechanism', 'Sapphire Exhibition Back'],
    description: 'Tribute to classical French watchmaking. The single-pusher chronograph operates through a column wheel meticulously chamfered with anglage by master artisans. The Grand Feu enamel dial was fired repeatedly at 800°C to achieve timeless, unblemished alabaster radiance.',
    specifications: {
      caliber: 'Calibre MV-412 Monopusher Column-Wheel Chronograph',
      frequency: '28,800 vph (4 Hz)',
      powerReserve: '58 Hours Power Reserve',
      caseDiameter: '40.0 mm, Thickness 11.2 mm',
      waterResistance: '50 Meters (5 ATM)',
      certification: 'Chronometer Certified (COSC / Observatoire de Besançon)'
    },
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'HH-03',
    name: 'Squelette Perpetual Calendar Platinum',
    category: 'Haute Horlogerie',
    categoryId: 'horlogerie',
    collection: 'Atelier Complications Rares',
    edition: 'Pièce Numérotée No. 03 / 08',
    isPieceUnique: false,
    isFeatured: false,
    priceUSD: 195000,
    priceEUR: 185000,
    priceIDR: 3120000000,
    provenance: 'Vallée de Joux, Suisse',
    leadTime: '2 Weeks Bespoke Atelier Assembly & Engraving',
    materials: ['Platinum 950', 'Openworked Sapphire Crystal', 'Lapis Lazuli Moonphase', 'Black Ceramic Rotor'],
    description: 'An openworked masterpiece displaying the Gregorian calendar accurately until the year 2100 without manual intervention. Every bridge, lever, and wheel is hand-beveled with Gentian wood pegs and mirror-polished to optical perfection.',
    specifications: {
      caliber: 'Calibre MV-990 Ultra-Thin Perpetual Movement',
      frequency: '19,800 vph',
      powerReserve: '65 Hours Constant-Force Reserve',
      caseDiameter: '42.0 mm, Thickness 9.9 mm',
      waterResistance: '30 Meters (3 ATM)',
      certification: 'Poinçon de Genève Seal of Excellence'
    },
    images: [
      'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'HJ-01',
    name: 'Solstice Emerald & Diamond Collier',
    category: 'Haute Joaillerie',
    categoryId: 'joaillerie',
    collection: 'Jardins de Vendôme',
    edition: 'Pièce Unique: No. 01 / 01 Worldwide',
    isPieceUnique: true,
    isFeatured: true,
    priceUSD: 240000,
    priceEUR: 228000,
    priceIDR: 3840000000,
    provenance: 'Place Vendôme, Paris',
    leadTime: 'Accompanied by Master Gemologist Hand Delivery',
    materials: ['14.8ct Muzo Colombian Emerald', '32.5ct D-Flawless Diamond Pavé', 'Platinum 950 Mount', 'Ethical Fairmined Certification'],
    description: 'A singular creation that celebrates nature\'s most precious green fire. At its heart lies an untreated 14.8-carat Muzo emerald with velvety saturation, suspended from a flexible platinum collar cascading with marquise and brilliant-cut diamonds of certified D-Flawless clarity.',
    specifications: {
      centerStone: '14.82 ct Colombian Emerald (Certified Muzo Mine, Minor Oil)',
      diamondAccent: '32.5 ct Total Weight (D-F Color, IF-VVS1 Clarity)',
      metalWeight: '128 grams 950 Solid Platinum',
      craftsmanshipTime: '480 Hours of Master Goldsmith Benchwork',
      certification: 'SSEF & Gübelin Gemological Reports Included'
    },
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'HJ-02',
    name: 'Étoile Royale Kashmir Sapphire Ring',
    category: 'Haute Joaillerie',
    categoryId: 'joaillerie',
    collection: 'Trésors de la Couronne',
    edition: 'Pièce Unique: No. 01 / 01 Worldwide',
    isPieceUnique: true,
    isFeatured: true,
    priceUSD: 115000,
    priceEUR: 109000,
    priceIDR: 1840000000,
    provenance: 'Place Vendôme, Paris',
    leadTime: 'Immediate White-Glove Vault Dispatch',
    materials: ['8.52ct Royal Blue Kashmir Sapphire', 'Shield-Cut Diamond Trilliant Shoulders', 'Platinum 950 Setting'],
    description: 'A gemstone of mythological rarity. This unheated 8.52-carat sapphire hails from the historic mines of Kashmir, exhibiting the coveted velvety cornflower-blue luminescence. Flanked by two custom shield-cut diamonds on an invisible platinum gallery.',
    specifications: {
      centerStone: '8.52 ct Natural Unheated Kashmir Sapphire',
      sideDiamonds: '2.40 ct Shield-Cut Diamonds (D Color, VVS1)',
      ringSize: 'Bespoke Sizing upon Acquisition (Complimentary)',
      certification: 'Bellerophon & GIA Origin Certificates'
    },
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'HJ-03',
    name: 'Cascade de Diamants Earrings',
    category: 'Haute Joaillerie',
    categoryId: 'joaillerie',
    collection: 'Lumières Nocturnes',
    edition: 'Limited Allocation: 5 Pairs Globally',
    isPieceUnique: false,
    isFeatured: false,
    priceUSD: 75000,
    priceEUR: 71000,
    priceIDR: 1200000000,
    provenance: 'Place Vendôme, Paris',
    leadTime: 'Immediate White-Glove Vault Dispatch',
    materials: ['18.2ct Baguette & Pear Diamonds', '18K Fairmined White Gold', 'Articulated Chandelier Framework'],
    description: 'Fluid diamond chandeliers designed to sway in harmony with feminine grace. Articulated in five cascading tiers, alternating between custom-cut tapered baguettes and luminous pear-shaped drops that capture ambient candlelight.',
    specifications: {
      totalCarat: '18.25 ct (E-F Color, VVS Clarity)',
      dropLength: '62 mm Articulated Suspension',
      claspType: 'Patented Secure French Alpa Clasp',
      certification: 'Maison Vendôme Certificate of Provenance'
    },
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'MA-01',
    name: 'Le Grand Voyageur Alligator Weekender',
    category: 'Maroquinerie d\'Art',
    categoryId: 'maroquinerie',
    collection: 'Atelier Maroquinerie d\'Exception',
    edition: 'Bespoke Order: 8 Pieces Annually',
    isPieceUnique: false,
    isFeatured: true,
    priceUSD: 42000,
    priceEUR: 40000,
    priceIDR: 672000000,
    provenance: 'Lyon & Paris, France',
    leadTime: '3 Weeks Hand-Stitching & Monogramming',
    materials: ['Porosus Crocodile Leather (CITES Certified)', '24K Gold-Plated Solid Brass Hardware', 'Goat Suede Chevre Lining'],
    description: 'The pinnacle of French luggage artistry. Constructed from hand-selected Mississippiensis and Porosus skins buffed to an agate stone glaze. Fully saddle-stitched by hand with waxed linen thread using two needles simultaneously—a craft requiring over 70 hours per bag.',
    specifications: {
      dimensions: '52 x 32 x 24 cm (Cabin Luggage Approved)',
      hardware: 'Hand-Milled Solid Brass with 24K Hard Gold PVD',
      interior: 'Divided Compartments, Padded Laptop Sleeve, Vault Padlock',
      personalization: 'Bespoke Hot-Stamped Monogram Included'
    },
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'MA-02',
    name: 'Bespoke Saffiano Briefcase No. 12',
    category: 'Maroquinerie d\'Art',
    categoryId: 'maroquinerie',
    collection: 'Ligne Ambassadeur',
    edition: 'Limited Allocation: 20 Pieces',
    isPieceUnique: false,
    isFeatured: false,
    priceUSD: 18500,
    priceEUR: 17500,
    priceIDR: 296000000,
    provenance: 'Paris, France',
    leadTime: 'Immediate White-Glove Vault Dispatch',
    materials: ['Full-Grain Calfskin Leather', 'Titanium Lock Mechanism', 'French Silk Twill Jacquard Lining'],
    description: 'Structured elegance for the modern sovereign. Hand-formed wooden structure wrapped in vegetable-tanned full-grain leather that will develop a rich, luminous patina over decades. Engineered with a precision numeric lock crafted by Swiss safe technicians.',
    specifications: {
      dimensions: '42 x 30 x 9 cm',
      lock: 'Dual-Digit Mechanical Titanium Tumbler',
      capacity: 'Accommodates 16" MacBook Pro and Document Dossiers',
      craftsmanship: 'Hand-Burnished Waxed Edge Finishing'
    },
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'HP-01',
    name: 'Oud Impérial Extrait Rare - Flacon Baccarat',
    category: 'Haute Parfumerie & Objets',
    categoryId: 'parfumerie',
    collection: 'Élixirs de la Nuit',
    edition: 'Limited Allocation: 50 Crystal Decanters',
    isPieceUnique: false,
    isFeatured: true,
    priceUSD: 9800,
    priceEUR: 9300,
    priceIDR: 156000000,
    provenance: 'Grasse & Baccarat, France',
    leadTime: 'Immediate White-Glove Vault Dispatch',
    materials: ['50-Year Wild Assam Agarwood', 'Centifolia Rose de Mai', 'Hand-Blown Baccarat Crystal Flacon', '24K Gold Leaf Inlay'],
    description: 'An olfactive jewel distilled from 50-year-aged wild agarwood harvested from private protected reserves in Upper Assam, matured in French oak casks and framed by hand-harvested Grasse Centifolia roses. Presented in a custom hand-cut Baccarat crystal decanter with gold stopper.',
    specifications: {
      concentration: '42% Pure Extrait de Parfum',
      volume: '100 ml / 3.4 fl. oz.',
      bottleCraft: 'Numbered Mouth-Blown Lead Crystal by Master Glassmakers',
      boxPresentation: 'Handmade Lacquered Macassar Ebony Coffret'
    },
    images: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'HP-02',
    name: 'Solarium Obsidian Mechanical Clock',
    category: 'Haute Parfumerie & Objets',
    categoryId: 'parfumerie',
    collection: 'Sculptures Cinétiques',
    edition: 'Numbered Allocation: No. 04 / 10',
    isPieceUnique: false,
    isFeatured: false,
    priceUSD: 65000,
    priceEUR: 62000,
    priceIDR: 1040000000,
    provenance: 'Genève, Suisse',
    leadTime: '4 Weeks Bespoke Calibration & Delivery',
    materials: ['Solid Volcanic Obsidian Base', 'Gold-Plated Brass Gearing', 'Constant-Force Escapement', 'Hand-Blown Glass Bell'],
    description: 'A monumental table sculpture that measures the passage of cosmic time. Carved from a monolithic block of Mexican volcanic sheen obsidian, hosting an open mechanical movement with an 8-day power reserve and a planetary orbital second indicator.',
    specifications: {
      movement: 'Calibre Horloge Table MV-8D Mechanical 8-Day',
      dimensions: '38 cm Height, 24 cm Diameter, Weight 16.5 kg',
      escapement: 'Audible Graham Deadbeat Escapement with Invar Pendulum',
      dome: 'Mouth-Blown Borosilicate Acoustically Treated Cloche'
    },
    images: [
      'https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'HJ-04',
    name: 'Diadème Céleste Diamond Tiara',
    category: 'Haute Joaillerie',
    categoryId: 'joaillerie',
    collection: 'Héritage Souverain',
    edition: 'Pièce Unique: No. 01 / 01 Worldwide',
    isPieceUnique: true,
    isFeatured: false,
    priceUSD: 310000,
    priceEUR: 295000,
    priceIDR: 4960000000,
    provenance: 'Place Vendôme, Paris',
    leadTime: 'Private Armed Security Escort Delivery',
    materials: ['42.0ct Diamonds (D-E / VVS)', 'Solid Platinum 950 Framework', 'Transformable into Necklace and Brooch'],
    description: 'A transformative crown that can be metamorphosed into an evening rivière necklace and two independent brooches through hidden platinum screw keys. Inspired by 19th-century imperial court heirlooms with laurel leaf motifs.',
    specifications: {
      diamonds: '42.15 ct Total (Brilliant, Rose-Cut & Baguette)',
      transformability: '3 Distinct Modular Configurations',
      boxPresentation: 'Hand-Crafted French Morocco Leather Imperial Case',
      certification: 'GIA Diamond Dossiers for All Center Gems'
    },
    images: [
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'HH-04',
    name: 'Heure Mystérieuse Floating Dial',
    category: 'Haute Horlogerie',
    categoryId: 'horlogerie',
    collection: 'Illusions Optiques',
    edition: 'Limited Allocation: 12 Exemplars',
    isPieceUnique: false,
    isFeatured: false,
    priceUSD: 112000,
    priceEUR: 106000,
    priceIDR: 1792000000,
    provenance: 'Vallée de Joux, Suisse',
    leadTime: 'Immediate White-Glove Vault Dispatch',
    materials: ['18K White Gold', 'Double Sapphire Crystal Discs', 'Bagutte Diamond Bezel', 'Onyx Crown Inlay'],
    description: 'The illusion of hands floating in empty space. The hour and minute hands are affixed to transparent sapphire discs driven by an invisible peripheral gear train hidden within the white gold bezel, creating the sublime feeling of pure time suspended in void.',
    specifications: {
      caliber: 'Calibre MV-600 Mystery Movement with Peripheral Rotor',
      frequency: '28,800 vph',
      powerReserve: '48 Hours Power Reserve',
      caseDiameter: '39.5 mm, Thickness 8.8 mm',
      gemsetting: '44 Baguette-Cut Diamonds (4.20 ct) on Bezel'
    },
    images: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop'
    ]
  }
];
