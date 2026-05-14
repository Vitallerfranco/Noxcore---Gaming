# NOXCORE — Demo Web

Sitio demo para presentar al cliente **StayGaming** (@staygaming.store, Ituzaingó, GBA).

## Estructura

```
staygaming/
├── index.html          ← Página principal
├── css/
│   ├── variables.css   ← Variables, reset, base
│   ├── nav.css         ← Navbar y menú mobile
│   ├── hero.css        ← Hero, trust strip, categorías
│   ├── products.css    ← Grilla de productos y cards
│   ├── cart.css        ← Carrito lateral
│   └── layout.css      ← Banners, reseñas, footer
└── js/
    ├── data.js         ← Productos, categorías, reseñas
    ├── cart.js         ← Lógica del carrito
    └── app.js          ← Render, filtros, animaciones
```

## Funcionalidades

- Filtro por categoría (PS, Nintendo, PC, Juegos, Accesorios)
- Filtro por condición (Nuevo, Usado, Oferta)
- Carrito con cantidades y subtotales
- Checkout: envía el pedido completo por WhatsApp con detalle
- Responsive: desktop, tablet y mobile
- Navbar fija con contador de carrito
- Animaciones de entrada suaves

## Personalización

- **Teléfono**: editar `PHONE` en `js/data.js`
- **Productos**: editar array `PRODUCTS` en `js/data.js`
- **Precios**: en pesos argentinos (se formatean con `toLocaleString`)
- **Colores**: variables CSS en `css/variables.css`
