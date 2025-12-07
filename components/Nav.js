import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="w-full bg-white/90 backdrop-blur sticky top-0 z-30 border-b">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-farmBrown">Olas Farm</Link>
        <div className="space-x-4 hidden sm:flex">
          <Link href="/products" className="text-sm hover:text-farmGreen">Products</Link>
          <Link href="/about" className="text-sm hover:text-farmGreen">About</Link>
          <Link href="/contact" className="text-sm hover:text-farmGreen">Contact</Link>
        </div>
        <div className="sm:hidden">
          <Link href="/products" className="text-sm bg-farmGreen text-white px-3 py-1 rounded">View Eggs</Link>
        </div>
      </div>
    </nav>
  )
}
