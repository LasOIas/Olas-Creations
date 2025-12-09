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
        <div className="flex items-center justify-between w-full">
          <div className="text-lg font-semibold">Farm Fresh Eggs</div>

          <div>
            <div className="relative" ref={menuRef}>
              <button onClick={()=>setOpen(v=>!v)} className="btn-outline">Menu ▾</button>
              {open && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border py-2">
                  <a href="/products" className="block px-4 py-2 text-sm text-[var(--text)] hover:bg-gray-50">Products</a>
                  <a href="/contact" className="block px-4 py-2 text-sm text-[var(--text)] hover:bg-gray-50">Contact</a>
                  <a href="/policies" className="block px-4 py-2 text-sm text-[var(--text)] hover:bg-gray-50">Policies</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
