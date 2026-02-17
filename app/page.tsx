import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b">
        <div className="text-xl font-bold text-blue-600">TradeBook</div>
        <div className="space-x-4">
          <Link href="/login" className="text-sm font-medium hover:text-blue-600">
            Login
          </Link>
          <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition">
            Daftar Gratis
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Kuasai Market dengan <br />
          <span className="text-blue-600">Disiplin</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mb-10">
          Jurnal trading otomatis, evaluasi psikologi, dan manajemen risiko dalam satu genggaman.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/register" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-black transition shadow-lg">
            Coba Gratis 2 Hari
          </Link>
        </div>
      </main>
    </div>
  )
}
