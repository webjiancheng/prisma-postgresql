// 4️⃣ 接口: app/api/articles/[id]/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const article = await prisma.article.findUnique({ where: { id: Number(params.id) } })
  if (!article) return NextResponse.json({ error: '文章不存在' }, { status: 404 })
  return NextResponse.json(article)
}
