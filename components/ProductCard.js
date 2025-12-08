import Link from 'next/link'

export default function ProductCard({product}){
  return (
    <div className="rounded-lg overflow-hidden card hover:shadow-lg transition-shadow duration-200">
      <div className="relative h-48 bg-gray-100">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        <div className="absolute top-3 left-3 bg-white/95 text-sm px-3 py-1 rounded-full text-[var(--farmBrown)] font-semibold">{product.category}</div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-[var(--farmBrown)]">{product.name}</h3>
        <p className="text-sm text-[var(--muted)] mt-1">{product.short}</p>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="text-sm text-[var(--muted)]">{product.inStock ? 'In stock' : 'Out of stock'}</div>
            <div className="text-lg font-bold text-[var(--farmBrown)] mt-1">${product.price.toFixed(2)}</div>
          </div>
          <Link href={`/products/${product.slug}`} className="btn-primary">Order</Link>
        </div>
      </div>
    </div>
  )
}
