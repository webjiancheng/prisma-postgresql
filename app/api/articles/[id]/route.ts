// 4️⃣ 接口: app/api/articles/[id]/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: Request) {
  const url = new URL(req.url)
  const id = url.pathname.split('/').pop()
  if (!id) return NextResponse.json({ error: 'ID 无效' }, { status: 400 })

  const article = await prisma.article.findUnique({ where: { id: Number(id) } })
  if (!article) return NextResponse.json({ error: '文章不存在' }, { status: 404 })

  return NextResponse.json(article)
}
