export default function About(){
  return (
    <div>
      <h1 className="text-2xl font-bold text-farmBrown">About Olas Creations</h1>
      <p className="mt-3 text-gray-700">We are a small family farm focused on humane, pasture-based care for our hens. We collect eggs daily and bring them straight to our neighbors. Our goal is simple: good food, responsibly produced.</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded overflow-hidden">
          <img src="https://images.unsplash.com/photo-1506459225024-1428097a7e18?w=1000&q=80&auto=format&fit=crop" alt="Farm" className="w-full h-48 object-cover" />
        </div>
        <div className="rounded overflow-hidden">
          <img src="https://images.unsplash.com/photo-1514986888952-8cd320577b3c?w=1000&q=80&auto=format&fit=crop" alt="Hens" className="w-full h-48 object-cover" />
        </div>
      </div>
    </div>
  )
}
