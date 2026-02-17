export default function JournalPage() {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">Input Trade Baru</h2>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Pair / Symbol</label>
          <input type="text" placeholder="Contoh: BTC/USDT atau BBCA" className="w-full p-2 border rounded-lg" />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Tipe</label>
            <select className="w-full p-2 border rounded-lg">
              <option>BUY</option>
              <option>SELL</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Entry Price</label>
            <input type="number" placeholder="0.00" className="w-full p-2 border rounded-lg" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Stop Loss</label>
            <input type="number" placeholder="0.00" className="w-full p-2 border rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Take Profit</label>
            <input type="number" placeholder="0.00" className="w-full p-2 border rounded-lg" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Catatan / Setup</label>
          <textarea placeholder="Alasan entry..." className="w-full p-2 border rounded-lg" rows={3}></textarea>
        </div>

        <button className="w-full bg-black text-white py-3 rounded-lg font-bold">
          Simpan Trade
        </button>
      </div>
    </div>
  )
}

