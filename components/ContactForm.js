"use client"

import { useState } from 'react'

export default function ContactForm({defaultProduct}){
  const [form, setForm] = useState({name:'', email:'', phone:'', product: defaultProduct || '', qty:1, message:''})
  const [status, setStatus] = useState(null)

  function handleChange(e){
    const {name, value} = e.target
    setForm(prev => ({...prev, [name]: value}))
  }

  function handleSubmit(e){
    e.preventDefault()
    // For now, log to console. Later integrate backend/email service.
    console.log('Contact form submitted', form)
    setStatus('Thanks — your request was recorded. We will contact you shortly.')
    setForm({name:'', email:'', phone:'', product:'', qty:1, message:''})
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg card p-6">
      <div>
        <label className="block text-sm">Name</label>
        <input name="name" value={form.name} onChange={handleChange} className="w-full field" required />
      </div>
      <div>
        <label className="block text-sm">Email</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full field" required />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm">Phone (optional)</label>
          <input name="phone" value={form.phone} onChange={handleChange} className="w-full field" />
        </div>
        <div>
          <label className="block text-sm">Quantity</label>
          <input name="qty" type="number" min="1" value={form.qty} onChange={handleChange} className="w-full field" />
        </div>
      </div>
      <div>
        <label className="block text-sm">Product</label>
        <input name="product" value={form.product} onChange={handleChange} className="w-full field" placeholder="e.g. Farm Fresh Eggs — Dozen" />
      </div>
      <div>
        <label className="block text-sm">Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} className="w-full field" rows="4" />
      </div>
      <div className="flex items-center gap-4">
        <button type="submit" className="btn-primary">Send enquiry</button>
        {status && <div className="text-sm text-green-700">{status}</div>}
      </div>
    </form>
  )
}
