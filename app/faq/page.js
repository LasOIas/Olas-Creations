export default function FAQ(){
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">FAQ</h1>
      <div className="space-y-4">
        <div>
          <h3 className="font-medium">Where are you located?</h3>
          <p className="text-sm text-[var(--muted)]">We're local — pickup in Your Town. Delivery within 10 miles by arrangement.</p>
        </div>
        <div>
          <h3 className="font-medium">How often do you collect eggs?</h3>
          <p className="text-sm text-[var(--muted)]">Daily — we collect and grade eggs each morning.</p>
        </div>
        <div>
          <h3 className="font-medium">Do you offer subscriptions?</h3>
          <p className="text-sm text-[var(--muted)]">Yes — visit the Subscriptions page to sign up for weekly or bi-weekly deliveries.</p>
        </div>
      </div>
    </div>
  )
}
