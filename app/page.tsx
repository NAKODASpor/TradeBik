export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-6">
      <h1 className="text-4xl font-extrabold mb-4">Selamat Datang di TradeBook</h1>
      <p className="text-gray-600 mb-8">Jurnal trading dan kelas edukasi dalam satu tempat.</p>
      <div className="flex gap-4">
        <a href="/journal" className="bg-black text-white px-6 py-3 rounded-lg font-bold">Mulai Mencatat</a>
        <a href="/courses" className="border border-black px-6 py-3 rounded-lg font-bold">Lihat Kelas</a>
      </div>
    </div>
  )
}
