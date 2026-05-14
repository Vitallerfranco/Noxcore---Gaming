/* ===== APP MAIN ===== */
let activeCategory = 'todos';
let activeCondition = 'todos';

function formatPrice(n) {
  return '$' + n.toLocaleString('es-AR');
}

/* -------- HELPER: icon o imagen -------- */
function renderIcon(product) {
  if (product.icon.match(/\.(webp|jpg|jpeg|png|gif|svg)$/i)) {
    return `<img src="${product.icon}" alt="${product.name}" class="product-img-photo">`;
  }
  return `<span class="product-img-emoji">${product.icon}</span>`;
}

/* -------- RENDER CATEGORIES -------- */
function renderCategories() {
  const grid = document.getElementById('categoriesGrid');
  if (!grid) return;

  grid.innerHTML = CATEGORIES.map(cat => {
    const count = cat.id === 'todos'
      ? PRODUCTS.length
      : PRODUCTS.filter(p => p.category === cat.id).length;

    return `
      <div class="cat-card ${cat.id === activeCategory ? 'active' : ''}"
           onclick="selectCategory('${cat.id}')">
        <div class="cat-icon">${cat.icon}</div>
        <div class="cat-name">${cat.label}</div>
        <div class="cat-count">${count} items</div>
      </div>
    `;
  }).join('');
}

function selectCategory(id) {
  activeCategory = id;
  renderCategories();
  renderProducts();
}

/* -------- RENDER FILTER PILLS -------- */
function renderPills() {
  const container = document.getElementById('conditionPills');
  if (!container) return;

  container.innerHTML = CONDITIONS.map(c => `
    <button class="pill ${c.id === activeCondition ? 'active' : ''}"
            onclick="selectCondition('${c.id}')">
      ${c.label}
    </button>
  `).join('');
}

function selectCondition(id) {
  activeCondition = id;
  renderPills();
  renderProducts();
}

/* -------- RENDER PRODUCTS -------- */
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const countEl = document.getElementById('productsCount');
  if (!grid) return;

  let filtered = PRODUCTS;
  if (activeCategory !== 'todos') {
    filtered = filtered.filter(p => p.category === activeCategory);
  }
  if (activeCondition !== 'todos') {
    filtered = filtered.filter(p => p.condition === activeCondition);
  }

  if (countEl) {
    countEl.innerHTML = `<span>${filtered.length}</span> producto${filtered.length !== 1 ? 's' : ''}`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <div class="nr-icon">${ICONS.busqueda}</div>
        <p>No hay productos en esta categoría</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const badgeHtml = product.condition !== 'todos' ? `
      <span class="badge badge-${product.condition}">
        ${product.condition === 'nuevo' ? 'Nuevo' : product.condition === 'usado' ? 'Usado' : 'Oferta'}
      </span>
    ` : '';

    const agotadoBadge = !product.inStock ? '<span class="badge badge-agotado">Sin stock</span>' : '';

    return `
      <div class="product-card reveal">
        <div class="product-img">
          ${renderIcon(product)}
          <div class="product-badges">
            ${badgeHtml}
            ${agotadoBadge}
          </div>
        </div>
        <div class="product-body">
          <div class="product-category">${getCategoryLabel(product.category)}</div>
          <div class="product-name">${product.name}</div>
          <div class="product-desc">${product.desc}</div>
          <div class="product-footer">
            <div class="product-price">
              <span class="price-current">${formatPrice(product.price)}</span>
              ${product.originalPrice ? `<span class="price-original">${formatPrice(product.originalPrice)}</span>` : ''}
            </div>
            <button class="btn-add-cart"
                    onclick="cart.add(${JSON.stringify(JSON.stringify(product))})"
                    ${!product.inStock ? 'disabled' : ''}>
              ${ICONS.carrito}
              <span class="add-text">${product.inStock ? 'Agregar' : 'Sin stock'}</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  setTimeout(() => {
    document.querySelectorAll('#productsGrid .reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 60);
    });
  }, 10);
}

function getCategoryLabel(id) {
  return CATEGORIES.find(c => c.id === id)?.label || id;
}

/* -------- RENDER REVIEWS -------- */
function renderReviews() {
  const grid = document.getElementById('reviewsGrid');
  if (!grid) return;

  grid.innerHTML = REVIEWS.map(r => {
    const stars = Array.from({ length: r.stars }, () =>
      `<span class="review-star">${ICONS.star}</span>`
    ).join('');

    return `
      <div class="review-card reveal">
        <div class="review-stars">${stars}</div>
        <p class="review-text">"${r.text}"</p>
        <div class="review-author">
          <div class="review-avatar">${r.avatar}</div>
          <div>
            <div class="review-name">${r.name}</div>
            <div class="review-location">
              <span class="review-location-icon">${ICONS.ubicacion}</span>
              ${r.location}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* -------- TRUST STRIP con iconos SVG -------- */
function renderTrustStrip() {
  const items = [
    { icon: ICONS.moto,      title: 'Envío por moto',   sub: 'GBA y CABA' },
    { icon: ICONS.garantia,  title: 'Garantía real',    sub: 'Respaldo post-venta' },
    { icon: ICONS.pago,      title: 'Medios de pago',   sub: 'Efectivo · Transferencia · MP' },
    { icon: ICONS.servicio,  title: 'Service técnico',  sub: 'Todas las consolas' },
    { icon: ICONS.respuesta, title: 'Respuesta 24hs',   sub: 'Atención por WhatsApp' },
    { icon: ICONS.caja,      title: 'Cajas random',     sub: 'Siempre valen más' },
  ];

  const strip = document.querySelector('.trust-inner');
  if (!strip) return;

  strip.innerHTML = items.map(item => `
    <div class="trust-item">
      <span class="trust-icon">${item.icon}</span>
      <div class="trust-text">
        <strong>${item.title}</strong>
        <span>${item.sub}</span>
      </div>
    </div>
  `).join('');
}

/* -------- NAVBAR -------- */
function initNav() {
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  document.getElementById('btnMenu')?.addEventListener('click', () => {
    const mobile = document.getElementById('navMobile');
    mobile?.classList.toggle('open');
  });

  document.getElementById('navMobile')?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      document.getElementById('navMobile')?.classList.remove('open');
    });
  });
}

/* -------- SCROLL REVEAL -------- */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal:not(#productsGrid .reveal)').forEach(el => {
    observer.observe(el);
  });
}

/* -------- CART EVENTS -------- */
function initCart() {
  document.getElementById('btnCart')?.addEventListener('click', () => cart.open());
  document.getElementById('btnCloseCart')?.addEventListener('click', () => cart.close());
  document.getElementById('cartOverlay')?.addEventListener('click', () => cart.close());
  document.getElementById('btnCheckout')?.addEventListener('click', () => cart.checkout());
  cart.render();
}

/* -------- ADD TO CART OVERRIDE -------- */
cart.add = function(productJson) {
  let product;
  if (typeof productJson === 'string') {
    product = JSON.parse(productJson);
  } else {
    product = productJson;
  }

  const existing = this.items.find(i => i.id === product.id);
  if (existing) {
    existing.qty++;
  } else {
    this.items.push({ ...product, qty: 1 });
  }
  this.render();

  const toastIcon = document.querySelector('.toast-icon');
  if (toastIcon) toastIcon.innerHTML = ICONS.gaming;

  const toastText = document.querySelector('.toast-text');
  if (toastText) toastText.textContent = `${product.name} agregado`;

  const toast = document.getElementById('toast');
  if (toast) {
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
  }

  this.open();
}.bind(cart);

/* -------- INIT -------- */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  renderTrustStrip();
  renderCategories();
  renderPills();
  renderProducts();
  renderReviews();
  initCart();
  setTimeout(initReveal, 100);
});