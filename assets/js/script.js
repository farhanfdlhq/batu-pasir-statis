// assets/js/script.js

document.addEventListener("DOMContentLoaded", function () {
  const themeToggleButton = document.getElementById("theme-toggle");
  const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16"><path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/></svg>`;
  const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-moon-stars-fill" viewBox="0 0 16 16"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/><path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162h1.224a.217.217 0 0 1 .153.372l-.986.992l.372 1.154a.217.217 0 0 1-.328.245l-1.013-.815l-1.013.815a.217.217 0 0 1-.328-.245l.372-1.154l-.986-.992a.217.217 0 0 1 .153-.372h1.224l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a.77.77 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a.77.77 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/></svg>`;

  const applyTheme = (theme) => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    if (themeToggleButton) {
      themeToggleButton.innerHTML = theme === "dark" ? sunIcon : moonIcon;
    }
  };
  const savedTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");
  applyTheme(savedTheme);
  if (themeToggleButton) {
    themeToggleButton.addEventListener("click", () => {
      const currentTheme =
        document.documentElement.getAttribute("data-bs-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      applyTheme(newTheme);
    });
  }

  function setActiveNavLink() {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const currentPath = window.location.pathname;

    navLinks.forEach((link) => {
      const linkPath = link.getAttribute("href");

      // Menghapus ".html" dari path link jika ada (untuk kompatibilitas lokal)
      const cleanedLinkPath = linkPath.replace(/\.html$/, "");

      // Menghapus ".html" dari path saat ini jika ada
      const cleanedCurrentPath = currentPath.replace(/\.html$/, "");

      // Kondisi untuk halaman utama
      if (
        linkPath === "/" &&
        (cleanedCurrentPath === "/" || cleanedCurrentPath === "/index")
      ) {
        link.classList.add("active");
        return;
      }

      // Kondisi untuk halaman lainnya (pastikan linkPath tidak hanya "/")
      if (linkPath !== "/" && cleanedCurrentPath.endsWith(cleanedLinkPath)) {
        link.classList.add("active");
      }
    });
  }
  function updateCopyrightYear() {
    const yearSpan = document.getElementById("copyright-year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  }

  function createProductCardHTML(product) {
    const phoneNumber = "6281253872108";
    const message = encodeURIComponent(
      `Halo, saya tertarik dengan produk "${product.name}". Apakah masih tersedia?`
    );
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    return `
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="card h-100 product-card">
                    <div class="card-img-top-wrapper">
                         <a href="product-detail.html?id=${product.id}">
                            <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        </a>
                    </div>
                    <div class="card-body d-flex flex-column pb-3">
                        <span class="badge align-self-start mb-2">${product.category}</span>
                        <h5 class="card-title fw-bold">
                            <a href="product-detail.html?id=${product.id}" class="text-decoration-none stretched-link">${product.name}</a>
                        </h5>
                        <p class="card-text small text-muted flex-grow-1">${product.description}</p>
                    </div>
                    <div class="card-footer">
                        <a href="${whatsappURL}" class="btn btn-primary w-100 fw-bold d-flex align-items-center justify-content-center gap-2" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
                            Pesan Lewat WA
                        </a>
                    </div>
                </div>
            </div>
        `;
  }

  function loadFeaturedProducts() {
    const container = document.getElementById("featured-products");
    if (!container) return;
    const featured = PRODUCTS.slice(0, 4);
    container.innerHTML = featured.map(createProductCardHTML).join("");
  }

  function setupCatalogPage() {
    const productListContainer = document.getElementById("product-list");
    if (!productListContainer) return;
    const categoryFiltersContainer =
      document.getElementById("category-filters");
    const searchInput = document.getElementById("search-input");
    const noResultsDiv = document.getElementById("no-results");
    const categories = ["All", ...new Set(PRODUCTS.map((p) => p.category))];
    categoryFiltersContainer.innerHTML = categories
      .map(
        (cat) =>
          `<button class="btn btn-sm category-filter ${
            cat === "All" ? "btn-primary" : "btn-outline-secondary"
          }" data-category="${cat}">${cat}</button>`
      )
      .join("");
    const renderProducts = (products) => {
      noResultsDiv.style.display = products.length === 0 ? "block" : "none";
      productListContainer.innerHTML = products
        .map(createProductCardHTML)
        .join("");
    };
    const filterProducts = () => {
      const searchTerm = searchInput.value.toLowerCase();
      const activeCategory = document.querySelector(
        ".category-filter.btn-primary"
      ).dataset.category;
      const filtered = PRODUCTS.filter(
        (p) =>
          (activeCategory === "All" || p.category === activeCategory) &&
          p.name.toLowerCase().includes(searchTerm)
      );
      renderProducts(filtered);
    };
    categoryFiltersContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("category-filter")) {
        document
          .querySelector(".category-filter.btn-primary")
          .classList.replace("btn-primary", "btn-outline-secondary");
        e.target.classList.replace("btn-outline-secondary", "btn-primary");
        filterProducts();
      }
    });
    searchInput.addEventListener("input", filterProducts);
    renderProducts(PRODUCTS);
  }

  // --- FUNGSI INI YANG AKAN DIUBAH ---
  function setupProductDetailPage() {
    const container = document.getElementById("product-detail-container");
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");
    const product = PRODUCTS.find((p) => p.id === productId);
    const placeholder = document.getElementById("product-placeholder");

    if (product) {
      document.title = `${product.name} - Batu Pasir Jaya`;

      const phoneNumber = "6281253872108";
      const message = encodeURIComponent(
        `Halo, saya tertarik dengan produk "${product.name}". Mohon info lebih lanjut.`
      );
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

      let specsHTML = Object.entries(product.specifications)
        .map(
          ([key, value]) =>
            `<li class="list-group-item d-flex justify-content-between align-items-center"><span class="fw-medium">${key}</span><span>${value}</span></li>`
        )
        .join("");

      const allImages = [
        product.image,
        ...product.gallery.filter((img) => img !== product.image),
      ];
      let galleryHTML = allImages
        .slice(0, 4)
        .map(
          (img, index) =>
            `<div class="col"><img src="${img}" data-index="${index}" alt="${
              product.name
            } thumbnail ${
              index + 1
            }" class="img-fluid rounded gallery-thumbnail ${
              index === 0 ? "active" : ""
            }"></div>`
        )
        .join("");

      container.innerHTML = `
                <div class="row g-5">
                    <div class="col-lg-6">
                        <div class="mb-3"><img src="${product.image}" alt="${product.name}" id="main-product-image" class="img-fluid rounded shadow-sm w-100" style="aspect-ratio: 4/3; object-fit: cover;"></div>
                        <div class="row g-2 row-cols-4" id="gallery-container">${galleryHTML}</div>
                    </div>
                    <div class="col-lg-6">
                        <span class="badge bg-primary-subtle text-primary-dark mb-2">${product.category}</span>
                        <h1 class="display-6 fw-bolder">${product.name}</h1>
                        <p class="lead text-muted">${product.description}</p>
                        <div class="mt-4">
                            <h3 class="h5 fw-bold">Spesifikasi</h3>
                            <ul class="list-group list-group-flush">${specsHTML}</ul>
                        </div>
                        <div class="mt-4 d-grid">
                            <a href="${whatsappURL}" class="btn btn-primary btn-lg fw-bold d-flex align-items-center justify-content-center gap-2" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
                                Pesan Langsung via WA
                            </a>
                        </div>
                    </div>
                </div>`;

      const galleryContainer = document.getElementById("gallery-container");
      const mainImage = document.getElementById("main-product-image");
      if (galleryContainer && mainImage) {
        galleryContainer.addEventListener("click", (e) => {
          if (e.target.classList.contains("gallery-thumbnail")) {
            mainImage.src = e.target.src;
            document
              .querySelectorAll(".gallery-thumbnail")
              .forEach((thumb) => thumb.classList.remove("active"));
            e.target.classList.add("active");
          }
        });
      }
    } else {
      placeholder.innerHTML = `<div class="text-center py-5"><h2 class="fw-bold">Produk Tidak Ditemukan</h2><p class="text-muted">Produk yang Anda cari tidak ada.</p><a href="catalog.html" class="btn btn-primary mt-3">Kembali ke Katalog</a></div>`;
    }
  }

  function setupContactPage() {
    const subjectInput = document.getElementById("subject");
    const messageTextarea = document.getElementById("message");
    if (!subjectInput || !messageTextarea) return;

    const params = new URLSearchParams(window.location.search);
    const productName = params.get("product");

    if (productName) {
      subjectInput.value = `Permintaan Penawaran untuk: ${productName}`;
      messageTextarea.value = `Halo, saya tertarik untuk meminta penawaran harga untuk produk "${productName}". Mohon informasinya. Terima kasih.`;
    }
  }

  // Panggil semua fungsi inisialisasi
  setActiveNavLink();
  updateCopyrightYear();
  loadFeaturedProducts();
  setupCatalogPage();
  setupProductDetailPage();
  setupContactPage();
});
