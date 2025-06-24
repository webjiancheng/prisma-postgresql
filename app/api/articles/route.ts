import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const articles = await prisma.article.findMany({ orderBy: { createdAt: 'desc' } })
  return NextResponse.json(articles)
}

export async function POST(req: Request) {
  const { title, content } = await req.json()
  if (!title || !content) {
    return NextResponse.json({ error: '标题和内容不能为空' }, { status: 400 })
  }
  const article = await prisma.article.create({ data: { title, content } })
  return NextResponse.json(article)
}
