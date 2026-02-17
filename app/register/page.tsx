'use client'
import { createClient } from '@supabase/supabase-js'
import { useState } from 'react'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) alert(error.message)
    else alert('Sukses! Cek email kamu untuk konfirmasi.')
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Daftar Akun</h2>
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} style={{ display: 'block', margin: '10px auto' }} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} style={{ display: 'block', margin: '10px auto' }} />
      <button onClick={handleSignUp} style={{ padding: '10px 20px', background: 'blue', color: 'white' }}>Daftar</button>
    </div>
  )
}
