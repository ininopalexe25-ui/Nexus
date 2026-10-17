/**
 * ============================================================
 * NEXUS APEX // DATA STRUCTURES & ALGORITHMS (DSA) ENGINE
 * Tugas Besar Struktur Data:
 * 1. Array, Pointer, & Struct Implementation
 * 2. Sorting Algorithms (QuickSort, MergeSort, BubbleSort) + Execution Log
 * 3. Searching Algorithms (Binary Search, Linear Search) + Execution Log
 * ============================================================
 */

(function () {
  'use strict';

  // ============================================================
  // 1. STRUCT REPRESENTATION: ProductStruct (Simpul Tipe Data Majemuk)
  // ============================================================
  /**
   * Representasi STRUCT dalam arsitektur komputer / pemrograman.
   * Mengelompokkan data heterogen (teks, angka, referensi memori/pointer)
   * menjadi satu unit simpul terpadu.
   */
  class ProductStruct {
    constructor(data, index = 0) {
      this.id = data.id || 'N/A';
      this.name = data.name || 'Hardware Component';
      this.category = data.category || 'General';
      this.price = Number(data.price || data.priceIDR || 0);
      this.stock = Number(data.stock || 0);
      this.rating = Number(data.rating || 5.0);
      this.provenance = data.provenance || 'Official Factory Distribution';
      this.image = Array.isArray(data.images) && data.images.length > 0 
        ? data.images[0] 
        : (data.image || 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=600&auto=format&fit=crop');
      this.description = data.description || '';

      // --- ALAMAT MEMORI SIMULASI (Simulated Pointer Memory Address) ---
      // Contoh: 0x7FFE0010 + offset heksadesimal untuk visualisasi akademis
      this.memAddress = '0x' + (0x7ffe0000 + (index * 0x48)).toString(16).toUpperCase();

      // --- POINTER / REFERENSI SIMPUL BERKAIT (Node Pointers) ---
      this.prev = null; // Pointer ke simpul sebelumnya (ProductStruct*)
      this.next = null; // Pointer ke simpul selanjutnya (ProductStruct*)
    }

    /**
     * Format ringkas deskriptor simpul untuk log akademik
     */
    toDescriptor() {
      return `[${this.id}] ${this.name} | Rp ${this.price.toLocaleString('id-ID')} | Ptr: ${this.memAddress}`;
    }
  }

  // ============================================================
  // 2. POINTER & STRUKTUR DATA BERKAIT: ProductDoublyLinkedList
  // ============================================================
  /**
   * Representasi Struktur Data Doubly Linked List murni berbasis Pointer.
   * Memelihara pointer head, tail, dan current pointer yang dapat dimajukan
   * atau dimundurkan secara eksplisit.
   */
  class ProductDoublyLinkedList {
    constructor() {
      this.head = null;    // Pointer awal (Head Pointer)
      this.tail = null;    // Pointer akhir (Tail Pointer)
      this.current = null; // Pointer penelusur aktif (Current Active Pointer)
      this.currentIndex = 0;
      this.length = 0;
    }

    /**
     * Menambahkan simpul struct ke akhir daftar berkait (Pointer linking)
     */
    append(node) {
      if (!this.head) {
        this.head = node;
        this.tail = node;
        this.current = node;
        this.currentIndex = 0;
      } else {
        this.tail.next = node; // Link tail pointer lama ke node baru
        node.prev = this.tail; // Link node baru back-pointer ke tail lama
        this.tail = node;      // Perbarui tail pointer
      }
      this.length++;
    }

    /**
     * Menggerakkan Current Pointer maju satu simpul (Dereference Next Pointer)
     */
    moveNext() {
      if (this.current && this.current.next) {
        this.current = this.current.next;
        this.currentIndex++;
        return { moved: true, current: this.current, index: this.currentIndex };
      }
      return { moved: false, current: this.current, index: this.currentIndex };
    }

    /**
     * Menggerakkan Current Pointer mundur satu simpul (Dereference Prev Pointer)
     */
    movePrev() {
      if (this.current && this.current.prev) {
        this.current = this.current.prev;
        this.currentIndex--;
        return { moved: true, current: this.current, index: this.currentIndex };
      }
      return { moved: false, current: this.current, index: this.currentIndex };
    }

    /**
     * Reset Current Pointer kembali menunjuk ke Head
     */
    resetToHead() {
      this.current = this.head;
      this.currentIndex = 0;
      return this.current;
    }

    /**
     * Pindahkan Current Pointer menunjuk ke Tail
     */
    moveToTail() {
      this.current = this.tail;
      this.currentIndex = Math.max(0, this.length - 1);
      return this.current;
    }

    /**
     * Lompatkan Current Pointer ke indeks ke-k
     */
    moveToIndex(targetIndex) {
      if (targetIndex < 0 || targetIndex >= this.length) return null;
      let ptr = this.head;
      let idx = 0;
      while (ptr && idx < targetIndex) {
        ptr = ptr.next;
        idx++;
      }
      this.current = ptr;
      this.currentIndex = idx;
      return this.current;
    }

    /**
     * Konversi daftar berkait ke Array kontigu (Linear Pointer Traversal)
     */
    toArray() {
      const arr = [];
      let ptr = this.head;
      while (ptr !== null) {
        arr.push(ptr);
        ptr = ptr.next;
      }
      return arr;
    }
  }

  // ============================================================
  // 3. LOGGER / TELEMETRI SISTEM
  // ============================================================
  class DSALogger {
    constructor() {
      this.logs = [];
    }

    clear() {
      this.logs = [];
    }

    log(type, stepNumber, message, detail = null) {
      const entry = {
        id: this.logs.length + 1,
        time: new Date().toLocaleTimeString('id-ID', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit', fractionalSecondDigits: 3 }),
        type, // 'INIT' | 'POINTER' | 'COMPARE' | 'SWAP' | 'PARTITION' | 'FOUND' | 'NOT_FOUND' | 'SUMMARY'
        step: stepNumber,
        message,
        detail
      };
      this.logs.push(entry);
    }

    toFormattedText() {
      return this.logs.map(l => `[${l.time}] [${l.type.padEnd(9)}] Step ${String(l.step).padStart(3, '0')}: ${l.message}`).join('\n');
    }
  }

  // ============================================================
  // 4. SORTING ALGORITHMS (DENGAN REKAMAN LOG DETAIL)
  // ============================================================
  const SortingAlgorithms = {
    /**
     * QUICK SORT (Divide & Conquer)
     * Menggunakan konsep Pointer Kiri (leftPtr), Pointer Kanan (rightPtr),
     * dan Pivot element. Kompleksitas Rata-rata O(N log N).
     */
    quickSort: (arrayInput, key = 'price', ascending = true, logger = null, maxVerboseSteps = 120) => {
      const items = [...arrayInput];
      const n = items.length;
      let stepCount = 0;
      let comparisons = 0;
      let swaps = 0;
      let recursionDepthMax = 0;
      const startTime = performance.now();

      if (logger) {
        logger.clear();
        logger.log('INIT', 0, `Memulai QuickSort pada ${n} elemen struct. Kunci: '${key}', Urutan: ${ascending ? 'Naik (ASC)' : 'Turun (DESC)'}.`);
      }

      const getValue = (item) => {
        if (key === 'price') return Number(item.price);
        if (key === 'rating') return Number(item.rating);
        if (key === 'name') return String(item.name).toLowerCase();
        return item[key];
      };

      const compare = (a, b) => {
        comparisons++;
        const valA = getValue(a);
        const valB = getValue(b);
        if (ascending) {
          return valA < valB ? -1 : (valA > valB ? 1 : 0);
        } else {
          return valA > valB ? -1 : (valA < valB ? 1 : 0);
        }
      };

      const swap = (i, j) => {
        if (i === j) return;
        swaps++;
        const temp = items[i];
        items[i] = items[j];
        items[j] = temp;
      };

      const partition = (low, high, depth) => {
        if (depth > recursionDepthMax) recursionDepthMax = depth;
        
        // Memilih pivot menggunakan median-of-three atau elemen tengah untuk efisiensi
        const mid = Math.floor((low + high) / 2);
        const pivot = items[mid];
        let i = low;
        let j = high;

        stepCount++;
        if (logger && stepCount <= maxVerboseSteps) {
          logger.log(
            'PARTITION', 
            stepCount, 
            `Sub-array [${low}...${high}] (Kedalaman: ${depth}). Pivot dipilih di index ${mid}: "${pivot.name}" (Nilai: ${getValue(pivot)}). Pointer i=${i}, j=${j}.`
          );
        }

        while (i <= j) {
          while (compare(items[i], pivot) < 0) {
            i++;
          }
          while (compare(items[j], pivot) > 0) {
            j--;
          }

          if (i <= j) {
            if (i !== j) {
              stepCount++;
              if (logger && stepCount <= maxVerboseSteps) {
                logger.log(
                  'SWAP', 
                  stepCount, 
                  `Pertukaran posisi: index [${i}] ("${items[i].name}") <==> index [${j}] ("${items[j].name}").`
                );
              }
              swap(i, j);
            }
            i++;
            j--;
          }
        }

        return { leftIndex: i, rightIndex: j };
      };

      const sortRecursive = (low, high, depth = 1) => {
        if (low < high) {
          const { leftIndex, rightIndex } = partition(low, high, depth);

          if (low < rightIndex) {
            sortRecursive(low, rightIndex, depth + 1);
          }
          if (leftIndex < high) {
            sortRecursive(leftIndex, high, depth + 1);
          }
        }
      };

      if (n > 1) {
        sortRecursive(0, n - 1, 1);
      }

      const elapsedMs = Number((performance.now() - startTime).toFixed(2));

      if (logger) {
        if (stepCount > maxVerboseSteps) {
          logger.log('INFO', stepCount, `... dan ${stepCount - maxVerboseSteps} langkah partisi/swap lainnya diselesaikan secara efisien.`);
        }
        logger.log(
          'SUMMARY', 
          stepCount + 1, 
          `QuickSort Selesai! ${n} Struct terurut. Total Komparasi: ${comparisons}, Total Swap: ${swaps}, Waktu: ${elapsedMs} ms, Kedalaman Rekursi: ${recursionDepthMax}. Kompleksitas: O(N log N).`
        );
      }

      return {
        sortedItems: items,
        metrics: {
          algorithm: 'QuickSort',
          itemCount: n,
          comparisons,
          swaps,
          elapsedMs,
          complexity: 'O(N log N)',
          key,
          ascending
        }
      };
    },

    /**
     * MERGE SORT (Divide & Conquer)
     * Membagi array secara rekursif menjadi dua paruh, lalu menggabungkan (merge)
     * kembali menggunakan two-pointer array buffer.
     */
    mergeSort: (arrayInput, key = 'price', ascending = true, logger = null, maxVerboseSteps = 120) => {
      let items = [...arrayInput];
      const n = items.length;
      let stepCount = 0;
      let comparisons = 0;
      let moves = 0;
      const startTime = performance.now();

      if (logger) {
        logger.clear();
        logger.log('INIT', 0, `Memulai MergeSort pada ${n} elemen struct. Kunci: '${key}', Urutan: ${ascending ? 'Naik' : 'Turun'}.`);
      }

      const getValue = (item) => {
        if (key === 'price') return Number(item.price);
        if (key === 'rating') return Number(item.rating);
        if (key === 'name') return String(item.name).toLowerCase();
        return item[key];
      };

      const compare = (a, b) => {
        comparisons++;
        const valA = getValue(a);
        const valB = getValue(b);
        if (ascending) {
          return valA <= valB;
        } else {
          return valA >= valB;
        }
      };

      const merge = (left, right, depth) => {
        const result = [];
        let ptrL = 0;
        let ptrR = 0;

        while (ptrL < left.length && ptrR < right.length) {
          stepCount++;
          if (compare(left[ptrL], right[ptrR])) {
            result.push(left[ptrL]);
            ptrL++;
          } else {
            result.push(right[ptrR]);
            ptrR++;
          }
          moves++;
        }

        while (ptrL < left.length) {
          result.push(left[ptrL]);
          ptrL++;
          moves++;
        }
        while (ptrR < right.length) {
          result.push(right[ptrR]);
          ptrR++;
          moves++;
        }

        if (logger && stepCount <= maxVerboseSteps) {
          logger.log('MERGE', stepCount, `Penggabungan paruh (${left.length} + ${right.length} elemen) pada depth ${depth}. Selesai ${result.length} elemen.`);
        }

        return result;
      };

      const divideAndConquer = (subArr, depth = 1) => {
        if (subArr.length <= 1) return subArr;
        const mid = Math.floor(subArr.length / 2);
        const leftHalf = subArr.slice(0, mid);
        const rightHalf = subArr.slice(mid);

        return merge(divideAndConquer(leftHalf, depth + 1), divideAndConquer(rightHalf, depth + 1), depth);
      };

      items = divideAndConquer(items, 1);
      const elapsedMs = Number((performance.now() - startTime).toFixed(2));

      if (logger) {
        logger.log(
          'SUMMARY', 
          stepCount + 1, 
          `MergeSort Selesai! ${n} Struct terurut. Total Komparasi: ${comparisons}, Total Perpindahan Buffer: ${moves}, Waktu: ${elapsedMs} ms. Kompleksitas: O(N log N).`
        );
      }

      return {
        sortedItems: items,
        metrics: {
          algorithm: 'MergeSort',
          itemCount: n,
          comparisons,
          swaps: moves,
          elapsedMs,
          complexity: 'O(N log N)',
          key,
          ascending
        }
      };
    },

    /**
     * BUBBLE SORT (Iterative Adjacent Comparison)
     * Membandingkan pasangan elemen yang bersebelahan dan menukarnya jika tidak berurutan.
     * Kompleksitas: O(N^2).
     */
    bubbleSort: (arrayInput, key = 'price', ascending = true, logger = null, maxVerboseSteps = 120) => {
      const items = [...arrayInput];
      const n = items.length;
      let stepCount = 0;
      let comparisons = 0;
      let swaps = 0;
      const startTime = performance.now();

      if (logger) {
        logger.clear();
        logger.log('INIT', 0, `Memulai BubbleSort pada ${n} elemen struct. Kunci: '${key}', Urutan: ${ascending ? 'Naik' : 'Turun'}.`);
      }

      const getValue = (item) => {
        if (key === 'price') return Number(item.price);
        if (key === 'rating') return Number(item.rating);
        if (key === 'name') return String(item.name).toLowerCase();
        return item[key];
      };

      for (let i = 0; i < n - 1; i++) {
        let swappedInPass = false;
        for (let j = 0; j < n - i - 1; j++) {
          comparisons++;
          const valA = getValue(items[j]);
          const valB = getValue(items[j + 1]);

          const condition = ascending ? valA > valB : valA < valB;
          if (condition) {
            swaps++;
            swappedInPass = true;
            stepCount++;

            if (logger && stepCount <= maxVerboseSteps) {
              logger.log('SWAP', stepCount, `Pass ${i + 1}: Swap index [${j}] (${items[j].name.substring(0, 15)}...) dengan [${j + 1}] (${items[j + 1].name.substring(0, 15)}...).`);
            }

            const temp = items[j];
            items[j] = items[j + 1];
            items[j + 1] = temp;
          }
        }
        if (!swappedInPass) {
          if (logger) logger.log('INFO', stepCount, `Pass ${i + 1}: Tidak ada pertukaran (Array sudah terurut lebih awal, early break optimization).`);
          break;
        }
      }

      const elapsedMs = Number((performance.now() - startTime).toFixed(2));

      if (logger) {
        logger.log(
          'SUMMARY', 
          stepCount + 1, 
          `BubbleSort Selesai! ${n} Struct terurut. Total Komparasi: ${comparisons}, Total Swap: ${swaps}, Waktu: ${elapsedMs} ms. Kompleksitas: O(N^2).`
        );
      }

      return {
        sortedItems: items,
        metrics: {
          algorithm: 'BubbleSort',
          itemCount: n,
          comparisons,
          swaps,
          elapsedMs,
          complexity: 'O(N^2)',
          key,
          ascending
        }
      };
    }
  };

  // ============================================================
  // 5. SEARCHING ALGORITHMS (DENGAN REKAMAN LOG DETAIL)
  // ============================================================
  const SearchingAlgorithms = {
    /**
     * BINARY SEARCH (Pencarian Biner)
     * Prasyarat: Array harus terurut berdasarkan kunci pencarian.
     * Menggunakan tiga pointer: lowPtr, highPtr, dan midPtr.
     * Kompleksitas: O(log N).
     */
    binarySearch: (sortedItems, targetQuery, searchMode = 'name', logger = null) => {
      const startTime = performance.now();
      const n = sortedItems.length;
      let lowPtr = 0;
      let highPtr = n - 1;
      let stepCount = 0;
      let comparisons = 0;
      let foundIndex = -1;
      let foundItem = null;

      if (logger) {
        logger.clear();
        logger.log('INIT', 0, `Memulai Binary Search pada ${n} elemen terurut. Target: "${targetQuery}" (Mode: ${searchMode.toUpperCase()}).`);
      }

      const isNumeric = searchMode === 'price';
      const targetNumeric = isNumeric ? Number(targetQuery) : null;
      const targetString = !isNumeric ? String(targetQuery).toLowerCase().trim() : '';

      while (lowPtr <= highPtr) {
        stepCount++;
        comparisons++;
        const midPtr = Math.floor((lowPtr + highPtr) / 2);
        const currentItem = sortedItems[midPtr];

        let comparisonResult = 0; // -1 jika current < target, 1 jika current > target, 0 jika sama

        if (isNumeric) {
          const currentVal = Number(currentItem.price);
          if (currentVal < targetNumeric) comparisonResult = -1;
          else if (currentVal > targetNumeric) comparisonResult = 1;
          else comparisonResult = 0;

          if (logger) {
            logger.log(
              'POINTER',
              stepCount,
              `Iterasi ${stepCount}: lowPtr=${lowPtr}, highPtr=${highPtr}, midPtr=${midPtr}. Nilai mid: Rp ${currentVal.toLocaleString('id-ID')} vs Target: Rp ${targetNumeric.toLocaleString('id-ID')}.`
            );
          }
        } else {
          const currentVal = String(currentItem.name).toLowerCase();
          // Cek kesamaan parsial atau urutan leksikografis
          if (currentVal.includes(targetString)) {
            comparisonResult = 0;
          } else {
            comparisonResult = currentVal.localeCompare(targetString);
          }

          if (logger) {
            logger.log(
              'POINTER',
              stepCount,
              `Iterasi ${stepCount}: lowPtr=${lowPtr}, highPtr=${highPtr}, midPtr=${midPtr}. Simpul [${currentItem.id}]: "${currentItem.name}" (Alamat: ${currentItem.memAddress}).`
            );
          }
        }

        if (comparisonResult === 0) {
          foundIndex = midPtr;
          foundItem = currentItem;
          if (logger) {
            logger.log(
              'FOUND',
              stepCount,
              `TARGET DITEMUKAN! Simpul cocok berada pada index [${midPtr}]: "${currentItem.name}" (Kategori: ${currentItem.category}, Valuasi: Rp ${currentItem.price.toLocaleString('id-ID')}). Alamat Memori: ${currentItem.memAddress}.`
            );
          }
          break;
        } else if (comparisonResult < 0) {
          if (logger) {
            logger.log('COMPARE', stepCount, `Target lebih besar dari Mid. Geser pointer lowPtr = midPtr + 1 (${midPtr + 1}).`);
          }
          lowPtr = midPtr + 1;
        } else {
          if (logger) {
            logger.log('COMPARE', stepCount, `Target lebih kecil dari Mid. Geser pointer highPtr = midPtr - 1 (${midPtr - 1}).`);
          }
          highPtr = midPtr - 1;
        }
      }

      const elapsedMs = Number((performance.now() - startTime).toFixed(3));

      if (foundIndex === -1 && logger) {
        logger.log(
          'NOT_FOUND',
          stepCount + 1,
          `Pencarian selesai. Target "${targetQuery}" TIDAK ditemukan dalam rentang array. Total Iterasi: ${stepCount}.`
        );
      }

      if (logger) {
        logger.log(
          'SUMMARY',
          stepCount + 1,
          `Binary Search Selesai. Status: ${foundIndex !== -1 ? 'DITEMUKAN (Index ' + foundIndex + ')' : 'TIDAK DITEMUKAN'}, Komparasi: ${comparisons}, Waktu: ${elapsedMs} ms. Kompleksitas: O(log N).`
        );
      }

      return {
        found: foundIndex !== -1,
        index: foundIndex,
        item: foundItem,
        comparisons,
        iterations: stepCount,
        elapsedMs,
        algorithm: 'Binary Search',
        complexity: 'O(log N)'
      };
    },

    /**
     * LINEAR SEARCH (Pencarian Sekuensial)
     * Menelusuri seluruh simpul dari index 0 sampai n-1 secara berurutan.
     * Kompleksitas: O(N).
     */
    linearSearch: (items, targetQuery, searchMode = 'name', logger = null, maxVerboseSteps = 60) => {
      const startTime = performance.now();
      const n = items.length;
      let comparisons = 0;
      let foundIndex = -1;
      let foundItem = null;

      if (logger) {
        logger.clear();
        logger.log('INIT', 0, `Memulai Linear Search pada ${n} elemen. Target: "${targetQuery}".`);
      }

      const queryLower = String(targetQuery).toLowerCase().trim();

      for (let i = 0; i < n; i++) {
        comparisons++;
        const item = items[i];
        const match = searchMode === 'price'
          ? Number(item.price) === Number(targetQuery)
          : (item.name.toLowerCase().includes(queryLower) || item.category.toLowerCase().includes(queryLower) || item.id.toLowerCase().includes(queryLower));

        if (logger && i <= maxVerboseSteps) {
          logger.log(
            'COMPARE',
            i + 1,
            `Memeriksa index [${i}] (Ptr: ${item.memAddress}): "${item.name}" -> ${match ? 'COCOK!' : 'Tidak cocok'}`
          );
        }

        if (match) {
          foundIndex = i;
          foundItem = item;
          if (logger) {
            logger.log('FOUND', i + 1, `TARGET DITEMUKAN pada indeks [${i}] setelah ${comparisons} langkah inspeksi.`);
          }
          break;
        }
      }

      const elapsedMs = Number((performance.now() - startTime).toFixed(3));

      if (foundIndex === -1 && logger) {
        logger.log('NOT_FOUND', n, `Pencarian selesai setelah memeriksa seluruh ${n} elemen. Target tidak ditemukan.`);
      }

      if (logger) {
        logger.log(
          'SUMMARY',
          comparisons,
          `Linear Search Selesai. Status: ${foundIndex !== -1 ? 'DITEMUKAN' : 'TIDAK DITEMUKAN'}, Komparasi: ${comparisons}, Waktu: ${elapsedMs} ms. Kompleksitas: O(N).`
        );
      }

      return {
        found: foundIndex !== -1,
        index: foundIndex,
        item: foundItem,
        comparisons,
        iterations: comparisons,
        elapsedMs,
        algorithm: 'Linear Search',
        complexity: 'O(N)'
      };
    }
  };

  // ============================================================
  // 6. GLOBAL TELEMETRY ENGINE FACADE (NexusDSA)
  // ============================================================
  class NexusDSAEngine {
    constructor() {
      this.structArray = [];             // 1. ARRAY OF STRUCTS
      this.doublyLinkedList = new ProductDoublyLinkedList(); // 2. POINTER DOUBLY LINKED LIST
      this.logger = new DSALogger();     // TELEMETRY LOGGER
      this.lastSortMetrics = null;
      this.lastSearchMetrics = null;
      this.isInitialized = false;
    }

    /**
     * Inisialisasi data mentah ke dalam representasi Struct & Doubly Linked List
     */
    init(rawProducts) {
      if (!Array.isArray(rawProducts) || rawProducts.length === 0) return;
      this.structArray = [];
      this.doublyLinkedList = new ProductDoublyLinkedList();

      rawProducts.forEach((item, idx) => {
        const node = new ProductStruct(item, idx);
        this.structArray.push(node);
        this.doublyLinkedList.append(node);
      });

      this.isInitialized = true;
      console.log(`%c[DSA-ENGINE] Berhasil menginisialisasi 140 ProductStruct & Doubly Linked List berkait.`, 'color: #00ff87; font-weight: bold;');
    }

    /**
     * Jalankan Sorting dengan metode pilihan
     */
    executeSort(algorithm = 'quick', key = 'price', ascending = true) {
      if (!this.isInitialized && window.INITIAL_PRODUCTS) {
        this.init(window.INITIAL_PRODUCTS);
      }

      let result;
      if (algorithm === 'merge') {
        result = SortingAlgorithms.mergeSort(this.structArray, key, ascending, this.logger);
      } else if (algorithm === 'bubble') {
        result = SortingAlgorithms.bubbleSort(this.structArray, key, ascending, this.logger);
      } else {
        result = SortingAlgorithms.quickSort(this.structArray, key, ascending, this.logger);
      }

      this.lastSortMetrics = result.metrics;

      // Cetak banner di Developer Console untuk kemudahan pemeriksaan dosen (F12)
      this.printConsoleBanner('SORTING', result.metrics);

      return result;
    }

    /**
     * Jalankan Searching dengan metode pilihan
     */
    executeSearch(query, algorithm = 'binary', searchMode = 'name') {
      if (!this.isInitialized && window.INITIAL_PRODUCTS) {
        this.init(window.INITIAL_PRODUCTS);
      }

      let result;
      if (algorithm === 'linear') {
        result = SearchingAlgorithms.linearSearch(this.structArray, query, searchMode, this.logger);
      } else {
        // Binary search mensyaratkan array terurut; urutkan dulu secara internal jika belum terurut
        const sorted = SortingAlgorithms.quickSort(this.structArray, searchMode === 'price' ? 'price' : 'name', true).sortedItems;
        result = SearchingAlgorithms.binarySearch(sorted, query, searchMode, this.logger);
      }

      this.lastSearchMetrics = result;

      // Cetak banner di Developer Console
      this.printConsoleBanner('SEARCHING', result);

      return result;
    }

    /**
     * Cetak banner resmi telemetri struktur data di browser console
     */
    printConsoleBanner(action, metrics) {
      console.group(`%c🔬 NEXUS APEX // TELEMETRI STRUKTUR DATA & ALGORITMA [${action}]`, 'background: #07090e; color: #00ff87; padding: 4px 8px; font-size: 12px; font-weight: bold; border-left: 4px solid #00ff87;');
      console.log(`%c• Struktur Data : %cArray of Struct (ProductStruct) & Doubly Linked List (Node Pointers)`, 'color: #94a3b8;', 'color: #ffffff; font-weight: bold;');
      console.log(`%c• Algoritma     : %c${metrics.algorithm} (${metrics.complexity})`, 'color: #94a3b8;', 'color: #00f0ff; font-weight: bold;');
      console.log(`%c• Waktu Eksekusi: %c${metrics.elapsedMs} ms`, 'color: #94a3b8;', 'color: #00ff87; font-weight: bold;');
      console.log(`%c• Komparasi     : %c${metrics.comparisons} kali`, 'color: #94a3b8;', 'color: #f5e6b8;');
      if (metrics.swaps !== undefined) {
        console.log(`%c• Pertukaran    : %c${metrics.swaps} kali`, 'color: #94a3b8;', 'color: #f5e6b8;');
      }
      console.log(`%c• Log Lengkap   : %cDipublikasikan pada UI "DSA Laboratory Console"`, 'color: #94a3b8;', 'color: #a855f7;');
      console.groupEnd();
    }
  }

  // Daftarkan ke window global
  window.NexusDSA = new NexusDSAEngine();

  // Auto init jika INITIAL_PRODUCTS sudah siap
  if (typeof window !== 'undefined') {
    const tryInit = () => {
      if (window.INITIAL_PRODUCTS && Array.isArray(window.INITIAL_PRODUCTS)) {
        window.NexusDSA.init(window.INITIAL_PRODUCTS);
      }
    };
    if (typeof document !== 'undefined') {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', tryInit);
      } else {
        tryInit();
      }
    } else {
      tryInit();
    }
  }

})();
