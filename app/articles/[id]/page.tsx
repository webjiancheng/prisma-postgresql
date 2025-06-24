// 2️⃣ 详情页: app/articles/[id]/page.tsx
import { notFound } from 'next/navigation'

export default async function ArticleDetailPage({ params }: { params: { id: string } }) {
  const res = await fetch(`http://localhost:3000/api/articles/${params.id}`)
  if (!res.ok) return notFound()
  const article = await res.json()

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-500 mb-6">{new Date(article.createdAt).toLocaleString()}</p>
      <div className="prose prose-lg">
        {article.content}
      </div>
    </main>
  )
}

