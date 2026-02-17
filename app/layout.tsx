import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TradeBook - Jurnal & Kelas Trading',
  description: 'Catat tradingmu, tingkatkan skillmu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="p-4 border-b flex justify-between items-center bg-white sticky top-0 z-10">
          <h1 className="font-bold text-xl">TradeBook</h1>
          <div className="space-x-4 text-sm">
            <a href="/journal" className="text-gray-600">Jurnal</a>
            <a href="/courses" className="text-gray-600">Kelas</a>
          </div>
        </nav>
        <main className="min-h-screen bg-gray-50">{children}</main>
      </body>
    </html>
  )
}
