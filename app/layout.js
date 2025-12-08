import './globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Olas Creations — Fresh Eggs',
  description: 'Local producer selling fresh pasture-raised eggs. Pickup and local delivery available.'
}

export default function RootLayout({children}){
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
