export default function Footer(){
  return (
    <footer className="mt-12 border-t bg-white">
      <div className="container py-10 text-sm text-[var(--muted)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="font-semibold text-[var(--farmBrown)]">Olas Creations</div>
            <div className="mt-2">Fresh pasture-raised eggs — local pickup & delivery.</div>
          </div>
          <div>
            <div className="font-semibold text-[var(--farmBrown)]">Pickup</div>
            <div className="mt-2">123 Country Lane, Your Town — available weekdays 9am–6pm.</div>
          </div>
          <div>
            <div className="font-semibold text-[var(--farmBrown)]">Delivery & Contact</div>
            <div className="mt-2">Delivery within 10 miles by arrangement. Email: <a href="mailto:farmer@example.com" className="text-[var(--farmGreen)]">farmer@example.com</a></div>
          </div>
        </div>
        <div className="mt-6 text-xs text-[var(--muted)]">© {new Date().getFullYear()} Olas Creations. All rights reserved.</div>
      </div>
    </footer>
  )
}
