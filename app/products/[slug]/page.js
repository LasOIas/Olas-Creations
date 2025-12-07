import { getProductBySlug } from '../../../data/products'
import ContactForm from '../../../components/ContactForm'

export default function ProductDetail({ params }){
  const { slug } = params
  const product = getProductBySlug(slug)
  if(!product) return <div>Product not found</div>

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <img src={product.image} alt={product.name} className="w-full rounded" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <div className="mt-4 text-farmBrown font-semibold text-lg">${product.price.toFixed(2)} / {product.unit}</div>
          <div className="mt-2">
            <div className={`inline-block px-2 py-1 rounded text-sm ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {product.inStock ? 'In stock' : 'Out of stock'}
            </div>
          </div>
          <div className="mt-4">
            <a href={`mailto:farmer@example.com?subject=Order%20Inquiry%20${encodeURIComponent(product.name)}`} className="bg-farmGreen text-white px-4 py-2 rounded">Start Order via Email</a>
          </div>
          {product.notes && <div className="mt-4 text-sm text-gray-700">Notes: {product.notes}</div>}
        </div>
      </div>

      <section>
        <h2 className="text-lg font-semibold">Request this product</h2>
        <ContactForm defaultProduct={product.name} />
      </section>
    </div>
  )
}
