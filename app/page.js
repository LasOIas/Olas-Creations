import Link from 'next/link'
import { getAllProducts } from '../data/products'
import ProductList from '../components/ProductList'

export default function Home(){
  const products = getAllProducts()
  return (
    <div>
      <section className="rounded-lg mb-8 card overflow-hidden">
        <div className="p-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[var(--accent)] flex items-center justify-center text-[var(--farmBrown)]">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 2C9.5 2 6 5 6 9s3.5 7 6 7 6-3 6-7-2.5-7-6-7z" fill="currentColor" />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Fresh eggs from nearby hens</h1>
                <p className="mt-1 text-sm text-[var(--muted)]">Pasture-raised • Collected daily • Local pickup & delivery</p>
              </div>
            </div>

            <p className="mt-4 text-lg text-[var(--muted)]">Taste brighter yolks and richer flavor — delivered or ready for pickup nearby.</p>
            <div className="mt-6 flex gap-4">
              <Link href="/products" className="btn-primary">Shop Fresh Eggs</Link>
              <Link href="/about" className="text-sm px-4 py-2 rounded border border-[var(--farmGreen)] text-[var(--farmGreen)]">Our Story</Link>
            </div>
            <div className="mt-6 text-sm text-[var(--muted)]">Orders typically processed same-day. Reach out for larger or recurring orders.</div>
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
