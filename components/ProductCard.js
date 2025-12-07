import Link from 'next/link'

export default function ProductCard({product}){
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm bg-white">
      <div className="h-44 bg-gray-100">
        <img src={product.image} alt={product.name} className="w-full h-44 object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{product.short}</p>
        <div className="flex items-center justify-between mt-3">
          <div className="text-farmBrown font-medium">${product.price.toFixed(2)} / {product.unit}</div>
          <Link href={`/products/${product.slug}`} className="text-sm text-white bg-farmGreen px-3 py-1 rounded">Details</Link>
        </div>
      </div>
    </div>
  )
}
