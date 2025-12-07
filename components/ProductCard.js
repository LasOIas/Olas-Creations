import Link from 'next/link'

export default function ProductCard({product}){
  return (
    <div className="rounded-lg overflow-hidden bg-white shadow-soft hover:shadow-lg transition-shadow duration-200">
      <div className="relative h-56">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        <div className="absolute top-3 left-3 bg-white/90 text-sm px-3 py-1 rounded-full text-[var(--farmBrown)] font-semibold">{product.category}</div>
        <div className="absolute top-3 right-3 bg-[var(--farmGreen)] text-white px-3 py-1 rounded-full font-semibold">${product.price.toFixed(2)}</div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-[var(--farmBrown)]">{product.name}</h3>
        <p className="text-sm text-[var(--muted)] mt-1">{product.short}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-[var(--muted)]">{product.inStock ? 'In stock' : 'Out of stock'}</div>
          <Link href={`/products/${product.slug}`} className="btn-primary">Details</Link>
        </div>
      </div>
    </div>
  )
}
