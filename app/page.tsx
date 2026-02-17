export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
          Versi Beta v1.0
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Trading Lebih Terarah dengan <span className="text-blue-600">TradeBook</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Catat setiap transaksi, evaluasi psikologi tradingmu, dan akses materi eksklusif untuk konsistensi profit.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/journal" className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
            Mulai Mencatat Gratis
          </a>
          <a href="/courses" className="px-8 py-4 bg-white border-2 border-slate-200 rounded-xl font-bold text-lg hover:border-slate-400 transition-all">
            Lihat Kelas Edukasi
          </a>
        </div>
      </section>

      {/* Stats / Proof Section */}
      <section className="bg-slate-50 py-12 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-slate-900">100+</div>
            <div className="text-sm text-slate-500">Trader Aktif</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900">Rp 20rb</div>
            <div className="text-sm text-slate-500">Biaya Langganan</div>
          </div>
          <div className="hidden md:block">
            <div className="text-3xl font-bold text-slate-900">24/7</div>
            <div className="text-sm text-slate-500">Akses Materi</div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Kenapa TradeBook?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6 font-bold">1</div>
            <h3 className="text-xl font-bold mb-3">Jurnal Pintar</h3>
            <p className="text-slate-600">Simpan Entry, SL, TP, dan alasan entry secara rapi dan sistematis.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6 font-bold">2</div>
            <h3 className="text-xl font-bold mb-3">Kelas Premium</h3>
            <p className="text-slate-600">Materi video trading dari basic sampai advanced hanya seharga segelas kopi.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6 font-bold">3</div>
            <h3 className="text-xl font-bold mb-3">Analisis Psikologi</h3>
            <p className="text-slate-600">Pahami emosi saat trading untuk menghindari Revenge Trading.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-slate-400 text-sm border-t border-slate-100">
        © 2024 TradeBook. Dibuat dengan semangat oleh Trader untuk Trader.
      </footer>
    </div>
  );
}
