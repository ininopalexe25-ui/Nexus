/**
 * ============================================================
 * MAISON VENDÔME & AURA - HAUTE LUXURY APPLICATION ENGINE
 * Client-Side State, Liquid Glass Interactions & Concierge System
 * ============================================================
 */

(function () {
  'use strict';

  // --- STORAGE KEYS ---
  const STORAGE_KEYS = {
    CART: 'maison_vendome_cart_v1',
    WISHLIST: 'maison_vendome_salon_v1',
    CURRENCY: 'maison_vendome_currency_pref',
    MEMBERSHIP: 'maison_vendome_membership_dossier'
  };

  // --- APPLICATION STATE ---
  const state = {
    products: LUXURY_PRODUCTS,
    cart: [],
    wishlist: [],
    currency: 'USD', // 'USD', 'EUR', 'IDR'
    activeCategory: 'all',
    detailModalState: {
      productId: null,
      activeImageIdx: 0,
      customMonogram: '',
      selectedMaterial: null
    },
    membership: null
  };

  // --- CURRENCY FORMATTERS ---
  const formatPrice = (product) => {
    switch (state.currency) {
      case 'EUR':
        return new Intl.NumberFormat('fr-FR', {
          style: 'currency',
          currency: 'EUR',
          maximumFractionDigits: 0
        }).format(product.priceEUR);
      case 'IDR':
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          maximumFractionDigits: 0
        }).format(product.priceIDR);
      case 'USD':
      default:
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 0
        }).format(product.priceUSD);
    }
  };

  const getNumericPrice = (product) => {
    switch (state.currency) {
      case 'EUR': return product.priceEUR;
      case 'IDR': return product.priceIDR;
      case 'USD':
      default: return product.priceUSD;
    }
  };

  const formatRawAmount = (amount) => {
    switch (state.currency) {
      case 'EUR':
        return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(amount);
      case 'IDR':
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(amount);
      case 'USD':
      default:
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount);
    }
  };

  // --- LOCAL STORAGE PERSISTENCE ---
  const loadState = () => {
    try {
      const savedCart = localStorage.getItem(STORAGE_KEYS.CART);
      if (savedCart) state.cart = JSON.parse(savedCart);

      const savedWishlist = localStorage.getItem(STORAGE_KEYS.WISHLIST);
      if (savedWishlist) state.wishlist = JSON.parse(savedWishlist);

      const savedCurrency = localStorage.getItem(STORAGE_KEYS.CURRENCY);
      if (savedCurrency && ['USD', 'EUR', 'IDR'].includes(savedCurrency)) {
        state.currency = savedCurrency;
      }

      const savedMembership = localStorage.getItem(STORAGE_KEYS.MEMBERSHIP);
      if (savedMembership) state.membership = JSON.parse(savedMembership);
    } catch (e) {
      console.warn('Maison Vendôme: Storage access fallback', e);
    }
  };

  const saveCart = () => {
    try {
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(state.cart));
      updateCartBadge();
    } catch (e) {}
  };

  const saveWishlist = () => {
    try {
      localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(state.wishlist));
      updateWishlistBadge();
    } catch (e) {}
  };

  // --- LUXURY TOAST SYSTEM ---
  const showLuxuryToast = (title, message = '') => {
    const container = document.getElementById('luxuryToastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'liquid-glass-gold p-4 rounded-2xl flex items-start gap-3.5 shadow-2xl luxury-toast-enter max-w-sm border border-[#d4af37]/40';
    toast.innerHTML = `
      <div class="w-8 h-8 rounded-full bg-[#d4af37]/20 text-[#f5e6b8] border border-[#d4af37]/40 flex items-center justify-center shrink-0 text-xs">
        <i class="fa-solid fa-crown"></i>
      </div>
      <div class="flex-1">
        <h4 class="text-xs font-bold text-[#f5e6b8] tracking-wider uppercase font-cinzel">${title}</h4>
        ${message ? `<p class="text-[11px] text-zinc-300 mt-0.5 leading-relaxed font-sans">${message}</p>` : ''}
      </div>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      toast.style.transition = 'all 0.4s ease';
      setTimeout(() => toast.remove(), 400);
    }, 3800);
  };

  // --- BADGE UPDATES ---
  const updateCartBadge = () => {
    const badge = document.getElementById('navCartBadge');
    const count = state.cart.reduce((sum, i) => sum + i.quantity, 0);
    if (badge) {
      badge.textContent = count;
      if (count > 0) {
        badge.classList.remove('hidden');
      } else {
        badge.classList.add('hidden');
      }
    }
  };

  const updateWishlistBadge = () => {
    const badge = document.getElementById('navWishlistBadge');
    if (badge) {
      badge.textContent = state.wishlist.length;
      if (state.wishlist.length > 0) {
        badge.classList.remove('hidden');
      } else {
        badge.classList.add('hidden');
      }
    }
  };

  // --- RENDER CATEGORY FILTER PILLS ---
  const renderCategoryFilters = () => {
    const container = document.getElementById('luxuryCategoryPills');
    if (!container) return;

    const categories = [...LUXURY_COLLECTIONS];
    if (state.activeCategory === 'wishlist') {
      categories.push({ id: 'wishlist', name: `Salon Privé (${state.wishlist.length})`, french: 'Salon Privé' });
    }

    container.innerHTML = categories.map(cat => {
      const isActive = state.activeCategory === cat.id;
      return `
        <button 
          data-category-id="${cat.id}" 
          class="category-pill-btn px-5 py-2.5 rounded-full text-xs transition-all duration-300 tracking-wider font-cinzel uppercase shrink-0 cursor-pointer ${
            isActive 
              ? 'bg-gradient-to-r from-[#d4af37] to-[#aa8418] text-[#07080a] font-bold shadow-[0_0_20px_rgba(212,175,55,0.35)]' 
              : 'liquid-glass text-zinc-300 hover:text-[#f5e6b8] hover:border-[#d4af37]/40'
          }"
        >
          ${cat.name}
        </button>
      `;
    }).join('');

    // Bind click events
    container.querySelectorAll('.category-pill-btn').forEach(btn => {
      btn.onclick = () => {
        state.activeCategory = btn.getAttribute('data-category-id');
        renderCategoryFilters();
        renderProductGallery();
      };
    });
  };

  // --- RENDER PRODUCT SHOWCASE GRID ---
  const renderProductGallery = () => {
    const grid = document.getElementById('luxuryProductsGrid');
    if (!grid) return;

    let items = state.products;
    if (state.activeCategory === 'wishlist') {
      items = items.filter(p => state.wishlist.includes(p.id));
    } else if (state.activeCategory !== 'all') {
      items = items.filter(p => p.categoryId === state.activeCategory);
    }

    if (items.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full py-16 text-center space-y-4 liquid-glass-card rounded-3xl p-8 border border-white/10">
          <div class="w-14 h-14 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] mx-auto text-xl">
            <i class="fa-regular fa-heart"></i>
          </div>
          <h3 class="font-serif text-2xl text-white">No Masterpieces in this Selection</h3>
          <p class="text-xs text-zinc-400 font-sans max-w-md mx-auto">
            ${state.activeCategory === 'wishlist' 
              ? 'Your private salon curation is currently empty. Explore our haute creations and click the heart icon to preserve your favorites.'
              : 'Our ateliers are currently crafting new commissions for this vault.'}
          </p>
          <button 
            id="resetCategoryFilterBtn"
            class="btn-luxury-gold py-2.5 px-6 text-xs font-cinzel tracking-wider uppercase cursor-pointer"
          >
            Explore All Masterpieces
          </button>
        </div>
      `;
      const resetBtn = document.getElementById('resetCategoryFilterBtn');
      if (resetBtn) {
        resetBtn.onclick = () => {
          state.activeCategory = 'all';
          renderCategoryFilters();
          renderProductGallery();
        };
      }
      return;
    }

    grid.innerHTML = items.map(product => {
      const isWishlisted = state.wishlist.includes(product.id);
      const formattedPrice = formatPrice(product);

      return `
        <div class="liquid-glass-card rounded-3xl p-6 flex flex-col justify-between group" data-product-id="${product.id}">
          
          <!-- Image Box with Specular Refraction -->
          <div class="relative aspect-square rounded-2xl overflow-hidden mb-6 bg-zinc-950/60 p-4 flex items-center justify-center luxury-image-frame cursor-pointer view-detail-trigger" data-id="${product.id}">
            <img 
              src="${product.images[0]}" 
              alt="${product.name}" 
              loading="lazy" 
              class="w-full h-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]"
            >
            
            <!-- Badges -->
            <div class="absolute top-3.5 left-3.5 flex flex-col gap-1.5 items-start">
              ${product.isPieceUnique ? `
                <span class="px-3 py-1 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa8418] text-[#07080a] text-[10px] font-black uppercase tracking-widest font-cinzel shadow-lg">
                  <i class="fa-solid fa-gem mr-1"></i> Pièce Unique
                </span>
              ` : `
                <span class="px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md text-[#f5e6b8] text-[9px] font-bold uppercase tracking-wider font-cinzel border border-white/20">
                  ${product.edition.split(':')[0]}
                </span>
              `}
            </div>

            <!-- Wishlist Heart / Private Salon Button -->
            <button 
              data-wishlist-id="${product.id}" 
              class="wishlist-toggle-btn absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-zinc-900/80 hover:bg-[#d4af37]/20 backdrop-blur-md border border-white/10 hover:border-[#d4af37]/60 text-zinc-300 hover:text-[#d4af37] flex items-center justify-center transition shadow-md"
              title="${isWishlisted ? 'Retirer du Salon Privé' : 'Ajouter au Salon Privé'}"
            >
              <i class="${isWishlisted ? 'fa-solid fa-heart text-[#d4af37]' : 'fa-regular fa-heart'} text-xs"></i>
            </button>
          </div>

          <!-- Product Story & Meta Details -->
          <div class="space-y-3">
            <div class="flex items-center justify-between text-[11px] tracking-widest text-[#d4af37] font-cinzel">
              <span>${product.collection}</span>
              <span class="text-zinc-500 font-sans tracking-normal"><i class="fa-solid fa-location-dot mr-1 text-[10px]"></i>${product.provenance.split(',')[0]}</span>
            </div>

            <h3 class="text-xl font-medium text-white font-serif tracking-tight leading-snug group-hover:text-[#f5e6b8] transition-colors cursor-pointer view-detail-trigger" data-id="${product.id}">
              ${product.name}
            </h3>

            <p class="text-xs text-zinc-400 font-sans line-clamp-2 leading-relaxed">
              ${product.description}
            </p>

            <!-- Precious Materials Micro-Tags -->
            <div class="flex items-center gap-1.5 flex-wrap pt-1 text-[10px] text-zinc-400">
              <span class="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08]">${product.materials[0]}</span>
              <span class="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08]">${product.materials[1]}</span>
            </div>

            <!-- Price & Acquisition CTA -->
            <div class="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <div>
                <span class="text-[10px] text-zinc-400 block tracking-widest uppercase font-cinzel">Acquisition</span>
                <span class="text-lg font-bold text-white font-cinzel tracking-tight text-gold-gradient">${formattedPrice}</span>
              </div>

              <div class="flex items-center gap-2">
                <button 
                  data-detail-id="${product.id}" 
                  class="view-detail-btn px-3.5 py-2 rounded-full liquid-glass text-xs text-zinc-300 hover:text-white font-cinzel hover:border-[#d4af37]/40 transition text-[11px] tracking-wider"
                >
                  Détails
                </button>
                <button 
                  data-acquire-id="${product.id}" 
                  class="acquire-btn btn-luxury-gold py-2 px-4 text-[10px] tracking-wider shrink-0"
                >
                  <i class="fa-solid fa-bag-shopping text-xs"></i>
                  <span>Acquire</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      `;
    }).join('');

    // Bind event handlers
    grid.querySelectorAll('.view-detail-trigger, .view-detail-btn').forEach(el => {
      el.onclick = () => {
        const id = el.getAttribute('data-id') || el.getAttribute('data-detail-id');
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
      el.onclick = () => {
        const id = el.getAttribute('data-wishlist-id');
        toggleWishlist(id);
      };
    });
  };

  // --- CART MANAGEMENT ---
  const addProductToCart = (productId, monogram = '') => {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    const existing = state.cart.find(item => item.id === productId && item.monogram === monogram);
    if (existing) {
      existing.quantity += 1;
    } else {
      state.cart.push({
        id: product.id,
        quantity: 1,
        monogram: monogram,
        selectedMaterial: product.materials[0]
      });
    }

    saveCart();
    showLuxuryToast('Masterpiece Reserved', `${product.name} has been added to your Concierge Acquisition Bag.`);
    renderAcquisitionDrawer();
    openAcquisitionDrawer();
  };

  const removeCartItem = (idx) => {
    state.cart.splice(idx, 1);
    saveCart();
    renderAcquisitionDrawer();
  };

  // --- WISHLIST / PRIVATE SALON ---
  const toggleWishlist = (productId) => {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    const idx = state.wishlist.indexOf(productId);
    if (idx > -1) {
      state.wishlist.splice(idx, 1);
      showLuxuryToast('Salon Privé Updated', `${product.name} removed from your private viewing list.`);
    } else {
      state.wishlist.push(productId);
      showLuxuryToast('Added to Salon Privé', `${product.name} recorded for your private viewing.`);
    }

    saveWishlist();
    renderProductGallery();
  };

  // --- ACQUISITION DRAWER RENDER ---
  const renderAcquisitionDrawer = () => {
    const container = document.getElementById('acquisitionCartItems');
    const subtotalEl = document.getElementById('acquisitionSubtotal');
    const totalEl = document.getElementById('acquisitionTotal');
    const emptyNotice = document.getElementById('cartEmptyNotice');
    const footerEl = document.getElementById('cartFooterActions');

    if (!container) return;

    if (state.cart.length === 0) {
      container.innerHTML = '';
      if (emptyNotice) emptyNotice.classList.remove('hidden');
      if (footerEl) footerEl.classList.add('hidden');
      return;
    }

    if (emptyNotice) emptyNotice.classList.add('hidden');
    if (footerEl) footerEl.classList.remove('hidden');

    let totalAmount = 0;

    container.innerHTML = state.cart.map((item, idx) => {
      const product = state.products.find(p => p.id === item.id);
      if (!product) return '';

      const numericPrice = getNumericPrice(product);
      const lineTotal = numericPrice * item.quantity;
      totalAmount += lineTotal;

      return `
        <div class="py-4 border-b border-white/10 flex items-start gap-4">
          <div class="w-18 h-18 rounded-xl bg-zinc-950/80 border border-white/10 p-2 flex items-center justify-center shrink-0">
            <img src="${product.images[0]}" alt="${product.name}" class="w-full h-full object-contain">
          </div>
          
          <div class="flex-1 space-y-1">
            <div class="flex items-start justify-between">
              <div>
                <span class="text-[9px] uppercase tracking-widest text-[#d4af37] font-cinzel">${product.category}</span>
                <h4 class="text-xs font-serif font-medium text-white">${product.name}</h4>
              </div>
              <button data-remove-idx="${idx}" class="text-zinc-500 hover:text-rose-400 text-xs transition p-1">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>

            <p class="text-[11px] text-zinc-400 font-sans">
              ${formatPrice(product)} ${item.quantity > 1 ? `× ${item.quantity}` : ''}
            </p>

            ${item.monogram ? `
              <div class="text-[10px] text-[#f5e6b8] bg-[#d4af37]/10 px-2 py-0.5 rounded border border-[#d4af37]/20 inline-block font-cinzel">
                <i class="fa-solid fa-pen-nib mr-1 text-[8px]"></i> Monogram: "${item.monogram}"
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');

    // Bind remove buttons
    container.querySelectorAll('[data-remove-idx]').forEach(btn => {
      btn.onclick = () => {
        const idx = parseInt(btn.getAttribute('data-remove-idx'), 10);
        removeCartItem(idx);
      };
    });

    const formattedTotal = formatRawAmount(totalAmount);
    if (subtotalEl) subtotalEl.textContent = formattedTotal;
    if (totalEl) totalEl.textContent = formattedTotal;
  };

  const openAcquisitionDrawer = () => {
    const drawer = document.getElementById('acquisitionDrawer');
    const backdrop = document.getElementById('acquisitionBackdrop');
    const panel = document.getElementById('acquisitionPanel');

    if (!drawer) return;
    renderAcquisitionDrawer();
    drawer.classList.remove('pointer-events-none');
    if (backdrop) backdrop.style.opacity = '1';
    if (panel) panel.style.transform = 'translateX(0)';
  };

  const closeAcquisitionDrawer = () => {
    const drawer = document.getElementById('acquisitionDrawer');
    const backdrop = document.getElementById('acquisitionBackdrop');
    const panel = document.getElementById('acquisitionPanel');

    if (!drawer) return;
    if (backdrop) backdrop.style.opacity = '0';
    if (panel) panel.style.transform = 'translateX(100%)';
    setTimeout(() => {
      drawer.classList.add('pointer-events-none');
    }, 300);
  };

  // --- PRODUCT DOSSIER MODAL (QUICK VIEW & BESPOKE CUSTOMIZATION) ---
  const openProductDossierModal = (productId) => {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    state.detailModalState.productId = productId;
    state.detailModalState.activeImageIdx = 0;
    state.detailModalState.customMonogram = '';

    const modal = document.getElementById('productDossierModal');
    const content = document.getElementById('productDossierContent');
    if (!modal || !content) return;

    content.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Left: High-Res Masterpiece Gallery -->
        <div class="lg:col-span-6 space-y-4">
          <div class="aspect-square rounded-3xl overflow-hidden bg-zinc-950/80 border border-white/10 p-6 flex items-center justify-center relative shadow-2xl">
            <img 
              id="modalMainImage" 
              src="${product.images[0]}" 
              alt="${product.name}" 
              class="w-full h-full object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)]"
            >
            <div class="absolute top-4 left-4">
              <span class="px-3 py-1 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa8418] text-[#07080a] text-[10px] font-black uppercase tracking-widest font-cinzel shadow-lg">
                ${product.edition}
              </span>
            </div>
          </div>

          <!-- Thumbnails -->
          <div class="flex items-center gap-3 overflow-x-auto pb-1">
            ${product.images.map((img, idx) => `
              <button 
                data-img-idx="${idx}" 
                class="modal-thumb-btn w-16 h-16 rounded-xl overflow-hidden border p-1 bg-zinc-950/60 transition shrink-0 ${
                  idx === 0 ? 'border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.3)]' : 'border-white/10 opacity-60 hover:opacity-100'
                }"
              >
                <img src="${img}" alt="Angle ${idx}" class="w-full h-full object-contain">
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Right: Provenance, Technical Specs & Bespoke Acquisition -->
        <div class="lg:col-span-6 space-y-6">
          <div>
            <div class="flex items-center justify-between text-xs text-[#d4af37] font-cinzel tracking-widest mb-1.5">
              <span>${product.collection}</span>
              <span><i class="fa-solid fa-award mr-1"></i>${product.provenance}</span>
            </div>
            <h2 class="text-3xl font-serif text-white font-medium tracking-tight leading-tight">
              ${product.name}
            </h2>
            <div class="mt-2 text-2xl font-bold font-cinzel text-gold-gradient">
              ${formatPrice(product)}
            </div>
          </div>

          <!-- Narrative Storytelling -->
          <div class="space-y-2">
            <h4 class="text-xs uppercase tracking-widest text-[#f5e6b8] font-cinzel font-semibold">Atelier Provenance:</h4>
            <p class="text-xs text-zinc-300 font-sans leading-relaxed">
              ${product.description}
            </p>
          </div>

          <!-- Technical Specifications Table -->
          <div class="p-4 rounded-2xl liquid-glass space-y-2.5 text-xs">
            <h4 class="text-[11px] uppercase tracking-widest text-[#f5e6b8] font-cinzel font-semibold border-b border-white/10 pb-2">
              Horological & Gemological Dossier
            </h4>
            <div class="grid grid-cols-2 gap-y-2 gap-x-4 text-[11px] font-sans text-zinc-300">
              ${Object.entries(product.specifications).map(([key, val]) => `
                <div>
                  <span class="text-zinc-500 block uppercase text-[9px] font-cinzel tracking-wider">${key}</span>
                  <span class="text-white font-medium">${val}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Bespoke Customization: Monogram / Inscription -->
          <div class="space-y-2">
            <label class="block text-xs uppercase tracking-wider text-[#f5e6b8] font-cinzel">
              Bespoke Hand Engraving / Monogram (Optional):
            </label>
            <input 
              type="text" 
              id="modalMonogramInput" 
              placeholder="e.g. A.V. • MCMXCIV (Up to 12 characters)" 
              maxlength="12"
              class="w-full px-4 py-2.5 text-xs rounded-xl bg-zinc-950/80 border border-white/15 focus:outline-none focus:border-[#d4af37] text-white font-cinzel placeholder-zinc-600 tracking-wider"
            >
            <p class="text-[10px] text-zinc-500 font-sans">
              Executed by master hand-engravers in our Place Vendôme workshop. Complimentary with acquisition.
            </p>
          </div>

          <!-- Delivery Guarantee -->
          <div class="flex items-center gap-2 text-xs text-zinc-400 font-sans">
            <i class="fa-solid fa-shield-halved text-[#d4af37]"></i>
            <span>${product.leadTime} • Fully Insured Global Transit</span>
          </div>

          <!-- Acquisition Action Buttons -->
          <div class="flex items-center gap-3 pt-2">
            <button 
              id="modalAcquireNowBtn" 
              class="flex-1 btn-luxury-gold py-3.5 text-xs font-cinzel tracking-widest uppercase cursor-pointer"
            >
              <i class="fa-solid fa-crown mr-1.5"></i>
              Acquire Masterpiece
            </button>
            <button 
              id="modalConsultConciergeBtn" 
              class="btn-luxury-outline py-3.5 px-5 text-xs font-cinzel tracking-wider cursor-pointer"
              title="Request Private Consultation"
            >
              <i class="fa-solid fa-phone-volume"></i>
              Concierge
            </button>
          </div>

        </div>
      </div>
    `;

    // Bind modal thumbnail clicks
    content.querySelectorAll('.modal-thumb-btn').forEach(btn => {
      btn.onclick = () => {
        const idx = parseInt(btn.getAttribute('data-img-idx'), 10);
        const mainImg = document.getElementById('modalMainImage');
        if (mainImg) mainImg.src = product.images[idx];

        content.querySelectorAll('.modal-thumb-btn').forEach(b => {
          b.classList.remove('border-[#d4af37]', 'shadow-[0_0_15px_rgba(212,175,55,0.3)]');
          b.classList.add('border-white/10', 'opacity-60');
        });
        btn.classList.add('border-[#d4af37]', 'shadow-[0_0_15px_rgba(212,175,55,0.3)]');
        btn.classList.remove('opacity-60');
      };
    });

    // Bind acquire button
    const acquireBtn = document.getElementById('modalAcquireNowBtn');
    if (acquireBtn) {
      acquireBtn.onclick = () => {
        const monoInput = document.getElementById('modalMonogramInput');
        const monogram = monoInput ? monoInput.value.trim() : '';
        addProductToCart(product.id, monogram);
        closeProductDossierModal();
      };
    }

    // Bind concierge consultation button
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

  // --- "LE CERCLE PRIVÉ" MEMBERSHIP SYSTEM ---
  const openMembershipModal = (prefilledInterest = '') => {
    const modal = document.getElementById('membershipModal');
    if (!modal) {
      // Fallback: smooth-scroll to on-page membership section
      const section = document.getElementById('membership');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        const interestInput = document.getElementById('membershipInterestsInput');
        if (interestInput && prefilledInterest) {
          interestInput.value = `Private Viewing of ${prefilledInterest}`;
        }
        setTimeout(() => {
          const nameInput = document.getElementById('memberNameInput');
          if (nameInput) nameInput.focus();
        }, 500);
      }
      return;
    }

    const interestInput = document.getElementById('membershipInterestsInput');
    if (interestInput && prefilledInterest) {
      interestInput.value = `Private Viewing of ${prefilledInterest}`;
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  };

  const closeMembershipModal = () => {
    const modal = document.getElementById('membershipModal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
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
      showLuxuryToast('Required Fields Missing', 'Please provide your full legal name and private correspondence email.');
      return;
    }

    const dossierNumber = 'CP-' + new Date().getFullYear() + '-' + Math.floor(100000 + Math.random() * 900000);
    const conciergeOfficer = 'Madame Hélène de Montmirail (Directrice du Cercle Privé)';

    const membershipDossier = {
      dossierNumber,
      name,
      email,
      phone,
      city,
      interest,
      code: code || 'DIRECT-APPLICANT',
      conciergeOfficer,
      dateGranted: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
    };

    state.membership = membershipDossier;
    try {
      localStorage.setItem(STORAGE_KEYS.MEMBERSHIP, JSON.stringify(membershipDossier));
    } catch (err) {}

    closeMembershipModal();
    openMembershipSuccessModal(membershipDossier);
  };

  const openMembershipSuccessModal = (dossier) => {
    const modal = document.getElementById('membershipSuccessModal');
    const content = document.getElementById('membershipSuccessContent');
    if (!modal || !content) return;

    content.innerHTML = `
      <div class="text-center space-y-4">
        <div class="w-20 h-20 mx-auto wax-seal flex items-center justify-center text-3xl text-[#07080a] shadow-2xl">
          <i class="fa-solid fa-crown"></i>
        </div>

        <div>
          <span class="text-xs font-cinzel text-[#d4af37] tracking-[0.2em] uppercase">Private Salon Invitation</span>
          <h3 class="text-2xl font-serif text-white font-medium mt-1">
            Welcome to Le Cercle Privé, ${dossier.name}
          </h3>
          <p class="text-xs text-zinc-400 font-sans max-w-md mx-auto mt-2 leading-relaxed">
            Your credentials have been securely verified and entered into our Geneva registry. Your dedicated Private Concierge Officer will initiate personal discreet contact within four business hours.
          </p>
        </div>

        <!-- Dossier Credentials Box -->
        <div class="p-5 rounded-2xl liquid-glass text-left space-y-3 font-cinzel text-xs border border-[#d4af37]/30">
          <div class="flex justify-between border-b border-white/10 pb-2">
            <span class="text-zinc-500 uppercase text-[10px]">Dossier Registration</span>
            <span class="text-[#f5e6b8] font-bold font-mono">${dossier.dossierNumber}</span>
          </div>
          <div class="flex justify-between border-b border-white/10 pb-2">
            <span class="text-zinc-500 uppercase text-[10px]">Assigned Concierge Officer</span>
            <span class="text-white">${dossier.conciergeOfficer}</span>
          </div>
          <div class="flex justify-between border-b border-white/10 pb-2">
            <span class="text-zinc-500 uppercase text-[10px]">Privilege Tier</span>
            <span class="text-[#d4af37] font-bold">Patron Connoisseur (Tier I)</span>
          </div>
          <div class="flex justify-between">
            <span class="text-zinc-500 uppercase text-[10px]">Private Salon Access</span>
            <span class="text-zinc-300">Paris • Genève • London • Tokyo</span>
          </div>
        </div>

        <div class="pt-2 flex items-center gap-3">
          <button 
            id="closeSuccessModalBtn" 
            class="flex-1 btn-luxury-gold py-3 text-xs uppercase tracking-wider font-cinzel"
          >
            Enter The Salon
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

    // Render items summary
    const summaryContainer = document.getElementById('checkoutItemsSummary');
    let total = 0;

    if (summaryContainer) {
      summaryContainer.innerHTML = state.cart.map(item => {
        const product = state.products.find(p => p.id === item.id);
        if (!product) return '';
        const price = getNumericPrice(product);
        total += price * item.quantity;

        return `
          <div class="flex justify-between text-xs py-1.5 border-b border-white/5 font-sans">
            <span class="text-white truncate max-w-[240px]">${product.name} ${item.quantity > 1 ? `(${item.quantity}x)` : ''}</span>
            <span class="text-[#f5e6b8] font-cinzel">${formatRawAmount(price * item.quantity)}</span>
          </div>
        `;
      }).join('');
    }

    const totalEl = document.getElementById('checkoutSummaryTotal');
    if (totalEl) totalEl.textContent = formatRawAmount(total);

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
      showLuxuryToast('Incomplete Credentials', 'Please provide recipient legal title and secured address.');
      return;
    }

    // Hide checkout modal
    const checkoutModal = document.getElementById('acquisitionCheckoutModal');
    if (checkoutModal) {
      checkoutModal.classList.add('hidden');
      checkoutModal.classList.remove('flex');
    }

    // Generate Deed of Provenance
    const acquisitionRef = 'DEED-' + new Date().getFullYear() + '-' + Math.floor(100000 + Math.random() * 900000);
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

    // Empty cart
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
          <td class="py-3 font-serif text-sm font-semibold">${product.name}</td>
          <td class="py-3 font-cinzel text-zinc-400">${product.provenance}</td>
          <td class="py-3 font-mono text-center">${item.quantity}</td>
          <td class="py-3 text-right font-cinzel font-bold">${formatRawAmount(numPrice * item.quantity)}</td>
        </tr>
      `;
    }).join('');

    content.innerHTML = `
      <div class="border-2 border-[#d4af37] p-8 sm:p-12 relative bg-[#0a0c12] text-white space-y-8 shadow-2xl">
        
        <!-- Watermark Hallmark -->
        <div class="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none text-9xl text-[#d4af37]">
          <i class="fa-solid fa-crown"></i>
        </div>

        <!-- Deed Header -->
        <div class="flex items-start justify-between border-b border-[#d4af37]/40 pb-6">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="w-7 h-7 rounded-full bg-[#d4af37] text-[#07080a] flex items-center justify-center text-xs font-bold">
                <i class="fa-solid fa-crown"></i>
              </span>
              <span class="font-cinzel text-lg font-black tracking-[0.25em] text-[#f5e6b8]">MAISON VENDÔME</span>
            </div>
            <p class="text-[10px] uppercase font-cinzel tracking-widest text-[#d4af37]">
              Haute Horlogerie • Haute Joaillerie • Objets d'Art
            </p>
            <p class="text-[10px] text-zinc-400 font-sans mt-0.5">
              26, Place Vendôme, 75001 Paris • Vallée de Joux, Suisse
            </p>
          </div>

          <div class="text-right">
            <span class="px-3 py-1 rounded-full bg-[#d4af37]/20 border border-[#d4af37] text-[#f5e6b8] text-[10px] font-cinzel font-bold uppercase tracking-widest">
              OFFICIAL DEED OF PROVENANCE
            </span>
            <p class="text-xs text-zinc-400 font-mono mt-2">Ref: ${deedData.acquisitionRef}</p>
            <p class="text-xs text-zinc-400 font-sans">${deedData.dateIssued}</p>
          </div>
        </div>

        <!-- Acquisition Recipient Details -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 p-5 rounded-xl liquid-glass text-xs font-sans">
          <div>
            <span class="text-zinc-500 uppercase text-[9px] font-cinzel tracking-wider block">Acquiring Patron</span>
            <strong class="text-white text-sm font-serif">${deedData.recipientName}</strong>
          </div>
          <div>
            <span class="text-zinc-500 uppercase text-[9px] font-cinzel tracking-wider block">Secured Destination</span>
            <span class="text-zinc-300">${deedData.city || 'Private Vault Transit'}</span>
          </div>
          <div>
            <span class="text-zinc-500 uppercase text-[9px] font-cinzel tracking-wider block">Provenance Status</span>
            <span class="text-[#d4af37] font-cinzel font-bold"><i class="fa-solid fa-circle-check mr-1 text-xs"></i>Entered into Geneva Archives</span>
          </div>
        </div>

        <!-- Items Table -->
        <div>
          <table class="w-full text-left">
            <thead>
              <tr class="border-b border-[#d4af37]/30 text-[10px] font-cinzel uppercase tracking-widest text-[#d4af37]">
                <th class="pb-2">Masterpiece Creation</th>
                <th class="pb-2">Atelier Provenance</th>
                <th class="pb-2 text-center">Exemplars</th>
                <th class="pb-2 text-right">Valuation</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
          </table>

          <div class="pt-4 flex justify-between items-baseline font-cinzel border-t border-white/10 mt-4">
            <span class="text-xs text-zinc-400 uppercase tracking-widest">Total Sovereign Valuation:</span>
            <span class="text-xl font-bold text-gold-gradient">${formatRawAmount(grandTotal)}</span>
          </div>
        </div>

        <!-- Archival Guarantee & Signatures -->
        <div class="pt-6 border-t border-[#d4af37]/30 grid grid-cols-2 gap-8 items-end">
          <div class="text-[10px] text-zinc-400 font-sans leading-relaxed">
            <p class="italic text-zinc-300">
              "Every creation bearing the hallmark of Maison Vendôme is guaranteed in perpetuity. Its provenance, authenticity, and horological lineage are permanently chronicled in our private underground archives in the canton of Vaud."
            </p>
          </div>

          <div class="text-right space-y-1">
            <div class="font-serif italic text-lg text-[#f5e6b8]">Antoine de Vendôme</div>
            <div class="text-[9px] uppercase tracking-widest font-cinzel text-zinc-400">Conservateur en Chef des Archives</div>
            <div class="text-[9px] font-mono text-[#d4af37]">GENEVA ARCHIVE SEAL #489-A</div>
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
      showLuxuryToast('Currency Switched', `Prices now displayed in ${state.currency}.`);
    };
  };

  // --- EVENT LISTENERS INITIALIZATION ---
  const setupEventListeners = () => {
    // Nav Drawer trigger
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
      printDeedBtn.onclick = () => {
        window.print();
      };
    }

    // Product Dossier Modal close
    const closeDossierBtn = document.getElementById('closeProductDossierBtn');
    if (closeDossierBtn) closeDossierBtn.onclick = closeProductDossierModal;

    const dossierBackdrop = document.getElementById('productDossierBackdrop');
    if (dossierBackdrop) dossierBackdrop.onclick = closeProductDossierModal;

    // Membership triggers
    const openMembershipBtns = document.querySelectorAll('.open-membership-trigger');
    openMembershipBtns.forEach(btn => {
      btn.onclick = () => openMembershipModal();
    });

    const closeMembershipBtn = document.getElementById('closeMembershipModalBtn');
    if (closeMembershipBtn) closeMembershipBtn.onclick = closeMembershipModal;

    const membershipBackdrop = document.getElementById('membershipBackdrop');
    if (membershipBackdrop) membershipBackdrop.onclick = closeMembershipModal;

    const membershipForm = document.getElementById('membershipApplicationForm');
    if (membershipForm) membershipForm.onsubmit = handleMembershipSubmission;

    // Pre-fill invitation code helper
    const prefillCodeBtn = document.getElementById('prefillVipCodeBtn');
    if (prefillCodeBtn) {
      prefillCodeBtn.onclick = () => {
        const input = document.getElementById('memberInvitationCodeInput');
        if (input) {
          input.value = 'VENDOME-VIP-2026';
          showLuxuryToast('Invitation Code Applied', 'VENDOME-VIP-2026 priority allocation credentials verified.');
        }
      };
    }

    // Wishlist navigation trigger
    const wishlistNavBtn = document.getElementById('navWishlistBtn');
    if (wishlistNavBtn) {
      wishlistNavBtn.onclick = () => {
        if (state.wishlist.length === 0) {
          showLuxuryToast('Salon Privé Wishlist', 'Your private curation is empty. Mark items with the heart icon to save for viewing.');
          document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
        } else {
          state.activeCategory = 'wishlist';
          renderCategoryFilters();
          renderProductGallery();
          document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
          showLuxuryToast('Salon Privé Curation', `Presenting ${state.wishlist.length} saved masterpiece${state.wishlist.length > 1 ? 's' : ''}.`);
        }
      };
    }

    // Global static detail triggers (such as hero masterpiece card)
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
        closeMembershipModal();
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
  const initLuxuryApp = () => {
    loadState();
    setupCurrencySelector();
    renderCategoryFilters();
    renderProductGallery();
    updateCartBadge();
    updateWishlistBadge();
    setupEventListeners();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLuxuryApp);
  } else {
    initLuxuryApp();
  }

})();
