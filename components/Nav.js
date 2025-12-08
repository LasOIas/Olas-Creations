import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="w-full bg-white/95 backdrop-blur sticky top-0 z-30 border-b">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-sm bg-[var(--brand)] flex items-center justify-center text-white shadow-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 2C9.5 2 6 5 6 9s3.5 7 6 7 6-3 6-7-2.5-7-6-7z" fill="white" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-semibold text-[var(--farmBrown)]">Olas Creations</div>
              <div className="text-xs text-[var(--muted)]">Fresh local eggs</div>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/products" className="text-sm text-[var(--muted)] hover:text-[var(--brand-600)]">Products</Link>
          <Link href="/about" className="text-sm text-[var(--muted)] hover:text-[var(--brand-600)]">About</Link>
          <Link href="/contact" className="text-sm text-[var(--muted)] hover:text-[var(--brand-600)]">Contact</Link>
          <Link href="/products" className="btn-primary">Shop</Link>
        </div>

        <div className="md:hidden">
          <Link href="/products" className="btn-primary text-sm">Shop</Link>
        </div>
      </div>
    </nav>
  )
}
