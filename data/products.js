export const products = [
  {
    id: 'egg-dozen',
    slug: 'farm-fresh-eggs-dozen',
    name: 'Farm Fresh Eggs — Dozen',
    short: 'Free-range hen eggs, fresh from the farm — one dozen.',
    description: 'Our hens are pasture-raised and fed a natural diet. These eggs are collected fresh daily, cleaned gently, and chilled for pickup. Flavorful yolks and sturdy whites make them perfect for baking or breakfast.',
    price: 6.5,
    unit: 'dozen',
    image: 'https://images.unsplash.com/photo-1514539079130-25950c84f2d6?w=1200&q=80&auto=format&fit=crop',
    inStock: true,
    category: 'eggs',
    notes: 'Pickup only. Limited to 3 dozen per order.'
  },
  {
    id: 'egg-halfdozen',
    slug: 'farm-fresh-eggs-half-dozen',
    name: 'Farm Fresh Eggs — Half Dozen',
    short: 'Six fresh pasture-raised eggs.',
    description: 'Perfect for small households who want the freshest eggs without buying a full dozen. Same care and quality as our dozen packs.',
    price: 3.5,
    unit: 'half-dozen',
    image: 'https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?w=1200&q=80&auto=format&fit=crop',
    inStock: true,
    category: 'eggs',
    notes: 'Pickup only. Please allow 24 hours for order confirmation.'
  }
]

export function getAllProducts() {
  return products
}

export function getProductBySlug(slug) {
  return products.find(p => p.slug === slug)
}

export function getCategories() {
  const set = new Set(products.map(p => p.category))
  return Array.from(set)
}
