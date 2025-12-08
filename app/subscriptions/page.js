export default function Subscriptions(){
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Subscriptions</h1>
      <p className="text-sm text-[var(--muted)] mb-4">Choose a regular delivery schedule to receive fresh eggs automatically.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card p-4">
          <h3 className="font-semibold">Weekly Dozen</h3>
          <div className="text-lg font-bold mt-2">$12.00 / week</div>
          <p className="text-sm text-[var(--muted)] mt-2">One dozen delivered each week.</p>
        </div>
        <div className="card p-4">
          <h3 className="font-semibold">Bi-weekly Dozen</h3>
          <div className="text-lg font-bold mt-2">$12.00 / 2 weeks</div>
          <p className="text-sm text-[var(--muted)] mt-2">One dozen every two weeks.</p>
        </div>
        <div className="card p-4">
          <h3 className="font-semibold">Custom</h3>
          <div className="text-lg font-bold mt-2">Contact for pricing</div>
          <p className="text-sm text-[var(--muted)] mt-2">Bulk or recurring orders — we'll set up a plan.</p>
        </div>
      </div>
    </div>
  )
}
