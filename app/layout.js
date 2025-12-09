import './globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Farm Fresh Eggs',
}

export default function RootLayout({children}){
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="min-h-screen flex flex-col"> 
          <div className="container flex-1 flex items-start justify-center px-4 py-16">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  )
}
