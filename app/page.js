import Link from 'next/link'
import { getAllProducts } from '../data/products'
import ProductList from '../components/ProductList'

export default function Home(){
  const products = getAllProducts()
  return (
    <div>
      <section className="bg-farmBeige rounded-lg p-6 mb-6">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-farmBrown">Farm Fresh Eggs — Direct From Our Hens</h1>
            <p className="mt-3 text-gray-700">We offer pasture-raised eggs gathered daily. Simple, honest food from our family farm to your kitchen.</p>
            <div className="mt-4">
              <Link href="/products" className="bg-farmGreen text-white px-4 py-2 rounded">See Products</Link>
            </div>
          </div>
          <div className="w-full sm:w-64 h-40 rounded overflow-hidden">
            <img src="https://images.unsplash.com/photo-1514539079130-25950c84f2d6?w=1200&q=80&auto=format&fit=crop" alt="Eggs" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Why choose fresh eggs?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 border rounded bg-white">
            <h3 className="font-semibold">Better flavor</h3>
            <p className="text-sm text-gray-600">Fresh eggs have vibrant yolks and better texture for baking and cooking.</p>
          </div>
          <div className="p-4 border rounded bg-white">
            <h3 className="font-semibold">Raised with care</h3>
            <p className="text-sm text-gray-600">Our hens are pasture-raised and given a natural diet.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Available Products</h2>
        <ProductList products={products} />
      </section>
    </div>
  )
}
