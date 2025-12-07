import Link from 'next/link'
import { getAllProducts } from '../data/products'
import ProductList from '../components/ProductList'

export default function Home(){
  const products = getAllProducts()
  return (
    <div>
      <section className="rounded-lg mb-8 bg-white shadow-soft overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--farmBrown)]">Farm Fresh Eggs — Direct From Our Hens</h1>
            <p className="mt-4 text-lg text-[var(--muted)]">Pasture-raised, collected daily, and sold locally. Taste the difference of truly fresh eggs.</p>
            <div className="mt-6 flex gap-4">
              <Link href="/products" className="btn-primary btn-large">See Products</Link>
              <Link href="/about" className="text-sm px-4 py-2 rounded border border-[var(--farmGreen)] text-[var(--farmGreen)]">Our Story</Link>
            </div>
            <div className="mt-6 text-sm text-[var(--muted)]">Pickup & local delivery available. Response within 24 hours.</div>
          </div>
          <div className="hidden lg:block">
            <img src="https://images.unsplash.com/photo-1506808547685-e2ba962dedf7?w=1400&q=80&auto=format&fit=crop" alt="Farm eggs" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded bg-white shadow-soft">
            <h3 className="font-semibold text-xl">Better flavor</h3>
            <p className="text-sm text-[var(--muted)] mt-2">Fresh eggs have vibrant yolks and better texture for baking and cooking.</p>
          </div>
          <div className="p-6 rounded bg-white shadow-soft">
            <h3 className="font-semibold text-xl">Raised with care</h3>
            <p className="text-sm text-[var(--muted)] mt-2">Our hens are pasture-raised and given a natural diet for healthier eggs.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-[var(--farmBrown)]">Available Products</h2>
        <ProductList products={products} />
      </section>
    </div>
  )
}
