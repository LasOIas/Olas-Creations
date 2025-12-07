import ContactForm from '../../components/ContactForm'

export default function ContactPage(){
  return (
    <div>
      <h1 className="text-2xl font-bold text-farmBrown">Contact / Order</h1>
      <p className="text-sm text-gray-600 mb-4">Use the form below to request an order or ask questions. We'll respond within 24 hours.</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold">Pickup & Delivery</h3>
          <p className="text-sm text-gray-600 mt-2">Pickup location: 123 Country Lane, Your Town. Delivery within 10 miles available by arrangement. Response time: Usually within 24 hours.</p>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
