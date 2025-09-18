// assets/js/script.js

document.addEventListener("DOMContentLoaded", function () {
  const themeToggleButton = document.getElementById("theme-toggle");
  const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16"><path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/></svg>`;
  const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-moon-stars-fill" viewBox="0 0 16 16"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/><path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162h1.224a.217.217 0 0 1 .153.372l-.986.992l.372 1.154a.217.217 0 0 1-.328.245l-1.013-.815l-1.013.815a.217.217 0 0 1-.328-.245l.372-1.154l-.986-.992a.217.217 0 0 1 .153-.372h1.224l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a.77.77 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a.77.77 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/></svg>`;

  // Fungsi untuk menerapkan tema
  const applyTheme = (theme) => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    if (themeToggleButton) {
      themeToggleButton.innerHTML = theme === "dark" ? sunIcon : moonIcon;
    }
  };

  // Cek tema tersimpan atau tema sistem
  const savedTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");
  applyTheme(savedTheme);

  // Event listener untuk tombol tema
  if (themeToggleButton) {
    themeToggleButton.addEventListener("click", () => {
      const currentTheme =
        document.documentElement.getAttribute("data-bs-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      applyTheme(newTheme);
    });
  }

  // Fungsi untuk menandai link navigasi aktif
  function setActiveNavLink() {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const currentPath = window.location.pathname.split("/").pop();

    navLinks.forEach((link) => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
      }
    });
  }

  // Fungsi untuk memuat produk unggulan di halaman utama
  function loadFeaturedProducts() {
    const container = document.getElementById("featured-products");
    if (!container) return;
    const featured = PRODUCTS.slice(0, 4);
    container.innerHTML = featured.map(createProductCardHTML).join("");
  }

  // Fungsi untuk memuat semua produk dan filter di halaman katalog
  function setupCatalogPage() {
    const productListContainer = document.getElementById("product-list");
    const categoryFiltersContainer =
      document.getElementById("category-filters");
    const searchInput = document.getElementById("search-input");
    const noResultsDiv = document.getElementById("no-results");

    if (
      !productListContainer ||
      !categoryFiltersContainer ||
      !searchInput ||
      !noResultsDiv
    )
      return;

    // Buat filter kategori
    const categories = ["All", ...new Set(PRODUCTS.map((p) => p.category))];
    categoryFiltersContainer.innerHTML = categories
      .map(
        (cat) =>
          `<button class="btn btn-outline-secondary btn-sm category-filter ${
            cat === "All" ? "active" : ""
          }" data-category="${cat}">${cat}</button>`
      )
      .join("");

    // Fungsi untuk render produk
    function renderProducts(productsToRender) {
      if (productsToRender.length === 0) {
        noResultsDiv.style.display = "block";
        productListContainer.innerHTML = "";
      } else {
        noResultsDiv.style.display = "none";
        productListContainer.innerHTML = productsToRender
          .map(createProductCardHTML)
          .join("");
      }
    }

    // Fungsi untuk memfilter produk
    function filterProducts() {
      const searchTerm = searchInput.value.toLowerCase();
      const activeCategory = document.querySelector(".category-filter.active")
        .dataset.category;

      const filtered = PRODUCTS.filter((product) => {
        const matchesCategory =
          activeCategory === "All" || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
      });

      renderProducts(filtered);
    }

    // Event listener untuk filter kategori
    categoryFiltersContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("category-filter")) {
        document
          .querySelector(".category-filter.active")
          .classList.remove("active");
        e.target.classList.add("active");
        filterProducts();
      }
    });

    // Event listener untuk input pencarian
    searchInput.addEventListener("input", filterProducts);

    // Render produk awal
    renderProducts(PRODUCTS);
  }

  // Fungsi helper untuk membuat HTML kartu produk
  function createProductCardHTML(product) {
    return `
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="card h-100 product-card shadow-sm">
                    <div class="card-img-top-wrapper">
                        <img src="${
                          product.image
                        }" class="card-img-top" alt="${product.name}">
                    </div>
                    <div class="card-body d-flex flex-column">
                        <span class="badge align-self-start mb-2">${
                          product.category
                        }</span>
                        <h5 class="card-title fw-bold">${product.name}</h5>
                        <p class="card-text small text-muted flex-grow-1">${
                          product.description
                        }</p>
                         <div class="mt-auto d-flex justify-content-between align-items-center">
                            <span class="text-primary fw-bold">Kontak untuk Info</span>
                            <span class="text-muted small">Unit: ${
                              product.unit
                            }</span>
                        </div>
                    </div>
                    <div class="card-footer">
                        <a href="contact.html?product=${encodeURIComponent(
                          product.name
                        )}" class="btn btn-primary w-100">Minta Penawaran</a>
                    </div>
                </div>
            </div>
        `;
  }

  // Fungsi untuk memperbarui tahun hak cipta di footer
  function updateCopyrightYear() {
    const yearSpan = document.getElementById("copyright-year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  }

  // Panggil semua fungsi inisialisasi
  setActiveNavLink();
  updateCopyrightYear();
  loadFeaturedProducts(); // Hanya akan berjalan jika elemennya ada di halaman
  setupCatalogPage(); // Hanya akan berjalan jika elemennya ada di halaman
});
