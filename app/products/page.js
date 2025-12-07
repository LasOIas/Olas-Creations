import { getAllProducts, getCategories } from '../../data/products'
import ProductList from '../../components/ProductList'
import Link from 'next/link'

export default function ProductsPage({ searchParams }){
  const products = getAllProducts()
  const categories = getCategories()

  return (
    <div>
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-farmBrown">Products</h1>
        <p className="text-sm text-gray-600">Browse our selection. Use filters to narrow down categories.</p>
      </header>

      <div className="mb-6 flex items-center gap-3">
        <div className="text-sm">Filter:</div>
        <Link href="/products" className="px-2 py-1 border rounded text-sm">All</Link>
        {categories.map(cat => (
          <Link key={cat} href={`/products?category=${cat}`} className="px-2 py-1 border rounded text-sm">{cat}</Link>
        ))}
      </div>

      <ProductList products={products} />
    </div>
  )
}
