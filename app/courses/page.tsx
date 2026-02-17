export default function CoursesPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Kelas Trading</h1>
      <div className="grid gap-4">
        <div className="bg-white p-4 rounded-xl border shadow-sm">
          <h3 className="font-bold text-lg">Basic Trading 101</h3>
          <p className="text-gray-500 text-sm mb-4">Belajar pondasi trading dari nol.</p>
          <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Tersedia untuk Premium</span>
        </div>
        <div className="bg-white p-4 rounded-xl border shadow-sm opacity-50">
          <h3 className="font-bold text-lg">Advanced Technical Analysis</h3>
          <p className="text-gray-500 text-sm">Segera Hadir</p>
        </div>
      </div>
    </div>
  )
}
