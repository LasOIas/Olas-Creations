"use client"

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef()

  useEffect(()=>{
    function onDoc(e){
      if(!menuRef.current) return
      if(!menuRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onDoc)
    return ()=> document.removeEventListener('click', onDoc)
  },[])

  return (
    <nav className="w-full bg-white/95 backdrop-blur sticky top-0 z-40 border-b">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-sm bg-[var(--brand)] flex items-center justify-center text-white shadow-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 2C9.5 2 6 5 6 9s3.5 7 6 7 6-3 6-7-2.5-7-6-7z" fill="white" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-semibold">Olas Creations</div>
              <div className="text-xs text-[var(--muted)]">Fresh local eggs</div>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/products" className="text-sm text-[var(--muted)] hover:text-[var(--brand-600)]">Products</Link>

          <div className="relative" ref={menuRef}>
            <button onClick={()=>setOpen(v=>!v)} className="text-sm text-[var(--muted)] hover:text-[var(--brand-600)]">More ▾</button>
            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border py-2">
                <Link href="/subscriptions" className="block px-4 py-2 text-sm text-[var(--text)] hover:bg-gray-50">Subscriptions</Link>
                <Link href="/faq" className="block px-4 py-2 text-sm text-[var(--text)] hover:bg-gray-50">FAQ</Link>
              </div>
            )}
          </div>

          <Link href="/about" className="text-sm text-[var(--muted)] hover:text-[var(--brand-600)]">About</Link>
          <Link href="/contact" className="text-sm text-[var(--muted)] hover:text-[var(--brand-600)]">Contact</Link>
          <Link href="/products" className="btn-primary">Shop</Link>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <Link href="/products" className="btn-primary text-sm">Shop</Link>
          <button aria-label="menu" onClick={()=>setOpen(v=>!v)} className="p-2 rounded-md text-[var(--muted)] hover:bg-gray-100">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* mobile panel */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="container py-4 flex flex-col gap-2">
            <Link href="/products" className="py-2 text-sm">Products</Link>
            <Link href="/subscriptions" className="py-2 text-sm">Subscriptions</Link>
            <Link href="/faq" className="py-2 text-sm">FAQ</Link>
            <Link href="/about" className="py-2 text-sm">About</Link>
            <Link href="/contact" className="py-2 text-sm">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
