'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useState } from 'react'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const supabase = createClientComponentClient()

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${location.origin}/auth/callback` },
    })
    if (error) alert('Error: ' + error.message)
    else alert('Cek email kamu untuk konfirmasi pendaftaran!')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-slate-800">Daftar TradeBook</h1>
        <p className="text-sm text-slate-500 mb-6 text-center">Dapatkan akses gratis 2 hari sekarang.</p>
        <input type="email" placeholder="Email" className="w-full p-3 mb-4 border rounded-lg" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full p-3 mb-6 border rounded-lg" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSignUp} className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700">Buat Akun Gratis</button>
        <p className="mt-4 text-center text-sm">Sudah punya akun? <a href="/login" className="text-blue-600">Login</a></p>
      </div>
    </div>
  )
}
