'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const supabase = createClientComponentClient()
  const router = useRouter()

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) alert('Login Gagal: ' + error.message)
    else router.push('/dashboard')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-slate-800">Login Member</h1>
        <input type="email" placeholder="Email" className="w-full p-3 mb-4 border rounded-lg" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full p-3 mb-6 border rounded-lg" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin} className="w-full py-3 bg-slate-900 text-white rounded-lg font-bold hover:bg-black">Masuk Ke Jurnal</button>
      </div>
    </div>
  )
}
