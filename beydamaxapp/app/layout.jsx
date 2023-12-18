import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  description: 'Alquiler de herramientas',
  icons: {
    icon: '/images/engineer.svg'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-gray-100 min-h-screen w-screen">
          <main className="max-w-screen-2xl m-auto bg-white">
            < NavBar />
            {children}
          </main>
        </main>
      </body>
    </html>
  )
}
