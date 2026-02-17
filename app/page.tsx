export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="text-xl font-bold tracking-tighter text-blue-600">TradeBook</div>
        <div className="flex items-center gap-4">
          <a href="/login" className="text-sm font-semibold text-slate-600 hover:text-slate-900">Login</a>
          <a href="/register" className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg font-bold hover:bg-blue-700 transition-all">
            Daftar Gratis
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-16 md:py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Kuasai Market dengan <span className="text-blue-600">Disiplin</span>
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Jurnal trading otomatis, evaluasi psikologi, dan kelas edukasi premium dalam satu genggaman.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/register" className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg shadow-xl shadow-slate-200">
            Coba Gratis 2 Hari
          </a>
        </div>
        <p className="mt-4 text-sm text-slate-400 italic">*Akses penuh ke semua fitur tanpa kartu kredit</p>
      </section>

      {/* Pricing Section */}
      <section className="px-6 py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Investasi Untuk Skillmu</h2>
          <p className="text-slate-600 mb-12">Hanya seharga satu gelas kopi untuk profit konsisten.</p>
          
          <div className="bg-white border-2 border-blue-600 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-xl text-xs font-bold uppercase">
              Paling Populer
            </div>
            
            <h3 className="text-xl font-bold mb-2">Paket Pro Monthly</h3>
            <div className="flex justify-center items-baseline my-6">
              <span className="text-4xl font-extrabold">Rp 20.000</span>
              <span className="text-slate-500 ml-1">/bulan</span>
            </div>
            
            <ul className="text-left space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span> Jurnal Trading Tanpa Batas
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span> Semua Materi Kelas (Basic - Pro)
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span> Analisis Psikologi Trading
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span> Group Komunitas Eksklusif
              </li>
            </ul>

            <a href="https://wa.me/628xxxxxxxx" className="block w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors">
              Langganan Sekarang
            </a>
            <p className="mt-4 text-xs text-slate-400 text-center">Masa percobaan 2 hari berakhir otomatis</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-sm">© 2024 TradeBook Indonesia</p>
      </footer>
    </div>
  );
}
