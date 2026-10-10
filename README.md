# Café Riverio — Premium Riverside Experience

> **Location:** La Hospin Hotel, Pushkar Ghat Circle, Goka Varam, Rajamahendravaram (Rajahmundry), Andhra Pradesh 533104, India.  
> **Official Instagram:** [@caferiverio](https://www.instagram.com/caferiverio/?hl=en)  
> **Menu Source:** [lahospin.dreamlook.in](https://lahospin.dreamlook.in/)

A bespoke, production-ready Next.js hospitality website designed for **Café Riverio by La Hospin**. Featuring real client photography, verified menu data and INR prices, an interactive 3D river wave & aroma scene, an interactive walk-through tour, day/twilight ambience switcher, and a mobile-first floating dock.

---

## 🌟 Key Features & Architectural Highlights

1. **Godavari Arch Bridge Perspective & Twilight Toggle**
   - Live ambience switcher between **"Daylight River View"** and **"Twilight Bridge View"**, allowing visitors to preview the illuminated railway arch bridge at dusk.
   - Genuine high-resolution photographs of the actual lounge interior, panoramic glass facade, and bridge.

2. **3D Interactive Scene (Three.js)**
   - Ambient WebGL canvas featuring interactive Godavari river wave geometry and floating coffee aroma particles that respond to user mouse and touch movement.
   - Battery-aware: Automatically pauses when scrolled out of view or if `prefers-reduced-motion` is enabled.

3. **"A Walk Through Café Riverio" (Interactive Tour)**
   - Step 1: *Pushkar Ghat Circle Arrival*
   - Step 2: *Italian Espresso Bar & Dual-Boiler Machine*
   - Step 3: *Panoramic Riverfront Lounge & Curved Velvet Booths*
   - Step 4: *Gourmet Table Feast (Pizzas, Pastas & Twin Coolers)*
   - Step 5: *Twilight over Godavari Arch Bridge*

4. **Interactive Verified Menu**
   - Exact dish names, descriptions, and INR prices sourced directly from `lahospin.dreamlook.in`.
   - Categories: *Coffee Fumes (Hot), Coffee Chillz (Cold), Artisanal Teas, Mocktails & Chillz, Stone-Fired Pizzas, Italian Pastas, Gourmet Burgers & Sandwiches, Fries & Breads*.
   - Live instant search and dietary filters (*Veg Only* / *Non-Veg*).
   - Price variants (Classic vs. Magnum, Nutella vs. Bourbon).
   - Plant-based vegan milk callout (+₹100).

5. **Mobile-First Floating Dock (`MobileBottomNav`)**
   - Quick thumb actions for:
     - **Menu** (smooth scroll to menu)
     - **Tour** (jump to virtual walkthrough)
     - **Book Table** (opens WhatsApp & phone reservation modal)
     - **Map** (direct navigation to Google Maps)
     - **Call** (one-tap call to `+91 70754 69931`)

6. **Full-Resolution Editorial Gallery & Lightbox**
   - Filterable photo grid (River Views, Coffee Craft, Gourmet Food, Interiors).
   - Keyboard accessible (`Esc`, `←`, `→`) and touch-swipe enabled lightbox modal.

7. **Local Discovery & Complete SEO**
   - JSON-LD `CafeOrCoffeeShop` structured data with GeoCoordinates for Pushkar Ghat.
   - Dynamic Open Graph metadata, Twitter cards, `robots.txt`, and `sitemap.xml`.

---

## 🛠 Tech Stack

- **Framework:** Next.js (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **3D Graphics:** Three.js
- **Icons:** Lucide React & Custom SVG Brand Icons
- **Image Optimization:** Next.js Image with high-DPI scaling

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in your browser
# Visit http://localhost:3000
```

---

## 📦 Production Build & Vercel Deployment

The project is built statically and requires zero external database or paid APIs:

```bash
# Verify production build locally
npm run build

# Output:
# ✓ Compiled successfully
# ✓ Generating static pages (6/6)
```

To deploy on Vercel:
1. Push this repository to GitHub or GitLab.
2. Import the project into your [Vercel Dashboard](https://vercel.com).
3. The build command will auto-detect `next build` and deploy within seconds.

---

## 📋 Content Configuration (`src/data/site.ts`)

All business details, phone numbers, hours, and external links are centralized in [`src/data/site.ts`](file:///e:/cafereverio/src/data/site.ts):

- **Phone Number:** `+91 70754 69931`
- **Address:** `LaHospin Hotel, Pushkar Ghat Circle, Goka Varam, Rajamahendravaram, Rajahmundry, Andhra Pradesh 533104`
- **Hours:** `11:00 AM – 11:00 PM`
- **Instagram:** `https://www.instagram.com/caferiverio/?hl=en`
- **Google Maps:** Configured to Pushkar Ghat Circle location

### Owner Audit Checklist:
An expandable "Owner Audit" drawer is built into the footer for the cafe manager to review items requiring confirmation before final live domain launch.
