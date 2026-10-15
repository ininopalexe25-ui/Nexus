/**
 * ============================================================
 * NEXUS E-COMMERCE - CORE APPLICATION ENGINE
 * Modern SPA, Persistent State, Multi-Criteria Filtering & Checkout
 * ============================================================
 */

(function () {
  'use strict';

  // --- STORAGE KEYS ---
  const STORAGE_KEYS = {
    PRODUCTS: 'nexus_gaming_products_v9',
    CART: 'nexus_gaming_cart_v2',
    WISHLIST: 'nexus_gaming_wishlist_v2',
    THEME: 'nexus_theme_pref',
    PROMO: 'nexus_active_promo_db',
    FLASH_TARGET: 'nexus_flash_target_time'
  };

  // --- APPLICATION STATE ---
  const state = {
    products: [],
    cart: [],
    wishlist: [],
    activePromo: null,
    currentTheme: 'dark',
    pagination: {
      currentPage: 1,
      itemsPerPage: 16
    },
    filters: {
      category: 'Semua',
      searchQuery: '',
      minPrice: null,
      maxPrice: null,
      onlyHighRating: false,
      sortBy: 'relevance'
    },
    detailModalState: {
      productId: null,
      selectedColor: null,
      selectedSize: null,
      quantity: 1,
      activeImageIndex: 0
    },
    checkoutState: {
      selectedCourierId: 'reguler',
      selectedPaymentId: 'qris'
    }
  };

  // --- CURRENCY & NUMBER FORMATTERS ---
  const formatIDR = (num) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(num);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('id-ID').format(num);
  };

  // --- PERSISTENCE HELPERS ---
  const loadStateFromStorage = () => {
    // 1. Products
    const savedProducts = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
    if (savedProducts) {
      try {
        const parsed = JSON.parse(savedProducts);
        if (Array.isArray(parsed) && parsed.length >= INITIAL_PRODUCTS.length) {
          state.products = parsed;
        } else {
          state.products = [...INITIAL_PRODUCTS];
          localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(state.products));
        }
      } catch (e) {
        state.products = [...INITIAL_PRODUCTS];
        localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(state.products));
      }
    } else {
      state.products = [...INITIAL_PRODUCTS];
      localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(state.products));
    }

    // 2. Cart
    const savedCart = localStorage.getItem(STORAGE_KEYS.CART);
    if (savedCart) {
      try {
        state.cart = JSON.parse(savedCart);
      } catch (e) {
        state.cart = [];
      }
    }

    // 3. Wishlist
    const savedWishlist = localStorage.getItem(STORAGE_KEYS.WISHLIST);
    if (savedWishlist) {
      try {
        state.wishlist = JSON.parse(savedWishlist);
      } catch (e) {
        state.wishlist = [];
      }
    }

    // 4. Promo
    const savedPromo = localStorage.getItem(STORAGE_KEYS.PROMO);
    if (savedPromo && PROMO_CODES[savedPromo]) {
      state.activePromo = PROMO_CODES[savedPromo];
    }

    // 5. Theme - Default to dark mode for authentic gaming battlestation immersion
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
    if (savedTheme) {
      state.currentTheme = savedTheme;
    } else {
      state.currentTheme = 'dark';
    }
  };

  const saveProductsToStorage = () => {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(state.products));
  };

  const saveCartToStorage = () => {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(state.cart));
    updateCartIndicators();
  };

  const saveWishlistToStorage = () => {
    localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(state.wishlist));
    updateWishlistIndicators();
  };

  const savePromoToStorage = () => {
    if (state.activePromo) {
      localStorage.setItem(STORAGE_KEYS.PROMO, state.activePromo.code);
    } else {
      localStorage.removeItem(STORAGE_KEYS.PROMO);
    }
  };

  // --- THEME MANAGEMENT ---
  const applyTheme = (theme) => {
    state.currentTheme = theme;
    const root = document.documentElement;
    const themeIcon = document.getElementById('themeIcon');

    if (theme === 'dark') {
      root.classList.add('dark');
      if (themeIcon) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      }
    } else {
      root.classList.remove('dark');
      if (themeIcon) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
      }
    }
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  };

  const toggleTheme = () => {
    const nextTheme = state.currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    showToast(`Mode tampilan diubah ke ${nextTheme === 'dark' ? 'Gelap' : 'Terang'}`, 'info');
  };

  // --- TOAST NOTIFICATION ENGINE ---
  const showToast = (message, type = 'info') => {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toastId = 'toast-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
    const toast = document.createElement('div');
    toast.id = toastId;

    let iconClass = 'fa-info-circle text-emerald-500';
    let borderColor = 'border-emerald-500/30';
    let bgColor = 'bg-white dark:bg-zinc-900';

    if (type === 'success') {
      iconClass = 'fa-circle-check text-emerald-500';
      borderColor = 'border-emerald-500/30';
    } else if (type === 'warning') {
      iconClass = 'fa-triangle-exclamation text-amber-500';
      borderColor = 'border-amber-500/30';
    } else if (type === 'danger' || type === 'error') {
      iconClass = 'fa-circle-xmark text-rose-500';
      borderColor = 'border-rose-500/30';
    }

    toast.className = `toast-enter pointer-events-auto flex items-center justify-between gap-3 px-4 py-3 rounded-2xl shadow-xl border ${borderColor} ${bgColor} text-zinc-800 dark:text-zinc-100 text-xs font-medium`;
    toast.innerHTML = `
      <div class="flex items-center gap-2.5">
        <i class="fa-solid ${iconClass} text-base shrink-0"></i>
        <span>${message}</span>
      </div>
      <button class="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition ml-2" onclick="document.getElementById('${toastId}')?.remove()">
        <i class="fa-solid fa-xmark text-xs"></i>
      </button>
    `;

    container.appendChild(toast);

    // Auto remove after 3.2s
    setTimeout(() => {
      if (toast && toast.parentNode) {
        toast.classList.remove('toast-enter');
        toast.classList.add('toast-leave');
        setTimeout(() => toast.remove(), 250);
      }
    }, 3200);
  };

  // --- CART ANIMATION & BADGE UPDATES ---
  const triggerCartBounce = () => {
    const cartWrapper = document.getElementById('cartIconWrapper');
    if (cartWrapper) {
      cartWrapper.classList.remove('animate-cart-bounce');
      void cartWrapper.offsetWidth; // trigger reflow
      cartWrapper.classList.add('animate-cart-bounce');
    }
  };

  const updateCartIndicators = () => {
    const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartBadge = document.getElementById('cartCountBadge');
    const drawerCount = document.getElementById('cartDrawerItemCount');
    const navSubtotal = document.getElementById('navCartSubtotal');

    if (cartBadge) {
      if (totalCount > 0) {
        cartBadge.textContent = totalCount > 99 ? '99+' : totalCount;
        cartBadge.classList.remove('hidden');
      } else {
        cartBadge.classList.add('hidden');
      }
    }

    if (drawerCount) {
      drawerCount.textContent = totalCount;
    }

    const { subtotal } = calculateCartFinancials();
    if (navSubtotal) {
      navSubtotal.textContent = formatIDR(subtotal);
    }
  };

  const updateWishlistIndicators = () => {
    const totalCount = state.wishlist.length;
    const badge = document.getElementById('wishlistCountBadge');
    const drawerCount = document.getElementById('wishlistDrawerItemCount');

    if (badge) {
      if (totalCount > 0) {
        badge.textContent = totalCount > 99 ? '99+' : totalCount;
        badge.classList.remove('hidden');
      } else {
        badge.classList.add('hidden');
      }
    }

    if (drawerCount) {
      drawerCount.textContent = totalCount;
    }
  };

  // --- FLASH SALE REAL-TIME COUNTDOWN TIMER ---
  const initFlashSaleCountdown = () => {
    let targetTime = localStorage.getItem(STORAGE_KEYS.FLASH_TARGET);
    const now = Date.now();

    // If no target or target passed, set target to 8 hours from now
    if (!targetTime || parseInt(targetTime, 10) <= now) {
      const eightHoursMs = 8 * 60 * 60 * 1000 + 45 * 60 * 1000;
      targetTime = (now + eightHoursMs).toString();
      localStorage.setItem(STORAGE_KEYS.FLASH_TARGET, targetTime);
    }

    const hoursEl = document.getElementById('countdownHours');
    const minsEl = document.getElementById('countdownMinutes');
    const secsEl = document.getElementById('countdownSeconds');

    const updateTimer = () => {
      const currentTime = Date.now();
      let diff = parseInt(targetTime, 10) - currentTime;

      if (diff <= 0) {
        // Reset timer loop
        targetTime = (Date.now() + 8 * 3600 * 1000).toString();
        localStorage.setItem(STORAGE_KEYS.FLASH_TARGET, targetTime);
        diff = 8 * 3600 * 1000;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
      if (minsEl) minsEl.textContent = String(minutes).padStart(2, '0');
      if (secsEl) secsEl.textContent = String(seconds).padStart(2, '0');
    };

    updateTimer();
    setInterval(updateTimer, 1000);
  };

  // --- RENDER FLASH SALE PRODUCTS ---
  const renderFlashSaleProducts = () => {
    const container = document.getElementById('flashSaleContainer');
    if (!container) return;

    const flashProducts = state.products.filter(p => p.isFlashSale).slice(0, 8);

    container.innerHTML = flashProducts.map(product => {
      const isWishlisted = state.wishlist.includes(product.id);
      const totalUnits = product.soldCount + product.stock;
      const soldPercent = Math.min(Math.round((product.soldCount / totalUnits) * 100), 96);

      return `
        <div class="bg-white dark:bg-[#101320] rounded-2xl border border-zinc-200 dark:border-rose-500/30 shadow-sm overflow-hidden flex flex-col group gaming-card hover:border-rose-500 hover:shadow-[0_0_25px_rgba(244,63,94,0.35)] transition-all duration-300">
          
          <!-- Image Container -->
          <div class="relative aspect-square overflow-hidden bg-zinc-50 dark:bg-[#151829] p-4 flex items-center justify-center cursor-pointer" data-action="open-detail" data-product-id="${product.id}">
            <img 
              src="${product.images[0]}" 
              alt="${product.name}" 
              loading="lazy" 
              class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            >
            <div class="absolute top-3 left-3 flex flex-col gap-1">
              <span class="px-2.5 py-1 rounded-md bg-gradient-to-r from-rose-600 to-red-600 text-white text-[11px] font-black uppercase tracking-wider shadow-[0_0_10px_rgba(244,63,94,0.4)] font-mono">
                -${product.discountPercentage}%
              </span>
            </div>
            <button 
              data-action="toggle-wishlist" 
              data-product-id="${product.id}" 
              class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 dark:bg-[#101320]/90 text-zinc-700 dark:text-zinc-200 hover:text-rose-500 flex items-center justify-center transition shadow-sm backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-700/50"
              title="${isWishlisted ? 'Hapus dari Wishlist' : 'Tambah ke Wishlist'}"
            >
              <i class="${isWishlisted ? 'fa-solid fa-heart text-rose-500 animate-heart-pop' : 'fa-regular fa-heart'} text-sm"></i>
            </button>
          </div>

          <!-- Content Details -->
          <div class="p-4 flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-1.5 text-[11px] font-semibold text-zinc-400 mb-1 font-mono">
                <i class="fa-solid fa-layer-group text-rose-500"></i>
                <span class="uppercase tracking-wider">${product.category}</span>
              </div>
              <h3 
                data-action="open-detail" 
                data-product-id="${product.id}" 
                class="text-xs font-bold text-zinc-900 dark:text-white line-clamp-2 hover:text-emerald-400 cursor-pointer transition leading-snug font-heading"
              >
                ${product.name}
              </h3>

              <!-- Price -->
              <div class="mt-2.5 flex items-baseline gap-2">
                <span class="text-base font-black text-rose-600 dark:text-rose-400 font-mono drop-shadow-[0_0_8px_rgba(244,63,94,0.25)]">${formatIDR(product.price)}</span>
                <span class="text-xs text-zinc-400 line-through font-mono">${formatIDR(product.originalPrice)}</span>
              </div>

              <!-- Flash Sale Stock Progress Bar -->
              <div class="mt-3 space-y-1.5">
                <div class="flex justify-between text-[11px] font-bold">
                  <span class="text-rose-600 dark:text-rose-400 flex items-center gap-1 font-mono"><i class="fa-solid fa-fire text-xs animate-bounce"></i>Segera Habis</span>
                  <span class="text-zinc-400 font-mono text-[10px]">Sisa ${product.stock} unit</span>
                </div>
                <div class="w-full h-2 rounded-full bg-zinc-100 dark:bg-zinc-800/80 overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-rose-600 to-amber-500 rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]" style="width: ${soldPercent}%"></div>
                </div>
              </div>
            </div>

            <!-- Quick Add CTA -->
            <div class="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center gap-2">
              <button 
                data-action="open-detail" 
                data-product-id="${product.id}" 
                class="flex-1 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 text-xs font-bold transition text-center font-mono cursor-pointer"
              >
                DETAIL
              </button>
              <button 
                data-action="quick-add-cart" 
                data-product-id="${product.id}" 
                class="py-2 px-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white text-xs font-black shadow-[0_0_12px_rgba(244,63,94,0.4)] transition flex items-center gap-1.5 font-mono cursor-pointer"
                title="Beli Cepat"
              >
                <i class="fa-solid fa-cart-plus"></i>
                <span class="hidden sm:inline">AMBIL</span>
              </button>
            </div>

          </div>

        </div>
      `;
    }).join('');
  };

  // --- RENDER CATEGORY PILLS BAR ---
  const renderCategoryPills = () => {
    const container = document.getElementById('categoryPillsContainer');
    if (!container) return;

    const categories = [
      'Semua',
      'Komponen Rakit PC',
      'PC & Konsol Gaming',
      'Keyboard & Mouse Gaming',
      'Audio & Headset Gaming',
      'Monitor & Setup Gaming',
      'Kursi & Meja Gaming'
    ];

    container.innerHTML = categories.map(cat => {
      const isActive = state.filters.category === cat;
      const count = cat === 'Semua' 
        ? state.products.length 
        : state.products.filter(p => p.category === cat).length;

      return `
        <button 
          data-action="category-filter" 
          data-category="${cat}" 
          class="shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer font-mono ${
            isActive 
              ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-zinc-950 font-black shadow-[0_0_15px_rgba(16,185,129,0.35)]' 
              : 'bg-white dark:bg-[#111422] border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-[#161a2c] hover:border-emerald-500/50 hover:text-emerald-400'
          }"
        >
          <span>${cat}</span>
          <span class="text-[10px] px-1.5 py-0.5 rounded-md font-mono ${isActive ? 'bg-zinc-950/20 text-zinc-950 font-black' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400'}">
            ${count}
          </span>
        </button>
      `;
    }).join('');
  };

  // --- SKELETON LOADING SIMULATION ---
  const renderSkeletonCards = () => {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    const skeletons = Array(8).fill(0).map(() => `
      <div class="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/90 dark:border-zinc-800 p-4 space-y-3">
        <div class="w-full aspect-square rounded-xl skeleton-shimmer"></div>
        <div class="h-3 w-1/3 rounded-md skeleton-shimmer"></div>
        <div class="h-4 w-5/6 rounded-md skeleton-shimmer"></div>
        <div class="h-4 w-1/2 rounded-md skeleton-shimmer"></div>
        <div class="h-8 w-full rounded-xl skeleton-shimmer mt-2"></div>
      </div>
    `).join('');

    grid.innerHTML = skeletons;
  };

  // --- FILTER & SORT PRODUCTS ENGINE ---
  const getFilteredAndSortedProducts = () => {
    let result = [...state.products];

    // 1. Category Filter
    if (state.filters.category !== 'Semua') {
      result = result.filter(p => p.category === state.filters.category);
    }

    // 2. Search Query Filter (Debounced)
    if (state.filters.searchQuery.trim() !== '') {
      const q = state.filters.searchQuery.toLowerCase().trim();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }

    // 3. Min Price Filter
    if (state.filters.minPrice !== null && !isNaN(state.filters.minPrice)) {
      result = result.filter(p => p.price >= state.filters.minPrice);
    }

    // 4. Max Price Filter
    if (state.filters.maxPrice !== null && !isNaN(state.filters.maxPrice)) {
      result = result.filter(p => p.price <= state.filters.maxPrice);
    }

    // 5. Rating 4.0+ Filter
    if (state.filters.onlyHighRating) {
      result = result.filter(p => p.rating >= 4.0);
    }

    // 6. Sorting
    switch (state.filters.sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'sold-desc':
        result.sort((a, b) => b.soldCount - a.soldCount);
        break;
      case 'rating-desc':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'relevance':
      default:
        // Default stability order
        break;
    }

    return result;
  };

  // --- RENDER MAIN CATALOG GRID ---
  const renderCatalogGrid = (withSkeleton = false) => {
    const grid = document.getElementById('productsGrid');
    const emptyState = document.getElementById('emptyState');
    const countLabel = document.getElementById('productCountLabel');
    if (!grid) return;

    if (withSkeleton) {
      renderSkeletonCards();
      setTimeout(() => {
        actuallyRenderCatalog();
      }, 260);
    } else {
      actuallyRenderCatalog();
    }

    function actuallyRenderCatalog() {
      const filtered = getFilteredAndSortedProducts();

      if (countLabel) {
        countLabel.textContent = filtered.length;
      }

      renderCategoryPills();
      renderActiveFilterChips();

      if (filtered.length === 0) {
        grid.innerHTML = '';
        if (emptyState) emptyState.classList.remove('hidden');
        renderPagination([]);
        return;
      }

      if (emptyState) emptyState.classList.add('hidden');

      // Pagination calculation
      const totalPages = Math.ceil(filtered.length / state.pagination.itemsPerPage) || 1;
      if (state.pagination.currentPage > totalPages) state.pagination.currentPage = totalPages;
      if (state.pagination.currentPage < 1) state.pagination.currentPage = 1;

      const startIdx = (state.pagination.currentPage - 1) * state.pagination.itemsPerPage;
      const endIdx = Math.min(startIdx + state.pagination.itemsPerPage, filtered.length);
      const pageItems = filtered.slice(startIdx, endIdx);

      grid.innerHTML = pageItems.map(product => {
        const isWishlisted = state.wishlist.includes(product.id);
        const hasVariants = (product.variants.colors && product.variants.colors.length > 0) || 
                            (product.variants.sizes && product.variants.sizes.length > 0);

        return `
          <div class="bg-white dark:bg-[#101320] rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 shadow-sm overflow-hidden flex flex-col group gaming-card hover:border-emerald-500/60 dark:hover:border-emerald-500/60 transition-all duration-200">
            
            <!-- Card Image Box -->
            <div class="relative aspect-square overflow-hidden bg-zinc-50 dark:bg-[#141829] p-4 flex items-center justify-center cursor-pointer" data-action="open-detail" data-product-id="${product.id}">
              <img 
                src="${product.images[0]}" 
                alt="${product.name}" 
                loading="lazy" 
                class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              >
              
              <!-- Badges -->
              <div class="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                ${product.badge ? `
                  <span class="px-2.5 py-0.5 rounded-md ${
                    product.badge === 'Official Store' ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-[0_0_8px_rgba(16,185,129,0.25)]' : 
                    product.badge === 'Terlaris' ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30 shadow-[0_0_8px_rgba(245,158,11,0.25)]' : 'bg-emerald-600 text-white'
                  } text-[10px] font-bold uppercase tracking-wider flex items-center font-mono">
                    ${product.badge === 'Official Store' ? '<i class="fa-solid fa-circle-check text-emerald-400 mr-1 text-[9px]"></i>' : ''}
                    ${product.badge === 'Terlaris' ? '<i class="fa-solid fa-fire text-amber-400 mr-1 text-[9px] animate-pulse"></i>' : ''}
                    ${product.badge}
                  </span>
                ` : ''}
                <span class="px-2 py-0.5 rounded-md bg-gradient-to-r from-rose-600 to-red-600 text-white text-[10px] font-black shadow-[0_0_8px_rgba(244,63,94,0.3)] font-mono">
                  -${product.discountPercentage}%
                </span>
              </div>

              <!-- Wishlist Heart Button -->
              <button 
                data-action="toggle-wishlist" 
                data-product-id="${product.id}" 
                class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 dark:bg-[#101320]/90 text-zinc-600 dark:text-zinc-300 hover:text-rose-500 flex items-center justify-center transition shadow-sm backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-700/50"
                title="${isWishlisted ? 'Hapus dari Wishlist' : 'Simpan ke Wishlist'}"
              >
                <i class="${isWishlisted ? 'fa-solid fa-heart text-rose-500 animate-heart-pop' : 'fa-regular fa-heart'} text-sm"></i>
              </button>
            </div>

            <!-- Card Body -->
            <div class="p-4 flex-1 flex flex-col justify-between">
              <div>
                <span class="text-[11px] font-semibold text-zinc-400 block mb-1 uppercase tracking-wider font-mono">${product.category}</span>
                <h3 
                  data-action="open-detail" 
                  data-product-id="${product.id}" 
                  class="text-xs font-bold text-zinc-900 dark:text-white line-clamp-2 hover:text-emerald-400 cursor-pointer transition leading-snug font-heading"
                >
                  ${product.name}
                </h3>

                <!-- Ratings & Sold -->
                <div class="flex items-center gap-2 mt-2 text-[11px]">
                  <div class="flex items-center text-amber-400">
                    <i class="fa-solid fa-star text-xs"></i>
                    <span class="font-bold text-zinc-800 dark:text-zinc-200 ml-1 font-mono">${product.rating}</span>
                  </div>
                  <span class="text-zinc-300 dark:text-zinc-700">|</span>
                  <span class="text-zinc-500 dark:text-zinc-400 font-mono">Terjual ${formatNumber(product.soldCount)}</span>
                </div>

                <!-- Price -->
                <div class="mt-2.5 flex items-baseline gap-2">
                  <span class="text-base font-black text-zinc-900 dark:text-white font-mono">${formatIDR(product.price)}</span>
                  <span class="text-xs text-zinc-400 line-through font-mono">${formatIDR(product.originalPrice)}</span>
                </div>

                <!-- Stock availability tag -->
                <div class="mt-2 text-[11px] text-zinc-500 dark:text-zinc-400 font-mono flex items-center">
                  <span class="${product.stock <= 5 ? 'text-rose-500 font-bold' : 'text-zinc-400'}">
                    <i class="fa-solid fa-microchip text-[10px] text-emerald-500 mr-1"></i>Sisa ${product.stock} unit
                  </span>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center gap-2">
                <button 
                  data-action="open-detail" 
                  data-product-id="${product.id}" 
                  class="flex-1 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800/80 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-bold transition font-mono cursor-pointer"
                >
                  DETAIL
                </button>
                <button 
                  data-action="quick-add-cart" 
                  data-product-id="${product.id}" 
                  class="py-2 px-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-zinc-950 text-xs font-black shadow-[0_0_12px_rgba(16,185,129,0.25)] transition flex items-center gap-1.5 font-mono cursor-pointer"
                  title="Tambah ke Keranjang"
                >
                  <i class="fa-solid fa-plus text-xs"></i>
                  <span>+ CART</span>
                </button>
              </div>

            </div>

          </div>
        `;
      }).join('');

      renderPagination(filtered);
    }
  };

  // --- RENDER PAGINATION BAR ---
  const renderPagination = (filteredProducts) => {
    const container = document.getElementById('paginationContainer');
    const buttonsContainer = document.getElementById('paginationButtons');
    const pageRangeLabel = document.getElementById('pageRangeLabel');
    const totalItemsLabel = document.getElementById('totalItemsLabel');
    if (!container || !buttonsContainer) return;

    if (!filteredProducts || filteredProducts.length === 0) {
      container.classList.add('hidden');
      return;
    }

    container.classList.remove('hidden');

    const totalPages = Math.ceil(filteredProducts.length / state.pagination.itemsPerPage) || 1;
    if (state.pagination.currentPage > totalPages) state.pagination.currentPage = totalPages;
    if (state.pagination.currentPage < 1) state.pagination.currentPage = 1;

    const cur = state.pagination.currentPage;
    const startIdx = (cur - 1) * state.pagination.itemsPerPage;
    const endIdx = Math.min(startIdx + state.pagination.itemsPerPage, filteredProducts.length);

    if (pageRangeLabel) pageRangeLabel.textContent = `${startIdx + 1}-${endIdx}`;
    if (totalItemsLabel) totalItemsLabel.textContent = filteredProducts.length;

    // Previous button
    const hasPrev = cur > 1;
    let buttonsHTML = `
      <button 
        data-action="prev-page" 
        class="px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition ${
          hasPrev 
            ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer' 
            : 'opacity-40 bg-zinc-100 dark:bg-zinc-800 text-zinc-400 cursor-not-allowed'
        }"
        ${!hasPrev ? 'disabled' : ''}
      >
        <i class="fa-solid fa-chevron-left text-[10px]"></i>
        <span>Sebelumnya</span>
      </button>
    `;

    // Numeric page buttons
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (cur > 3) pages.push('...');
      const start = Math.max(2, cur - 1);
      const end = Math.min(totalPages - 1, cur + 1);
      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) pages.push(i);
      }
      if (cur < totalPages - 2) pages.push('...');
      if (!pages.includes(totalPages)) pages.push(totalPages);
    }

    pages.forEach(p => {
      if (p === '...') {
        buttonsHTML += `<span class="px-2 py-1 text-xs text-zinc-400 select-none">...</span>`;
      } else {
        const isCurrent = p === cur;
        buttonsHTML += `
          <button 
            data-action="goto-page" 
            data-page="${p}" 
            class="w-8 h-8 rounded-xl text-xs font-bold transition flex items-center justify-center ${
              isCurrent 
                ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 shadow-sm' 
                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
            }"
          >
            ${p}
          </button>
        `;
      }
    });

    // Next button
    const hasNext = cur < totalPages;
    buttonsHTML += `
      <button 
        data-action="next-page" 
        class="px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition ${
          hasNext 
            ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer' 
            : 'opacity-40 bg-zinc-100 dark:bg-zinc-800 text-zinc-400 cursor-not-allowed'
        }"
        ${!hasNext ? 'disabled' : ''}
      >
        <span>Berikutnya</span>
        <i class="fa-solid fa-chevron-right text-[10px]"></i>
      </button>
    `;

    buttonsContainer.innerHTML = buttonsHTML;
  };

  // --- RENDER ACTIVE FILTER CHIPS ---
  const renderActiveFilterChips = () => {
    const container = document.getElementById('activeFilterTags');
    const chipsList = document.getElementById('filterChipsList');
    if (!container || !chipsList) return;

    const chips = [];

    if (state.filters.category !== 'Semua') {
      chips.push({ label: `Kategori: ${state.filters.category}`, type: 'category' });
    }
    if (state.filters.searchQuery.trim() !== '') {
      chips.push({ label: `Cari: "${state.filters.searchQuery}"`, type: 'search' });
    }
    if (state.filters.minPrice !== null) {
      chips.push({ label: `Min: ${formatIDR(state.filters.minPrice)}`, type: 'minPrice' });
    }
    if (state.filters.maxPrice !== null) {
      chips.push({ label: `Max: ${formatIDR(state.filters.maxPrice)}`, type: 'maxPrice' });
    }
    if (state.filters.onlyHighRating) {
      chips.push({ label: 'Rating 4.0+', type: 'rating' });
    }

    if (chips.length > 0) {
      container.classList.remove('hidden');
      chipsList.innerHTML = chips.map(chip => `
        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 text-[11px] font-medium">
          <span>${chip.label}</span>
          <button data-action="remove-active-filter" data-filter-type="${chip.type}" class="hover:text-rose-500">
            <i class="fa-solid fa-xmark text-[10px]"></i>
          </button>
        </span>
      `).join('');
    } else {
      container.classList.add('hidden');
      chipsList.innerHTML = '';
    }
  };

  // --- RESET FILTERS ---
  const resetAllFilters = () => {
    state.filters.category = 'Semua';
    state.filters.searchQuery = '';
    state.filters.minPrice = null;
    state.filters.maxPrice = null;
    state.filters.onlyHighRating = false;
    state.filters.sortBy = 'relevance';
    state.pagination.currentPage = 1;

    // Clear inputs
    const searchInput = document.getElementById('searchInput');
    const mobileSearchInput = document.getElementById('mobileSearchInput');
    const minPriceInput = document.getElementById('minPriceInput');
    const maxPriceInput = document.getElementById('maxPriceInput');
    const ratingCheck = document.getElementById('ratingFilterCheckbox');
    const sortSelect = document.getElementById('sortSelect');
    const clearBtn = document.getElementById('clearSearchBtn');
    const mobileClearBtn = document.getElementById('mobileClearSearchBtn');

    if (searchInput) searchInput.value = '';
    if (mobileSearchInput) mobileSearchInput.value = '';
    if (minPriceInput) minPriceInput.value = '';
    if (maxPriceInput) maxPriceInput.value = '';
    if (ratingCheck) ratingCheck.checked = false;
    if (sortSelect) sortSelect.value = 'relevance';
    if (clearBtn) clearBtn.classList.add('hidden');
    if (mobileClearBtn) mobileClearBtn.classList.add('hidden');

    renderCatalogGrid(true);
    showToast('Filter pencarian telah direset', 'info');
  };

  // --- WISHLIST MANAGEMENT ---
  const toggleWishlist = (productId) => {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    const index = state.wishlist.indexOf(productId);
    if (index > -1) {
      state.wishlist.splice(index, 1);
      showToast(`"${product.name}" dihapus dari wishlist`, 'info');
    } else {
      state.wishlist.push(productId);
      showToast(`"${product.name}" ditambahkan ke wishlist!`, 'success');
    }

    saveWishlistToStorage();
    renderFlashSaleProducts();
    renderCatalogGrid(false);
    renderWishlistDrawerItems();
  };

  const renderWishlistDrawerItems = () => {
    const container = document.getElementById('wishlistItemsList');
    if (!container) return;

    if (state.wishlist.length === 0) {
      container.innerHTML = `
        <div class="py-16 text-center space-y-3">
          <div class="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 flex items-center justify-center text-2xl mx-auto">
            <i class="fa-regular fa-heart"></i>
          </div>
          <h4 class="text-sm font-bold text-zinc-800 dark:text-zinc-200">Wishlist Anda Masih Kosong</h4>
          <p class="text-xs text-zinc-400 max-w-xs mx-auto">Klik ikon hati pada produk favorit Anda untuk menyimpannya di sini.</p>
        </div>
      `;
      return;
    }

    const wishlistedProducts = state.products.filter(p => state.wishlist.includes(p.id));

    container.innerHTML = wishlistedProducts.map(product => `
      <div class="flex items-center gap-3 p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-800">
        <div class="w-16 h-16 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 p-1 flex items-center justify-center shrink-0 cursor-pointer" data-action="open-detail" data-product-id="${product.id}">
          <img 
            src="${product.images[0]}" 
            alt="${product.name}" 
            class="w-full h-full object-contain" 
          >
        </div>
        <div class="flex-1 min-w-0">
          <h4 
            class="text-xs font-bold text-zinc-900 dark:text-white truncate cursor-pointer hover:text-emerald-600 dark:hover:text-emerald-400" 
            data-action="open-detail" 
            data-product-id="${product.id}"
          >
            ${product.name}
          </h4>
          <p class="text-xs font-mono font-bold text-zinc-900 dark:text-white mt-1">${formatIDR(product.price)}</p>
          <div class="flex items-center gap-2 mt-2">
            <button 
              data-action="quick-add-cart" 
              data-product-id="${product.id}" 
              class="px-2.5 py-1 rounded-lg bg-zinc-900 hover:bg-black dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-950 text-[11px] font-bold transition shadow-sm"
            >
              + Keranjang
            </button>
            <button 
              data-action="toggle-wishlist" 
              data-product-id="${product.id}" 
              class="text-rose-500 hover:text-rose-600 text-xs transition p-1"
              title="Hapus"
            >
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  };

  // --- CART FINANCIAL CALCULATIONS ---
  const calculateCartFinancials = () => {
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let promoDiscount = 0;
    let shipping = subtotal > 0 ? (COURIER_OPTIONS.find(c => c.id === state.checkoutState.selectedCourierId)?.price || 15000) : 0;

    if (state.activePromo && subtotal > 0) {
      if (state.activePromo.type === 'percentage') {
        promoDiscount = Math.round(subtotal * state.activePromo.value);
      } else if (state.activePromo.type === 'fixed') {
        if (subtotal >= state.activePromo.minSpend) {
          promoDiscount = state.activePromo.value;
        }
      } else if (state.activePromo.type === 'shipping') {
        shipping = 0;
      }
    }

    // PPN (11% on taxable subtotal after promo)
    const taxableSubtotal = Math.max(0, subtotal - promoDiscount);
    const tax = Math.round(taxableSubtotal * 0.11);
    const grandTotal = subtotal > 0 ? (taxableSubtotal + tax + shipping) : 0;

    return {
      subtotal,
      promoDiscount,
      tax,
      shipping,
      grandTotal
    };
  };

  // --- ADD TO CART LOGIC ---
  const addToCart = (productId, variant = {}, quantity = 1) => {
    const product = state.products.find(p => p.id === productId);
    if (!product) return false;

    if (product.stock <= 0) {
      showToast(`Maaf, stok ${product.name} telah habis!`, 'danger');
      return false;
    }

    // Default variant if not chosen
    const color = variant.color || (product.variants.colors && product.variants.colors.length > 0 ? product.variants.colors[0] : null);
    const size = variant.size || (product.variants.sizes && product.variants.sizes.length > 0 ? product.variants.sizes[0] : null);

    // Look for exact item match in cart
    const existingIndex = state.cart.findIndex(item => 
      item.productId === productId && 
      item.color === color && 
      item.size === size
    );

    if (existingIndex > -1) {
      const currentQty = state.cart[existingIndex].quantity;
      if (currentQty + quantity > product.stock) {
        showToast(`Batas stok tercapai! Sisa stok produk ini hanya ${product.stock} unit.`, 'warning');
        return false;
      }
      state.cart[existingIndex].quantity += quantity;
    } else {
      if (quantity > product.stock) {
        showToast(`Jumlah melebihi stok yang tersedia (${product.stock} unit).`, 'warning');
        return false;
      }
      state.cart.push({
        cartItemId: 'ITEM-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        color: color,
        size: size,
        quantity: quantity
      });
    }

    saveCartToStorage();
    triggerCartBounce();
    renderCartDrawerItems();
    showToast(`Berhasil menambahkan "${product.name}" ke keranjang`, 'success');
    return true;
  };

  // --- RENDER CART DRAWER ---
  const renderCartDrawerItems = () => {
    const listContainer = document.getElementById('cartItemsList');
    const footerContainer = document.getElementById('cartDrawerFooter');
    if (!listContainer) return;

    if (state.cart.length === 0) {
      listContainer.innerHTML = `
        <div class="py-20 text-center space-y-3">
          <div class="w-16 h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 flex items-center justify-center text-3xl mx-auto">
            <i class="fa-solid fa-basket-shopping"></i>
          </div>
          <h4 class="text-sm font-bold text-zinc-800 dark:text-zinc-200">Keranjang Belanja Anda Kosong</h4>
          <p class="text-xs text-zinc-400 max-w-xs mx-auto">Yuk cari produk impianmu dan nikmati berbagai promo diskon menarik hari ini!</p>
          <button 
            onclick="document.getElementById('closeCartBtn')?.click(); window.location.hash = '#katalog';" 
            class="mt-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-black dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-950 text-xs font-bold shadow-sm transition"
          >
            Mulai Belanja Sekarang
          </button>
        </div>
      `;

      if (footerContainer) {
        footerContainer.classList.add('opacity-50', 'pointer-events-none');
      }
      updateCartCalculationsUI();
      return;
    }

    if (footerContainer) {
      footerContainer.classList.remove('opacity-50', 'pointer-events-none');
    }

    listContainer.innerHTML = state.cart.map(item => {
      const product = state.products.find(p => p.id === item.productId);
      const maxStock = product ? product.stock : 99;
      const variantDesc = [item.color, item.size].filter(Boolean).join(' / ');

      return `
        <div class="py-3 flex items-start gap-3">
          <div class="w-16 h-16 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 p-1 flex items-center justify-center shrink-0">
            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-contain">
          </div>
          
          <div class="flex-1 min-w-0">
            <h4 class="text-xs font-bold text-zinc-900 dark:text-white truncate">${item.name}</h4>
            ${variantDesc ? `
              <p class="text-[11px] text-zinc-400 font-medium mt-0.5">Varian: <span class="text-zinc-700 dark:text-zinc-300 font-semibold">${variantDesc}</span></p>
            ` : ''}
            
            <p class="text-xs font-bold font-mono text-zinc-900 dark:text-white mt-1">${formatIDR(item.price)}</p>

            <!-- Quantity Stepper -->
            <div class="mt-2 flex items-center justify-between">
              <div class="flex items-center border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden bg-zinc-50 dark:bg-zinc-850">
                <button 
                  data-action="cart-qty-minus" 
                  data-cart-item-id="${item.cartItemId}" 
                  class="w-7 h-7 flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 text-xs transition"
                  title="Kurang"
                >
                  <i class="fa-solid fa-minus text-[10px]"></i>
                </button>
                <span class="w-8 text-center text-xs font-bold text-zinc-900 dark:text-white font-mono">${item.quantity}</span>
                <button 
                  data-action="cart-qty-plus" 
                  data-cart-item-id="${item.cartItemId}" 
                  class="w-7 h-7 flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 text-xs transition"
                  title="Tambah"
                >
                  <i class="fa-solid fa-plus text-[10px]"></i>
                </button>
              </div>

              <!-- Delete button -->
              <button 
                data-action="cart-remove-item" 
                data-cart-item-id="${item.cartItemId}" 
                class="text-zinc-400 hover:text-rose-500 text-xs transition p-1"
                title="Hapus Produk"
              >
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>

          </div>
        </div>
      `;
    }).join('');

    updateCartCalculationsUI();
  };

  // --- UPDATE CART CALCULATIONS UI ---
  const updateCartCalculationsUI = () => {
    const { subtotal, promoDiscount, tax, shipping, grandTotal } = calculateCartFinancials();

    const subtotalEl = document.getElementById('cartSubtotalText');
    const discountRowEl = document.getElementById('cartDiscountRow');
    const discountEl = document.getElementById('cartDiscountText');
    const taxEl = document.getElementById('cartTaxText');
    const shippingEl = document.getElementById('cartShippingText');
    const grandTotalEl = document.getElementById('cartGrandTotalText');

    if (subtotalEl) subtotalEl.textContent = formatIDR(subtotal);

    if (discountRowEl && discountEl) {
      if (promoDiscount > 0) {
        discountRowEl.classList.remove('hidden');
        discountEl.textContent = `- ${formatIDR(promoDiscount)}`;
      } else {
        discountRowEl.classList.add('hidden');
      }
    }

    if (taxEl) taxEl.textContent = formatIDR(tax);
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'Gratis (Rp 0)' : formatIDR(shipping);
    if (grandTotalEl) grandTotalEl.textContent = formatIDR(grandTotal);

    // Update promo badge UI
    const promoBadge = document.getElementById('appliedPromoBadge');
    const promoCodeText = document.getElementById('appliedPromoCodeText');

    if (promoBadge && promoCodeText) {
      if (state.activePromo) {
        promoBadge.classList.remove('hidden');
        promoCodeText.textContent = `${state.activePromo.code} (${state.activePromo.description})`;
      } else {
        promoBadge.classList.add('hidden');
      }
    }
  };

  // --- APPLY PROMO CODE LOGIC ---
  const applyPromoCode = (inputCode) => {
    const code = inputCode.trim().toUpperCase();
    if (!code) {
      showToast('Masukkan kode promo terlebih dahulu!', 'warning');
      return;
    }

    const promo = PROMO_CODES[code];
    if (!promo) {
      showToast(`Kode promo "${code}" tidak valid atau telah kedaluwarsa.`, 'danger');
      return;
    }

    const { subtotal } = calculateCartFinancials();
    if (promo.minSpend > 0 && subtotal < promo.minSpend) {
      showToast(`Voucher ${code} memerlukan minimum belanja ${formatIDR(promo.minSpend)}.`, 'warning');
      return;
    }

    state.activePromo = promo;
    savePromoToStorage();
    updateCartCalculationsUI();
    showToast(`Voucher ${code} berhasil diterapkan! Diskon aktif.`, 'success');

    const promoInput = document.getElementById('promoInput');
    if (promoInput) promoInput.value = '';
  };

  const removePromoCode = () => {
    state.activePromo = null;
    savePromoToStorage();
    updateCartCalculationsUI();
    showToast('Voucher promo telah dihapus.', 'info');
  };

  // --- OPEN PRODUCT DETAIL MODAL ---
  const openProductDetailModal = (productId) => {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    state.detailModalState.productId = productId;
    state.detailModalState.selectedColor = (product.variants.colors && product.variants.colors.length > 0) ? product.variants.colors[0] : null;
    state.detailModalState.selectedSize = (product.variants.sizes && product.variants.sizes.length > 0) ? product.variants.sizes[0] : null;
    state.detailModalState.quantity = 1;
    state.detailModalState.activeImageIndex = 0;

    renderProductDetailModalContent(product);

    const modal = document.getElementById('productDetailModal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.classList.add('overflow-hidden');
    }
  };

  const closeProductDetailModal = () => {
    const modal = document.getElementById('productDetailModal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.classList.remove('overflow-hidden');
    }
  };

  const renderProductDetailModalContent = (product) => {
    const content = document.getElementById('productDetailContent');
    if (!content) return;

    const isWishlisted = state.wishlist.includes(product.id);
    const hasColors = product.variants.colors && product.variants.colors.length > 0;
    const hasSizes = product.variants.sizes && product.variants.sizes.length > 0;

    content.innerHTML = `
      <!-- Left: Image Gallery -->
      <div class="space-y-4">
        <div class="aspect-square rounded-2xl overflow-hidden bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-800 shadow-sm relative group p-6 flex items-center justify-center">
          <img 
            id="detailMainImage" 
            src="${product.images[state.detailModalState.activeImageIndex] || product.images[0]}" 
            alt="${product.name}" 
            class="w-full h-full object-contain transition-all duration-300"
          >
          <span class="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-rose-600 text-white text-xs font-black shadow-sm font-mono">
            -${product.discountPercentage}%
          </span>
        </div>

        <!-- Thumbnails -->
        <div class="flex items-center gap-3 overflow-x-auto pb-1">
          ${product.images.map((img, idx) => `
            <button 
              data-action="change-detail-img" 
              data-img-index="${idx}" 
              class="w-16 h-16 rounded-xl overflow-hidden border-2 transition shrink-0 p-1 bg-zinc-50 dark:bg-zinc-800/50 flex items-center justify-center ${
                state.detailModalState.activeImageIndex === idx 
                  ? 'border-zinc-900 dark:border-white ring-2 ring-zinc-900/20 dark:ring-white/20' 
                  : 'border-zinc-200 dark:border-zinc-800 opacity-60 hover:opacity-100'
              }"
            >
              <img src="${img}" alt="Thumbnail ${idx}" class="w-full h-full object-contain">
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Right: Product Specifications & Actions -->
      <div class="space-y-5">
        <div>
          <div class="flex items-center gap-2 mb-2">
            ${product.badge ? `
              <span class="px-2.5 py-0.5 rounded-md ${
                product.badge === 'Official Store' ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 border border-zinc-700 dark:border-zinc-300' :
                product.badge === 'Terlaris' ? 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30' : 'bg-emerald-600 text-white'
              } text-[10px] font-bold uppercase tracking-wider flex items-center">
                ${product.badge === 'Official Store' ? '<i class="fa-solid fa-circle-check text-emerald-400 dark:text-emerald-600 mr-1 text-[9px]"></i>' : ''}
                ${product.badge === 'Terlaris' ? '<i class="fa-solid fa-fire text-amber-500 mr-1 text-[9px]"></i>' : ''}
                ${product.badge}
              </span>
            ` : ''}
            <span class="text-xs text-zinc-400 font-semibold uppercase tracking-wider">${product.category}</span>
          </div>

          <h2 class="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white leading-snug">
            ${product.name}
          </h2>

          <div class="flex items-center gap-3 mt-2 text-xs">
            <div class="flex items-center text-amber-400">
              <i class="fa-solid fa-star"></i>
              <span class="font-bold text-zinc-800 dark:text-zinc-200 ml-1 font-mono">${product.rating}</span>
              <span class="text-zinc-400 ml-1">(${product.reviewCount} ulasan)</span>
            </div>
            <span class="text-zinc-300 dark:text-zinc-700">|</span>
            <span class="text-zinc-500 dark:text-zinc-400">Terjual ${formatNumber(product.soldCount)}</span>
          </div>
        </div>

        <!-- Price Section -->
        <div class="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-800 space-y-1">
          <div class="flex items-baseline gap-3">
            <span class="text-2xl font-black text-zinc-900 dark:text-white font-mono">${formatIDR(product.price)}</span>
            <span class="text-sm text-zinc-400 line-through font-mono">${formatIDR(product.originalPrice)}</span>
          </div>
          <p class="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
            <i class="fa-solid fa-shield-halved"></i> Garansi Resmi Distributor 100% Produk Original
          </p>
        </div>

        <!-- Description -->
        <div class="space-y-1.5">
          <h4 class="text-xs font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider">Deskripsi Produk:</h4>
          <p class="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed max-h-32 overflow-y-auto pr-1">
            ${product.description}
          </p>
        </div>

        <!-- Variant: Colors -->
        ${hasColors ? `
          <div class="space-y-2">
            <label class="block text-xs font-bold text-zinc-700 dark:text-zinc-300">
              Pilihan Warna: <span class="text-zinc-900 dark:text-white font-semibold" id="activeColorName">${state.detailModalState.selectedColor}</span>
            </label>
            <div class="flex flex-wrap gap-2">
              ${product.variants.colors.map(color => `
                <button 
                  data-action="select-variant-color" 
                  data-color="${color}" 
                  class="px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition ${
                    state.detailModalState.selectedColor === color 
                      ? 'border-zinc-900 dark:border-white bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold shadow-sm' 
                      : 'border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }"
                >
                  ${color}
                </button>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Variant: Sizes / Switches -->
        ${hasSizes ? `
          <div class="space-y-2">
            <label class="block text-xs font-bold text-zinc-700 dark:text-zinc-300">
              Pilihan Ukuran / Tipe: <span class="text-zinc-900 dark:text-white font-semibold" id="activeSizeName">${state.detailModalState.selectedSize}</span>
            </label>
            <div class="flex flex-wrap gap-2">
              ${product.variants.sizes.map(size => `
                <button 
                  data-action="select-variant-size" 
                  data-size="${size}" 
                  class="px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition ${
                    state.detailModalState.selectedSize === size 
                      ? 'border-zinc-900 dark:border-white bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold shadow-sm' 
                      : 'border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }"
                >
                  ${size}
                </button>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Quantity & Stock Stepper -->
        <div class="flex items-center gap-4 pt-2">
          <div class="flex items-center border border-zinc-200 dark:border-zinc-700 rounded-xl overflow-hidden bg-zinc-50 dark:bg-zinc-800">
            <button id="modalQtyMinusBtn" class="w-9 h-9 flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-700 transition">
              <i class="fa-solid fa-minus text-xs"></i>
            </button>
            <span id="modalQtyDisplay" class="w-12 text-center text-xs font-bold font-mono text-zinc-900 dark:text-white">1</span>
            <button id="modalQtyPlusBtn" class="w-9 h-9 flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-700 transition">
              <i class="fa-solid fa-plus text-xs"></i>
            </button>
          </div>
          <span class="text-xs text-zinc-500 dark:text-zinc-400">
            Stok tersisa: <strong class="text-zinc-800 dark:text-zinc-200 font-bold font-mono">${product.stock}</strong> unit
          </span>
        </div>

        <!-- Action CTAs -->
        <div class="flex items-center gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <button 
            id="modalAddToCartBtn" 
            class="flex-1 py-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white text-xs font-bold font-mono flex items-center justify-center gap-2 transition cursor-pointer"
          >
            <i class="fa-solid fa-cart-plus"></i>
            <span>+ KERANJANG</span>
          </button>
          <button 
            id="modalBuyNowBtn" 
            class="flex-1 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-zinc-950 text-xs font-black font-mono shadow-[0_0_20px_rgba(16,185,129,0.35)] flex items-center justify-center gap-2 transition cursor-pointer"
          >
            <i class="fa-solid fa-bolt"></i>
            <span>BELI SEKARANG</span>
          </button>
        </div>

      </div>
    `;

    // Bind quantity listeners inside modal
    const minusBtn = document.getElementById('modalQtyMinusBtn');
    const plusBtn = document.getElementById('modalQtyPlusBtn');
    const qtyDisplay = document.getElementById('modalQtyDisplay');
    const addToCartBtn = document.getElementById('modalAddToCartBtn');
    const buyNowBtn = document.getElementById('modalBuyNowBtn');

    if (minusBtn && plusBtn && qtyDisplay) {
      minusBtn.onclick = () => {
        if (state.detailModalState.quantity > 1) {
          state.detailModalState.quantity--;
          qtyDisplay.textContent = state.detailModalState.quantity;
        }
      };

      plusBtn.onclick = () => {
        if (state.detailModalState.quantity < product.stock) {
          state.detailModalState.quantity++;
          qtyDisplay.textContent = state.detailModalState.quantity;
        } else {
          showToast(`Maksimal stok tercapai (${product.stock} unit)`, 'warning');
        }
      };
    }

    if (addToCartBtn) {
      addToCartBtn.onclick = () => {
        const added = addToCart(product.id, {
          color: state.detailModalState.selectedColor,
          size: state.detailModalState.selectedSize
        }, state.detailModalState.quantity);

        if (added) {
          closeProductDetailModal();
        }
      };
    }

    if (buyNowBtn) {
      buyNowBtn.onclick = () => {
        const added = addToCart(product.id, {
          color: state.detailModalState.selectedColor,
          size: state.detailModalState.selectedSize
        }, state.detailModalState.quantity);

        if (added) {
          closeProductDetailModal();
          openCheckoutModal();
        }
      };
    }
  };

  // --- CHECKOUT MODAL LOGIC ---
  const renderCheckoutOptions = () => {
    // 1. Courier options
    const courierContainer = document.getElementById('courierOptionsContainer');
    if (courierContainer) {
      courierContainer.innerHTML = COURIER_OPTIONS.map(c => `
        <label class="relative flex flex-col p-3 rounded-2xl border cursor-pointer transition select-none ${
          state.checkoutState.selectedCourierId === c.id 
            ? 'border-zinc-900 dark:border-white bg-zinc-50 dark:bg-zinc-800 ring-1 ring-zinc-900/20 dark:ring-white/20' 
            : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300'
        }">
          <input 
            type="radio" 
            name="courierOption" 
            value="${c.id}" 
            ${state.checkoutState.selectedCourierId === c.id ? 'checked' : ''} 
            class="sr-only courier-radio-input"
          >
          <span class="text-xs font-bold text-zinc-900 dark:text-white">${c.name}</span>
          <span class="text-[11px] text-zinc-400 mt-0.5">${c.etd}</span>
          <span class="text-xs font-mono font-bold text-zinc-900 dark:text-white mt-2">${formatIDR(c.price)}</span>
        </label>
      `).join('');
    }

    // 2. Payment options
    const paymentContainer = document.getElementById('paymentOptionsContainer');
    if (paymentContainer) {
      paymentContainer.innerHTML = PAYMENT_METHODS.map(p => `
        <label class="relative flex items-center gap-3 p-3 rounded-2xl border cursor-pointer transition select-none ${
          state.checkoutState.selectedPaymentId === p.id 
            ? 'border-zinc-900 dark:border-white bg-zinc-50 dark:bg-zinc-800 ring-1 ring-zinc-900/20 dark:ring-white/20' 
            : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300'
        }">
          <input 
            type="radio" 
            name="paymentOption" 
            value="${p.id}" 
            ${state.checkoutState.selectedPaymentId === p.id ? 'checked' : ''} 
            class="sr-only payment-radio-input"
          >
          <div class="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 flex items-center justify-center text-sm shrink-0">
            <i class="fa-solid ${p.icon}"></i>
          </div>
          <div class="min-w-0">
            <span class="text-xs font-bold text-zinc-900 dark:text-white block truncate">${p.name}</span>
            <span class="text-[10px] text-zinc-400 block truncate">${p.desc}</span>
          </div>
        </label>
      `).join('');
    }

    updateCheckoutSummaryUI();
  };

  const updateCheckoutSummaryUI = () => {
    const { subtotal, promoDiscount, tax, shipping, grandTotal } = calculateCartFinancials();

    const subtotalEl = document.getElementById('checkoutSubtotal');
    const discountRowEl = document.getElementById('checkoutDiscountRow');
    const discountEl = document.getElementById('checkoutDiscount');
    const taxEl = document.getElementById('checkoutTax');
    const shippingEl = document.getElementById('checkoutShipping');
    const grandTotalEl = document.getElementById('checkoutGrandTotal');
    const submitBtn = document.getElementById('submitOrderBtn');

    if (subtotalEl) subtotalEl.textContent = formatIDR(subtotal);

    if (discountRowEl && discountEl) {
      if (promoDiscount > 0) {
        discountRowEl.classList.remove('hidden');
        discountEl.textContent = `- ${formatIDR(promoDiscount)}`;
      } else {
        discountRowEl.classList.add('hidden');
      }
    }

    if (taxEl) taxEl.textContent = formatIDR(tax);
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'Gratis (Rp 0)' : formatIDR(shipping);
    if (grandTotalEl) grandTotalEl.textContent = formatIDR(grandTotal);

    if (submitBtn) {
      submitBtn.innerHTML = `<i class="fa-solid fa-lock"></i> <span>Bayar Sekarang (${formatIDR(grandTotal)})</span>`;
    }
  };

  const openCheckoutModal = () => {
    if (state.cart.length === 0) {
      showToast('Keranjang Anda masih kosong!', 'warning');
      return;
    }

    // Close drawers first
    closeCartDrawer();
    closeWishlistDrawer();

    renderCheckoutOptions();

    const modal = document.getElementById('checkoutModal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.classList.add('overflow-hidden');
    }
  };

  const closeCheckoutModal = () => {
    const modal = document.getElementById('checkoutModal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.classList.remove('overflow-hidden');
    }
  };

  // --- SUBMIT ORDER & PAYMENT SIMULATION ---
  const handleOrderSubmission = (e) => {
    e.preventDefault();

    const recipientName = document.getElementById('recipientName')?.value.trim();
    const recipientPhone = document.getElementById('recipientPhone')?.value.trim();
    const recipientCity = document.getElementById('recipientCity')?.value.trim();
    const recipientPostalCode = document.getElementById('recipientPostalCode')?.value.trim();
    const recipientAddress = document.getElementById('recipientAddress')?.value.trim();

    if (!recipientName || !recipientPhone || !recipientCity || !recipientPostalCode || !recipientAddress) {
      showToast('Harap lengkapi seluruh formulir pengiriman!', 'warning');
      return;
    }

    // 1. Show Processing Modal
    const processingModal = document.getElementById('paymentProcessingModal');
    if (processingModal) {
      processingModal.classList.remove('hidden');
      processingModal.classList.add('flex');
    }

    // 2. Simulate Payment Gateway (1.2s delay)
    setTimeout(() => {
      // Hide processing modal
      if (processingModal) {
        processingModal.classList.add('hidden');
        processingModal.classList.remove('flex');
      }

      // Close checkout modal
      closeCheckoutModal();

      // Financials Snapshot
      const financials = calculateCartFinancials();
      const boughtItems = [...state.cart];

      // 3. Deduct stock and increment soldCount in products state
      boughtItems.forEach(cartItem => {
        const prod = state.products.find(p => p.id === cartItem.productId);
        if (prod) {
          prod.stock = Math.max(0, prod.stock - cartItem.quantity);
          prod.soldCount += cartItem.quantity;
        }
      });
      saveProductsToStorage();

      // 4. Generate random order reference (INV-20261011-XXXX)
      const randomHex = Math.floor(1000 + Math.random() * 9000).toString(16).toUpperCase();
      const orderRef = `INV-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${randomHex}`;

      // 5. Open Invoice Modal
      openInvoiceModal({
        orderRef,
        dateStr: new Date().toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }) + ' WIB',
        customer: {
          name: recipientName,
          phone: recipientPhone,
          city: recipientCity,
          postalCode: recipientPostalCode,
          address: recipientAddress
        },
        courier: COURIER_OPTIONS.find(c => c.id === state.checkoutState.selectedCourierId)?.name || 'Reguler',
        paymentMethod: PAYMENT_METHODS.find(p => p.id === state.checkoutState.selectedPaymentId)?.name || 'QRIS Instant Pay',
        items: boughtItems,
        financials
      });

      // 6. Reset Cart & Promo
      state.cart = [];
      state.activePromo = null;
      saveCartToStorage();
      savePromoToStorage();

      // Re-render UI
      renderFlashSaleProducts();
      renderCatalogGrid(false);

      showToast('Pembayaran Berhasil! Pesanan Anda sedang diproses.', 'success');
    }, 1200);
  };

  // --- INVOICE MODAL RENDERING ---
  const openInvoiceModal = (orderData) => {
    const modal = document.getElementById('invoiceModal');
    if (!modal) return;

    document.getElementById('invoiceOrderRef').textContent = orderData.orderRef;
    document.getElementById('invoiceOrderDate').textContent = orderData.dateStr;
    document.getElementById('invoicePaymentMethod').textContent = orderData.paymentMethod;
    document.getElementById('invoiceCourier').textContent = orderData.courier;
    document.getElementById('invoiceRecipientName').textContent = `${orderData.customer.name} (${orderData.customer.phone})`;
    document.getElementById('invoiceRecipientAddress').textContent = `${orderData.customer.address}, ${orderData.customer.city} (${orderData.customer.postalCode})`;

    // Items table
    const tableBody = document.getElementById('invoiceItemsTableBody');
    if (tableBody) {
      tableBody.innerHTML = orderData.items.map(item => {
        const variantDesc = [item.color, item.size].filter(Boolean).join(' / ');
        return `
          <tr class="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
            <td class="p-3">
              <strong class="text-zinc-900 dark:text-white block font-semibold">${item.name}</strong>
              ${variantDesc ? `<span class="text-[11px] text-zinc-400">Varian: ${variantDesc}</span>` : ''}
            </td>
            <td class="p-3 text-center font-mono font-bold">${item.quantity}</td>
            <td class="p-3 text-right font-mono">${formatIDR(item.price)}</td>
            <td class="p-3 text-right font-mono font-bold text-zinc-900 dark:text-white">${formatIDR(item.price * item.quantity)}</td>
          </tr>
        `;
      }).join('');
    }

    // Financials
    document.getElementById('invoiceSubtotal').textContent = formatIDR(orderData.financials.subtotal);
    const invoiceDiscountRow = document.getElementById('invoiceDiscountRow');
    const invoiceDiscountEl = document.getElementById('invoiceDiscount');
    if (orderData.financials.promoDiscount > 0) {
      invoiceDiscountRow.classList.remove('hidden');
      invoiceDiscountEl.textContent = `- ${formatIDR(orderData.financials.promoDiscount)}`;
    } else {
      invoiceDiscountRow.classList.add('hidden');
    }

    document.getElementById('invoiceTax').textContent = formatIDR(orderData.financials.tax);
    document.getElementById('invoiceShipping').textContent = orderData.financials.shipping === 0 ? 'Gratis (Rp 0)' : formatIDR(orderData.financials.shipping);
    document.getElementById('invoiceGrandTotal').textContent = formatIDR(orderData.financials.grandTotal);

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
  };

  const closeInvoiceModal = () => {
    const modal = document.getElementById('invoiceModal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.classList.remove('overflow-hidden');
    }
  };

  // --- DRAWER CONTROLLERS (SLIDE-OVER) ---
  const openCartDrawer = () => {
    closeWishlistDrawer();
    renderCartDrawerItems();

    const drawer = document.getElementById('cartDrawer');
    const backdrop = document.getElementById('cartBackdrop');
    const panel = document.getElementById('cartPanel');

    if (drawer && backdrop && panel) {
      drawer.classList.remove('pointer-events-none');
      backdrop.classList.remove('opacity-0', 'pointer-events-none');
      backdrop.classList.add('opacity-100');
      panel.classList.remove('translate-x-full');
      panel.classList.add('translate-x-0');
      document.body.classList.add('overflow-hidden');
    }
  };

  const closeCartDrawer = () => {
    const drawer = document.getElementById('cartDrawer');
    const backdrop = document.getElementById('cartBackdrop');
    const panel = document.getElementById('cartPanel');

    if (drawer && backdrop && panel) {
      panel.classList.remove('translate-x-0');
      panel.classList.add('translate-x-full');
      backdrop.classList.remove('opacity-100');
      backdrop.classList.add('opacity-0', 'pointer-events-none');
      setTimeout(() => {
        drawer.classList.add('pointer-events-none');
        document.body.classList.remove('overflow-hidden');
      }, 300);
    }
  };

  const openWishlistDrawer = () => {
    closeCartDrawer();
    renderWishlistDrawerItems();

    const drawer = document.getElementById('wishlistDrawer');
    const backdrop = document.getElementById('wishlistBackdrop');
    const panel = document.getElementById('wishlistPanel');

    if (drawer && backdrop && panel) {
      drawer.classList.remove('pointer-events-none');
      backdrop.classList.remove('opacity-0', 'pointer-events-none');
      backdrop.classList.add('opacity-100');
      panel.classList.remove('translate-x-full');
      panel.classList.add('translate-x-0');
      document.body.classList.add('overflow-hidden');
    }
  };

  const closeWishlistDrawer = () => {
    const drawer = document.getElementById('wishlistDrawer');
    const backdrop = document.getElementById('wishlistBackdrop');
    const panel = document.getElementById('wishlistPanel');

    if (drawer && backdrop && panel) {
      panel.classList.remove('translate-x-0');
      panel.classList.add('translate-x-full');
      backdrop.classList.remove('opacity-100');
      backdrop.classList.add('opacity-0', 'pointer-events-none');
      setTimeout(() => {
        drawer.classList.add('pointer-events-none');
        document.body.classList.remove('overflow-hidden');
      }, 300);
    }
  };

  // --- GLOBAL EVENT DELEGATION & EVENT LISTENERS ---
  const setupEventListeners = () => {
    // 1. Theme Toggle
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.addEventListener('click', toggleTheme);
    }

    // 2. Drawers Toggle Buttons
    document.getElementById('cartDrawerBtn')?.addEventListener('click', openCartDrawer);
    document.getElementById('closeCartBtn')?.addEventListener('click', closeCartDrawer);
    document.getElementById('cartBackdrop')?.addEventListener('click', closeCartDrawer);

    document.getElementById('wishlistDrawerBtn')?.addEventListener('click', openWishlistDrawer);
    document.getElementById('closeWishlistBtn')?.addEventListener('click', closeWishlistDrawer);
    document.getElementById('wishlistBackdrop')?.addEventListener('click', closeWishlistDrawer);

    // 3. Search Inputs with Debounce
    let searchDebounceTimer = null;
    const handleSearchInput = (val) => {
      const clearBtn = document.getElementById('clearSearchBtn');
      const mobileClearBtn = document.getElementById('mobileClearSearchBtn');

      if (val.trim()) {
        clearBtn?.classList.remove('hidden');
        mobileClearBtn?.classList.remove('hidden');
      } else {
        clearBtn?.classList.add('hidden');
        mobileClearBtn?.classList.add('hidden');
      }

      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        state.filters.searchQuery = val;
        state.pagination.currentPage = 1;
        renderCatalogGrid(true);
      }, 300);
    };

    const searchInput = document.getElementById('searchInput');
    const mobileSearchInput = document.getElementById('mobileSearchInput');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        if (mobileSearchInput) mobileSearchInput.value = e.target.value;
        handleSearchInput(e.target.value);
      });
    }

    if (mobileSearchInput) {
      mobileSearchInput.addEventListener('input', (e) => {
        if (searchInput) searchInput.value = e.target.value;
        handleSearchInput(e.target.value);
      });
    }

    const clearSearch = () => {
      if (searchInput) searchInput.value = '';
      if (mobileSearchInput) mobileSearchInput.value = '';
      document.getElementById('clearSearchBtn')?.classList.add('hidden');
      document.getElementById('mobileClearSearchBtn')?.classList.add('hidden');
      state.filters.searchQuery = '';
      state.pagination.currentPage = 1;
      renderCatalogGrid(true);
    };

    document.getElementById('clearSearchBtn')?.addEventListener('click', clearSearch);
    document.getElementById('mobileClearSearchBtn')?.addEventListener('click', clearSearch);

    // 4. Price & Rating Filters
    document.getElementById('applyPriceFilterBtn')?.addEventListener('click', () => {
      const minVal = parseFloat(document.getElementById('minPriceInput')?.value);
      const maxVal = parseFloat(document.getElementById('maxPriceInput')?.value);

      state.filters.minPrice = (!isNaN(minVal) && minVal >= 0) ? minVal : null;
      state.filters.maxPrice = (!isNaN(maxVal) && maxVal >= 0) ? maxVal : null;

      if (state.filters.minPrice !== null && state.filters.maxPrice !== null && state.filters.minPrice > state.filters.maxPrice) {
        showToast('Harga minimum tidak boleh melebihi harga maksimum!', 'warning');
        return;
      }

      state.pagination.currentPage = 1;
      renderCatalogGrid(true);
    });

    document.getElementById('ratingFilterCheckbox')?.addEventListener('change', (e) => {
      state.filters.onlyHighRating = e.target.checked;
      state.pagination.currentPage = 1;
      renderCatalogGrid(true);
    });

    document.getElementById('sortSelect')?.addEventListener('change', (e) => {
      state.filters.sortBy = e.target.value;
      state.pagination.currentPage = 1;
      renderCatalogGrid(false);
    });

    document.getElementById('resetAllFiltersBtn')?.addEventListener('click', resetAllFilters);
    document.getElementById('emptyStateResetBtn')?.addEventListener('click', resetAllFilters);

    // 5. Promo Code Buttons
    document.getElementById('applyPromoBtn')?.addEventListener('click', () => {
      const code = document.getElementById('promoInput')?.value;
      applyPromoCode(code);
    });

    document.getElementById('promoInput')?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        applyPromoCode(e.target.value);
      }
    });

    document.getElementById('removePromoBtn')?.addEventListener('click', removePromoCode);

    // 6. Clear Cart
    document.getElementById('clearCartBtn')?.addEventListener('click', () => {
      if (state.cart.length === 0) return;
      if (confirm('Apakah Anda yakin ingin mengosongkan seluruh keranjang belanja?')) {
        state.cart = [];
        state.activePromo = null;
        saveCartToStorage();
        savePromoToStorage();
        renderCartDrawerItems();
        showToast('Keranjang belanja telah dikosongkan.', 'info');
      }
    });

    // 7. Proceed to Checkout Button
    document.getElementById('proceedToCheckoutBtn')?.addEventListener('click', openCheckoutModal);

    // 8. Checkout Modal Controls
    document.getElementById('closeCheckoutModalBtn')?.addEventListener('click', closeCheckoutModal);
    document.getElementById('cancelCheckoutBtn')?.addEventListener('click', closeCheckoutModal);
    document.getElementById('checkoutBackdrop')?.addEventListener('click', closeCheckoutModal);
    document.getElementById('checkoutForm')?.addEventListener('submit', handleOrderSubmission);

    // Courier selection change
    document.getElementById('courierOptionsContainer')?.addEventListener('change', (e) => {
      if (e.target && e.target.matches('.courier-radio-input')) {
        state.checkoutState.selectedCourierId = e.target.value;
        renderCheckoutOptions();
      }
    });

    // Payment selection change
    document.getElementById('paymentOptionsContainer')?.addEventListener('change', (e) => {
      if (e.target && e.target.matches('.payment-radio-input')) {
        state.checkoutState.selectedPaymentId = e.target.value;
        renderCheckoutOptions();
      }
    });

    // 9. Product Detail Modal Controls
    document.getElementById('closeDetailModalBtn')?.addEventListener('click', closeProductDetailModal);
    document.getElementById('productDetailBackdrop')?.addEventListener('click', closeProductDetailModal);

    // 10. Invoice Modal Controls
    document.getElementById('closeInvoiceBtn')?.addEventListener('click', closeInvoiceModal);
    document.getElementById('invoiceBackdrop')?.addEventListener('click', closeInvoiceModal);
    document.getElementById('printInvoiceBtn')?.addEventListener('click', () => {
      window.print();
    });

    // 11. GLOBAL DOCUMENT DELEGATION FOR DYNAMIC ACTIONS
    document.addEventListener('click', (e) => {
      const actionEl = e.target.closest('[data-action]');
      if (!actionEl) return;

      const action = actionEl.getAttribute('data-action');

      switch (action) {
        // Open Detail
        case 'open-detail': {
          const productId = actionEl.getAttribute('data-product-id');
          if (productId) openProductDetailModal(productId);
          break;
        }

        // Quick Add to Cart
        case 'quick-add-cart': {
          const productId = actionEl.getAttribute('data-product-id');
          if (productId) addToCart(productId, {}, 1);
          break;
        }

        // Toggle Wishlist
        case 'toggle-wishlist': {
          const productId = actionEl.getAttribute('data-product-id');
          if (productId) toggleWishlist(productId);
          break;
        }

        // Category Filter
        case 'category-filter': {
          const cat = actionEl.getAttribute('data-category');
          if (cat) {
            state.filters.category = cat;
            state.pagination.currentPage = 1;
            renderCatalogGrid(true);
            const katalogSection = document.getElementById('katalog');
            if (katalogSection) {
              const navHeight = 80;
              const y = katalogSection.getBoundingClientRect().top + window.pageYOffset - navHeight;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }
          break;
        }

        // Quick Price Filter
        case 'quick-price-filter': {
          const min = actionEl.getAttribute('data-min');
          const max = actionEl.getAttribute('data-max');
          state.filters.minPrice = min ? parseFloat(min) : null;
          state.filters.maxPrice = max ? parseFloat(max) : null;
          const minInput = document.getElementById('minPriceInput');
          const maxInput = document.getElementById('maxPriceInput');
          if (minInput) minInput.value = min || '';
          if (maxInput) maxInput.value = max || '';
          state.pagination.currentPage = 1;
          renderCatalogGrid(true);
          break;
        }

        // Go to page
        case 'goto-page': {
          const page = parseInt(actionEl.getAttribute('data-page'), 10);
          if (page && page !== state.pagination.currentPage) {
            state.pagination.currentPage = page;
            renderCatalogGrid(true);
            document.getElementById('katalog')?.scrollIntoView({ behavior: 'smooth' });
          }
          break;
        }

        // Previous page
        case 'prev-page': {
          if (state.pagination.currentPage > 1) {
            state.pagination.currentPage--;
            renderCatalogGrid(true);
            document.getElementById('katalog')?.scrollIntoView({ behavior: 'smooth' });
          }
          break;
        }

        // Next page
        case 'next-page': {
          const filtered = getFilteredAndSortedProducts();
          const totalPages = Math.ceil(filtered.length / state.pagination.itemsPerPage) || 1;
          if (state.pagination.currentPage < totalPages) {
            state.pagination.currentPage++;
            renderCatalogGrid(true);
            document.getElementById('katalog')?.scrollIntoView({ behavior: 'smooth' });
          }
          break;
        }

        // Remove active filter chip
        case 'remove-active-filter': {
          const filterType = actionEl.getAttribute('data-filter-type');
          if (filterType === 'category') state.filters.category = 'Semua';
          if (filterType === 'search') {
            state.filters.searchQuery = '';
            const si = document.getElementById('searchInput');
            const msi = document.getElementById('mobileSearchInput');
            if (si) si.value = '';
            if (msi) msi.value = '';
          }
          if (filterType === 'minPrice') {
            state.filters.minPrice = null;
            const inp = document.getElementById('minPriceInput');
            if (inp) inp.value = '';
          }
          if (filterType === 'maxPrice') {
            state.filters.maxPrice = null;
            const inp = document.getElementById('maxPriceInput');
            if (inp) inp.value = '';
          }
          if (filterType === 'rating') {
            state.filters.onlyHighRating = false;
            const cb = document.getElementById('ratingFilterCheckbox');
            if (cb) cb.checked = false;
          }
          state.pagination.currentPage = 1;
          renderCatalogGrid(true);
          break;
        }

        // Cart Qty Plus
        case 'cart-qty-plus': {
          const cartItemId = actionEl.getAttribute('data-cart-item-id');
          const cartItem = state.cart.find(i => i.cartItemId === cartItemId);
          if (cartItem) {
            const product = state.products.find(p => p.id === cartItem.productId);
            if (product && cartItem.quantity < product.stock) {
              cartItem.quantity++;
              saveCartToStorage();
              renderCartDrawerItems();
            } else {
              showToast(`Maksimal stok tercapai (${product ? product.stock : 0} unit)`, 'warning');
            }
          }
          break;
        }

        // Cart Qty Minus
        case 'cart-qty-minus': {
          const cartItemId = actionEl.getAttribute('data-cart-item-id');
          const cartItemIndex = state.cart.findIndex(i => i.cartItemId === cartItemId);
          if (cartItemIndex > -1) {
            if (state.cart[cartItemIndex].quantity > 1) {
              state.cart[cartItemIndex].quantity--;
            } else {
              // Delete item if quantity reaches 0
              const item = state.cart[cartItemIndex];
              state.cart.splice(cartItemIndex, 1);
              showToast(`"${item.name}" dihapus dari keranjang`, 'info');
            }
            saveCartToStorage();
            renderCartDrawerItems();
          }
          break;
        }

        // Cart Remove Item
        case 'cart-remove-item': {
          const cartItemId = actionEl.getAttribute('data-cart-item-id');
          const cartItemIndex = state.cart.findIndex(i => i.cartItemId === cartItemId);
          if (cartItemIndex > -1) {
            const item = state.cart[cartItemIndex];
            state.cart.splice(cartItemIndex, 1);
            saveCartToStorage();
            renderCartDrawerItems();
            showToast(`"${item.name}" dihapus dari keranjang`, 'info');
          }
          break;
        }

        // Select Variant Color in Detail Modal
        case 'select-variant-color': {
          const color = actionEl.getAttribute('data-color');
          state.detailModalState.selectedColor = color;
          const product = state.products.find(p => p.id === state.detailModalState.productId);
          if (product) renderProductDetailModalContent(product);
          break;
        }

        // Select Variant Size in Detail Modal
        case 'select-variant-size': {
          const size = actionEl.getAttribute('data-size');
          state.detailModalState.selectedSize = size;
          const product = state.products.find(p => p.id === state.detailModalState.productId);
          if (product) renderProductDetailModalContent(product);
          break;
        }

        // Change detail image thumbnail
        case 'change-detail-img': {
          const imgIdx = parseInt(actionEl.getAttribute('data-img-index'), 10);
          state.detailModalState.activeImageIndex = imgIdx;
          const product = state.products.find(p => p.id === state.detailModalState.productId);
          if (product) renderProductDetailModalContent(product);
          break;
        }

        default:
          break;
      }
    });

    // Close Modals on ESC Key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeProductDetailModal();
        closeCheckoutModal();
        closeInvoiceModal();
        closeCartDrawer();
        closeWishlistDrawer();
      }
    });
  };

  // --- APPLICATION INITIALIZATION ---
  const initApp = () => {
    loadStateFromStorage();
    applyTheme(state.currentTheme);
    initFlashSaleCountdown();
    renderFlashSaleProducts();
    renderCatalogGrid(false);
    updateCartIndicators();
    updateWishlistIndicators();
    setupEventListeners();
  };

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

})();
