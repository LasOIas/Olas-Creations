import Link from 'next/link'
import { getAllProducts } from '../data/products'
import ProductList from '../components/ProductList'

export default function Home(){
  const products = getAllProducts()
  return (
    <div>
      <section className="rounded-lg mb-8 card overflow-hidden">
        <div className="p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Real, local eggs — delivered or ready for pickup</h1>
            <p className="mt-4 text-lg text-[var(--muted)]">Pasture-raised, collected daily, and brought straight to your kitchen. Simple pricing, friendly local delivery.</p>
            <div className="mt-6 flex gap-4">
              <Link href="/products" className="btn-primary">Shop Fresh Eggs</Link>
              <Link href="/about" className="btn-outline">Our Story</Link>
            </div>
            <div className="mt-6 text-sm text-[var(--muted)]">Orders typically processed same-day. Contact us for subscriptions or bulk orders.</div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1 grid grid-cols-2 gap-3">
              <div className="h-28 bg-gray-100 rounded-md overflow-hidden"><img src="/images/egg-1.jpg" alt="eggs" className="w-full h-full object-cover"/></div>
              <div className="h-28 bg-gray-100 rounded-md overflow-hidden"><img src="/images/egg-2.jpg" alt="eggs" className="w-full h-full object-cover"/></div>
              <div className="h-28 bg-gray-100 rounded-md overflow-hidden"><img src="/images/hen.jpg" alt="hen" className="w-full h-full object-cover"/></div>
              <div className="h-28 bg-gray-100 rounded-md overflow-hidden"><img src="/images/farm.jpg" alt="farm" className="w-full h-full object-cover"/></div>
            </div>
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
