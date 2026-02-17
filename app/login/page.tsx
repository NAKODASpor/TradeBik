'use client'
import { createClient } from '@supabase/supabase-js'
import { useState } from 'react'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) alert('Login Gagal: ' + error.message)
    else window.location.href = '/dashboard'
  }

  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2>Login Member</h2>
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} style={{ display: 'block', margin: '10px auto', padding: '10px' }} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} style={{ display: 'block', margin: '10px auto', padding: '10px' }} />
      <button onClick={handleLogin} style={{ padding: '10px 20px', background: 'green', color: 'white', border: 'none', borderRadius: '5px' }}>Masuk Sekarang</button>
    </div>
  )
}
