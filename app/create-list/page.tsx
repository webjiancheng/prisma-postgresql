'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateListPage() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [userId, setUserId] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const res = await fetch('/api/lists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description, userId }),
    })

    if (res.ok) {
      router.push('/') // 提交后跳回首页
    } else {
      const data = await res.json()
      setError(data.error || '提交失败')
    }
  }

  return (
    <main style={{ padding: '2rem' }}>
      <h1>➕ 创建清单</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: 400 }}>
        <label>标题：</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>描述：</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

        <label>用户ID：</label>
        <input type="number" value={userId} onChange={(e) => setUserId(e.target.value)} required />

        <button type="submit" style={{ marginTop: '1rem' }}>提交</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </main>
  )
}