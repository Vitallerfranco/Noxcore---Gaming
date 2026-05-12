/* ===== CART LOGIC ===== */
const cart = {
  items: [],

  add(product) {
    const existing = this.items.find(i => i.id === product.id);
    if (existing) {
      existing.qty++;
    } else {
      this.items.push({ ...product, qty: 1 });
    }
    this.render();
    this.showToast(`${product.name} agregado al carrito 🎮`);
  },

  remove(id) {
    this.items = this.items.filter(i => i.id !== id);
    this.render();
  },

  changeQty(id, delta) {
    const item = this.items.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) this.remove(id);
    else this.render();
  },

  get total() {
    return this.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  },

  get count() {
    return this.items.reduce((sum, i) => sum + i.qty, 0);
  },

  formatPrice(n) {
    return '$' + n.toLocaleString('es-AR');
  },

  render() {
    const body = document.getElementById('cartBody');
    const footer = document.getElementById('cartFooter');
    const countEl = document.getElementById('cartCount');
    const titleCount = document.getElementById('cartTitleCount');

    // Count badge
    if (countEl) {
      countEl.textContent = this.count;
      countEl.classList.toggle('visible', this.count > 0);
    }
    if (titleCount) titleCount.textContent = this.count;

    if (!body) return;

    if (this.items.length === 0) {
      body.innerHTML = `
        <div class="cart-empty">
          <div class="empty-icon">🛒</div>
          <p>Carrito vacío</p>
          <small>Agregá productos para empezar</small>
        </div>
      `;
      if (footer) footer.style.display = 'none';
      return;
    }

    if (footer) footer.style.display = 'flex';

    body.innerHTML = this.items.map(item => `
      <div class="cart-item">
        <div class="ci-icon">${item.icon}</div>
        <div class="ci-info">
          <div class="ci-name">${item.name}</div>
          <div class="ci-price">${this.formatPrice(item.price * item.qty)}</div>
          <div class="ci-qty">
            <button class="qty-btn" onclick="cart.changeQty(${item.id}, -1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="cart.changeQty(${item.id}, 1)">+</button>
          </div>
        </div>
        <button class="btn-remove" onclick="cart.remove(${item.id})" title="Eliminar">✕</button>
      </div>
    `).join('');

    // Totals
    document.getElementById('cartSubtotal').textContent = this.formatPrice(this.total);
    document.getElementById('cartEnvio').textContent = 'A coordinar';
    document.getElementById('cartTotal').textContent = this.formatPrice(this.total);
  },

  buildWhatsappMessage() {
    if (this.items.length === 0) return '';
    
    let msg = '🛒 *Pedido desde StayGaming.store*\n\n';
    this.items.forEach(item => {
      msg += `▪️ *${item.name}*\n`;
      msg += `   Cantidad: ${item.qty}\n`;
      msg += `   Precio unitario: ${this.formatPrice(item.price)}\n`;
      msg += `   Subtotal: ${this.formatPrice(item.price * item.qty)}\n\n`;
    });
    msg += `────────────────────\n`;
    msg += `💰 *TOTAL: ${this.formatPrice(this.total)}*\n\n`;
    msg += `¡Hola! Quiero confirmar este pedido. ¿Me avisás disponibilidad y método de pago? 🎮`;
    
    return encodeURIComponent(msg);
  },

  checkout() {
    if (this.items.length === 0) return;
    const msg = this.buildWhatsappMessage();
    window.open(`${WSP_BASE}?text=${msg}`, '_blank');
  },

  showToast(text) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.querySelector('.toast-text').textContent = text;
    toast.classList.add('show');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
  },

  open() {
    document.getElementById('cartOverlay')?.classList.add('open');
    document.getElementById('cartSidebar')?.classList.add('open');
    document.body.style.overflow = 'hidden';
  },

  close() {
    document.getElementById('cartOverlay')?.classList.remove('open');
    document.getElementById('cartSidebar')?.classList.remove('open');
    document.body.style.overflow = '';
  }
};
