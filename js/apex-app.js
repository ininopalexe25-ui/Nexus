/**
 * ============================================================
 * NEXUS APEX // BATTLESTATION ATELIER - APPLICATION ENGINE
 * High-End Luxury Gaming Hardware SPA with Liquid Glass UI,
 * Retro-Futuristic 3D Elements, Hardware Carousel, Community & Download CTA
 * Powered by INITIAL_PRODUCTS (140 Official Hardware Masterpieces)
 * ============================================================
 */

(function () {
  'use strict';

  // --- STORAGE KEYS ---
  const STORAGE_KEYS = {
    CART: 'nexus_apex_cart_v1',
    WISHLIST: 'nexus_apex_wishlist_v1',
    CURRENCY: 'nexus_apex_currency_v1',
    MEMBERSHIP: 'nexus_apex_membership_v1',
    PROMO: 'nexus_apex_promo_v1'
  };

  // --- EXCHANGE RATES ---
  const EXCHANGE_RATES = {
    IDR: 1,
    USD: 1 / 16000,
    EUR: 1 / 17200
  };

  // --- PROMO CODES ---
  const PROMO_CODES = {
    'HEMAT10': { type: 'percent', value: 0.10, desc: 'Privilege Allocation: 10% Sovereign Rebate' },
    'GRATISONGKIR': { type: 'shipping', value: 0, desc: 'White-Glove Vault Transit Complimentary' }
  };

  // --- CATEGORY TAXONOMY ---
  const APEX_COLLECTIONS = [
    { id: 'all', name: 'All Masterpieces', french: 'Toutes les Créations' },
    { id: 'Komponen Rakit PC', name: 'Komponen Rakit PC', french: 'Composants Atelier' },
    { id: 'PC & Konsol Gaming', name: 'PC & Konsol Gaming', french: 'Systèmes & Consoles' },
    { id: 'Keyboard & Mouse Gaming', name: 'Keyboard & Mouse', french: 'Périphériques' },
    { id: 'Audio & Headset Gaming', name: 'Audio & Headset', french: 'Haute Acoustique' },
    { id: 'Monitor & Setup Gaming', name: 'Monitor & Displays', french: 'Écrans & Moniteurs' },
    { id: 'Kursi & Meja Gaming', name: 'Kursi & Meja', french: 'Mobilier Ergonomique' }
  ];

  // --- 3D SHOWCASE HALO IDS ---
  const HALO_SHOWCASE_IDS = [
    'GPU-001', // ASUS ROG Strix RTX 4090 24GB OC
    'CON-018', // MSI Titan 18 HX 4K Mini-LED Flagship
    'CHR-007', // Herman Miller x Logitech G Embody Throne
    'MON-006', // Samsung Odyssey Neo G9 49" Dual QHD 240Hz
    'KBD-007', // Wooting 60HE+ Rapid Trigger Analog Keyboard
    'MOU-011'  // Finalmouse UltralightX Lion Carbon Fiber
  ];

  // --- APPLICATION STATE ---
  const state = {
    products: [],
    cart: [],
    wishlist: [],
    currency: 'IDR',
    activeCategory: 'all',
    searchQuery: '',
    sortBy: 'relevance',
    currentPage: 1,
    itemsPerPage: 12,
    activePromo: null,
    activeCarouselIndex: 0,
    carouselAutoplayTimer: null,
    selectedVariant: {
      color: null,
      size: null,
      quantity: 1
    }
  };

  // --- INITIALIZE RAW PRODUCTS ---
  const loadHardwareCatalog = () => {
    let raw = [];
    if (typeof INITIAL_PRODUCTS !== 'undefined' && Array.isArray(INITIAL_PRODUCTS)) {
      raw = INITIAL_PRODUCTS;
    } else if (typeof window !== 'undefined' && Array.isArray(window.INITIAL_PRODUCTS)) {
      raw = window.INITIAL_PRODUCTS;
    }

    state.products = raw.map(item => ({
      id: item.id,
      name: item.name,
      category: item.category,
      priceIDR: item.price,
      originalPriceIDR: item.originalPrice || item.price,
      discountPercentage: item.discountPercentage || 0,
      rating: item.rating || 5.0,
      reviewCount: item.reviewCount || 10,
      soldCount: item.soldCount || 50,
      stock: item.stock || 5,
      isFlashSale: !!item.isFlashSale,
      badge: item.badge || 'Official Atelier',
      images: Array.isArray(item.images) && item.images.length > 0 
        ? item.images 
        : ['https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop'],
      variants: item.variants || { colors: ['Factory Official'], sizes: ['Standard Spec'] },
      description: item.description || 'Precision-crafted esports battlestation hardware.',
      edition: `${item.category} • Top 1% Binned Silicon`,
      provenance: 'Official Factory Distribution & Authorized Atelier',
      leadTime: 'Immediate White-Glove Secured Dispatch'
    }));
  };

  // --- STATE PERSISTENCE ---
  const loadPersistentState = () => {
    try {
      const savedCart = localStorage.getItem(STORAGE_KEYS.CART);
      if (savedCart) state.cart = JSON.parse(savedCart);

      const savedWishlist = localStorage.getItem(STORAGE_KEYS.WISHLIST);
      if (savedWishlist) state.wishlist = JSON.parse(savedWishlist);

      const savedCurrency = localStorage.getItem(STORAGE_KEYS.CURRENCY);
      if (savedCurrency && ['IDR', 'USD', 'EUR'].includes(savedCurrency)) {
        state.currency = savedCurrency;
      }

      const savedPromo = localStorage.getItem(STORAGE_KEYS.PROMO);
      if (savedPromo && PROMO_CODES[savedPromo]) {
        state.activePromo = savedPromo;
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  };

  const saveCart = () => {
    try {
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(state.cart));
    } catch (e) {}
    updateCartBadge();
    renderAcquisitionDrawer();
  };

  const saveWishlist = () => {
    try {
      localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(state.wishlist));
    } catch (e) {}
    updateWishlistBadge();
  };

  // --- CURRENCY CONVERTER & FORMATTER ---
  const getNumericPrice = (product) => {
    const idr = product.priceIDR;
    if (state.currency === 'USD') return Math.round(idr * EXCHANGE_RATES.USD);
    if (state.currency === 'EUR') return Math.round(idr * EXCHANGE_RATES.EUR);
    return idr;
  };

  const formatRawAmount = (amount, currency = state.currency) => {
    if (currency === 'IDR') {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0
      }).format(amount);
    }
    if (currency === 'USD') {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
      }).format(amount);
    }
    if (currency === 'EUR') {
      return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0
      }).format(amount);
    }
    return `${amount}`;
  };

  const formatPrice = (product) => {
    return formatRawAmount(getNumericPrice(product));
  };

  // --- TOAST NOTIFICATIONS ---
  const showLuxuryToast = (title, message, type = 'info') => {
    const container = document.getElementById('luxuryToastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'luxury-toast-enter liquid-glass-card rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 max-w-md w-full shadow-2xl border border-white/10 z-50 pointer-events-auto bg-[#0a0c12]/95 backdrop-blur-2xl';
    
    let iconClass = 'fa-solid fa-crown text-[#00ff87]';
    if (type === 'wishlist') iconClass = 'fa-solid fa-heart text-[#f43f5e]';
    if (type === 'promo') iconClass = 'fa-solid fa-bolt text-[#00f0ff]';
    if (type === 'download') iconClass = 'fa-solid fa-download text-[#00f0ff] animate-bounce';
    if (type === 'error') iconClass = 'fa-solid fa-circle-exclamation text-[#f43f5e]';

    toast.innerHTML = `
      <div class="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-xs">
        <i class="${iconClass}"></i>
      </div>
      <div class="flex-1 min-w-0 pr-2">
        <h4 class="text-xs font-orbitron font-bold text-[#f5e6b8] tracking-wider uppercase">${title}</h4>
        <p class="text-xs text-zinc-300 font-sans mt-0.5 leading-relaxed">${message}</p>
      </div>
      <button class="toast-close-btn text-zinc-500 hover:text-white text-xs transition cursor-pointer p-1">
        <i class="fa-solid fa-xmark"></i>
      </button>
    `;

    container.appendChild(toast);

    toast.querySelector('.toast-close-btn').onclick = () => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    };

    setTimeout(() => {
      if (toast.parentElement) {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 300);
      }
    }, 4500);
  };

  // --- BADGES UPDATE ---
  const updateCartBadge = () => {
    const badge = document.getElementById('navCartBadge');
    if (!badge) return;
    const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = totalCount;
    if (totalCount > 0) {
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  };

  const updateWishlistBadge = () => {
    const badge = document.getElementById('navWishlistBadge');
    if (!badge) return;
    badge.textContent = state.wishlist.length;
    if (state.wishlist.length > 0) {
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  };

  // --- 3D HARDWARE SHOWCASE CAROUSEL ---
  const init3DShowcaseCarousel = () => {
    const track = document.getElementById('carousel3DTrack');
    const prevBtn = document.getElementById('carouselPrevBtn');
    const nextBtn = document.getElementById('carouselNextBtn');
    const indicatorsContainer = document.getElementById('carouselIndicators');
    const activeDetailsContainer = document.getElementById('carouselActiveDetails');
    if (!track) return;

    // Filter to the 6 halo products
    const haloProducts = HALO_SHOWCASE_IDS.map(id => state.products.find(p => p.id === id)).filter(Boolean);
    if (haloProducts.length === 0) return;

    // Render slides into track
    track.innerHTML = haloProducts.map((product, idx) => `
      <div 
        class="carousel-3d-slide liquid-glass-card rounded-3xl p-6 border border-white/15 shadow-2xl group flex flex-col justify-between"
        data-slide-index="${idx}"
        data-product-id="${product.id}"
      >
        <div class="flex items-center justify-between pb-3 border-b border-white/10 text-[10px] font-mono">
          <span class="px-2.5 py-0.5 rounded-full bg-[#00ff87]/20 border border-[#00ff87]/40 text-[#00ff87] uppercase font-bold tracking-wider">
            Halo Selection 0${idx + 1}
          </span>
          <span class="text-zinc-400 font-mono">${product.id}</span>
        </div>

        <div class="relative aspect-square rounded-2xl overflow-hidden bg-zinc-950/80 p-6 flex items-center justify-center my-4">
          <img 
            src="${product.images[0]}" 
            alt="${product.name}" 
            onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=800&auto=format&fit=crop';"
            class="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-500 pointer-events-none"
          >
          <div class="absolute bottom-3 left-3 bg-[#07080a]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] font-mono text-[#00ff87]">
            <i class="fa-solid fa-microchip mr-1"></i> Top 1% Silicon
          </div>
        </div>

        <div class="space-y-1.5">
          <span class="text-[9px] font-mono text-zinc-400 uppercase tracking-widest block">${product.category}</span>
          <h4 class="font-orbitron text-base text-white font-bold truncate group-hover:text-[#00ff87] transition">
            ${product.name}
          </h4>
          <div class="pt-3 border-t border-white/10 flex items-center justify-between">
            <span class="text-base font-bold font-orbitron text-emerald-gradient">${formatPrice(product)}</span>
            <span class="text-[10px] font-mono text-zinc-400">${product.stock} Units Vault</span>
          </div>
        </div>
      </div>
    `).join('');

    // Render indicator dots
    if (indicatorsContainer) {
      indicatorsContainer.innerHTML = haloProducts.map((_, idx) => `
        <button 
          data-indicator="${idx}"
          class="w-3 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
            idx === state.activeCarouselIndex 
              ? 'w-8 bg-[#00ff87] shadow-[0_0_12px_#00ff87]' 
              : 'bg-white/20 hover:bg-white/40'
          }"
        ></button>
      `).join('');

      indicatorsContainer.querySelectorAll('button').forEach(btn => {
        btn.onclick = () => {
          state.activeCarouselIndex = parseInt(btn.getAttribute('data-indicator'), 10);
          update3DCarousel(haloProducts);
        };
      });
    }

    const update3DCarousel = (productsList) => {
      const slides = track.querySelectorAll('.carousel-3d-slide');
      const count = productsList.length;

      const isMobile = window.innerWidth < 640;
      const isTablet = window.innerWidth < 1024;
      const tx = isMobile ? 36 : (isTablet ? 50 : 62);
      const rotY = isMobile ? 14 : (isTablet ? 20 : 24);
      const sc = isMobile ? 0.78 : (isTablet ? 0.82 : 0.85);
      const centerZ = isMobile ? '40px' : '100px';

      slides.forEach((slide, idx) => {
        const offset = (idx - state.activeCarouselIndex + count) % count;

        if (offset === 0) {
          // Active Center
          slide.style.transform = `translateX(0) translateZ(${centerZ}) rotateY(0deg) scale(1)`;
          slide.style.opacity = '1';
          slide.style.filter = 'none';
          slide.style.zIndex = '30';
          slide.style.pointerEvents = 'auto';
          slide.classList.add('border-[#00ff87]/60', 'shadow-[0_0_40px_rgba(0,255,135,0.25)]');
        } else if (offset === 1) {
          // Right
          slide.style.transform = `translateX(${tx}%) translateZ(-70px) rotateY(-${rotY}deg) scale(${sc})`;
          slide.style.opacity = isMobile ? '0.35' : '0.65';
          slide.style.filter = 'brightness(0.7)';
          slide.style.zIndex = '20';
          slide.style.pointerEvents = 'auto';
          slide.classList.remove('border-[#00ff87]/60', 'shadow-[0_0_40px_rgba(0,255,135,0.25)]');
        } else if (offset === count - 1) {
          // Left
          slide.style.transform = `translateX(-${tx}%) translateZ(-70px) rotateY(${rotY}deg) scale(${sc})`;
          slide.style.opacity = isMobile ? '0.35' : '0.65';
          slide.style.filter = 'brightness(0.7)';
          slide.style.zIndex = '20';
          slide.style.pointerEvents = 'auto';
          slide.classList.remove('border-[#00ff87]/60', 'shadow-[0_0_40px_rgba(0,255,135,0.25)]');
        } else {
          // Far / Hidden
          slide.style.transform = 'translateX(0) translateZ(-200px) scale(0.6)';
          slide.style.opacity = '0';
          slide.style.zIndex = '1';
          slide.style.pointerEvents = 'none';
          slide.classList.remove('border-[#00ff87]/60', 'shadow-[0_0_40px_rgba(0,255,135,0.25)]');
        }
      });

      // Update indicator dots
      if (indicatorsContainer) {
        indicatorsContainer.querySelectorAll('button').forEach((btn, idx) => {
          if (idx === state.activeCarouselIndex) {
            btn.className = 'w-8 h-1.5 rounded-full transition-all duration-300 cursor-pointer bg-[#00ff87] shadow-[0_0_12px_#00ff87]';
          } else {
            btn.className = 'w-3 h-1.5 rounded-full transition-all duration-300 cursor-pointer bg-white/20 hover:bg-white/40';
          }
        });
      }

      // Update active summary panel below carousel
      const activeProd = productsList[state.activeCarouselIndex];
      if (activeDetailsContainer && activeProd) {
        activeDetailsContainer.innerHTML = `
          <div class="liquid-glass rounded-2xl p-4 sm:p-6 border border-[#00ff87]/30 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 shadow-2xl">
            <div class="space-y-1 text-center md:text-left w-full md:w-auto">
              <div class="flex items-center justify-center md:justify-start gap-2 text-xs font-mono">
                <span class="text-[#00ff87] font-bold uppercase tracking-wider">${activeProd.category}</span>
                <span class="text-zinc-600">•</span>
                <span class="text-zinc-400">Ref: ${activeProd.id}</span>
              </div>
              <h3 class="font-orbitron text-lg sm:text-2xl font-bold text-white">${activeProd.name}</h3>
              <p class="text-xs text-zinc-400 font-sans max-w-xl line-clamp-2">${activeProd.description}</p>
            </div>

            <div class="flex flex-col sm:flex-row items-center justify-between w-full md:w-auto gap-3 sm:gap-4 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-white/10">
              <div class="flex items-center justify-between w-full sm:w-auto sm:text-right gap-3">
                <span class="text-[9px] font-mono text-zinc-400 uppercase tracking-widest block sm:hidden">Valuation:</span>
                <span class="text-xl sm:text-2xl font-bold font-orbitron text-emerald-gradient">${formatPrice(activeProd)}</span>
              </div>
              <div class="grid grid-cols-2 sm:flex items-center gap-2 w-full sm:w-auto">
                <button 
                  id="carouselViewDossierBtn"
                  class="btn-luxury-outline py-2.5 sm:py-3 px-3 sm:px-5 text-xs font-orbitron tracking-wider uppercase cursor-pointer text-center"
                >
                  <i class="fa-solid fa-eye mr-1"></i> Dossier
                </button>
                <button 
                  id="carouselAcquireBtn"
                  class="btn-luxury-emerald py-2.5 sm:py-3 px-3 sm:px-6 text-xs font-orbitron tracking-wider uppercase cursor-pointer text-center"
                >
                  <i class="fa-solid fa-bag-shopping mr-1"></i> Acquire
                </button>
              </div>
            </div>
          </div>
        `;

        const viewBtn = document.getElementById('carouselViewDossierBtn');
        if (viewBtn) viewBtn.onclick = () => openProductDossierModal(activeProd.id);

        const acquireBtn = document.getElementById('carouselAcquireBtn');
        if (acquireBtn) acquireBtn.onclick = () => addProductToCart(activeProd.id);
      }
    };

    // Bind controls
    if (prevBtn) {
      prevBtn.onclick = () => {
        state.activeCarouselIndex = (state.activeCarouselIndex - 1 + haloProducts.length) % haloProducts.length;
        update3DCarousel(haloProducts);
      };
    }

    if (nextBtn) {
      nextBtn.onclick = () => {
        state.activeCarouselIndex = (state.activeCarouselIndex + 1) % haloProducts.length;
        update3DCarousel(haloProducts);
      };
    }

    // Touch swipe gestures on mobile
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 40) {
        if (diff < 0) {
          state.activeCarouselIndex = (state.activeCarouselIndex + 1) % haloProducts.length;
        } else {
          state.activeCarouselIndex = (state.activeCarouselIndex - 1 + haloProducts.length) % haloProducts.length;
        }
        update3DCarousel(haloProducts);
      }
    }, { passive: true });

    // Handle viewport resize
    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        update3DCarousel(haloProducts);
      }, 150);
    });

    // Bind slide click to jump
    track.querySelectorAll('.carousel-3d-slide').forEach(slide => {
      slide.onclick = () => {
        const idx = parseInt(slide.getAttribute('data-slide-index'), 10);
        if (idx !== state.activeCarouselIndex) {
          state.activeCarouselIndex = idx;
          update3DCarousel(haloProducts);
        } else {
          const pid = slide.getAttribute('data-product-id');
          openProductDossierModal(pid);
        }
      };
    });

    // Initial render
    update3DCarousel(haloProducts);
  };

  // --- 3D INTERACTIVE CARD TILT ---
  const init3DCardTilt = () => {
    // Disable on touchscreens so mobile vertical scrolling is completely smooth
    if (window.matchMedia && window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      return;
    }

    const cards = document.querySelectorAll('.card-3d-tilt');
    cards.forEach(card => {
      card.onmousemove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      };

      card.onmouseleave = () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      };
    });
  };

  // --- COMPANION APP DOWNLOAD SIMULATION ---
  const setupDownloadApp = () => {
    const downloadWinBtn = document.getElementById('downloadEngineBtn');
    const downloadMacBtn = document.getElementById('downloadEngineMacBtn');

    const triggerDownload = (osName, filename) => {
      showLuxuryToast(
        'Downloading Apex Engine', 
        `Downloading Nexus Apex Engine Control Suite (${osName} 64-bit • 84 MB)...`, 
        'download'
      );
      
      // Simulate file download
      setTimeout(() => {
        const blob = new Blob([
          `NEXUS APEX ENGINE // CONTROL SUITE v4.8.2\nSystem Target: ${osName} 64-bit\nStatus: Official Signed Release\nChecksum: SHA256-APEX-890-SIGMA\n\nThank you for choosing Nexus Apex Hardware Atelier.`
        ], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showLuxuryToast(
          'Download Complete', 
          `Nexus Apex Engine installer saved. Launch to calibrate your hardware.`, 
          'promo'
        );
      }, 1200);
    };

    if (downloadWinBtn) {
      downloadWinBtn.onclick = () => triggerDownload('Windows', 'Nexus-Apex-Engine-v4.8.2-Setup.exe');
    }
    if (downloadMacBtn) {
      downloadMacBtn.onclick = () => triggerDownload('macOS', 'Nexus-Apex-Engine-v4.8.2-AppleSilicon.dmg');
    }
  };

  // --- RENDER CATEGORY PILLS ---
  const renderCategoryFilters = () => {
    const container = document.getElementById('luxuryCategoryPills');
    if (!container) return;

    const categories = [...APEX_COLLECTIONS];
    if (state.activeCategory === 'wishlist') {
      categories.push({ id: 'wishlist', name: `Salon Privé (${state.wishlist.length})`, french: 'Salon Privé' });
    }

    container.innerHTML = categories.map(cat => {
      const isActive = state.activeCategory === cat.id;
      
      let count = state.products.length;
      if (cat.id === 'wishlist') {
        count = state.wishlist.length;
      } else if (cat.id !== 'all') {
        count = state.products.filter(p => p.category === cat.id).length;
      }

      return `
        <button 
          data-category-id="${cat.id}" 
          class="category-pill-btn px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs transition-all duration-300 tracking-wider font-orbitron uppercase shrink-0 cursor-pointer flex items-center gap-2 ${
            isActive 
              ? 'bg-gradient-to-r from-[#00ff87] to-[#00f0ff] text-[#07080a] font-black shadow-[0_0_20px_rgba(0,255,135,0.45)]' 
              : 'liquid-glass text-zinc-300 hover:text-white hover:border-[#00ff87]/40'
          }"
        >
          <span>${cat.name}</span>
          <span class="text-[10px] opacity-75 font-mono">(${count})</span>
        </button>
      `;
    }).join('');

    container.querySelectorAll('.category-pill-btn').forEach(btn => {
      btn.onclick = () => {
        state.activeCategory = btn.getAttribute('data-category-id');
        state.currentPage = 1;
        renderCategoryFilters();
        renderProductGallery();
      };
    });
  };

  // --- FILTER & SORT PRODUCTS ---
  const getFilteredProducts = () => {
    let items = [...state.products];

    // Filter by Category
    if (state.activeCategory === 'wishlist') {
      items = items.filter(p => state.wishlist.includes(p.id));
    } else if (state.activeCategory !== 'all') {
      items = items.filter(p => p.category === state.activeCategory);
    }

    // Filter by Search Query
    if (state.searchQuery && state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase().trim();
      items = items.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.id.toLowerCase().includes(q)
      );
    }

    // Sort items
    if (state.sortBy === 'price-high') {
      items.sort((a, b) => b.priceIDR - a.priceIDR);
    } else if (state.sortBy === 'price-low') {
      items.sort((a, b) => a.priceIDR - b.priceIDR);
    } else if (state.sortBy === 'rating') {
      items.sort((a, b) => b.rating - a.rating);
    } else if (state.sortBy === 'alpha') {
      items.sort((a, b) => a.name.localeCompare(b.name));
    }

    return items;
  };

  // --- RENDER PRODUCT GALLERY (PAGINATED WITH 3D TILT CARDS) ---
  const renderProductGallery = () => {
    const grid = document.getElementById('luxuryProductsGrid');
    const paginationContainer = document.getElementById('luxuryPaginationContainer');
    const resultsCountEl = document.getElementById('catalogResultsCount');
    if (!grid) return;

    const filtered = getFilteredProducts();
    if (resultsCountEl) {
      resultsCountEl.textContent = `Showing ${filtered.length} hardware creations`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full py-20 text-center space-y-4 liquid-glass-card rounded-3xl p-8 border border-white/10">
          <div class="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#00ff87] mx-auto text-xl">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <h3 class="font-orbitron font-bold text-2xl text-white uppercase">No Masterpieces Matching Criteria</h3>
          <p class="text-xs text-zinc-400 font-sans max-w-md mx-auto">
            ${state.activeCategory === 'wishlist' 
              ? 'Your private salon curation is currently empty. Explore our halo creations and tap the heart icon to curate your personal vault.'
              : 'Our ateliers found no hardware matching your search filter.'}
          </p>
          <button 
            id="resetCategoryFilterBtn"
            class="btn-luxury-emerald py-2.5 px-6 text-xs font-orbitron tracking-wider uppercase cursor-pointer"
          >
            Reset Filters & View All
          </button>
        </div>
      `;

      const resetBtn = document.getElementById('resetCategoryFilterBtn');
      if (resetBtn) {
        resetBtn.onclick = () => {
          state.activeCategory = 'all';
          state.searchQuery = '';
          const searchInput = document.getElementById('catalogSearchInput');
          if (searchInput) searchInput.value = '';
          state.currentPage = 1;
          renderCategoryFilters();
          renderProductGallery();
        };
      }

      if (paginationContainer) paginationContainer.innerHTML = '';
      return;
    }

    // Pagination calculations
    const totalPages = Math.ceil(filtered.length / state.itemsPerPage);
    if (state.currentPage > totalPages) state.currentPage = totalPages;
    const startIndex = (state.currentPage - 1) * state.itemsPerPage;
    const paginatedItems = filtered.slice(startIndex, startIndex + state.itemsPerPage);

    grid.innerHTML = paginatedItems.map(product => {
      const isWishlisted = state.wishlist.includes(product.id);
      const formattedPrice = formatPrice(product);

      return `
        <div class="card-3d-tilt liquid-glass-card rounded-3xl p-5 sm:p-6 flex flex-col justify-between group relative" data-product-id="${product.id}">
          
          <!-- Image Box with Specular Refraction -->
          <div class="relative aspect-square rounded-2xl overflow-hidden mb-5 bg-zinc-950/70 p-4 flex items-center justify-center luxury-image-frame cursor-pointer view-detail-trigger depth-layer-1" data-id="${product.id}">
            <img 
              src="${product.images[0]}" 
              alt="${product.name}" 
              loading="lazy" 
              onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=800&auto=format&fit=crop';"
              class="w-full h-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.85)] group-hover:scale-105 transition-transform duration-500 pointer-events-none"
            >
            
            <!-- Badges -->
            <div class="absolute top-3 left-3 flex flex-col gap-1 items-start">
              <span class="px-2.5 py-0.5 rounded-full bg-[#00ff87]/20 border border-[#00ff87]/40 text-[#00ff87] text-[9px] font-bold uppercase tracking-wider font-mono">
                ${product.badge}
              </span>
              <span class="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-zinc-300 text-[9px] font-mono border border-white/10">
                ${product.id}
              </span>
            </div>

            <!-- Wishlist Heart Button -->
            <button 
              data-wishlist-id="${product.id}" 
              class="wishlist-toggle-btn absolute top-3 right-3 w-8 h-8 rounded-full bg-zinc-900/80 hover:bg-[#00ff87]/20 backdrop-blur-md border border-white/10 hover:border-[#00ff87]/60 text-zinc-300 hover:text-[#00ff87] flex items-center justify-center transition shadow-md cursor-pointer"
              title="Add to Salon Privé Wishlist"
            >
              <i class="${isWishlisted ? 'fa-solid fa-heart text-[#f43f5e]' : 'fa-regular fa-heart'} text-xs"></i>
            </button>
          </div>

          <!-- Product Details -->
          <div class="flex-1 flex flex-col justify-between space-y-4 depth-layer-2">
            <div>
              <div class="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-1">
                <span class="uppercase tracking-widest text-[#00ff87] truncate max-w-[170px]">${product.category}</span>
                <span class="flex items-center gap-1 text-[#f5e6b8]">
                  <i class="fa-solid fa-star text-[9px] text-[#00ff87]"></i>
                  <span>${product.rating.toFixed(1)}</span>
                </span>
              </div>

              <h3 
                class="font-orbitron text-sm sm:text-base font-bold text-white group-hover:text-[#00ff87] transition leading-snug line-clamp-2 cursor-pointer view-detail-trigger"
                data-id="${product.id}"
              >
                ${product.name}
              </h3>

              <p class="text-xs text-zinc-400 font-sans mt-1.5 line-clamp-2 leading-relaxed">
                ${product.description}
              </p>
            </div>

            <!-- Price & Action -->
            <div class="pt-3.5 border-t border-white/10 flex items-center justify-between gap-2 min-w-0">
              <div class="min-w-0 flex-1">
                <span class="text-[9px] font-mono uppercase text-zinc-500 tracking-wider block">Valuation</span>
                <span class="text-xs sm:text-sm font-bold font-orbitron text-emerald-gradient tracking-tight truncate block" title="${formattedPrice}">${formattedPrice}</span>
              </div>

              <div class="flex items-center gap-1.5 shrink-0">
                <button 
                  data-id="${product.id}" 
                  class="view-detail-trigger w-8 h-8 rounded-full liquid-glass text-zinc-300 hover:text-white hover:border-[#00ff87]/50 flex items-center justify-center transition text-xs cursor-pointer"
                  title="View Technical Dossier"
                >
                  <i class="fa-solid fa-eye text-[11px]"></i>
                </button>
                <button 
                  data-acquire-id="${product.id}" 
                  class="acquire-btn btn-luxury-emerald py-1.5 sm:py-2 px-2.5 sm:px-3.5 text-[10px] tracking-wider uppercase cursor-pointer whitespace-nowrap"
                >
                  <i class="fa-solid fa-bag-shopping sm:mr-1"></i> <span class="hidden xs:inline">Acquire</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      `;
    }).join('');

    // Render Pagination Controls with smart sliding window to prevent mobile overflow
    if (paginationContainer) {
      if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
      } else {
        const getVisiblePages = (curr, total) => {
          if (total <= 6) {
            return Array.from({ length: total }, (_, i) => i + 1);
          }
          if (curr <= 3) {
            return [1, 2, 3, 4, '...', total];
          }
          if (curr >= total - 2) {
            return [1, '...', total - 3, total - 2, total - 1, total];
          }
          return [1, '...', curr - 1, curr, curr + 1, '...', total];
        };

        const visiblePages = getVisiblePages(state.currentPage, totalPages);
        const pagesHtml = visiblePages.map(page => {
          if (page === '...') {
            return `<span class="w-5 sm:w-6 text-center text-zinc-500 font-mono text-xs select-none">...</span>`;
          }
          const isCurr = page === state.currentPage;
          return `
            <button 
              data-page="${page}"
              class="pagination-page-btn w-7 h-7 sm:w-9 sm:h-9 rounded-full text-[11px] sm:text-xs font-mono font-bold transition cursor-pointer ${
                isCurr 
                  ? 'bg-gradient-to-r from-[#00ff87] to-[#00f0ff] text-[#07080a] shadow-[0_0_15px_rgba(0,255,135,0.4)]' 
                  : 'liquid-glass text-zinc-300 hover:text-white hover:border-[#00ff87]/40'
              }"
            >
              ${page}
            </button>
          `;
        }).join('');

        paginationContainer.innerHTML = `
          <div class="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 py-6 max-w-full">
            <button 
              id="prevPageBtn" 
              class="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full liquid-glass text-xs font-orbitron text-zinc-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
              ${state.currentPage === 1 ? 'disabled' : ''}
            >
              &larr; <span class="hidden xs:inline">Prev</span>
            </button>
            <div class="flex items-center gap-1 sm:gap-1.5">
              ${pagesHtml}
            </div>
            <button 
              id="nextPageBtn" 
              class="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full liquid-glass text-xs font-orbitron text-zinc-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
              ${state.currentPage === totalPages ? 'disabled' : ''}
            >
              <span class="hidden xs:inline">Next</span> &rarr;
            </button>
          </div>
        `;

        const prevBtn = document.getElementById('prevPageBtn');
        if (prevBtn) {
          prevBtn.onclick = () => {
            if (state.currentPage > 1) {
              state.currentPage--;
              renderProductGallery();
              document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
            }
          };
        }

        const nextBtn = document.getElementById('nextPageBtn');
        if (nextBtn) {
          nextBtn.onclick = () => {
            if (state.currentPage < totalPages) {
              state.currentPage++;
              renderProductGallery();
              document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
            }
          };
        }

        paginationContainer.querySelectorAll('.pagination-page-btn').forEach(btn => {
          btn.onclick = () => {
            state.currentPage = parseInt(btn.getAttribute('data-page'), 10);
            renderProductGallery();
            document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
          };
        });
      }
    }

    // Bind item actions inside grid
    grid.querySelectorAll('.view-detail-trigger').forEach(el => {
      el.onclick = () => {
        const id = el.getAttribute('data-id');
        openProductDossierModal(id);
      };
    });

    grid.querySelectorAll('.acquire-btn').forEach(el => {
      el.onclick = () => {
        const id = el.getAttribute('data-acquire-id');
        addProductToCart(id);
      };
    });

    grid.querySelectorAll('.wishlist-toggle-btn').forEach(el => {
      el.onclick = (e) => {
        e.stopPropagation();
        const id = el.getAttribute('data-wishlist-id');
        toggleWishlist(id);
      };
    });

    // Re-init 3D tilt on freshly rendered cards
    init3DCardTilt();
  };

  // --- CART MANAGEMENT ---
  const addProductToCart = (productId, colorVariant = null, sizeVariant = null, quantity = 1) => {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = state.cart.findIndex(item => 
      item.id === productId && 
      item.colorVariant === colorVariant && 
      item.sizeVariant === sizeVariant
    );

    if (existingIndex > -1) {
      state.cart[existingIndex].quantity += quantity;
    } else {
      state.cart.push({
        id: productId,
        colorVariant: colorVariant || product.variants.colors[0] || 'Factory Official',
        sizeVariant: sizeVariant || product.variants.sizes[0] || 'Standard Spec',
        quantity: quantity
      });
    }

    saveCart();
    showLuxuryToast(
      'Acquisition Bag Updated', 
      `${product.name} added to your collection bag.`,
      'info'
    );
    openAcquisitionDrawer();
  };

  const removeProductFromCart = (cartIndex) => {
    if (cartIndex >= 0 && cartIndex < state.cart.length) {
      const item = state.cart[cartIndex];
      const product = state.products.find(p => p.id === item.id);
      state.cart.splice(cartIndex, 1);
      saveCart();
      if (product) {
        showLuxuryToast('Piece Removed', `${product.name} removed from bag.`);
      }
    }
  };

  const updateCartQuantity = (cartIndex, delta) => {
    if (cartIndex >= 0 && cartIndex < state.cart.length) {
      const item = state.cart[cartIndex];
      item.quantity += delta;
      if (item.quantity <= 0) {
        state.cart.splice(cartIndex, 1);
      }
      saveCart();
    }
  };

  // --- WISHLIST MANAGEMENT ---
  const toggleWishlist = (productId) => {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    const idx = state.wishlist.indexOf(productId);
    if (idx > -1) {
      state.wishlist.splice(idx, 1);
      showLuxuryToast('Salon Privé Updated', `${product.name} removed from private wishlist.`, 'wishlist');
    } else {
      state.wishlist.push(productId);
      showLuxuryToast('Salon Privé Curated', `${product.name} preserved in your private wishlist.`, 'wishlist');
    }

    saveWishlist();
    renderCategoryFilters();
    renderProductGallery();
  };

  // --- SLIDE-OVER CONCIERGE DRAWER (CART) ---
  const openAcquisitionDrawer = () => {
    const drawer = document.getElementById('acquisitionDrawer');
    const backdrop = document.getElementById('acquisitionBackdrop');
    const panel = document.getElementById('acquisitionPanel');
    if (!drawer || !backdrop || !panel) return;

    renderAcquisitionDrawer();
    drawer.classList.remove('hidden', 'pointer-events-none');
    backdrop.classList.remove('pointer-events-none', 'opacity-0');
    backdrop.classList.add('pointer-events-auto', 'opacity-100');
    requestAnimationFrame(() => {
      panel.classList.remove('translate-x-full');
    });
    document.body.style.overflow = 'hidden';
  };

  const closeAcquisitionDrawer = () => {
    const drawer = document.getElementById('acquisitionDrawer');
    const backdrop = document.getElementById('acquisitionBackdrop');
    const panel = document.getElementById('acquisitionPanel');
    if (!drawer || !backdrop || !panel) return;

    panel.classList.add('translate-x-full');
    backdrop.classList.remove('opacity-100', 'pointer-events-auto');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => {
      drawer.classList.add('hidden', 'pointer-events-none');
      document.body.style.overflow = '';
    }, 300);
  };

  const renderAcquisitionDrawer = () => {
    const container = document.getElementById('acquisitionCartItems');
    const emptyNotice = document.getElementById('cartEmptyNotice');
    const footerActions = document.getElementById('cartFooterActions');
    const subtotalEl = document.getElementById('acquisitionSubtotal');
    const discountEl = document.getElementById('acquisitionDiscountAmount');
    const totalEl = document.getElementById('acquisitionTotal');
    if (!container) return;

    if (state.cart.length === 0) {
      container.innerHTML = '';
      if (emptyNotice) emptyNotice.classList.remove('hidden');
      if (footerActions) footerActions.classList.add('hidden');
      return;
    }

    if (emptyNotice) emptyNotice.classList.add('hidden');
    if (footerActions) footerActions.classList.remove('hidden');

    let subtotalNumeric = 0;

    container.innerHTML = state.cart.map((item, index) => {
      const product = state.products.find(p => p.id === item.id);
      if (!product) return '';

      const unitPrice = getNumericPrice(product);
      const lineTotal = unitPrice * item.quantity;
      subtotalNumeric += lineTotal;

      return `
        <div class="p-4 rounded-2xl liquid-glass border border-white/10 flex gap-4 items-center group relative">
          <!-- Thumbnail -->
          <div class="w-16 h-16 rounded-xl bg-zinc-950/80 p-2 shrink-0 flex items-center justify-center border border-white/10">
            <img 
              src="${product.images[0]}" 
              alt="${product.name}" 
              onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=400&auto=format&fit=crop';"
              class="w-full h-full object-contain filter drop-shadow-md"
            >
          </div>

          <!-- Info -->
          <div class="flex-1 min-w-0 pr-2">
            <span class="text-[9px] font-mono text-[#00ff87] uppercase tracking-wider block">${product.category}</span>
            <h4 class="text-xs font-semibold text-white truncate font-sans">${product.name}</h4>
            <p class="text-[10px] text-zinc-400 font-mono mt-0.5">${item.colorVariant} • ${item.sizeVariant}</p>
            <div class="mt-2 flex items-center justify-between">
              <span class="text-xs font-bold font-orbitron text-[#f5e6b8]">${formatRawAmount(lineTotal)}</span>
              
              <!-- Quantity Controls -->
              <div class="flex items-center gap-2 bg-white/5 rounded-full px-2 py-0.5 border border-white/10">
                <button 
                  data-cart-qty="${index}" 
                  data-delta="-1" 
                  class="cart-qty-btn text-zinc-400 hover:text-white text-xs px-1 cursor-pointer"
                >
                  -
                </button>
                <span class="text-xs font-mono font-bold text-white px-1">${item.quantity}</span>
                <button 
                  data-cart-qty="${index}" 
                  data-delta="1" 
                  class="cart-qty-btn text-zinc-400 hover:text-white text-xs px-1 cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <!-- Remove Button -->
          <button 
            data-cart-remove="${index}" 
            class="cart-remove-btn text-zinc-500 hover:text-[#f43f5e] text-xs transition p-1.5 cursor-pointer"
            title="Remove from bag"
          >
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `;
    }).join('');

    // Promo calculations
    let discountNumeric = 0;
    if (state.activePromo === 'HEMAT10') {
      discountNumeric = Math.round(subtotalNumeric * 0.10);
    }
    const finalTotal = Math.max(0, subtotalNumeric - discountNumeric);

    if (subtotalEl) subtotalEl.textContent = formatRawAmount(subtotalNumeric);
    if (discountEl) {
      if (discountNumeric > 0) {
        discountEl.parentElement.classList.remove('hidden');
        discountEl.textContent = `-${formatRawAmount(discountNumeric)}`;
      } else {
        discountEl.parentElement.classList.add('hidden');
      }
    }
    if (totalEl) totalEl.textContent = formatRawAmount(finalTotal);

    // Bind cart actions
    container.querySelectorAll('.cart-qty-btn').forEach(btn => {
      btn.onclick = () => {
        const idx = parseInt(btn.getAttribute('data-cart-qty'), 10);
        const delta = parseInt(btn.getAttribute('data-delta'), 10);
        updateCartQuantity(idx, delta);
      };
    });

    container.querySelectorAll('.cart-remove-btn').forEach(btn => {
      btn.onclick = () => {
        const idx = parseInt(btn.getAttribute('data-cart-remove'), 10);
        removeProductFromCart(idx);
      };
    });
  };

  // --- PRODUCT DOSSIER MODAL (QUICK VIEW) ---
  const openProductDossierModal = (productId) => {
    const product = state.products.find(p => p.id === productId);
    const modal = document.getElementById('productDossierModal');
    const content = document.getElementById('productDossierContent');
    if (!product || !modal || !content) return;

    state.selectedVariant = {
      color: product.variants.colors[0] || 'Factory Official',
      size: product.variants.sizes[0] || 'Standard Spec',
      quantity: 1
    };

    const isWishlisted = state.wishlist.includes(product.id);
    const formattedPrice = formatPrice(product);

    content.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <!-- Left: High-Res Masterpiece Gallery -->
        <div class="lg:col-span-6 space-y-4">
          <div class="aspect-square rounded-3xl overflow-hidden bg-zinc-950/80 border border-white/10 p-6 flex items-center justify-center relative shadow-2xl">
            <img 
              id="modalMainImage" 
              src="${product.images[0]}" 
              alt="${product.name}" 
              onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop';"
              class="w-full h-full object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.95)]"
            >
            <div class="absolute top-4 left-4">
              <span class="px-3 py-1 rounded-full bg-[#00ff87]/20 border border-[#00ff87]/50 text-[#00ff87] text-[10px] font-mono uppercase tracking-widest font-bold">
                ${product.badge}
              </span>
            </div>
            <div class="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] font-mono text-zinc-300">
              Ref: ${product.id}
            </div>
          </div>

          ${product.images.length > 1 ? `
            <div class="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
              ${product.images.map((img, idx) => `
                <button 
                  data-img-idx="${idx}"
                  class="modal-thumb-btn w-16 h-16 rounded-xl bg-zinc-950/90 p-1.5 border ${idx === 0 ? 'border-[#00ff87] shadow-[0_0_15px_rgba(0,255,135,0.3)]' : 'border-white/10 opacity-60'} hover:opacity-100 transition shrink-0 cursor-pointer"
                >
                  <img src="${img}" alt="Thumbnail ${idx}" class="w-full h-full object-contain">
                </button>
              `).join('')}
            </div>
          ` : ''}
        </div>

        <!-- Right: Technical Dossier & Valuation -->
        <div class="lg:col-span-6 space-y-5 text-left">
          <div>
            <div class="flex items-center justify-between text-xs font-mono text-zinc-400 mb-1.5">
              <span class="text-[#00ff87] uppercase tracking-widest">${product.category}</span>
              <span class="flex items-center gap-1.5 text-[#f5e6b8] font-bold">
                <i class="fa-solid fa-star text-[#00ff87]"></i>
                <span>${product.rating.toFixed(1)} / 5.0</span>
                <span class="text-zinc-500 font-mono">(${product.reviewCount} Reviews)</span>
              </span>
            </div>
            <h2 class="text-xl sm:text-2xl font-orbitron font-bold text-white leading-tight">
              ${product.name}
            </h2>
            <p class="text-xs font-mono text-zinc-400 mt-1">${product.edition}</p>
          </div>

          <div class="p-4 rounded-2xl liquid-glass border border-white/10 space-y-2 text-xs">
            <div class="flex justify-between">
              <span class="text-zinc-400 uppercase font-mono text-[10px]">Atelier Provenance:</span>
              <span class="text-white font-sans font-medium">${product.provenance}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-zinc-400 uppercase font-mono text-[10px]">Allocation Status:</span>
              <span class="text-[#00ff87] font-mono font-bold">${product.stock > 0 ? `In Stock (${product.stock} Units Remaining)` : 'Vault Allocation Exhausted'}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-zinc-400 uppercase font-mono text-[10px]">Logistics Protocol:</span>
              <span class="text-zinc-300 font-sans">${product.leadTime}</span>
            </div>
          </div>

          <div>
            <h4 class="text-[10px] font-mono uppercase tracking-widest text-[#00ff87] mb-1 font-bold">Engineering Description</h4>
            <p class="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed font-light">
              ${product.description}
            </p>
          </div>

          <!-- Variant Pickers -->
          <div class="space-y-3 pt-1">
            ${product.variants.colors && product.variants.colors.length > 0 ? `
              <div>
                <label class="block text-[10px] font-mono uppercase text-zinc-400 mb-1.5">Color / Edition Shroud</label>
                <div class="flex flex-wrap gap-2" id="modalColorVariants">
                  ${product.variants.colors.map((c, idx) => `
                    <button 
                      data-color="${c}"
                      class="color-variant-pill px-3 py-1.5 rounded-full text-xs font-sans transition cursor-pointer border ${
                        idx === 0 
                          ? 'border-[#00ff87] text-[#00ff87] bg-[#00ff87]/10' 
                          : 'border-white/10 text-zinc-300 hover:border-white/30'
                      }"
                    >
                      ${c}
                    </button>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            ${product.variants.sizes && product.variants.sizes.length > 0 ? `
              <div>
                <label class="block text-[10px] font-mono uppercase text-zinc-400 mb-1.5">Socket / Form Factor / Spec</label>
                <div class="flex flex-wrap gap-2" id="modalSizeVariants">
                  ${product.variants.sizes.map((s, idx) => `
                    <button 
                      data-size="${s}"
                      class="size-variant-pill px-3 py-1.5 rounded-full text-xs font-sans transition cursor-pointer border ${
                        idx === 0 
                          ? 'border-[#00ff87] text-[#00ff87] bg-[#00ff87]/10' 
                          : 'border-white/10 text-zinc-300 hover:border-white/30'
                      }"
                    >
                      ${s}
                    </button>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Valuation & Action Buttons -->
          <div class="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span class="text-[9px] font-mono uppercase text-zinc-500 tracking-wider block">Acquisition Valuation</span>
              <span class="text-2xl font-bold font-orbitron text-emerald-gradient">${formattedPrice}</span>
            </div>

            <div class="flex items-center gap-3 w-full sm:w-auto">
              <button 
                id="modalWishlistBtn" 
                class="w-12 h-12 rounded-full liquid-glass border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#f43f5e] transition cursor-pointer shrink-0"
                title="Save to Wishlist"
              >
                <i class="${isWishlisted ? 'fa-solid fa-heart text-[#f43f5e]' : 'fa-regular fa-heart'} text-base"></i>
              </button>

              <button 
                id="modalAcquireNowBtn" 
                class="flex-1 sm:flex-none btn-luxury-emerald py-3.5 px-8 text-xs font-orbitron tracking-widest uppercase cursor-pointer"
              >
                <i class="fa-solid fa-crown mr-1.5"></i>
                Acquire Creation
              </button>
            </div>
          </div>

          <div class="text-center pt-2">
            <button 
              id="modalConsultConciergeBtn" 
              class="text-[11px] font-mono text-zinc-400 hover:text-[#00ff87] tracking-wider transition underline cursor-pointer"
            >
              <i class="fa-solid fa-phone mr-1"></i> Inquire with Private Overclocking Concierge
            </button>
          </div>

        </div>

      </div>
    `;

    // Bind thumbnail click
    content.querySelectorAll('.modal-thumb-btn').forEach(btn => {
      btn.onclick = () => {
        const idx = parseInt(btn.getAttribute('data-img-idx'), 10);
        const mainImg = document.getElementById('modalMainImage');
        if (mainImg) mainImg.src = product.images[idx];
        content.querySelectorAll('.modal-thumb-btn').forEach(b => {
          b.classList.remove('border-[#00ff87]', 'shadow-[0_0_15px_rgba(0,255,135,0.3)]');
          b.classList.add('border-white/10', 'opacity-60');
        });
        btn.classList.add('border-[#00ff87]', 'shadow-[0_0_15px_rgba(0,255,135,0.3)]');
        btn.classList.remove('opacity-60');
      };
    });

    // Bind variant pills
    content.querySelectorAll('.color-variant-pill').forEach(btn => {
      btn.onclick = () => {
        state.selectedVariant.color = btn.getAttribute('data-color');
        content.querySelectorAll('.color-variant-pill').forEach(b => {
          b.classList.remove('border-[#00ff87]', 'text-[#00ff87]', 'bg-[#00ff87]/10');
          b.classList.add('border-white/10', 'text-zinc-300');
        });
        btn.classList.add('border-[#00ff87]', 'text-[#00ff87]', 'bg-[#00ff87]/10');
        btn.classList.remove('border-white/10', 'text-zinc-300');
      };
    });

    content.querySelectorAll('.size-variant-pill').forEach(btn => {
      btn.onclick = () => {
        state.selectedVariant.size = btn.getAttribute('data-size');
        content.querySelectorAll('.size-variant-pill').forEach(b => {
          b.classList.remove('border-[#00ff87]', 'text-[#00ff87]', 'bg-[#00ff87]/10');
          b.classList.add('border-white/10', 'text-zinc-300');
        });
        btn.classList.add('border-[#00ff87]', 'text-[#00ff87]', 'bg-[#00ff87]/10');
        btn.classList.remove('border-white/10', 'text-zinc-300');
      };
    });

    // Bind Wishlist toggle in modal
    const modalWishlistBtn = document.getElementById('modalWishlistBtn');
    if (modalWishlistBtn) {
      modalWishlistBtn.onclick = () => {
        toggleWishlist(product.id);
        const isNowWishlisted = state.wishlist.includes(product.id);
        const icon = modalWishlistBtn.querySelector('i');
        if (icon) {
          icon.className = isNowWishlisted ? 'fa-solid fa-heart text-[#f43f5e]' : 'fa-regular fa-heart';
        }
      };
    }

    // Bind Acquire button
    const acquireBtn = document.getElementById('modalAcquireNowBtn');
    if (acquireBtn) {
      acquireBtn.onclick = () => {
        addProductToCart(product.id, state.selectedVariant.color, state.selectedVariant.size, 1);
        closeProductDossierModal();
      };
    }

    // Bind Concierge consultation
    const consultBtn = document.getElementById('modalConsultConciergeBtn');
    if (consultBtn) {
      consultBtn.onclick = () => {
        closeProductDossierModal();
        openMembershipModal(product.name);
      };
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  };

  const closeProductDossierModal = () => {
    const modal = document.getElementById('productDossierModal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  };

  // --- "LE CERCLE APEX" MEMBERSHIP SYSTEM ---
  const openMembershipModal = (prefilledInterest = '') => {
    const section = document.getElementById('membership');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      const interestInput = document.getElementById('membershipInterestsInput');
      if (interestInput && prefilledInterest) {
        interestInput.value = `Private Allocation Inquiry: ${prefilledInterest}`;
      }
      setTimeout(() => {
        const nameInput = document.getElementById('memberNameInput');
        if (nameInput) nameInput.focus();
      }, 500);
      showLuxuryToast('Atelier Concierge', 'Dossier d\'Adhésion ready for your hardware viewing inquiry.');
    }
  };

  const handleMembershipSubmission = (e) => {
    e.preventDefault();

    const name = document.getElementById('memberNameInput')?.value.trim();
    const email = document.getElementById('memberEmailInput')?.value.trim();
    const phone = document.getElementById('memberPhoneInput')?.value.trim();
    const city = document.getElementById('memberCityInput')?.value.trim();
    const interest = document.getElementById('membershipInterestsInput')?.value.trim();
    const code = document.getElementById('memberInvitationCodeInput')?.value.trim();

    if (!name || !email) {
      showLuxuryToast('Credential Error', 'Please complete title, legal name and email.', 'error');
      return;
    }

    const memberId = 'APEX-MEMBER-' + Math.floor(100000 + Math.random() * 900000);
    const dateJoined = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

    try {
      localStorage.setItem(STORAGE_KEYS.MEMBERSHIP, JSON.stringify({
        memberId,
        name,
        email,
        phone,
        city,
        interest,
        code,
        dateJoined
      }));
    } catch (err) {}

    // Show Membership Confirmation Modal
    const modal = document.getElementById('membershipSuccessModal');
    const content = document.getElementById('membershipSuccessContent');
    if (!modal || !content) return;

    content.innerHTML = `
      <div class="text-center space-y-6">
        <div class="w-16 h-16 rounded-full bg-[#00ff87]/20 border border-[#00ff87]/50 flex items-center justify-center text-[#00ff87] mx-auto text-2xl shadow-[0_0_25px_rgba(0,255,135,0.4)]">
          <i class="fa-solid fa-crown"></i>
        </div>

        <div>
          <span class="text-[10px] uppercase font-mono tracking-widest text-[#00ff87]">Brevet d'Adhésion Officiel</span>
          <h3 class="text-2xl font-orbitron font-bold text-white mt-1">Credentials Formally Confirmed</h3>
          <p class="text-xs text-zinc-400 font-sans mt-1">
            Welcome to <strong class="text-[#f5e6b8]">Le Cercle Apex // Founders Atelier</strong>.
          </p>
        </div>

        <div class="p-5 rounded-2xl liquid-glass text-left space-y-2.5 text-xs font-sans border border-white/10">
          <div class="flex justify-between border-b border-white/10 pb-2">
            <span class="text-zinc-500 uppercase text-[10px]">Patron Title</span>
            <span class="text-white font-bold">${name}</span>
          </div>
          <div class="flex justify-between border-b border-white/10 pb-2">
            <span class="text-zinc-500 uppercase text-[10px]">Registry Credential ID</span>
            <span class="text-[#00ff87] font-mono font-bold">${memberId}</span>
          </div>
          <div class="flex justify-between border-b border-white/10 pb-2">
            <span class="text-zinc-500 uppercase text-[10px]">Privilege Tier</span>
            <span class="text-[#f5e6b8] font-bold">Apex Founder (Tier I Halo Silicon Access)</span>
          </div>
          <div class="flex justify-between">
            <span class="text-zinc-500 uppercase text-[10px]">Private Allocation Vaults</span>
            <span class="text-zinc-300">Jakarta • Singapore • Geneva • Tokyo</span>
          </div>
        </div>

        <div class="pt-2 flex items-center gap-3">
          <button 
            id="closeSuccessModalBtn" 
            class="flex-1 btn-luxury-emerald py-3 text-xs uppercase tracking-wider font-orbitron cursor-pointer"
          >
            Enter The Apex Vault
          </button>
        </div>
      </div>
    `;

    const closeBtn = document.getElementById('closeSuccessModalBtn');
    if (closeBtn) {
      closeBtn.onclick = () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
      };
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  };

  // --- ACQUISITION CHECKOUT & DEED OF PROVENANCE ---
  const handleProceedToCheckout = () => {
    if (state.cart.length === 0) return;
    closeAcquisitionDrawer();

    const checkoutModal = document.getElementById('acquisitionCheckoutModal');
    if (!checkoutModal) return;

    const summaryContainer = document.getElementById('checkoutItemsSummary');
    let subtotal = 0;

    if (summaryContainer) {
      summaryContainer.innerHTML = state.cart.map(item => {
        const product = state.products.find(p => p.id === item.id);
        if (!product) return '';
        const price = getNumericPrice(product);
        const line = price * item.quantity;
        subtotal += line;

        return `
          <div class="flex justify-between text-xs py-1.5 border-b border-white/5 font-sans">
            <span class="text-white truncate max-w-[240px]">${product.name} (${item.quantity}x)</span>
            <span class="text-[#f5e6b8] font-mono">${formatRawAmount(line)}</span>
          </div>
        `;
      }).join('');
    }

    let discount = 0;
    if (state.activePromo === 'HEMAT10') {
      discount = Math.round(subtotal * 0.10);
    }
    const finalTotal = Math.max(0, subtotal - discount);

    const totalEl = document.getElementById('checkoutSummaryTotal');
    if (totalEl) totalEl.textContent = formatRawAmount(finalTotal);

    checkoutModal.classList.remove('hidden');
    checkoutModal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  };

  const handleCompleteAcquisition = (e) => {
    e.preventDefault();

    const recipientName = document.getElementById('checkoutClientName')?.value.trim();
    const city = document.getElementById('checkoutDeliveryCity')?.value.trim();
    const address = document.getElementById('checkoutDeliveryAddress')?.value.trim();
    const instructions = document.getElementById('checkoutSpecialInstructions')?.value.trim();

    if (!recipientName || !address) {
      showLuxuryToast('Incomplete Credentials', 'Please provide recipient legal title and secured address.', 'error');
      return;
    }

    const checkoutModal = document.getElementById('acquisitionCheckoutModal');
    if (checkoutModal) {
      checkoutModal.classList.add('hidden');
      checkoutModal.classList.remove('flex');
    }

    // Generate Archival Deed of Provenance
    const acquisitionRef = 'DEED-APEX-' + new Date().getFullYear() + '-' + Math.floor(100000 + Math.random() * 900000);
    const dateIssued = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

    openDeedOfProvenanceModal({
      acquisitionRef,
      recipientName,
      city,
      address,
      instructions,
      dateIssued,
      items: [...state.cart]
    });

    state.cart = [];
    saveCart();
  };

  const openDeedOfProvenanceModal = (deedData) => {
    const modal = document.getElementById('deedOfProvenanceModal');
    const content = document.getElementById('printableDeed');
    if (!modal || !content) return;

    let grandTotal = 0;
    const itemsHtml = deedData.items.map(item => {
      const product = state.products.find(p => p.id === item.id);
      if (!product) return '';
      const numPrice = getNumericPrice(product);
      grandTotal += numPrice * item.quantity;

      return `
        <tr class="border-b border-zinc-200 dark:border-white/10 text-xs">
          <td class="py-3 font-orbitron text-sm font-semibold">${product.name}</td>
          <td class="py-3 font-mono text-zinc-400">${product.category}</td>
          <td class="py-3 font-mono text-center">${item.quantity}</td>
          <td class="py-3 text-right font-mono font-bold">${formatRawAmount(numPrice * item.quantity)}</td>
        </tr>
      `;
    }).join('');

    content.innerHTML = `
      <div class="border-2 border-[#00ff87] p-8 sm:p-12 relative bg-[#0a0c12] text-white space-y-8 shadow-2xl">
        
        <!-- Watermark Hallmark -->
        <div class="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none text-9xl text-[#00ff87]">
          <i class="fa-solid fa-crown"></i>
        </div>

        <!-- Deed Header -->
        <div class="flex items-start justify-between border-b border-[#00ff87]/40 pb-6">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="w-7 h-7 rounded-full bg-[#00ff87] text-[#07080a] flex items-center justify-center text-xs font-bold">
                <i class="fa-solid fa-crown"></i>
              </span>
              <span class="font-orbitron text-lg font-black tracking-[0.25em] text-[#f5e6b8]">NEXUS APEX ATELIER</span>
            </div>
            <p class="text-[10px] uppercase font-mono tracking-widest text-[#00ff87]">
              Haute Battlestation Engineering • Binned Silicon Provenance
            </p>
            <p class="text-[10px] text-zinc-400 font-sans mt-0.5">
              Nexus Master Ateliers • Jakarta & Silicon Valley Chambers
            </p>
          </div>

          <div class="text-right">
            <span class="px-3 py-1 rounded-full bg-[#00ff87]/20 border border-[#00ff87] text-[#00ff87] text-[10px] font-mono font-bold uppercase tracking-widest">
              OFFICIAL DEED OF PROVENANCE
            </span>
            <p class="text-xs text-zinc-400 font-mono mt-2">Ref: ${deedData.acquisitionRef}</p>
            <p class="text-xs text-zinc-400 font-sans">${deedData.dateIssued}</p>
          </div>
        </div>

        <!-- Acquisition Recipient Details -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 p-5 rounded-xl liquid-glass text-xs font-sans">
          <div>
            <span class="text-zinc-500 uppercase text-[9px] font-mono tracking-wider block">Acquiring Patron</span>
            <strong class="text-white text-sm font-orbitron">${deedData.recipientName}</strong>
          </div>
          <div>
            <span class="text-zinc-500 uppercase text-[9px] font-mono tracking-wider block">Secured Destination</span>
            <span class="text-zinc-300">${deedData.city || 'Private Battlestation Suite'}</span>
          </div>
          <div>
            <span class="text-zinc-500 uppercase text-[9px] font-mono tracking-wider block">Provenance Status</span>
            <span class="text-[#00ff87] font-mono font-bold"><i class="fa-solid fa-circle-check mr-1 text-xs"></i>Entered into Nexus Archive Registry</span>
          </div>
        </div>

        <!-- Items Table -->
        <div>
          <table class="w-full text-left">
            <thead>
              <tr class="border-b border-[#00ff87]/30 text-[10px] font-mono uppercase tracking-widest text-[#00ff87]">
                <th class="pb-2">Masterpiece Creation</th>
                <th class="pb-2">Atelier Classification</th>
                <th class="pb-2 text-center">Exemplars</th>
                <th class="pb-2 text-right">Valuation</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
          </table>

          <div class="pt-4 flex justify-between items-baseline font-orbitron border-t border-white/10 mt-4">
            <span class="text-xs text-zinc-400 uppercase tracking-widest">Total Sovereign Valuation:</span>
            <span class="text-xl font-bold text-emerald-gradient">${formatRawAmount(grandTotal)}</span>
          </div>
        </div>

        <!-- Archival Guarantee & Signatures -->
        <div class="pt-6 border-t border-[#00ff87]/30 grid grid-cols-2 gap-8 items-end">
          <div class="text-[10px] text-zinc-400 font-sans leading-relaxed">
            <p class="italic text-zinc-300">
              "Every piece curated by Nexus Apex Atelier is guaranteed in perpetuity. Its silicon binning, factory-authorized warranty, and thermal benchmark provenance are chronicled in our registry."
            </p>
          </div>

          <div class="text-right space-y-1">
            <div class="font-orbitron font-bold text-lg text-[#00ff87]">ANTOINE DE NEXUS</div>
            <div class="text-[9px] uppercase tracking-widest font-mono text-zinc-400">Master Hardware Architect & Conservator</div>
            <div class="text-[9px] font-mono text-[#00ff87]">SEAL #APEX-890-SIGMA</div>
          </div>
        </div>

      </div>
    `;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  };

  const closeDeedModal = () => {
    const modal = document.getElementById('deedOfProvenanceModal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  };

  // --- CURRENCY SELECTOR HANDLER ---
  const setupCurrencySelector = () => {
    const selector = document.getElementById('currencySelector');
    if (!selector) return;

    selector.value = state.currency;
    selector.onchange = (e) => {
      state.currency = e.target.value;
      try {
        localStorage.setItem(STORAGE_KEYS.CURRENCY, state.currency);
      } catch (err) {}
      renderProductGallery();
      renderAcquisitionDrawer();
      init3DShowcaseCarousel();
      showLuxuryToast('Devise Switched', `Prices now displayed in ${state.currency}.`);
    };
  };

  // --- EVENT LISTENERS INITIALIZATION ---
  const setupEventListeners = () => {
    // Nav Drawer triggers
    const openCartBtn = document.getElementById('navCartBtn');
    if (openCartBtn) openCartBtn.onclick = openAcquisitionDrawer;

    const closeCartBtn = document.getElementById('closeAcquisitionDrawerBtn');
    if (closeCartBtn) closeCartBtn.onclick = closeAcquisitionDrawer;

    const cartBackdrop = document.getElementById('acquisitionBackdrop');
    if (cartBackdrop) cartBackdrop.onclick = closeAcquisitionDrawer;

    // Checkout button inside cart drawer
    const proceedCheckoutBtn = document.getElementById('proceedAcquisitionCheckoutBtn');
    if (proceedCheckoutBtn) proceedCheckoutBtn.onclick = handleProceedToCheckout;

    // Checkout modal cancel/close
    const closeCheckoutBtn = document.getElementById('closeCheckoutModalBtn');
    if (closeCheckoutBtn) {
      closeCheckoutBtn.onclick = () => {
        const modal = document.getElementById('acquisitionCheckoutModal');
        if (modal) {
          modal.classList.add('hidden');
          modal.classList.remove('flex');
          document.body.style.overflow = '';
        }
      };
    }

    // Checkout form submit
    const checkoutForm = document.getElementById('acquisitionCheckoutForm');
    if (checkoutForm) checkoutForm.onsubmit = handleCompleteAcquisition;

    // Deed modal close & print
    const closeDeedBtn = document.getElementById('closeDeedModalBtn');
    if (closeDeedBtn) closeDeedBtn.onclick = closeDeedModal;

    const printDeedBtn = document.getElementById('printDeedBtn');
    if (printDeedBtn) {
      printDeedBtn.onclick = () => window.print();
    }

    // Product Dossier Modal close
    const closeDossierBtn = document.getElementById('closeProductDossierBtn');
    if (closeDossierBtn) closeDossierBtn.onclick = closeProductDossierModal;

    const dossierBackdrop = document.getElementById('productDossierBackdrop');
    if (dossierBackdrop) dossierBackdrop.onclick = closeProductDossierModal;

    // Wishlist navigation trigger
    const wishlistNavBtn = document.getElementById('navWishlistBtn');
    if (wishlistNavBtn) {
      wishlistNavBtn.onclick = () => {
        if (state.wishlist.length === 0) {
          showLuxuryToast('Salon Privé Wishlist', 'Your private curation is empty. Mark hardware with the heart icon to curate your collection.', 'wishlist');
          document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
        } else {
          state.activeCategory = 'wishlist';
          state.currentPage = 1;
          renderCategoryFilters();
          renderProductGallery();
          document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
          showLuxuryToast('Salon Privé Curation', `Presenting ${state.wishlist.length} curated hardware masterpiece${state.wishlist.length > 1 ? 's' : ''}.`, 'wishlist');
        }
      };
    }

    // Membership triggers
    const openMembershipBtns = document.querySelectorAll('.open-membership-trigger');
    openMembershipBtns.forEach(btn => {
      btn.onclick = () => openMembershipModal();
    });

    const membershipForm = document.getElementById('membershipApplicationForm');
    if (membershipForm) membershipForm.onsubmit = handleMembershipSubmission;

    // Pre-fill VIP invitation code helper
    const prefillCodeBtn = document.getElementById('prefillVipCodeBtn');
    if (prefillCodeBtn) {
      prefillCodeBtn.onclick = () => {
        const input = document.getElementById('memberInvitationCodeInput');
        if (input) {
          input.value = 'APEX-VIP-2026';
          showLuxuryToast('VIP Credentials Applied', 'APEX-VIP-2026 priority allocation code verified.', 'promo');
        }
      };
    }

    // Promo code input inside cart
    const applyPromoBtn = document.getElementById('applyCartPromoBtn');
    if (applyPromoBtn) {
      applyPromoBtn.onclick = () => {
        const input = document.getElementById('cartPromoInput');
        const code = input?.value.trim().toUpperCase();
        if (code && PROMO_CODES[code]) {
          state.activePromo = code;
          try { localStorage.setItem(STORAGE_KEYS.PROMO, code); } catch (e) {}
          renderAcquisitionDrawer();
          showLuxuryToast('Privilege Code Applied', PROMO_CODES[code].desc, 'promo');
        } else {
          showLuxuryToast('Invalid Code', 'Try HEMAT10 for 10% rebate or GRATISONGKIR.', 'error');
        }
      };
    }

    // Catalog live search input
    const searchInput = document.getElementById('catalogSearchInput');
    if (searchInput) {
      searchInput.oninput = (e) => {
        state.searchQuery = e.target.value;
        state.currentPage = 1;
        renderProductGallery();
      };
    }

    // Catalog sorting select
    const sortSelect = document.getElementById('catalogSortSelect');
    if (sortSelect) {
      sortSelect.onchange = (e) => {
        state.sortBy = e.target.value;
        state.currentPage = 1;
        renderProductGallery();
      };
    }

    // Global detail triggers in static sections (e.g. Hero Card)
    document.querySelectorAll('.view-detail-trigger').forEach(el => {
      el.onclick = () => {
        const id = el.getAttribute('data-id');
        if (id) openProductDossierModal(id);
      };
    });

    document.querySelectorAll('.acquire-btn').forEach(el => {
      el.onclick = () => {
        const id = el.getAttribute('data-acquire-id');
        if (id) addProductToCart(id);
      };
    });

    // Modal backdrops dismissal
    const checkoutBackdrop = document.getElementById('checkoutModalBackdrop');
    if (checkoutBackdrop) {
      checkoutBackdrop.onclick = () => {
        const modal = document.getElementById('acquisitionCheckoutModal');
        if (modal) {
          modal.classList.add('hidden');
          modal.classList.remove('flex');
          document.body.style.overflow = '';
        }
      };
    }

    const deedBackdrop = document.getElementById('deedOfProvenanceBackdrop');
    if (deedBackdrop) deedBackdrop.onclick = closeDeedModal;

    const successBackdrop = document.getElementById('membershipSuccessBackdrop');
    if (successBackdrop) {
      successBackdrop.onclick = () => {
        const modal = document.getElementById('membershipSuccessModal');
        if (modal) {
          modal.classList.add('hidden');
          modal.classList.remove('flex');
          document.body.style.overflow = '';
        }
      };
    }

    // Community Discord CTA
    const discordBtn = document.getElementById('joinDiscordBtn');
    if (discordBtn) {
      discordBtn.onclick = () => {
        showLuxuryToast('Discord Lounge Link', 'Redirecting to Nexus Apex Squad Discord Lounge (4,820 online)...', 'promo');
      };
    }

    // Mobile navigation menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuToggleBtn');
    const mobileNavMenu = document.getElementById('mobileNavMenu');
    const mobileMenuIcon = document.getElementById('mobileMenuIcon');

    if (mobileMenuBtn && mobileNavMenu) {
      mobileMenuBtn.onclick = () => {
        const isClosed = mobileNavMenu.classList.contains('hidden');
        if (isClosed) {
          mobileNavMenu.classList.remove('hidden');
          if (mobileMenuIcon) {
            mobileMenuIcon.classList.remove('fa-bars');
            mobileMenuIcon.classList.add('fa-xmark');
          }
        } else {
          mobileNavMenu.classList.add('hidden');
          if (mobileMenuIcon) {
            mobileMenuIcon.classList.remove('fa-xmark');
            mobileMenuIcon.classList.add('fa-bars');
          }
        }
      };

      // Auto close mobile menu when clicking nav link
      document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
          mobileNavMenu.classList.add('hidden');
          if (mobileMenuIcon) {
            mobileMenuIcon.classList.remove('fa-xmark');
            mobileMenuIcon.classList.add('fa-bars');
          }
        });
      });
    }

    // Smooth scroll for nav anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '') return;
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Close modals on ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeProductDossierModal();
        closeAcquisitionDrawer();
        closeDeedModal();
        const checkoutModal = document.getElementById('acquisitionCheckoutModal');
        if (checkoutModal) {
          checkoutModal.classList.add('hidden');
          checkoutModal.classList.remove('flex');
        }
        const successModal = document.getElementById('membershipSuccessModal');
        if (successModal) {
          successModal.classList.add('hidden');
          successModal.classList.remove('flex');
        }
        document.body.style.overflow = '';
      }
    });
  };

  // --- INITIALIZE APPLICATION ---
  const initApexApp = () => {
    loadHardwareCatalog();
    loadPersistentState();
    setupCurrencySelector();
    renderCategoryFilters();
    renderProductGallery();
    init3DShowcaseCarousel();
    init3DCardTilt();
    setupDownloadApp();
    updateCartBadge();
    updateWishlistBadge();
    setupEventListeners();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApexApp);
  } else {
    initApexApp();
  }

})();
