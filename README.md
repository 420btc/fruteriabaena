# Frutería Baena

Aplicación web en React para presentar y vender productos de Frutas y Verduras Baena. Incluye catálogo, carrito, página de checkout.

## Características

- Catálogo por categorías y tarjetas de producto con control de cantidad
- Carrito lateral con total, edición y eliminación de items (`src/components/Cart.tsx`)
- Página de Checkout independiente con resumen, dirección y pago (`src/components/Checkout.tsx`)
- Hero con banner destacado (`src/components/Hero.tsx`)
- Sección de entregas con dos imágenes (`src/components/Delivery.tsx`)
- Encabezado y pie actualizados (sin fondo en header, sin imagen en footer)
- Analítica de Vercel integrada (`src/main.tsx`)

## Pila tecnológica

- React 18 + Vite 5
- TypeScript
- Tailwind CSS
- Lucide Icons

## Scripts

- `npm install` instala dependencias
- `npm run dev` arranca el entorno de desarrollo
- `npm run build` genera la build de producción
- `npm run preview` sirve la build
- `npm run lint` ejecuta ESLint
- `npm run typecheck` valida tipos

## Estructura

- `src/App.tsx` enrutado básico por hash (`#/` y `#/checkout`)
- `src/components/` componentes de UI
- `src/context/CartContext.tsx` estado global del carrito
- `src/lib/supabase.ts` datos mock de categorías y productos
- `public/` imágenes estáticas

## Checkout

- Ruta: `#/checkout`
- Muestra la cesta con imagen, cantidad y total como el carrito
- Formulario de dirección: nombre, teléfono, dirección, ciudad, código postal y notas
- Selección de método de pago: tarjeta, Bizum o efectivo
- Botón “Finalizar Pedido” valida datos y limpia el carrito

## Integraciones

- Vercel Analytics: importado y renderizado en `src/main.tsx:8`

## Imágenes

Colocadas en `public/` y referenciadas con rutas absolutas (`/archivo.ext`). Ejemplos:

- Banner hero: `public/banner.jpg` (`src/components/Hero.tsx:7`)
- Entregas: `public/entregas.jpg`, `public/entregas2.jpg` (`src/components/Delivery.tsx:3`)
- Productos: múltiples imágenes definidas en `src/lib/supabase.ts`

## Despliegue

- Compatible con Vercel; habilita Analytics desde el panel del proyecto
- Las rutas por hash funcionan sin configuración adicional de servidor

## Notas

- No se persiste el carrito entre sesiones (estado en memoria)
- Los datos de productos son mock; reemplaza por API o base de datos cuando corresponda