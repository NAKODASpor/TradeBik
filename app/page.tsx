import Link from 'next/link'

export default function Page() {
  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '50px' }}>
      <h1>TradeBook Siap Digunakan!</h1>
      <p>Jurnal trading otomatis untuk profit konsisten.</p>
      <div style={{ marginTop: '20px' }}>
        <Link href="/register" style={{ padding: '10px 20px', background: 'blue', color: 'white', borderRadius: '5px', textDecoration: 'none', marginRight: '10px' }}>
          Daftar Gratis
        </Link>
        <Link href="/login" style={{ padding: '10px 20px', border: '1px solid black', borderRadius: '5px', textDecoration: 'none' }}>
          Login
        </Link>
      </div>
    </div>
  )
}
