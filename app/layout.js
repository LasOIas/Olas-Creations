import './globals.css'
import Nav from '../components/Nav'

export const metadata = {
  title: 'Farm Fresh Eggs',
}

export default function RootLayout({children}){
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="min-h-screen flex items-center justify-center px-4 py-16">{children}</main>
      </body>
    </html>
  )
}
