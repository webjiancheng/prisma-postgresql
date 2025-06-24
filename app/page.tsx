'use client'

import { useEffect, useState } from 'react'

type ListItem = {
  id: number
  title: string
  description?: string
  createdAt: string
  updatedAt: string
  userId: number
  User: {
    email: string
    name?: string
  }
}

export default function HomePage() {
  const [lists, setLists] = useState<ListItem[]>([])

  useEffect(() => {
    fetch('/api/lists')
      .then((res) => res.json())
      .then((data) => {
        setLists(data)
      })
  }, [])

  return (
    <main style={{ padding: '2rem' }}>
      <h1>📋 清单列表</h1>
      {lists.length === 0 ? (
        <p>暂无清单</p>
      ) : (
        <ul>
          {lists.map((list) => (
            <li key={list.id} style={{ marginBottom: '1rem' }}>
              <h3>{list.title}</h3>
              <p>{list.description}</p>
              <p>👤 用户：{list.User.email}</p>
              <p>📅 创建时间：{new Date(list.createdAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}