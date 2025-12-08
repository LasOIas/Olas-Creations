import Link from 'next/link'

export default function ProductCard({product}){
  return (
    <div className="rounded-lg overflow-hidden card hover:shadow-lg transition-transform duration-150 hover:-translate-y-1">
      <div className="relative h-48 bg-gray-100">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        <div className="absolute top-3 left-3 bg-white/95 text-sm px-3 py-1 rounded-full text-[var(--muted)] font-semibold">{product.category}</div>
        <div className="absolute bottom-3 left-3 bg-[var(--brand)] text-white px-3 py-1 rounded text-sm font-semibold">${product.price.toFixed(2)}</div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-sm text-[var(--muted)] mt-1">{product.short}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-[var(--muted)]">{product.inStock ? 'In stock' : 'Out of stock'}</div>
          <Link href={`/products/${product.slug}`} className="btn-primary">Order</Link>
        </div>
      </div>
    </div>
  )
}
