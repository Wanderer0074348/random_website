import '@/app/globals.css'
import Navbar from '@/components/NavBar'
import BackgroundGrid from '@/components/BackgroundGrid'
import TerminalHero from '@/components/TerminalHero'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black">
        <BackgroundGrid />
        <div className="relative z-10">
          <Navbar />
          <main className="pt-24">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
